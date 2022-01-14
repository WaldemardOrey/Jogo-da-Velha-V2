let board = ["","","","","","","","",""];

let simbols = ["X","O"];

let PP = 0;

let GameOver = false;






let EstaGanho=[["0","1","2"],["3","4","5"],["6","7","8"],             ["0","3","6"],["1","4","7"],["2","5","8"],
                ["0","4","8"],["2","4","6"]];


function defineHouse(position)
{

   


    if(board[position] == ""){
    board[position] = simbols[PP];
    if(PP == 0){ PP = 1}else{PP = 0}}





}

function fimDoJogo()
{

    for(let i = 0; i < EstaGanho.length; i++)
    {
        let posTotal = EstaGanho[i];
        let pos1 = posTotal[0];
        let pos2 = posTotal[1];
        let pos3 = posTotal[2];
        if (board[pos1] == board[pos2] && board[pos1] == board[pos3] && board[pos1] != ""){
            return true
        }
    }


    return false;
}

