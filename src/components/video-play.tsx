import { computed, defineComponent, onBeforeUnmount, ref, watch } from "vue";
import { useInjectContext } from "../use-context";
import { UploadInput } from "./upload-input";
import { timeToShowNumbers, useEffect } from "../utils";
import { ElecNums } from "./elec-nums";
import { NRadio, NSlider } from "naive-ui";
import { IconDown } from "./icons";

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

export const VideoPlay = defineComponent({
  props: ["index"],
  setup(props) {
    const { context } = useInjectContext();
    const item = computed(() => context.items[props.index]);
    const videoRef = ref<HTMLVideoElement>();
    const { url, handleInput } = useFileHandleInput();
    [0, 1].forEach((i) => {
      watch(
        () => item.value.range[i],
        (v) => {
          if (url.value) {
            videoRef.value!.currentTime =
              ((v || 0) / 100) * videoRef.value!.duration;
          }
        }
      );
    });

    const referInfo = computed(() => {
      const referItem = context.items[context.refer];
      if (!referItem.endTime) {
        return {
          dir: "",
          gap: 0,
          percent: 0,
        };
      }
      const curItem = item.value;
      const dir =
        curItem.endTime > referItem.endTime
          ? "up"
          : curItem.endTime < referItem.endTime
          ? "down"
          : "";
      const gap = +(
        (curItem.endTime && referItem.endTime
          ? Math.abs(referItem.endTime - curItem.endTime)
          : curItem.duration || referItem.duration) / 1000
      ).toFixed(3);
      const percent =
        Math.ceil(
          ((gap * 1000) / (referItem.endTime - context.startTime)) * 10000
        ) / 100;
      return {
        dir,
        dirDown: dir === "down",
        dirUp: dir === "up",
        gap,
        percent,
      };
    });
    const showRefer = computed(
      () => context.refer !== props.index && referInfo.value.dir
    );

    useEffect(() =>
      context.onStart(() => {
        if (!url.value) {
          return;
        }
        const v = videoRef.value!;
        v.currentTime = (v.duration * item.value.range[0]) / 100;
        v.play();
      })
    );
    useEffect(() =>
      context.onReset(() => {
        if (!url.value) {
          return;
        }
        const v = videoRef.value!;
        v.pause();
        v.currentTime = (v.duration * item.value.range[0]) / 100;
      })
    );

    const eventKeys = ["loadstart", "timeupdate", "durationchange"] as const;
    const powerHandle = (eventKey: (typeof eventKeys)[number]) => {
      const v = videoRef.value!;
      if (eventKey === "loadstart") {
        context.updateRange(props.index, [0, 100]);
      } else if (eventKey === "timeupdate") {
        if (v.currentTime >= (v.duration * item.value.range[1]) / 100) {
          if (context.startTime && !item.value.endTime) {
            context.updateEndTime(props.index, Date.now());
          }
          v.pause();
        }
      } else if (eventKey === "durationchange") {
        context.updateDuration(props.index, v.duration);
      }
    };

    const videoEventsProps = Object.fromEntries(
      eventKeys.map((eventKey) => {
        const eventName = "on" + eventKey[0].toUpperCase() + eventKey.slice(1);
        return [eventName, () => powerHandle(eventKey)];
      })
    );

    const formatTooltip = (v: number) => {
      return `${timeToShowNumbers(v * item.value.duration * 10)
        .join("")
        .replace(":", " : ")} (${v}%)`;
    };

    const handleVideoNameChange = (e: Event) => {
      localStorage.setItem(
        `video-item-${props.index}`,
        (e.target as HTMLDivElement).innerText
      );
    };
    const defaultVideoName =
      localStorage.getItem(`video-item-${props.index}`) || "Video Name";

    return () => (
      <div class="w-full px-10">
        <div
          class="text-center mb-4 text-[36px] font-bold"
          contenteditable
          onInput={handleVideoNameChange}
        >
          {defaultVideoName}
        </div>
        <div class="w-full pb-[62.5%] relative">
          <div class="absolute top-0 left-0 bg-[#000] flex items-center justify-center w-full h-full">
            <div v-show={item.value.endTime} class="text-[90px] relative">
              <div
                v-show={showRefer.value}
                class={[
                  "absolute top-0 left-0 translate-x-[-78%]",
                  referInfo.value.dirUp
                    ? "text-[#e88080] scale-y-[-1]"
                    : "text-[#2a947d] ",
                ]}
              >
                <IconDown class="w-[1em] h-[1-em]"></IconDown>
              </div>
              <div
                v-show={showRefer.value}
                class={[
                  "absolute top-full left-1/2 translate-x-[-50%] translate-y-1/4  font-bold italic text-[0.2em] w-full text-center",
                  referInfo.value.dirUp ? "text-[#e88080]" : "text-[#2a947d]",
                ]}
              >
                {referInfo.value.dirUp ? "Increased " : "Reduced"} by{" "}
                {referInfo.value.gap}s ({referInfo.value.percent}%)
              </div>
              <ElecNums
                nums={timeToShowNumbers(item.value.endTime - context.startTime)}
              />
            </div>
            <video
              v-show={!item.value.endTime && url.value}
              ref={videoRef}
              controls={false}
              class="w-full h-full object-cover"
              src={url.value}
              {...videoEventsProps}
            />
            <div class="absolute top-0 left-0 w-full h-full">
              <UploadInput
                key={url.value}
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
          <NRadio
            class="mr-2"
            checked={context.refer === props.index}
            on-update:checked={() => (context.refer = props.index)}
          >
            BeRefer
          </NRadio>
          <NSlider
            class="flex-1"
            disabled={!url.value}
            value={item.value.range}
            onUpdate:value={(v) =>
              context.updateRange(props.index, v as unknown as [number, number])
            }
            range
            step={0.01}
            formatTooltip={formatTooltip}
          />
        </div>
      </div>
    );
  },
});
