import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-component9',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './component9.component.html',
  styleUrl: './component9.component.css'
})
export class Component9Component {
  nome:string = '';
  cidade:string = '';
}
