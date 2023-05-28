import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Player } from 'src/Core/Models/player.Modal';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  @Input() public player: any;
  @Output() output = new EventEmitter<boolean>();
  ngOnInit() {
    this.initInterface();
  }
  initInterface() {
    this.player ? '' : (this.player = new Player());
  }
  closeModal() {
    this.output.emit(true);
  }
}
