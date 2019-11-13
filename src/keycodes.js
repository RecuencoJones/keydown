const { names } = require('keycode')

let keycodeNames = names

if (process.platform === 'darwin') {
  keycodeNames = {
    0: "§",
    1: "Escape",
    2: "1",
    3: "2",
    4: "3",
    5: "4",
    6: "5",
    7: "6",
    8: "7",
    9: "8",
    10: "9",
    11: "0",
    12: "-",
    13: "=",
    14: "Backspace",
    15: "Tab",
    16: "q",
    17: "w",
    18: "e",
    19: "r",
    20: "t",
    21: "y",
    22: "u",
    23: "i",
    24: "o",
    25: "p",
    26: "[",
    27: "]",
    28: "Enter",
    29: "Control",
    30: "a",
    31: "s",
    32: "d",
    33: "f",
    34: "g",
    35: "h",
    36: "j",
    37: "k",
    38: "l",
    39: ";",
    40: "'",
    41: "`",
    42: "Left Shift",
    43: "\\",
    44: "z",
    45: "x",
    46: "c",
    47: "v",
    48: "b",
    49: "n",
    50: "m",
    51: ",",
    52: ".",
    53: "/",
    54: "Right Shift",
    56: "Left Alt",
    57: "Space",
    58: "CapsLock",
    59: "F1",
    60: "F2",
    61: "F3",
    62: "F4",
    63: "F5",
    64: "F6",
    65: "F7",
    66: "F8",
    67: "F9",
    68: "F10",
    69: "NumLock",
    87: "F11",
    88: "F12",
    91: "Print Screen",
    92: "ScrollLock",
    93: "Pause",
    3613: "Right Control",
    3640: "Right Alt",
    3655: "Home",
    3663: "End",
    3657: "Page Up",
    3665: "Page Down",
    3666: "Insert",
    3667: "Backspace",
    3675: "Left Command",
    3676: "Right Command",
    57416: "Up",
    57419: "Left",
    57421: "Right",
    57424: "Down",
  }
}

module.exports = keycodeNames
