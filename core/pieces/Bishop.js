
import { Piece } from "../Pieces.js";

export class Bishop extends Piece {
    constructor(color, position) {
        super(color, position, 'bishop');
        this.color = color; 
        this.position = position;
        this.hasMoved = false;
    }

    getPossibleMoves(board) {
        throw new Error("Method not implemented!");
    }
}