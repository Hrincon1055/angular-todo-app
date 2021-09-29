export class Tarea {
  public id?: number;
  public titulo!: string;
  public descripcion!: string;
  public estado!: boolean;
  constructor(
    titulo: string = '',
    descripcion: string = '',
    estado: boolean = false
  ) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.estado = estado;
  }
}
