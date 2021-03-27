import { useEffect, useRef } from 'react'

export function range(start, count, step=1) {
  if (!count) {
    count = start
    start = 0
  }
  const result = new Array(count)
  for (let i = 0; i < count; i++) {
    result[i] = i*step + start
  }
  return result
}

export function useFocus() {
  const htmlElRef = useRef(null)
  const setFocus = () => {htmlElRef.current && htmlElRef.current.focus()}
  return [ htmlElRef, setFocus ]
}

export function useInterval(callback, delay) {
  const savedCallback = useRef()

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    const handler = () => savedCallback.current()
    if (delay !== null) {
      const interval = setInterval(handler, delay)
      return () => clearInterval(interval)
    }
  })
}

export function useRecursiveTimeout(callback, delay) {
  const timer = useRef()
  const callbackRef = useRef(callback)
  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  useEffect(() => {
    function tick() {
      if (callbackRef.current()) {
        timer.current = setTimeout(tick, delay)
      } else {
        timer.current = null
      }
    }

    if (delay !== null) {
      timer.current = setTimeout(tick, delay)
      return () => timer.current && clearTimeout(timer.current)
    }
  }, [delay])
}

export function useTimeout(callback, delay) {
  const callbackRef = useRef()

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  useEffect(() => {
    function tick() {
      callbackRef.current()
    }
    if (delay !== null) {
      const id = setTimeout(tick, delay)
      return () => clearTimeout(id)
    }
  }, [delay])
}

export function useWindowEvent(event, callback) {
  useEffect(() => {
    window.addEventListener(event, callback)
    return () => window.removeEventListener(event, callback)
  }, [event, callback])
}

export function useKeyDown(callback) {
  useWindowEvent('keydown', callback)
}

export function useScroll(callback) {
  useWindowEvent('scroll', callback)
}
