let ingresaUnNumero = parseInt(prompt("sabes multiplicar? yo sí! Ingresa un numero"));

for (let i = 1; i <= 10; i++){
    let resultado = ingresaUnNumero * i ;
    alert(ingresaUnNumero +" X "+ i + "="+ resultado);
}