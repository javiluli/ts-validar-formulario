class Errores {
  private _errores: Array<string>

  constructor(errores: Array<string>) {
    this._errores = errores
  }

  // #### Get & Set: __errores. Errores a la hora de asignarse un valor a un atributo
  public get errores() {
    return this._errores
  }

  public set errores(v: string[]) {
    this._errores = v
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public message(message: string | any) {
    return `<span class=ms-prohibition> ${message} </span>`
  }
}
