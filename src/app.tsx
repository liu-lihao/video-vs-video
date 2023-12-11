import { computed, defineComponent, watch } from "vue";
import { VideoPlay } from "./components/video-play";
import { useContext } from "./use-context";
import { ElecNums } from "./components/elec-nums";
import { timeToShowNumbers, useEffect, useNow } from "./utils";
import { IconGithub } from "./components/icons";
import styles from "./style.module.scss";

export const App = defineComponent({
  setup() {
    const { context } = useContext();
    const { now, startNow, pauseNow } = useNow();

    const isRecording = computed(() => !!context.startTime && !context.endTime);
    watch(isRecording, (v) => (v ? startNow() : pauseNow()), { flush: "sync" });

    const showDuration = computed(() => {
      return isRecording.value
        ? Math.max(now.value - context.startTime, 0)
        : Math.max(context.endTime - context.startTime, 0);
    });

    const handleStart = () => {
      if (isRecording.value || context.endTime) {
        return context.tapReset();
      }
      context.tapStart();
    };

    useEffect(() => {
      const handleKeyup = (e: KeyboardEvent) =>
        e.code === "Space" && handleStart();
      window.addEventListener("keyup", handleKeyup);
      return () => window.removeEventListener("keyup", handleKeyup);
    });

    const handleVideoNameChange = (e: Event) => {
      localStorage.setItem(
        `videos-title`,
        (e.target as HTMLDivElement).innerText
      );
    };
    const defaultVideoName =
      localStorage.getItem(`videos-title`) || "Video VS Video";

    return () => (
      <div class="w-full h-[100dvh] flex flex-col text-[#fff]">
        <div
          class={[
            "relative flex-shrink-0 flex justify-center items-center pt-8 pb-4 text-[52px] font-bold",
            styles.pageTitle,
          ]}
        >
          <div contenteditable onInput={handleVideoNameChange}>
            {defaultVideoName}
          </div>
          <a
            class={[
              "absolute top-0 right-0 p-2 rounded-1",
              styles.pageTitle__iconGithub,
            ]}
            href="https://github.com/liu-lihao/video-vs-video"
            target="__blank"
            onClick={() => context.addItem()}
          >
            <IconGithub class="w-[1em] h-[1em]"></IconGithub>
          </a>
        </div>
        <div class="flex justify-around items-center flex-[2]">
          {context.items.map((_, i) => (
            <VideoPlay index={i} />
          ))}
        </div>
        <div
          class="flex items-center justify-center flex-shrink-0 pb-[6dvh] text-[100px] flex-1 cursor-pointer"
          onClick={handleStart}
          title="[Space]"
        >
          <ElecNums
            active={isRecording.value}
            nums={timeToShowNumbers(showDuration.value)}
          ></ElecNums>
        </div>
      </div>
    );
  },
});
