import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Hello } from "./initial/hello/hello";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('MeuAppAngular');
  nome = 'Thiago';

  contador = signal(0);

  AddContador() {
    //this.contador++;
    this.contador.update(x=>++x);

  }



GerarRelatorio() {
  alert("Gerar relatório estou no app-root");
}

}

