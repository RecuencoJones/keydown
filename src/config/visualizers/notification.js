const { resolve } = require('path')
const { Notification } = require('electron')

let notification

function notificationVisualizer(data) {
  if (data) {
    if (notification) {
      notification.close()
    }

    notification = new Notification({
      icon: resolve(__dirname, '..', '..', '..', 'assets', 'key.png'),
      subtitle: data,
      sound: false
    })

    notification.show()
  }
}

module.exports = notificationVisualizer
