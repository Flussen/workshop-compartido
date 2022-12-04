const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let answer = [];

function entrada(){
    rl.question('Qué profundidad quieres poner? ');
    rl.close();
    
}


// caracol tiene que subir, cada día sube 7 pisos, y cada noche baja 2, cuántos dias le toma con la profunidad dada.

//if(prof > 0){prof += 2;}
let prof = answer;
let dia = 0;
for(prof, dia; 0 < prof;){
    dia += 1, prof -= 7;
    if(prof > 0){prof += 2;}
    console.log('Días:',dia);
    console.log('prof:',prof);
    console.log('Noches:',dia-1);
}
console.log('Resultado final',dia);

entrada();