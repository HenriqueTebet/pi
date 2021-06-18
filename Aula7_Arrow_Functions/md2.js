function acaoCarro (callb) {
    callb();
}

let andar = () => console.log ("O carro está andando");

let parar = () => console.log ("O carro parou");

acaoCarro(andar);