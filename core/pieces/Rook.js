
import { Piece } from "../Pieces.js";

export class Rook extends Piece{
    constructor(color, position) {
        super(color, position, 'rook');
        this.color = color; // 'white' или 'black'
        this.position = position; 
        this.hasMoved = false; 
    }

    getPossibleMoves(board) {
        throw new Error("Method not implemented!");
    }
}