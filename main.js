const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 720,
    height: 480,
    frame: false,
    resizable: false
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})