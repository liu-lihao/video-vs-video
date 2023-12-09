import { onBeforeUnmount, ref } from "vue";

export const timeToShowNumbers = (time: number) => {
  const s = Math.floor(time / 1000);
  const ms = Math.floor((time % (1000)) / 10)
  return [s,':', ms].map(n => n === ':' ? ':' : n.toString().padStart(2, '0').split('').map(n => Number(n))).flat(1)
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