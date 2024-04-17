const squares = document.getElementsByClassName('square');

let addOne = false;

//Coloca cor e o onClick de cada quadrado
for(let i = 0; i < squares.length; i++ ){
    
    squares[i].addEventListener("click", function() {
        jogada(i);
    });

    //Inverte as cores toda troca de coluna
    if(i % 8 == 0){
        addOne = !addOne;
    }
    
    //Adiciona a cor
    squares[i].classList.add('gridColor'+ ((i + addOne) % 2 ));
    
    //APENAS PARA DEBUG!
    //squares[i].innerHTML =`<h1>` + i + `</h1>`; 
} 