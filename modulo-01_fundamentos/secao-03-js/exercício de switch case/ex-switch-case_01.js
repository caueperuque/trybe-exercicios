const chessPiece = 'QUEEN';
let result = chessPiece.toLowerCase();

switch(result){
    case 'knight':
        console.log('O Cavalo só pode se mover 4 casas');
        break;
    case 'king':
        console.log('O Rei pode se mover uma casa');
        break;
    case 'queen':
        console.log('A Rainha Qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente');
        break;
    case 'rook':
        console.log('A torre pode se mover quantas casas quiser na horizontal ou vertical, mas não pode se mover diagonalmente');
        break;
    case 'bishop':
        console.log('O bispo pode andar quantas casas quiser, desde que na diagonal');
        break;
    case 'pawn':
        console.log('Os peões se movem somente para frente, uma casa por vez. Um exceção é a primeira vez que um peão é movido, quando ele pode se mover duas casas');
        break;
    default:
        console.log('ERROR 404 - Peça inexistente')
}