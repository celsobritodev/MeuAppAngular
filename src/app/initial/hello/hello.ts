import { Component, EventEmitter, Input, OnInit, Output, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Helloservice } from './helloservice';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-hello',
  standalone:true,
  imports: [CommonModule,RouterModule],
  //templateUrl: './hello.html',

//Tutorial Angular 2025 | Para Quem tem Pressa
// https://youtu.be/UVP-HZECmo0

 template: `
    <ul>
      @for(item of pokelist; track item.name) {
        <li>{{item.name}} | {{item.url}}</li>
      } @empty {
        <li>Carregando...</li>
      }
    </ul>
  `,

  styleUrl: './hello.css'
})
export class Hello implements OnInit {

  constructor(private service: Helloservice) {

  }
  ngOnInit(): void {
    this.service.getPoke()
    .subscribe(
      res => {
        this.pokelist = res.results;
        console.log(res);
      }
    );


  }

  pokelist: any;


  Acao() {
    alert("Ação executada")
  }

@Input() items = []; // vai receber itens do componente pai

@Output() Confirmar = new EventEmitter<any>(); // vai enviar itens para o componente pai

contador = signal(0);

SubContador() {
  this.contador.update(x=>--x);

}


AddContador() {
  this.contador.update(x=>++x);

}




}



