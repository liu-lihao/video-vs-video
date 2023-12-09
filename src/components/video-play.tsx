import { Ref, defineComponent, onBeforeUnmount, ref } from "vue";
import { useInjectContext } from "../use-context";
import { UploadInput } from "./upload-input";
import { timeToShowNumbers, useEffect } from "../utils";
import { ElecNums } from "./elec-nums";

const useFileHandleInput = () => {
  const url = ref("");
  const revokeUrl = () => URL.revokeObjectURL(url.value);
  const handleInput = (files: File[]) => {
    if (!files[0].type.startsWith("video")) {
      alert("Only allow adding video");
      return;
    }
    revokeUrl();
    url.value = URL.createObjectURL(files[0]);
  };

  onBeforeUnmount(() => revokeUrl());

  return { url, handleInput };
};

const formatNumber = (num: Ref<number>) => {
  if (Number.isNaN(+num.value)) {
    // @ts-ignore
    num.value = "";
  } else if (num.value > 100) {
    num.value = 100;
  } else if (num.value < 0) {
    num.value = 0;
  }
};

export const VideoPlay = defineComponent({
  emits: ["end"],
  setup() {
    const startRate = ref(0);
    const endRate = ref(100);
    const videoRef = ref<HTMLVideoElement>();
    const endTime = ref(0);
    const { context } = useInjectContext();
    const { url, handleInput } = useFileHandleInput();

    let endCallback: Function | null;

    useEffect(() =>
      context.onStart((start: Function, end: Function) => {
        if (!url.value) {
          return
        }
        const v = videoRef.value!;
        v.play().then(() => start());
        v.currentTime = (v.duration * startRate.value) / 100;
        endCallback = end;
        endTime.value = 0;
      })
    );
    useEffect(() =>
      context.onReset(() => {
        if (!url.value) {
          return
        }
        const v = videoRef.value!;
        v.pause();
        v.currentTime = (v.duration * startRate.value) / 100;
        endCallback = null;
        endTime.value = 0;
      })
    );

    const eventKeys = ["loadstart", "timeupdate"] as const;
    const powerHandle = (eventKey: (typeof eventKeys)[number]) => {
      const v = videoRef.value!;
      if (eventKey === "loadstart") {
        startRate.value = 0;
        endRate.value = 100;
      } else if (eventKey === "timeupdate") {
        if (
          endCallback &&
          v.currentTime >= (v.duration * endRate.value) / 100
        ) {
          endCallback?.();
          endCallback = null;
          endTime.value = Date.now();
        }
      }
    };

    const videoEventsProps = Object.fromEntries(
      eventKeys.map((eventKey) => {
        const eventName = "on" + eventKey[0].toUpperCase() + eventKey.slice(1);
        return [eventName, () => powerHandle(eventKey)];
      })
    );


    const handleInputStart = () => {
      formatNumber(startRate);
      if (url.value) {
        videoRef.value!.currentTime =
          ((startRate.value || 0) / 100) * videoRef.value!.duration;
      }
    };

    const handleInputEnd = () => {
      formatNumber(endRate);
      if (url.value) {
        videoRef.value!.currentTime =
          (endRate.value / 100) * videoRef.value!.duration;
      }
    };

    return () => (
      <div class="w-full px-10">
        <div class="text-center mb-4 text-[36px] font-bold" contenteditable>
          Video Name
        </div>
        <div class="w-full pb-[62.5%] relative">
          <div class="absolute top-0 left-0 bg-[#000] flex items-center justify-center w-full h-full">
            <div v-show={endTime.value} class="text-[90px]">
              <ElecNums
                nums={timeToShowNumbers(endTime.value - context.startTime)}
              />
            </div>
            <video
              v-show={!endTime.value && url.value}
              ref={videoRef}
              controls={false}
              class="w-full h-full object-cover"
              src={url.value}
              {...videoEventsProps}
            />
            <div class="absolute top-0 left-0 w-full h-full">
              <UploadInput
                class={[
                  "w-full h-full transition transition-opacity",
                  url.value ? "opacity-0 hover:opacity-50 bg-black" : "",
                ]}
                onSelect={handleInput}
              />
            </div>
          </div>
        </div>
        <div class="flex items-center justify-between py-2 opacity-0 hover:opacity-100">
          <div>
            <span class="select-none">Start: </span>
            <input
              type="number"
              class="w-[60px] bg-transparent appearance-none"
              max="100"
              min="0"
              step="0.01"
              v-model={startRate.value}
              onInput={handleInputStart}
            />
            <span class="select-none">%</span>
          </div>
          <div>
            <span class="select-none">End: </span>
            <input
              type="number"
              class="w-[60px] bg-transparent appearance-none"
              max="100"
              min="0"
              step="0.01"
              v-model={endRate.value}
              onInput={handleInputEnd}
            />
            <span class="select-none">%</span>
          </div>
        </div>
      </div>
    );
  },
});
