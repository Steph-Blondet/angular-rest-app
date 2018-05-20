import { Component, OnInit } from '@angular/core';
import { WidgetsService } from '../shared/widgets.service';
import { Widget } from '../shared/widget.model';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {
  selectedWidget: Widget;
  widgets: Widget[];

  constructor(private widgetsService: WidgetsService) { }

  ngOnInit() {
    this.widgets = this.widgetsService.widgets;
    // 3. Calling reset every time it loads
    this.reset();
  }

  selected(widget) {
    this.selectedWidget = widget;
  }

  // 3. Creating a reset method. What this does is it just says 'hey, I want to reset it' so it creates an empty object. By doing
  reset() {
    this.selectedWidget = { id: null, name: '', description: ''};
  }

  // 5. This method takes a widget. Once it is saved, we are resetting it. 
  save(widget) {
    console.log('SAVING', widget);
    this.reset();
  }

  // 4. Creating a cancel method so every time the user clicks cancel, it resets the widget
  cancel(widget) {
    this.reset();
  }
}
