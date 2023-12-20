import { ipcMain } from 'electron';
const path = require('path');
const sqlite3 = require('sqlite3');
require('dotenv').config();

// ipcMain.on('ipc-example', async (event, arg) => {
//   const msgTemplate = (pingPong: string) => `IPC test: ${pingPong}`;
//   console.log(msgTemplate(arg));
//   event.reply('ipc-example', msgTemplate('pong'));
// });

// SQLite 데이터베이스 파일 경로
const dbPath = path.join('/Users/don/Desktop/db', 'my_database.db');

// SQLite 데이터베이스 연결
const db = new sqlite3.Database(dbPath, (err: any) => {
  if (err) {
    console.error('404', err.message);
  } else {
    console.log('200',);
  }
});

ipcMain.handle('getRoomData', (e, arg) => {

  // const query = db.prepare('SELECT * FROM room;');
  // if (query.error) {
  //   console.error('Query error:', query.error);
  // } else {
  //   const roomData = query.all();
  //   return roomData;
  // }


  db.all('SELECT * FROM room;', (err:any, rows:any) => {
    if (err) {
      console.error('SELECT error:', err.message);

      return;
    }

    return rows;

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
