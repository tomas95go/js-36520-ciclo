//Alumno: González Oviedo Tomás Emiliano

let continua = true;
let input = prompt(`Por favor, elegí un número entero del 1 al 10 y te encuentro las potencias: 1 a la 5\nEscriba: "salir" para parar la ejecución.`);

while(continua){

    if(input.toLowerCase() === 'salir'){
        continua = false;
        alert(`¡Gracias por haber utilizado este programa, hasta luego!`);
        break;
    } else if (isNaN(input)) {
        alert(`Lo lamento, su input no es valido.`);
    } else if (Number(input) > 10) {
        alert(`Lo lamento, su número debe ser menor a 10.`);
    } else if (Number(input) <= 0) {
        alert(`Lo lamento, su número debe ser mayor a 0.`);
    }  else {
        for(let i = 1; i <= 5;i++){
            alert(`Cálculo, ${Number(input)} ^ ${i} es: ${Number(input) ** i}`)
        }
    }
    
    input = prompt(`Por favor, elegí otro número entero del 1 al 10 y te encuentro las potencias: 1 a la 5.\nEscriba: "salir" para parar la ejecución.`);

}