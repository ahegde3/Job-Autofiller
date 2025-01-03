export const createKeyboardEvent = (
  type: KeyboardEventTypes,
  key: KeyName
): KeyboardEvent => {
  return new KeyboardEvent(type, {
    key,
    code: key,
    keyCode: keyCodes[key],
    which: keyCodes[key],
    bubbles: true,
    cancelable: true,
  })
}

type KeyboardEventTypes = 'keydown' | "keyup" | "keypress"
type KeyName = keyof typeof keyCodes
const keyCodes = {
  Digit1: 49,
  Digit2: 50,
  Digit3: 51,
  Digit4: 52,
  Digit5: 53,
  Digit6: 54,
  Digit7: 55,
  Digit8: 56,
  Digit9: 57,
  Digit0: 48,
  KeyA: 65,
  KeyB: 66,
  KeyC: 67,
  KeyD: 68,
  KeyE: 69,
  KeyF: 70,
  KeyG: 71,
  KeyH: 72,
  KeyI: 73,
  KeyJ: 74,
  KeyK: 75,
  KeyL: 76,
  KeyM: 77,
  KeyN: 78,
  KeyO: 79,
  KeyP: 80,
  KeyQ: 81,
  KeyR: 82,
  KeyS: 83,
  KeyT: 84,
  KeyU: 85,
  KeyV: 86,
  KeyW: 87,
  KeyX: 88,
  KeyY: 89,
  KeyZ: 90,
  Comma: 188,
  Period: 190,
  Semicolon: 186,
  Quote: 222,
  BracketLeft: 219,
  BracketRight: 221,
  Backquote: 192,
  Backslash: 220,
  Minus: 189,
  Equal: 187,
  AltLeft: 18,
  AltRight: 18,
  ArrowDown: 40,
  ArrowLeft: 37,
  ArrowRight: 39,
  ArrowUp: 38,
  CapsLock: 20,
  ContextMenu: 93,
  ControlLeft: 17,
  ControlRight: 17,
  Delete: 46,
  End: 35,
  Enter: 13,
  Escape: 27,
  F1: 112,
  F10: 121,
  F11: 122,
  F12: 123,
  F13: 124,
  F14: 125,
  F15: 126,
  F16: 127,
  F17: 128,
  F18: 129,
  F19: 130,
  F2: 113,
  F20: 131,
  F21: 132,
  F22: 133,
  F23: 134,
  F24: 135,
  F3: 114,
  F4: 115,
  F5: 116,
  F6: 117,
  F7: 118,
  F8: 119,
  F9: 120,
  Home: 36,
  Insert: 45,
  MetaLeft: 91,
  MetaRight: 92,
  Numpad5: 12,
  PageDown: 34,
  PageUp: 33,
  Pause: 19,
  PrintScreen: 44,
  ScrollLock: 145,
  ShiftLeft: 16,
  ShiftRight: 16,
  Space: 32,
  Tab: 9,
}
