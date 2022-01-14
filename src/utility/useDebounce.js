import { ref, customRef } from 'vue';

const debounce = (fn, delay = 0, immediate = false) => {
  let timeout
  return (...args) => {
    if (immediate && !timeout) fn(...args)
    clearTimeout(timeout)

    timeout = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}

/**
 * Generates a customRef using the debounce function
 * @param {initialValue} any - The initial value for the ref
 * @param {delay} number - The number of miliseconds to delay
 * @param {immediate} boolean - if the changes should be immediate
 */

const debouncedRef = (initialValue, delay, immediate) => {
  const state = ref(initialValue)
  const debouncedRef = customRef((track, trigger) => ({
    get() {
      track()
      return state.value
    },
    set: debounce(
      value => {
        state.value = value
        trigger()
      },
      delay,
      immediate
    ),
  }))
  return debouncedRef
}

export default debouncedRef