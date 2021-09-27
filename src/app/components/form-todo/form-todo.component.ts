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
  @ViewChild('miFormulario') miFormulario!: NgForm;
  @Output() tareaCreada: EventEmitter<Tarea> = new EventEmitter();
  public nuevaTarea = new Tarea();

  //metodos
  onClick() {
    if (
      !this.miFormulario.controls.titulo.value.trim() ||
      !this.miFormulario.controls.descripcion.value.trim()
    ) {
      return;
    }
    this.nuevaTarea.titulo = this.miFormulario.controls.titulo.value;
    this.nuevaTarea.descripcion = this.miFormulario.controls.descripcion.value;
    this.tareaCreada.emit(this.nuevaTarea);
    // this.nuevaTarea = new Tarea();
    this.miFormulario.reset({
      titulo: '',
      descripcion: '',
    });
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
