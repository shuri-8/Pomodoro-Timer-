const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 300,
    height: 300,
    transparent: true,
    frame: false,
    resizable: false,
    alwaysOnTop: true,
    backgroundColor: "#00000000", // 🔑 fully transparent
  });

  win.loadFile("index.html");
}

app.whenReady().then(createWindow);
