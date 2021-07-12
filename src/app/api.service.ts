import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public ROOT_URL = 'https://jsonplaceholder.typicode.com/';
  constructor(private httpClient: HttpClient) { }


  getData(addr: string) {
    return this.httpClient.get<any>(this.ROOT_URL + addr).pipe(
      map((data) => {
        console.log(data);
        return data;
      })
    );
  }
}
