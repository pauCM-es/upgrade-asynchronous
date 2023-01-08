 //* Iteración #1: Fetch

// 1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para 
// hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un 
// console.log(). Para ello, es necesario que crees un .html y un .js.
fetch("https://api.agify.io?name=michael")
  .then((res) => res.json())
  .then(result => console.log(result))

// 1.2 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando 
// fetch() para hacer una consulta a la api cuando se haga click en el botón, 
// pasando como parametro de la api, el valor del input.

const baseUrl = 'https://api.nationalize.io/?name=';
const btn$$ = document.querySelector('button')
const input$$ = document.querySelector('input')
const body$$ = document.querySelector('body')

// btn$$.addEventListener("click", () => {
//   const url = baseUrl + input$$.value
//   fetch(url).then(res => res.json()).then(result => {console.log(result)})
// })

// 1.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición 
// a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
// EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser 
// de MZ.
const printDetails = (infoObject) => {
  const name = infoObject.name
  const countries = infoObject.country

  countries.forEach( country => {
    const {country_id, probability} = country
    const div$$ = document.createElement("div")
    const p$$ = document.createElement("p")
    const deleteBtn$$ = document.createElement("button")
    deleteBtn$$.textContent = "X"
    p$$.textContent = `El  nombre ${name} tiene un ${probability*100} porciento de ser de ${country_id}`
    div$$.append(p$$, deleteBtn$$)
    body$$.appendChild(div$$)
    deleteBtn$$.addEventListener("click", deleteElement)
  })
}

// 1.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno 
// de los p que hayas insertado y que si el usuario hace click en este botón 
// eliminemos el parrafo asociado.
const deleteElement = (e) => {
  console.log(e)
  const element = e.target.parentElement
  element.remove()
}

btn$$.addEventListener("click", () => {
  const url = baseUrl + input$$.value
  fetch(url).then(res => res.json()).then(result => {
    console.log(result)
    printDetails(result)
  })
})