// eslint-disable-next-line @typescript-eslint/no-unused-vars
class Usuario {
  private _nombre: string // 2-60 caracteres, obligatorio
  private _apellidos: string // 2-80 caracteres, obligatorio
  private _dni: string // DNI valido, obligatorio
  private _fechaNacimiento: Date // no puede inferior a la actual, obligatorio
  private _sexo: string // Valor por defecto NO DEFINIDO = x, obligatorio
  private _intereses: string[] = [] // Minimo 1 valor, obligatorio
  private _cp: string // 5 caracteres, obligatorio
  private _provincia: string // solo lectura, generacion automatica por medio del CP
  private _estadoCivil: string // S / C / D / V

  constructor()

  constructor(obj: Usuario)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(obj?: any) {
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
  public get nombre(): string {
    return this._nombre
  }

  public set nombre(v: string) {
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
  public get apellidos(): string {
    return this._apellidos
  }

  public set apellidos(v: string) {
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
  public get dni(): string {
    return this._dni
  }

  public set dni(v: string) {
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
  public get fechaNacimiento(): Date {
    return this._fechaNacimiento
  }

  public set fechaNacimiento(v: Date) {
    if (!isEmpty(v)) {
      this._fechaNacimiento = v
    } else {
      throw 'La fecha de nacimiento es obligatoria'
    }
  }

  // #### Get & Set: __dni ####
  public get sexo(): string {
    return this._sexo
  }

  public set sexo(v: string) {
    v = v.trim()
    if (!isEmpty(v)) {
      this._sexo = v
    } else {
      this._sexo = 'x' // valor por defecto x
    }
  }

  // #### Get & Set: __intereses ####
  public get intereses(): Array<string> {
    return this._intereses
  }

  public set intereses(v: Array<string>) {
    if (v.length > 0) {
      this._intereses = v
    } else {
      throw 'Es obligatorio elegir al menos 1 interes'
    }
  }

  // #### Get & Set: __cp ####
  public get cp(): string {
    return this._cp
  }

  public set cp(v: string) {
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
  public get provincia(): string {
    return this._provincia
  }

  public set provincia(v: string) {
    if (!isEmpty(v)) {
      this._provincia = v
    } else {
      throw 'La provincia es obligatoria'
    }
  }

  // #### Get & Set: _estadoCivil ####
  public get situacionActual(): string {
    return this._estadoCivil
  }

  public set estadoCivil(v: string) {
    if (!isEmpty(v)) {
      this._estadoCivil = v
    } else {
      throw 'El estado civil es obligatoria'
    }
  }
}
