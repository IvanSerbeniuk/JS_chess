
import { Piece } from '../Pieces.js'

export class Pawn extends Piece {
    constructor(color, position) {
        super(color, position, 'pawn')
    }

    getPossibleMoves(board) {
        let {row, col} = this.position;
        let moves = []
        let direction = this.color === 'white' ? 1 : -1


        if (this.isEmpty(board, row + direction, col)){
            moves.push({row: row + direction, col})
        }

        if (!this.hasMoved && this.isEmpty(board, row + direction, col) && this.isEmpty(board, row  + 2 *  direction, col)){
            moves.push({row: row  + 2 *  direction, col})
        }

        // To take piece
        // let captureMoves = [
        //     { row: row + direction, col: col - 1 },
        //     { row: row + direction, col: col + 1 }
        // ];

        // for (const move of captureMoves) {
        //     if (this.isEnemy(board, move.row, move.col)) {
        //         moves.push(move);
        //     }
        // }


        console.log('moves', moves)

        return moves

    
    
    }
}