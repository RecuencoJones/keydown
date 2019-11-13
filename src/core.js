const iohook = require('iohook')
const { fromEvent, of, merge, empty } = require('rxjs')
const { mapTo, flatMap, filter, buffer, debounceTime, tap } = require('rxjs/operators')
const keycodes = require('./keycodes')

function start(config) {
  const keydown$ = fromEvent(iohook, 'keydown').pipe(
    tap((event) => {
      if (config.debug) {
        console.log(event)
      }
    }),
    flatMap(({ keycode }) => {
      const keyName = keycodes[keycode]

      if (!keyName) {
        console.error(`Unknown keycode: ${ keycode }`)

        return empty()
      }

      return of(keyName)
    }),
    filter(config.filterKeys)
  )

  const newLine$ = keydown$.pipe(
    buffer(keydown$.pipe(debounceTime(config.bufferTime))),
    mapTo(null)
  )

  merge(keydown$, newLine$)
  .subscribe((value) => {
    config.visualizer(value)
  })

  iohook.start()
}

function stop() {
  iohook.stop()
  iohook.unload()
}

module.exports = { start, stop }
