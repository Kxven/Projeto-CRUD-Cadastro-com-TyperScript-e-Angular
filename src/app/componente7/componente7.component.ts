import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componente7',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente7.component.html',
  styleUrl: './componente7.component.css'
})
export class Componente7Component {
  condicao:boolean = true;
  lista:string[] = ["Aprovado", "Aprovado", "Reprovado"];
}
