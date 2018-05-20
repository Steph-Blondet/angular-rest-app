import { Http, Headers, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import { Item } from './item.model';

import 'rxjs/add/operator/map';

const BASE_URL = 'http://localhost:3000/items/';
const HEADER = {headers: new Headers({'Content-Type': 'application/json'})};

@Injectable()
export class ItemsService {
  constructor(private http: Http) {
  }
   
  all() {
    return this.http.get(BASE_URL)
      .map(res => res.json());
  }

  // We are getting a single one and we are updating the end point
  load(id) {
    return this.http.get(`${BASE_URL}${id}`)
      .map(res => res.json());
  }

  // Takes a new item, turning it into a string and passing in the header
  create(item: Item) {
    return this.http.post(`${BASE_URL}`, JSON.stringify(item), HEADER)
      .map(res => res.json());
  }

  // You are updaitng an existing item so you just add the id to the end point and it updates it
  update(item: Item) {
    return this.http.patch(`${BASE_URL}${item.id}`, JSON.stringify(item), HEADER)
      .map(res => res.json());
  }

  // Passing in an item updating an end point to delete it.
  delete(item: Item) {
    return this.http.delete(`${BASE_URL}${item.id}`)
      .map(res => res.json());
  }

  search(term: string) {
    const search = new URLSearchParams();
    search.set('q', term);

    return this.http.get(`${BASE_URL}`, {search})
      .map(res => res.json());
  }
}
