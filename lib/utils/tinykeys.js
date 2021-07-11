// forked from https://github.com/jamiebuilds/tinykeys to fix navigator not being defined in SSR context

let MODIFIER_KEYS = ['Shift', 'Meta', 'Alt', 'Control']
let FOCUSABLES = ['select', 'textarea', 'input']
let TIMEOUT = 1000

function parse(str) {
  let MOD = /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? 'Meta' : 'Control'

  return str
    .trim()
    .split(' ')
    .map((press) => {
      let mods = press.split('+')
      let key = mods.pop()
      mods = mods.map((mod) => (mod === '$mod' ? MOD : mod))
      return [mods, key]
    })
}

function match(event, press) {
  let first = press[0]
  let second = press[1]

  // prettier-ignore
  const invalidKey = second.toUpperCase() !== event.key.toUpperCase() && second !== event.code
  const isCombination = first.find((mod) => !event.getModifierState(mod))
  const invalidCombo = MODIFIER_KEYS.find(
    (mod) => !first.includes(mod) && event.getModifierState(mod)
  )

  return !(invalidKey || isCombination || invalidCombo)
}

// subscriber → returns a unsubscriber
export default function keybindings(target, keyBindingMap, options = {}) {
  let mapKeys = Object.keys(keyBindingMap)
  let bindings = mapKeys.map((key) => [parse(key), keyBindingMap[key]])
  let possibleMatches = new Map()
  let timer = null

  let onKeyDown = (event) => {
    // ignore modifier keydown events
    if (event.getModifierState(event.key)) return

    let tagName = document.activeElement.tagName.toLowerCase()
    let isEditable = document.activeElement.contentEditable === 'true'
    let isFocusableElem = FOCUSABLES.indexOf(tagName) !== -1 || isEditable

    // ignore when a focusable item is focused
    // prettier-ignore
    if (options.ignoreFocus && document.activeElement) if (isFocusableElem) return

    bindings.forEach((keyBinding) => {
      let sequence = keyBinding[0]
      let callback = keyBinding[1]
      let prev = possibleMatches.get(sequence)
      let expectedPress = prev ? prev : sequence
      let currentPress = expectedPress[0]
      let matches = match(event, currentPress)

      if (!matches) possibleMatches.delete(sequence)
      else if (expectedPress.length > 1)
        possibleMatches.set(sequence, expectedPress.slice(1))
      else {
        possibleMatches.delete(sequence)
        callback(event)
      }
    })

    clearTimeout(timer)
    timer = setTimeout(possibleMatches.clear.bind(possibleMatches), TIMEOUT)
  }

  target.addEventListener('keydown', onKeyDown)

  return () => target.removeEventListener('keydown', onKeyDown)
}
