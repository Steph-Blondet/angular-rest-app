// 1. Make sure you import Headers so you don't get into troubles
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Widget } from './widget.model';
import 'rxjs/add/operator/map';

// 1.
const BASE_URL = 'http://localhost:3000/widgets/';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class WidgetsService {

  // 2.
  constructor(private http: Http) {}

  // 3.
  loadWidgets() {
    return this.http.get (`${BASE_URL}`)
      .map(res => res.json());
  }

  all() {
    return this.http.get(BASE_URL)
      .map(res => res.json());
  }

  // 4. Add all these from items.service and replace the parameters
  load(id) {
    return this.http.get(`${BASE_URL}${id}`)
      .map(res => res.json());
  }

  create(widget: Widget) {
    return this.http.post(`${BASE_URL}`, JSON.stringify(widget), HEADER)
      .map(res => res.json());
  }

  update(widget: Widget) {
    return this.http.patch(`${BASE_URL}${widget.id}`, JSON.stringify(widget), HEADER)
      .map(res => res.json());
  }

  delete(widget: Widget) {
    return this.http.delete(`${BASE_URL}${widget.id}`)
      .map(res => res.json());
  }
}
