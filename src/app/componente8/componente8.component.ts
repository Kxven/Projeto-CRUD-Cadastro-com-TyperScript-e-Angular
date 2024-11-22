import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componente8',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente8.component.html',
  styleUrl: './componente8.component.css'
})
export class Componente8Component {
  media:number = 2;
  nomes:string[] = ["Ralf", "Ana", "Danilo", "Camila"];
  linguagem:string = 'Java'
}


