import { inject, onBeforeUnmount, provide, shallowReactive } from "vue"

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

  const createHandler = (uid: number) => {
    const handleStart = () => {
      if (context.uid !== uid) {
        return
      }
      context.startCount++
      context.startTime = Date.now()
    }
    const handleEnd = () => {
      if (context.uid !== uid) {
        return
      }
      context.startCount--
      if (!context.startCount) {
        events.emit('full-end')
      }
    }
    return { handleStart, handleEnd }
  }

  const context = shallowReactive({
    uid: 0,
    updateUid: () => (context.uid = Date.now() + Math.random()),
    startTime: 0,
    startCount: 0,
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
      context.startCount = 0
      context.startTime = 0
      const uid = context.updateUid()
      const { handleStart, handleEnd } = createHandler(uid)
      events.emit('start', handleStart, handleEnd)
    },
    tapReset() {
      context.startCount = 0
      context.startTime = 0
      context.updateUid()
      events.emit('reset')
    },
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