'use strict'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class Usuario {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(obj) {
    this._intereses = [] // Minimo 1 valor, obligatorio
    this._nombre = obj && obj.nombre
    this._apellidos = obj && obj.apellidos
    this._dni = obj && obj.dni
    this._fechaNacimiento = obj && obj.fechaNacimiento
    this._sexo = obj && obj.sexo
    this._intereses = obj && obj.intereses
    this._cp = obj && obj.cp
    this._provincia = obj && obj.provincia
    this._estadoCivil = obj && obj.situacionActual
  }
  // #### Get & Set: __nombre ####
  get nombre() {
    return this._nombre
  }
  set nombre(v) {
    v = v.trim()
    if (!isEmpty(v)) {
      if (stringLength(v, 2, 60)) {
        this._nombre = v
      } else {
        throw 'La longitud del nombre es incorrecta [2-60]'
      }
    } else {
      throw 'El nombre es obligatorio'
    }
  }
  // #### Get & Set: _apellidos ####
  get apellidos() {
    return this._apellidos
  }
  set apellidos(v) {
    v = v.trim()
    if (!isEmpty(v)) {
      if (stringLength(v, 2, 80)) {
        this._apellidos = v
      } else {
        throw 'La longitud de los apellidos es incorrecta [2-80]'
      }
    } else {
      throw 'Los apellidos son obligatorios'
    }
  }
  // #### Get & Set: __dni ####
  get dni() {
    return this._dni
  }
  set dni(v) {
    v = v.trim()
    if (!isEmpty(v)) {
      if (dni(v)) {
        this._dni = v
      } else {
        throw 'El DNI no es valido'
      }
    } else {
      throw 'El DNI es obligatorio'
    }
  }
  // #### Get & Set: __fechaNacimiento ####
  get fechaNacimiento() {
    return this._fechaNacimiento
  }
  set fechaNacimiento(v) {
    if (!isEmpty(v)) {
      this._fechaNacimiento = v
    } else {
      throw 'La fecha de nacimiento es obligatoria'
    }
  }
  // #### Get & Set: __dni ####
  get sexo() {
    return this._sexo
  }
  set sexo(v) {
    v = v.trim()
    if (!isEmpty(v)) {
      this._sexo = v
    } else {
      this._sexo = 'x' // valor por defecto x
    }
  }
  // #### Get & Set: __intereses ####
  get intereses() {
    return this._intereses
  }
  set intereses(v) {
    if (v.length > 0) {
      this._intereses = v
    } else {
      throw 'Es obligatorio elegir al menos 1 interes'
    }
  }
  // #### Get & Set: __cp ####
  get cp() {
    return this._cp
  }
  set cp(v) {
    v = v.trim()
    if (!isEmpty(v)) {
      const reg = new RegExp('^[0-9]+$')
      if (v.length == 5 && reg.test(v)) {
        this._cp = v
      } else {
        throw 'El codigo postal debe contener 5 digitos'
      }
    } else {
      throw 'El codigo postal es obligatorio'
    }
  }
  // #### Get & Set: __provincia ####
  get provincia() {
    return this._provincia
  }
  set provincia(v) {
    if (!isEmpty(v)) {
      this._provincia = v
    } else {
      throw 'La provincia es obligatoria'
    }
  }
  // #### Get & Set: _estadoCivil ####
  get situacionActual() {
    return this._estadoCivil
  }
  set estadoCivil(v) {
    if (!isEmpty(v)) {
      this._estadoCivil = v
    } else {
      throw 'El estado civil es obligatoria'
    }
  }
}
