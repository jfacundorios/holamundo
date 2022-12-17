/Ejercicio 2: Horas del Día

let horaDia = 9;
let mensaje;
if(horaDia >= 6 && horaDia <= 11){
    mensaje = "Buen Día";
} 
else if(horaDia >= 12 && horaDia <= 19){
    mensaje = "Buenas Tardes";
}
else if(horaDia >= 20 && horaDia <= 23){
    mensaje = "Buenas Noches";
}
else{
    mensaje = "Valor Incorrecto";
}
console.log(mensaje);