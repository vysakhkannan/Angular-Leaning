import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RoomsList } from '../rooms';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomListComponent implements OnInit {

  @Input() rooms: RoomsList[] =[]
  @Output() SelectedRoom = new EventEmitter<RoomsList>();  

  constructor() { }

  ngOnInit(): void {
  }

  selectRoom(room:RoomsList){
    this.SelectedRoom.emit(room)
  }

}
