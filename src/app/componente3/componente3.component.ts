import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componente3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente3.component.html',
  styleUrl: './componente3.component.css'
})
export class Componente3Component {
  n:boolean = false;
  exibir(){
    if(this.n == false){
      this.n = true;
    }else{
      this.n = false;
    }
  }
}
