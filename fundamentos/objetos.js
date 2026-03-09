const prod1 = {};
prod1.nome = "Celular Ultra Mega";
/*quando se é um object a constante se torna modificavel e não permanece com o mesmo
nome anterior e sobreescrita*/
prod1.nome = "teste em objeto sendo constante." 
prod1.preco = 4998.90;
prod1["Desconto Legal"] = 0.40; // evitar atributos com espaços

console.log(prod1);

const prod2 = {
    nome: "Camisa Polo",
    preco: 70.90,
    obj:{
        blabla: 1,
        obj:{
            blabla: 2
        }
    }
};

console.log(prod2);