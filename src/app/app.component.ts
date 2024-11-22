import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Componente1Component } from "./componente1/componente1.component";
import { Componente2Component } from "./componente2/componente2.component";
import { Componente3Component } from "./componente3/componente3.component";
import { Componente5Component } from "./componente5/componente5.component";
import { Componente6Component } from "./componente6/componente6.component";
import { Componente7Component } from "./componente7/componente7.component";
import { Componente8Component } from "./componente8/componente8.component";
import { Component9Component } from "./component9/component9.component";
import { Componente10Component } from "./componente10/componente10.component";
import { Componente11Component } from "./componente11/componente11.component";
import { ProjetoComponent } from "./projeto/projeto.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Componente1Component, Componente2Component, Componente3Component, Componente5Component, Componente6Component, Componente7Component, Componente8Component, Component9Component, Componente10Component, Componente11Component, ProjetoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'curso-angular-yt';
}
