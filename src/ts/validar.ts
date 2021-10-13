// Funciones de verificacion
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const isEmpty = (value: string | Date): boolean => (value === '' ? true : false)

// Minimo y maximo de un string
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const stringLength = (value: string, min: number, max: number): boolean => (value.length > min && value.length < max ? true : false)

// Correo electronico valido
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const email = (value: string): boolean => (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(value) ? true : false)

const isNumeric = (value: string) => !isNaN(parseInt(value))

// DNI valido
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const dni = (value: string): boolean => {
  let numero: any
  let letr: string
  let letra: string
  const expresion_regular_dni = /^\d{8}[a-zA-Z]$/

  if (expresion_regular_dni.test(value) == true) {
    numero = value.substr(0, value.length - 1)
    letr = value.substr(value.length - 1, 1)
    numero = numero % 23
    letra = 'TRWAGMYFPDXBNJZSQVHLCKET'
    letra = letra.substring(numero, numero + 1)
    if (letra != letr.toUpperCase()) {
      return false
    } else {
      return true
    }
  } else {
    return false
  }
}
