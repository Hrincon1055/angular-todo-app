export class Tarea {
  public titulo!: string;
  public descripcion!: string;
  constructor(titulo: string = '', descripcion: string = '') {
    this.titulo = titulo;
    this.descripcion = descripcion;
  }
}
