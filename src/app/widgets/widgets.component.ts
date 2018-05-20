import { Component, OnInit } from '@angular/core';
import { WidgetsService } from '../shared/widgets.service';
import { Widget } from '../shared/widget.model';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {
  // 7. We know that this is going to be a widget
  selectedWidget: Widget = null;
  // Generic notation: widgets: Array<Widget>;, the one below is the same thing, saying 'this is an array of widget objects.
  widgets: Widget[];

  // 4. Consume widgetsService and is now available for consumption through constructor assignment.
  constructor(private widgetsService: WidgetsService) { }

  ngOnInit() {
    // 4.
    this.widgets = this.widgetsService.widgets;
  }

  selected(widget) {
    this.selectedWidget = widget;
  }
}
