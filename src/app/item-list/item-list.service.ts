import { ITEMS } from './mocks';
import { Item } from './item.model';
import { Injectable } from '../../../node_modules/@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };


@Injectable()
export class ItemListService {

constructor (private http: HttpClient) {}

    URL_BASE: string = 'http://localhost:3000/item-list';

    getItemList() {
        return this.http.get(this.URL_BASE);
    }

    addItem(item: Item): Observable<Item> {
        return this.http.post<Item>(this.URL_BASE, item, httpOptions);
    }

    updateItem (item: Item): Observable<Item> {
        const url = `${this.URL_BASE}/${item.id}`;
        return this.http.put<Item>(url, item, httpOptions);
    }

    deleteItem(id: number): Observable<{}> {
        const url = `${this.URL_BASE}/${id}`;
        return this.http.delete(url, httpOptions);
    }
}
