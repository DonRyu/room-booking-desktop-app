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

export interface roomData{

}

export let BookingType = {
  Hold: 'red',
  Offer: 'green',
  Book: 'blue',
};
