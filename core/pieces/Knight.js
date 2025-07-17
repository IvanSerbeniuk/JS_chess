
import { Piece } from "../Pieces.js";

export class Knight extends Piece{
    constructor(color, position) {
        super(color, position, 'knight');
        this.color = color;
        this.position = position; 
        this.hasMoved = false; 

        
    }

    getPossibleMoves(board) {
        throw new Error("Method not implemented!");
    }
}