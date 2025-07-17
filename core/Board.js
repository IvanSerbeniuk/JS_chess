// Класс доски
import { Rook } from "./pieces/Rook.js";
import { Knight } from "./pieces/Knight.js";
import { Bishop } from "./pieces/Bishop.js";
import { Queen } from "./pieces/Queen.js";
import { King } from "./pieces/King.js";
import { Pawn } from "./pieces/Pawn.js";



export  class Board {
    constructor() {
        this.grid = this.createEmptyBoard();
        this.setupPieces();
    }

    createEmptyBoard() {
        return Array(8).fill().map(() => Array(8).fill(null));
    }

    setupPieces() {
        // Positoning figures in the beginning 
        // console.log(this.grid)
        //White
        {
            this.grid[0][0] = new Rook('white',   { abc: 'A', num: 1, type: 'rook' ,    row: 0, col: 0});
            this.grid[0][7] = new Rook('white',   { abc: 'H', num: 1, type: 'rook'  ,   row: 0, col: 7});
            this.grid[0][1] = new Knight('white', { abc: 'B', num: 1,  type: 'knight' , row: 0, col: 2});
            this.grid[0][6] = new Knight('white', { abc: 'G', num: 1,  type: 'knight' , row: 0, col: 6});
            this.grid[0][2] = new Bishop('white', { abc: 'C', num: 1,  type: 'bishop' , row: 0, col: 2});
            this.grid[0][5] = new Bishop('white', { abc: 'F', num: 1,  type: 'bishop' , row: 0, col: 5});
            this.grid[0][3] = new Queen('white',  { abc: 'E', num: 1,  type: 'queen'  , row: 0, col: 3});
            this.grid[0][4] = new King('white',   { abc: 'D', num: 1,  type: 'king'   , row: 0, col: 4});

            this.grid[1][0] = new Pawn('white', { abc: 'A', num: 2, type: 'pawn' , row: 1, col: 0 });
            this.grid[1][1] = new Pawn('white', { abc: 'H', num: 2, type: 'pawn' , row: 1, col: 1 });
            this.grid[1][2] = new Pawn('white', { abc: 'B', num: 2, type: 'pawn' , row: 1, col: 2 });
            this.grid[1][3] = new Pawn('white', { abc: 'G', num: 2, type: 'pawn' , row: 1, col: 3 });
            this.grid[1][4] = new Pawn('white', { abc: 'C', num: 2, type: 'pawn' , row: 1, col: 4 });
            this.grid[1][5] = new Pawn('white', { abc: 'F', num: 2, type: 'pawn' , row: 1, col: 5 });
            this.grid[1][6] = new Pawn('white', { abc: 'E', num: 2, type: 'pawn' , row: 1, col: 6 });
            this.grid[1][7] = new Pawn('white', { abc: 'D', num: 2, type: 'pawn' , row: 1, col: 7 });
        }

        //Black
        {
            this.grid[7][0] = new Rook('black',   { abc: 'A', num: 1, type: 'rook'    , row: 7, col: 0});
            this.grid[7][7] = new Rook('black',   { abc: 'H', num: 1, type: 'rook'    , row: 7, col: 7});
            this.grid[7][1] = new Knight('black', { abc: 'B', num: 1,  type: 'knight' , row: 7, col: 1});
            this.grid[7][6] = new Knight('black', { abc: 'G', num: 1,  type: 'knight' , row: 7, col: 6});
            this.grid[7][2] = new Bishop('black', { abc: 'C', num: 1,  type: 'bishop' , row: 7, col: 3});
            this.grid[7][5] = new Bishop('black', { abc: 'F', num: 1,  type: 'bishop' , row: 7, col: 5});
            this.grid[7][3] = new Queen('black',  { abc: 'E', num: 1,  type: 'queen'  , row: 7, col: 3});
            this.grid[7][4] = new King('black',   { abc: 'D', num: 1,  type: 'king'   , row: 7, col: 4});

            this.grid[6][0] = new Pawn('black', { abc: 'A', num: 2, type: 'pawn' , row: 6, col: 0});
            this.grid[6][1] = new Pawn('black', { abc: 'H', num: 2, type: 'pawn' , row: 6, col: 1});
            this.grid[6][2] = new Pawn('black', { abc: 'B', num: 2, type: 'pawn' , row: 6, col: 2});
            this.grid[6][3] = new Pawn('black', { abc: 'G', num: 2, type: 'pawn' , row: 6, col: 3});
            this.grid[6][4] = new Pawn('black', { abc: 'C', num: 2, type: 'pawn' , row: 6, col: 4});
            this.grid[6][5] = new Pawn('black', { abc: 'F', num: 2, type: 'pawn' , row: 6, col: 5});
            this.grid[6][6] = new Pawn('black', { abc: 'E', num: 2, type: 'pawn' , row: 6, col: 6});
            this.grid[6][7] = new Pawn('black', { abc: 'D', num: 2, type: 'pawn' , row: 6, col: 7});
        }

    }



    movePiece(from, to) {
        let piece = this.grid[from.row][from.col];


        if(!piece) return false;

        let possibleMoves = piece.getPossibleMoves(this)

        console.log('this', this)

        //Check if there is target position in possible moves
        let isValidMove = possibleMoves.some(move =>
            move.row === to.row && move.col === to.col
        )

        if(!isValidMove){
            console.log('Move is not allowed')
            return false
        }


        // execute the move
        if(!piece) return false;

        this.grid[to.row][to.col] = piece;
        this.grid[from.row][from.col] = null;

        piece.position = { ...to };
        piece.hasMoved = true;

        piece.position = to;

        return true;
    }
}