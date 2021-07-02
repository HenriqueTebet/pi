//Função do microondas para cada alimento
function microondas(alimento, tempo){

    //O tempo padrão será "vazio" até que seja inserido um alimento válido
    let tempoPadrao = null
    
        switch(alimento){
            case "Pipoca":
                tempoPadrao=10
                break;
            case "Macarrão":
                tempoPadrao=8
                break;
            case "Carne":
                tempoPadrao=15
                break;
            case "Feijão":
                tempoPadrao=12
                break;
            case "Brigadeiro":
                tempoPadrao=8
                break;
            default:
                console.log("Prato inexistente")
                return tempoPadrao
        }
    
    //Condicional para exibição de mensagens ao usuário
        if(tempo<tempoPadrao){
            console.log("tempo insuficiente");
        } else if(tempo>tempoPadrao*2 && tempo<tempoPadrao*3){
            console.log("a comida queimou");
        } else if(tempo>=tempoPadrao*3){
            console.log("kabumm");
        } else {
            console.log("Prato pronto, bom apetite!!!");
        }
    }
    
    module.exports = microondas;