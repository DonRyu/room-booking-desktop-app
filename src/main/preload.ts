// Disable no-unused-vars, broken for spread args
/* eslint no-unused-vars: off */
const { contextBridge, ipcRenderer } = require('electron');

export type Channels = 'ipc-example';

const WINDOW_API = {
  getRoomData: (msg: string) =>
    ipcRenderer.invoke('getRoomData').then((res: any) => {
      console.log('res', res);
    }),
};

contextBridge.exposeInMainWorld('api', WINDOW_API);

export type ElectronHandler = typeof WINDOW_API;
