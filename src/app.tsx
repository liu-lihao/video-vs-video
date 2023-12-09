import { computed, defineComponent, ref, watch } from "vue";
import { VideoPlay } from "./components/video-play";
import { useContext } from "./use-context";
import { ElecNums } from "./components/elec-nums";
import { timeToShowNumbers, useEffect, useNow } from "./utils";

export const App = defineComponent({
  setup() {
    const { context } = useContext();
    const { now, startNow, pauseNow } = useNow();
    const fullEndNow = ref(0);

    const isRecording = computed(() => !!context.startCount);
    watch(isRecording, (v) => (v ? startNow() : pauseNow()), { flush: "sync" });

    const showDuration = computed(() => {
      return isRecording.value
        ? Math.max(now.value - context.startTime, 0)
        : Math.max(fullEndNow.value - context.startTime, 0);
    });

    useEffect(() => context.onStart(() => (fullEndNow.value = 0)));
    useEffect(() => context.onFullEnd(() => (fullEndNow.value = Date.now())));
    useEffect(() => context.onReset(() => (fullEndNow.value = 0)));

    const handleStart = () => {
      if (isRecording.value || fullEndNow.value) {
        return context.tapReset();
      }
      context.tapStart();
    };

    useEffect(() => {
      window.addEventListener("keyup", handleStart);
      return () => window.removeEventListener("keyup", handleStart);
    });

    return () => (
      <div class="w-full h-[100dvh] flex flex-col text-[#fff]">
        <div class="flex-shrink-0 flex justify-center items-center pt-8 text-[52px] font-bold">
          <div contenteditable>Video VS Video</div>
        </div>
        <div class="flex justify-around items-center flex-[2]">
          <VideoPlay />
          <VideoPlay />
        </div>
        <div
          class="flex items-center justify-center flex-shrink-0 pt-4 pb-[6dvh] text-[100px] flex-1 cursor-pointer"
          onClick={handleStart}
          title="[Space]"
        >
          <ElecNums active={isRecording.value} nums={timeToShowNumbers(showDuration.value)}></ElecNums>
        </div>
      </div>
    );
  },
});
