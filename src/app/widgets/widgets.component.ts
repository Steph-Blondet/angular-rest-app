import { Component, OnInit } from '@angular/core';
import { WidgetsService } from '../shared/widgets.service';
import { Widget } from '../shared/widget.model';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {
  currentWidget: Widget;
  widgets: Widget[];

  constructor(private widgetsService: WidgetsService) { }

  ngOnInit() {
    this.widgets = this.widgetsService.widgets;
    this.reset();
  }

  reset() {
    this.currentWidget = { id: null, name: '', description: ''};
  }

  // 2. Creating methods
  selectWidget(widget) {
    this.currentWidget = widget;
  }

  deleteWidget(widget) {
    console.log('DELETING', widget);
    this.reset();
  }

  saveWidget(widget) {
    console.log('SAVING', widget);
    this.reset();
  }

  cancel(widget) {
    this.reset();
  }
}
