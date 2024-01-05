export interface Room {
  id: number;
  type: string;
  room_number: number;
  student_number: number;
  student_name: string;
  sex: 0 | 1;
  check_in: string;
  check_out: string;
  nationality: string;
  marketer: string;
  created_date: string;
}

export interface roomData {
  room_number: number;
  booking: booking[];
}

export interface booking {
  date: number;
  user: number;
  type: BookingType;
}

export interface BookingType {
  Hold: string;
  Offer: string;
  Book: string;
}

export interface days {
  ddd: string;
  dd: string;
  ts: number;
}
