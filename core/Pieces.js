

export class Piece {
    constructor(color, position, type) {
        this.color = color; // 'white' или 'black'
        this.position = position;
        this.type = type;
        this.hasMoved = false; 
    }

    isEmpty(board, row, col){
        if(row < 0 || row > 7 || col < 0 || col > 7 )return false
        return board.grid[row][col] === null
    }

    isEnemy(board, row, col){
        if(row < 0 || row > 7 || col < 0 || col > 7 )return false
        let piece = board.grid[row][col]        
        return piece && piece.color !== this.color  
    }

    getPossibleMoves(board) {
        throw new Error("Method not implemented!");
    }
}