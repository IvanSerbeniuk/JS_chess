
import {Piece} from '../Pieces.js'

export class Queen extends Piece {
    constructor(color, position) {
        super(color, position, 'queen')
        this.color = color; // 'white' или 'black'
        this.position = position; 
        this.hasMoved = false; 
    }

    getPossibleMoves(board) {
        throw new Error("Method not implemented!");
    }
}