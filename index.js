const electron = require("electron");
const url = require("url");
const path = require("path");

const { app } = electron;
const { BrowserWindow, ipcMain, Menu } = electron; // Menu to work with menus

let mainWindow;
app.on("ready", () => {
  console.log("App is ready");
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  });
  // Load HTML files on the window:
  mainWindow.loadFile("index.html");

  // By creating a new menu the default Menu Items disappear and you can't use developer tools and reloead etcc.
  const mainMenu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(mainMenu);
});

// For Menu / Menu Structure
const menuTemplate = [
  {
    label: "File",
    submenu: [
      {
        label: "Add Items",
      },
      {
        label: "Exit",
        click() {
          app.quit();
        },
      },
    ],
  },
];

if (process.platform === "darwin") {
  menuTemplate.unshift({});
}
