import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
// This is a Dumb Component, this is just binding, this is all we are using.
export class StatusComponent {
  @Input() currentStatus;
  @Output() logout = new EventEmitter();
}
