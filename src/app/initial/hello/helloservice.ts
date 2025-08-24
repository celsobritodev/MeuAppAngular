import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Helloservice {

  constructor(private http: HttpClient) {}

  getPoke() {
    return this.http.get<any>("https://pokeapi.co/api/v2/pokemon");

  }

}
