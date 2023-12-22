// Disable no-unused-vars, broken for spread args

import { Room } from '../types';

/* eslint no-unused-vars: off */
const { contextBridge, ipcRenderer } = require('electron');

export type Channels = 'ipc-example';

// check_in: '2023-01-01';
// check_out: '2023-01-10';
// created_date: '2023-01-01';
// id: 1;
// marketer: 'Marketing Agency XYZ';
// nationality: 'USA';
// room_number: 101;
// sex: 1;
// student_name: 'John Doe';
// student_number: 123456;
// type: 'Hold';

const WINDOW_API = {
  getRoomData: (msg: string) =>
    ipcRenderer.invoke('getRoomData').then((res: Room) => {
      return res;
    }),
};

contextBridge.exposeInMainWorld('api', WINDOW_API);

export type ElectronHandler = typeof WINDOW_API;
