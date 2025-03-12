const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 720,
    height: 480,
    frame: true,
    // resizable: false
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})