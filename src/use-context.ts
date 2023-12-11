import { inject, onBeforeUnmount, provide, reactive, shallowReactive } from "vue"

const createEvent = () => {
  const obj: Record<string, Function[]> = {}
  const on = (key: string, fn: Function) => {
    obj[key] = obj[key] || []
    obj[key].push(fn)
  }
  const off = (key: string, fn?: Function) => {
    const arr = obj[key]
    if (!arr) {
      return
    }
    if (!fn) {
      delete obj[key]
      return
    }
    const i = arr.indexOf(fn)
    i > -1 && arr.splice(i, 1)
    if (!arr.length) {
      delete obj[key]
    }
  }
  const emit = (key: string, ...args: any) => {
    const arr = obj[key]
    if (!arr) {
      return
    }
    arr.forEach(n => n(...args))
  }

  const clear = () => {
    Object.keys(obj).forEach(k => {
      delete obj[k]
    })
  }

  return { on, off, emit, clear }
}

export const useContext = () => {
  const events = createEvent()

  const createItem = () => ({
    endTime: 0,
    range: [0, 100],
    duration: 0,
  })

  const context = shallowReactive({
    refer: 0, // 作为参考显示上升或下降的 item
    startTime: 0,
    endTime: 0,
    items: reactive([createItem(), createItem()]),
    updateRange(i: number, v: [number, number]) {
      const items = context.items
      items[i].range[0] = v[0]
      items[i].range[1] = v[1]
    },
    updateEndTime(i: number, v: number) {
      const items = context.items
      items[i].endTime = v
      const hasVideoItems = items.filter(n => n.duration)
      const allEnd = hasVideoItems.every(n => n.endTime)
      if (allEnd) {
        events.emit('full-end')
        context.endTime = Date.now()
      }
    },
    updateDuration(i: number, v: number) {
      context.items[i].duration = v
      context.tapReset()
    },
    onStart(fn: Function) {
      events.on('start', fn)
      return () => events.off('start', fn)
    },
    onReset(fn: Function) {
      events.on('reset', fn)
      return () => events.off('reset', fn)
    },
    onFullEnd(fn: Function) {
      events.on('full-end', fn)
      return () => events.off('full-end', fn)
    },
    tapStart() {
      const items = context.items
      if (!items.some(n => n.duration)) {
        return
      }
      items.forEach(n => {
        n.endTime = 0
      })
      context.startTime = Date.now()
      context.endTime = 0
      events.emit('start')
    },
    tapReset() {
      const items = context.items
      context.startTime = 0
      context.endTime = 0
      items.forEach(n => {
        n.endTime = 0
      })
      events.emit('reset')
    },
    addItem() {
      context.items.push(createItem())
      context.tapReset()
    },
    removeItem(i: number) {
      context.items.splice(i, 1)
      context.tapReset()
    }
  })

  onBeforeUnmount(() => events.clear())
  provide('video-context', context)

  return { context }
}

export const useInjectContext = () => {
  const context = inject('video-context', {}) as VideoControlContext
  return { context }
}

export type VideoControlContext = ReturnType<typeof useContext>['context']