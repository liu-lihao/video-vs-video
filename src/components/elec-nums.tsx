import { PropType, defineComponent } from "vue";
import { IconColon, IconNums } from "./icons";
import styles from '../style.module.scss'

export const COLON_SYMBOL = ":" as const;

export const ElecNums = defineComponent({
  props: {
    nums: {
      type: Array as PropType<(number | typeof COLON_SYMBOL)[]>,
      default: () => [],
    },
    active: {
      type: Boolean,
      default: false
    },
  },
  setup(props) {
    return () => {
      return (
        <div class="flex">
          {props.nums.map((n) => {
            if (n === COLON_SYMBOL) {
              return (
                <div class={["w-[0.3em] h-[1em] relative ", props.active ? styles.immediatelyBlink : '']}>
                  <IconColon class="absolute top-0 w-[1em] translate-x-[-50%] left-[90%]" />
                </div>
              );
            }
            return <div class="w-[0.8em] h-[1em] relative ">
              <IconNums class="absolute top-0 left-0 w-[1em]" num={n} />
            </div>;
          })}
        </div>
      );
    };
  },
});
