import { Board } from './Board.js';
import { Renderer } from '../ui/Renderer.js';
import { Events } from '../ui/Events.js';

export  class Game {
    constructor() {
        this.board = new Board();
        this.currentPlayer = 'white';
        this.renderer = new Renderer();
        this.selectedPiece = null;
    }


    handleClick(position) {
        if (this.selectedPiece) {
            if (this.board.movePiece(this.selectedPiece, position)) {
                this.switchPlayer();
                this.renderer.drawBoard(this.board);
            }
            this.selectedPiece = null; 
        } else {
            let piece = this.board.grid[position.row][position.col];
            if (piece && piece.color === this.currentPlayer) {
                this.selectedPiece = position;
            }
        }
        this.renderer.drawBoard(this.board, this.selectedPiece);

    }



    start() {
        this.renderer.drawBoard(this.board);
        Events.init(this);

    }

    switchPlayer() {
        this.currentPlayer = this.currentPlayer === 'white' ? 'black' : 'white';
    }

}