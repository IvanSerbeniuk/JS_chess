// Click processing and events
export  class Events {
    static init(game) {
        document.querySelectorAll('.square_chess').forEach(cell => {
            cell.addEventListener('click', () => {
                const position = { 
                    row: parseInt(cell.dataset.row),
                    col: parseInt(cell.dataset.col),
                    abc: cell.dataset.abc,
                    num: cell.dataset.num
                };
                game.handleClick(position);
                console.log(position)
            });
        });
    }

    static  move(){
        //
    
    }

}