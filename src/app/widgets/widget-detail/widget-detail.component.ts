import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Widget } from '../../shared';

@Component({
  selector: 'app-widget-detail',
  templateUrl: './widget-detail.component.html',
  styleUrls: ['./widget-detail.component.css']
})
export class WidgetDetailComponent {
  originalName: string;
  // 7.
  selectedWidget: Widget;
  // 8. Create Outputs
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  // 7. This is a setter that becomes a function. We need to pass the widget. We are going to accept this property from the parent. 
  @Input() set widget(value: Widget){
    if (value) { this.originalName = value.name; }
    // Create a new object essentially by combining this new object and value. This returns a new object that takes everything together and creates a copy of the widget here. Creating a copy and assign in it to selectedWidget. Just a way to capture what is coming in and binding it. Immutable fashion.
    this.selectedWidget = Object.assign({}, value);
  }
}
