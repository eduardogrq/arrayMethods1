// let totalKoders = parseInt(prompt("¿Cuántos koders deseas agregar?"));
let koderName;
let koderLastname;
let kodersArray = [];

function createKoders(){
    let totalKoders = parseInt(prompt("¿Cuántos koders deseas agregar?"));
    for(let i = 0; i < totalKoders; i++){
        koderName = prompt("Ingresa el nombre del Koder");
        koderLastname = prompt("Ingresa el apellido del Koder");
        kodersArray[i] = `${koderName} ${koderLastname}`; 
    }
    console.log(kodersArray);
}

function addKoders(name, lastname){
    kodersArray.push(`${name} ${lastname}`);
    console.log(kodersArray);
}

function deleteRandomKoders(){
    kodersArray.splice(Math.floor(Math.random()*kodersArray.length), 1);
    console.log("Eliminaste un koder de manera aleatoria");
    console.log(kodersArray);
}
