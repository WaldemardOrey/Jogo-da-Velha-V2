document.addEventListener('DOMContentLoaded',()=>{



    let squares = document.querySelectorAll(".square");

    squares.forEach((square)=>
    {
        square.addEventListener("click",clickT);
    })

})


// let jogador1 = document.getElementById("jogador1");
// let jogador2 = document.getElementById("jogador2");


function clickT(s)
{


    let jogador10 = document.getElementById("jogador1");
    let jogador20 = document.getElementById("jogador2");

    
        
        if(PP == 1){jogador10.setAttribute("style","animation-name: mudarTexto;font-style: oblique; "); jogador20.setAttribute("style","animation-name: kkk; font-style: none;")} else{jogador20.setAttribute("style","animation-name: mudarTexto; font-style: oblique;"); jogador10.setAttribute("style","animation-name: kkk; font-style: none;")}  

    if(GameOver){
        
        

        return console.log("final do jogo") };

    let square = s.target;
    let postion = square.id;
   defineHouse(postion);

   updateSquare(postion);

   GameOver = fimDoJogo();
   let onew = PP;

   if(GameOver){

       if(onew == 1){ onew = 0} else { onew = 1}

    let jogadoress = document.getElementsByClassName("jogadores")[0];
   jogadoress.innerHTML += `<br><br><br>
   ${jogadores[onew]} é o Vencedor!`;
   jogadoress.setAttribute("style","animation-name: mudarTexto");

   return console.log("fim do jogo!")};


  

}
function reiniciarTudo()
{

    let squares = document.querySelectorAll(".square");



     board = ["","","","","","","","",""];

     simbols = ["X","O"];
    
     PP = 0;

    GameOver = false;


    
     for(let i of squares)
     {
          i.innerHTML = "";
          i.setAttribute("style","animation-name: no")
    }

    let jogadoress = document.getElementsByClassName("jogadores")[0];
   jogadoress.innerHTML = `<jogador1 id="jogador1"></jogador1><span> VS </span>
   <jogador2 id="jogador2"></jogador2>
   <br> <button id="reiniciar" onclick="reiniciarTudo();">Reiniciar Jogo</button>`;

   jogadoress.setAttribute("style","animation-name:no")

   setTimeout(()=>{
    jogador1.innerHTML = jogadores[0];
    jogador2.innerHTML = jogadores[1];


   },100)
  




}


function updateSquare(square)
{

let squares = document.querySelectorAll(".square");


    if(board[square] != "")
    {
            if(board[square] == "X")
            {
                 console.log("waldemar")
                squares[square].innerHTML = `<img width="100px" height="100px" src="./x.gif" alt="">`;
                squares[square].setAttribute("style","animation-name: btnAnimacao;")
            }

            if(board[square] == "O")
            {
                // console.log("waldema")
                // squares[square].setAttribute("style","animation-name: btnAnimacao;animation-direction: reverse;")
                squares[square].innerHTML = `<img width="100px" height="111px" src="./Ot.png" alt="">`
            }



    } 
}
//Mudarh2




let nome1 = document.getElementById("h2");
let nome2 = document.getElementById("h3");

let nome111 = document.getElementById("nome1");
let nome222 = document.getElementById("nome2");

function mudarh2()
{
    if(nome111.value.length < 9){
nome1.innerHTML = document.getElementById("nome1").value; 
}
}

function mudarh3()
{
    if(nome222.value.length < 9){
nome2.innerHTML = document.getElementById("nome2").value; 
    }
}

let enviar = document.getElementById("enviar");


var jogadores = [];





function enviado()
{
    // && nome1.innerHTML != "Jogador 1" && nome2.innerHTML != "Jogador 2" && nome2.innerHTML != "Jogador 1" && nome1.innerHTML != "Jogador 2" &&

if(nome1.innerText != "" && nome2.innerText != "" && nome1.innerHTML.length < 9 && nome1.innerHTML.length > 0 && nome2.innerHTML.length < 9 && nome1.innerHTML.length > 0 && nome1.innerHTML != nome2.innerHTML){
jogadores[0] = nome1.innerText;
jogadores[1] = nome2.innerText;
mudarHtml();

 jogador1.innerHTML = jogadores[0];
 jogador2.innerHTML = jogadores[1];



}
}




function mudarHtml()
{

let total = document.getElementById("TOTAL");
total.setAttribute("style","display: block");

let final = document.getElementById("final");
final.setAttribute("style","display: none");
    
}
























