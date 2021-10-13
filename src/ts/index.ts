const boxErrores = document.getElementById('errores') as HTMLDivElement
const iptNombre = document.getElementById('iptNombre') as HTMLInputElement
const iptApellidos = document.getElementById('iptApellidos') as HTMLInputElement
const iptDni = document.getElementById('iptDni') as HTMLInputElement
const iptFechaNacimiento = document.getElementById('iptFechaNacimiento') as HTMLInputElement
const iptCp = document.getElementById('iptCp') as HTMLInputElement
const iptProvincia = document.getElementById('iptProvincia') as HTMLInputElement
const estadoCivil = document.getElementById('estadoCivil') as HTMLSelectElement
const checkCondiciones = document.getElementById('checkCondiciones') as HTMLInputElement

function getRadioButtonValue(element: string): string {
  let value = ''
  const radios = document.getElementsByName(element) as NodeList
  radios.forEach((button) => {
    const aux = button as HTMLInputElement
    if (aux.checked) value = aux.value.toString()
  })
  return value
}

function getMultiselectValues(element: string): string[] {
  const checked = document.querySelectorAll(`#${element} :checked`) as NodeList
  const selected = [...checked].map((option) => (option as HTMLInputElement).value)
  return selected
}

function reiniciarMensagesError() {
  const cupcakes = Array.prototype.slice.call(document.getElementsByClassName('ms-prohibition'), 0)
  cupcakes.forEach((element) => element.remove())
}

function main() {
  const u = new Usuario()

  const arrMessageErrores: string[] = []
  const e = new Errores(arrMessageErrores)

  reiniciarMensagesError()

  try {
    u.nombre = iptNombre.value
  } catch (error) {
    arrMessageErrores.push(e.message(error))
  }

  try {
    u.apellidos = iptApellidos.value
  } catch (error) {
    arrMessageErrores.push(e.message(error))
  }

  try {
    u.dni = iptDni.value
  } catch (error) {
    arrMessageErrores.push(e.message(error))
  }

  try {
    u.fechaNacimiento = new Date(iptFechaNacimiento.value)
  } catch (error) {
    arrMessageErrores.push(e.message(error))
  }

  try {
    u.sexo = getRadioButtonValue('genero')
  } catch (error) {
    arrMessageErrores.push(e.message(error))
  }

  try {
    u.intereses = getMultiselectValues('slctIntereses')
  } catch (error) {
    arrMessageErrores.push(e.message(error))
  }

  try {
    u.cp = iptCp.value
  } catch (error) {
    arrMessageErrores.push(e.message(error))
  }

  try {
    u.provincia = iptProvincia.value
  } catch (error) {
    arrMessageErrores.push(e.message(error))
  }

  try {
    u.estadoCivil = estadoCivil.value
  } catch (error) {
    arrMessageErrores.push(e.message(error))
  }

  if (e.errores.length !== 0) {
    boxErrores.style.display = 'block'
    boxErrores.innerHTML = `<span class=ms-prohibition> <b> Errores encontrados: ${e.errores.length} </b> </span>`
    e.errores.forEach((element) => {
      boxErrores.innerHTML += element
    })
  } else {
    boxErrores.style.display = 'none'
    alert(`Datos del usuario.
Nombre: ${u.nombre}
Apellidos: ${u.apellidos}
DNI: ${u.dni}
Fecha de nacimiento: ${u.fechaNacimiento}
Genero: ${u.sexo}
Intereses: ${u.intereses}
CP: ${u.cp}
Provincia: ${u.provincia}
Estado civil: ${u.estadoCivil}`)
  }
}

document.getElementById('enviar')?.addEventListener('click', () => {
  main()
})
