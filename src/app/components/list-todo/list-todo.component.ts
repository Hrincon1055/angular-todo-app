import { Component, Input, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea.model';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css'],
})
export class ListTodoComponent implements OnInit {
  @Input() tareas!: Tarea[];

  // Metodos
  completarTarea(tarea: Tarea): void {
    if (!this.tareas) {
      return;
    }
    // let tarea = this.tareas.find((tarea) => {
    //   tarea.id= i;
    // });
    tarea.estado = !tarea?.estado;
  }
  borrarTarea(i: number): void {
    this.tareas.splice(i, 1);
  }
  // Cliclo de Vida
  constructor() {}

  ngOnInit(): void {}
}
