import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tarea } from 'src/app/models/tarea.model';

@Component({
  selector: 'app-form-todo',
  templateUrl: './form-todo.component.html',
  styleUrls: ['./form-todo.component.css'],
})
export class FormTodoComponent implements OnInit {
  // @ViewChild('miFormulario') miFormulario!: NgForm;
  @Output() tareaCreada: EventEmitter<Tarea> = new EventEmitter();
  public nuevaTarea = new Tarea();

  //metodos
  onClick() {
    if (!this.nuevaTarea.titulo.trim() || !this.nuevaTarea.descripcion.trim()) {
      return;
    }
    this.nuevaTarea.id = Date.now();
    this.tareaCreada.emit(this.nuevaTarea);
    this.nuevaTarea = new Tarea();
  }

  // guardar() {
  //   console.log(this.miFormulario.controls.titulo.value);
  // }

  // ciclo de vida
  constructor() {
    // this.nuevaTarea = new Tarea();
    // console.log(this.nuevaTarea);
  }

  ngOnInit(): void {}
}
