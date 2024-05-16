const botoes= document.querySelectorAll("botao");
for(let i=0; i<botoes.legth; i++){
    botoes[i].onclick=function(){
        for(let j=0;j <botoes.legth;j++){
            botoes[j].classlist.remove("ativo");
        }
        botoes[i].classlist.add("ativo");
    }
}