import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  standalone:true,
  imports: [],
  templateUrl: './lista.html',
  styleUrl: './lista.css'
})
export class Lista {

  items = [ "maça",
          "banana",
          "morango"] as any


}
