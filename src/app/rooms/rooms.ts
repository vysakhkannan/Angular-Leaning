export interface rooms{
    totalRooms: number;
    availableRooms: number;
    bookedRooms: number;
}


export interface RoomsList {
    roomNumber: number;
    roomType: string;
    amenities: string;
    price: number;
    photo: string;
    checkInTime: Date;
    checkOutTime: Date;
    rating: number;
}