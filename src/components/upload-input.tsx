import { PropType, defineComponent } from "vue";
import { IconAdd } from "../components/icons";
import styles from "../style.module.scss";

export const UploadInput = defineComponent({
  props: {
    onSelect: {
      type: Function as PropType<(files: File[]) => any>,
    },
  },
  setup(props) {
    const handleInput = (e: Event) => {
      const files = [...((e.target as HTMLInputElement).files || [])];
      if (!files.length) {
        return;
      }
      props.onSelect?.(files);
    };
    return () => (
      <div class={["relative", styles.uploadInput]}>
        <div class="w-full h-full flex justify-center items-center">
          <IconAdd class={[styles.uploadInput__iconAdd, 'w-full h-full']} />
        </div>
        <input
          class="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
          type="file"
          onInput={handleInput}
        />
      </div>
    );
  },
});
