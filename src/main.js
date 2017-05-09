const app = require('electron').app;
const BrowserWindow = require('electron').BrowserWindow;
const fs = require("fs");
let win;

app.on('ready', function () {
  win = new BrowserWindow({
    title: 'Calendar',
    x: 0,
    y: 0,
    transparent: true,  // ウィンドウを透明化
    frame: false,
    "always-on-top": false
  });

  win.setIgnoreMouseEvents(true);  // ウィンドウをクリックスルーさせる

  win.loadURL(`file://${__dirname}/public/index.html`);
  
  win.on('closed', () => {
    win = null;
  });

});