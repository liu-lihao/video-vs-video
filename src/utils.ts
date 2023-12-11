import { onBeforeUnmount, ref } from "vue";

export const timeToShowNumbers = (time: number) => {
  const s = Math.floor(time / 1000).toString().padStart(2, '0').split('').map(n => Number(n))
  const ms = Math.floor((time % (1000))).toString().padStart(3, '0').split('').map(n => Number(n))
  return [...s,':', ...ms] as (number | ':')[]
}

export const useEffect = (callback: Function) => {
  const cancel = callback();
  onBeforeUnmount(() => cancel());
};

export const useNow = (gap = 17 * 3) => {
  const now = ref(Date.now());
  const setNow = () => (now.value = Date.now());
  let i: number;
  const pauseNow = () => clearInterval(i);
  const startNow = () => {
    setNow();
    pauseNow();
    i = setInterval(setNow, gap);
  };
  onBeforeUnmount(pauseNow);
  return { now, startNow, pauseNow };
};