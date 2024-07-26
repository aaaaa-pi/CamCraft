import { BrowserWindow, ipcMain } from 'electron'

ipcMain.handle('drag', (event, opt: { x: number; y: number; width: number; height: number }) => {
  const win = BrowserWindow.fromWebContents(event.sender)!
  // const [x, y] = win.getPosition()
  // win.setPosition(x + opt.x, y + opt.y)
  const bounds = win.getBounds()
  win.setBounds({
    x: bounds.x + opt.x,
    y: bounds.y + opt.y,
    height: opt.height,
    width: opt.width
  })
})
