import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componente6',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente6.component.html',
  styleUrl: './componente6.component.css'
})
export class Componente6Component {
  linguagem:string = 'HTML'
}
