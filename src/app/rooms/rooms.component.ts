import { Component, OnInit } from '@angular/core';
import { rooms, RoomsList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {
  hotelName = 'Something hotel';

  numberOfRooms = 10;

  hideRooms = false;

  rooms: rooms = {
    totalRooms: 20,
    availableRooms: 6,
    bookedRooms: 5,
  };

  roomList: RoomsList[] = [];

  selecteddRoom!: RoomsList;

  constructor() {}

  ngOnInit(): void {
    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Delux',
        amenities: 'av',
        price: 300,
        photo: 'photo.jpg',
        checkInTime: new Date('11-Nov-2022'),
        checkOutTime: new Date('12-Nov-2022'),
        rating: 5.7
      },
      {
        roomNumber: 2,
        roomType: 'Delux',
        amenities: 'ac',
        price: 400,
        photo: 'photo.jpg',
        checkInTime: new Date('11-Nov-2022'),
        checkOutTime: new Date('12-Nov-2022'),
        rating: 4.5
      },
      {
        roomNumber: 3,
        roomType: 'Delux',
        amenities: 'ac',
        price: 200,
        photo: 'photo.jpg',
        checkInTime: new Date('11-Nov-2022'),
        checkOutTime: new Date('12-Nov-2022'),
        rating: 5.5

      },
    ];
  }

  hide() {
    this.hideRooms = !this.hideRooms;
  }

  selectedRoom(room: RoomsList) {
    this.selecteddRoom = room;
  }

  addRoom() {
    const room: RoomsList = {
      roomNumber: 4,
      roomType: 'Delux room',
      amenities: 'utilities',
      price: 400,
      photo: 'photo222.jpg',
      checkInTime: new Date('11-Nov-2022'),
      checkOutTime: new Date('12-Nov-2022'),
      rating: 8.5

    };

    this.roomList = [...this.roomList, room]
  }
}
