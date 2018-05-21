import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ItemsService } from '../../shared/items.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-items-search',
  templateUrl: './items-search.component.html',
  styleUrls: ['./items-search.component.css']
})
export class ItemsSearchComponent implements OnInit {
  @Output() onResults = new EventEmitter();
  // 3. Able to get a reference in my component. It looks for a local template variable and it creates a reference for you 
  @ViewChild('itemsSearch') itemsSearch;

  constructor(private itemsService: ItemsService) {
  }

  ngOnInit() {
    // 4. Use this reference to attach an initial output to
    const search$ = Observable.fromEvent(this.getNativeElement(this.itemsSearch), 'keyup')
      // It takes a bunch of input, takes the last thing
      .debounceTime(200)
      // If you start typing and is the same value, it is going to ignore it. Nothing has changed so no need to act upon it. 
      .distinctUntilChanged()
      .map((event: any) => event.target.value)
      .switchMap(term => this.itemsService.search(term))
      .subscribe(items => this.onResults.emit(items));
  }

  getNativeElement(element) {
    return element.nativeElement;
  }
}
