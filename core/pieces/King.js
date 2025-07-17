

import { Piece } from '../Pieces.js'
export class King extends Piece{
    constructor(color, position) {
        super(color, position, 'king')
        this.color = color; 
        this.position = position; 
        this.hasMoved = false; 
    }

    getPossibleMoves(board) {
        throw new Error("Method not implemented!");
    }
}