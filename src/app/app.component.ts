import { Component } from '@angular/core';
import { Tarea } from './models/tarea.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public arrTareas: Tarea[] = [];

  onTareaCreada($event: Tarea): void {
    this.arrTareas.push($event);
  }
  // ciclo de vida
  constructor() {}
}
