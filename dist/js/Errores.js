'use strict'
class Errores {
  constructor(errores) {
    this._errores = errores
  }
  // #### Get & Set: __errores. Errores a la hora de asignarse un valor a un atributo
  get errores() {
    return this._errores
  }
  set errores(v) {
    this._errores = v
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  message(message) {
    return `<span class=ms-prohibition> ${message} </span>`
  }
}
