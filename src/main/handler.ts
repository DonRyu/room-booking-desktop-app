import { ipcMain } from 'electron';
import { Room } from '../types';
const path = require('path');
const sqlite3 = require('sqlite3');
require('dotenv').config();

// SQLite 데이터베이스 파일 경로
const dbPath = path.join(process.env.DATABASE_PATH, 'my_database.db');

// SQLite 데이터베이스 연결
const db = new sqlite3.Database(dbPath, (err: any) => {
  if (err) {
    console.error('404', err.message);
  } else {
    console.log('200');
  }
});

ipcMain.handle('getRoomData', (e, arg) => {
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM room;', (err: { message: string }, rows: Room) => {
      if (err) {
        console.error('SELECT error 400:', err.message);
        return;
      }
      resolve(rows);
    });
  });
});

// const roomData = selectQuery.all();

// if (selectQuery.error) {
//   console.error('Query error:', selectQuery.error);
// }

// console.log('Room data:', roomData);

// return roomData;
// const roomData = {
//   type: 'Hold',
//   room_number: 101,
//   student_number: 12345,
//   student_name: 'Don Ryu',
//   sex: 1,
//   check_in: '2023-01-01',
//   check_out: '2023-01-15',
//   nationality: 'USA',
//   marketer: 'Marketing Team',
//   created_date: '2023-01-01',
// };

// const insertQuery = db.prepare(`
//   INSERT INTO room (type, room_number, student_number, student_name, sex, check_in, check_out, nationality, marketer, created_date)
//   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
// `);

// insertQuery.run(
//   roomData.type,
//   roomData.room_number,
//   roomData.student_number,
//   roomData.student_name,
//   roomData.sex,
//   roomData.check_in,
//   roomData.check_out,
//   roomData.nationality,
//   roomData.marketer,
//   roomData.created_date
// );

// });

// db.close();
