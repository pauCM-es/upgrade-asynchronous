// 2.1 Convierte la siguiente promesa para esperar a ejecutar el console usando 
// async-await.
// const runTimeOut = () => {
//     const promise = new Promise((resolve) => {
//         setTimeout(function () {
//             resolve();
//         }, 2000);
//     })

//     promise.then(() => {console.log('Time out!')})
// };

function runTimeOut (time) {
   setTimeout( ()=> {
    console.log('Time out function')
   },time)
}

async function call (){
  await runTimeOut(5000);
}

call()





// 2.2 Convierte la siguiente función con un fetch utilizando async-await. 
// Recuerda que para usar .fetch() tendrás que probar el ejercicio en el navegador;
async function getCharacters () {
    const response = await fetch('https://rickandmortyapi.com/api/character')
    const result = await response.json()
    console.log(result)
}

getCharacters();
