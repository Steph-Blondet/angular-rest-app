import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Widget } from '../../shared';

@Component({
  selector: 'app-widgets-list',
  templateUrl: './widgets-list.component.html',
  styleUrls: ['./widgets-list.component.css']
})
export class WidgetsListComponent {
  // 1. Define a widgets input which is an array of widget objects
  @Input() widgets: Widget[];
  @Input() readonly = false;
  // 3. Creating outputs
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
