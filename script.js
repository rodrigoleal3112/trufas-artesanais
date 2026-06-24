// ================================
// TRUFAS PREMIUM - SCRIPT
// ================================


let carrinho = [];
let total = 0;


// ================================
// ADICIONAR AO CARRINHO
// ================================

function adicionarCarrinho(nome, preco){


    carrinho.push({

        nome: nome,
        preco: preco

    });


    total += preco;


    atualizarCarrinho();


    console.log("Produto adicionado:", nome);

}



// ================================
// REMOVER DO CARRINHO
// ================================

function removerCarrinho(nome){


    let indice = carrinho.findIndex(
        produto => produto.nome === nome
    );


    if(indice !== -1){


        total -= carrinho[indice].preco;


        carrinho.splice(indice,1);


        atualizarCarrinho();


    }


}




// ================================
// ATUALIZA DISPLAY
// ================================

function atualizarCarrinho(){


    let contador =
        document.getElementById("contador");


    let totalTela =
        document.getElementById("total");



    if(contador){

        contador.innerHTML =
            carrinho.length;

    }



    if(totalTela){

        totalTela.innerHTML =
            total.toFixed(2);

    }


}





// ================================
// FINALIZAR PEDIDO WHATSAPP
// ================================

function finalizarPedido(){


    if(carrinho.length === 0){


        alert("Seu carrinho está vazio!");


        return;

    }



    let mensagem =
    "🍫 *PEDIDO DE TRUFAS PREMIUM*%0A%0A";



    carrinho.forEach((produto,index)=>{


        mensagem +=

        (index + 1) +
        " - " +
        produto.nome +
        " R$ " +
        produto.preco.toFixed(2)
        +
        "%0A";


    });



    mensagem +=

    "%0A💰 TOTAL: R$ "
    +
    total.toFixed(2);



    let telefone =
    "5548991914218";



    window.open(

        "https://wa.me/"
        +
        telefone
        +
        "?text="
        +
        mensagem,


        "_blank"

    );


}





// ================================
// MODO ESCURO
// ================================

function mudarModo(){


    document.body.classList.toggle("dark");


    let botao =
    document.getElementById("tema-btn");



    if(document.body.classList.contains("dark")){


        localStorage.setItem(
            "tema",
            "dark"
        );


        botao.innerHTML =
        "☀️ Claro";


    }else{


        localStorage.setItem(
            "tema",
            "light"
        );


        botao.innerHTML =
        "🌙 Escuro";


    }


}





// ================================
// CARREGAR TEMA
// ================================

window.addEventListener("load",()=>{


    let tema =
    localStorage.getItem("tema");


    let botao =
    document.getElementById("tema-btn");



    if(tema === "dark"){


        document.body.classList.add("dark");


        if(botao){

            botao.innerHTML =
            "☀️ Claro";

        }


    }



    atualizarCarrinho();



});