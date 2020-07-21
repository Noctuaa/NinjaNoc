class Stone {
    /**
     * Rocher
     */
    constructor() {
        this.id = 3;
        this.numberOfStones = Number;
        this.stoneCounter = 0;
    }

    /**
     * Initialise les rochers sur la board en vérifiant si la place est disponible.
     * @param {Array} board - Tableau du board
     */
    init(board) {
        this.numberOfStones = getRandomInt(6, 13);
        do {
            let x = getRandomInt(0, 9);
            let y = getRandomInt(0, 9);
            if (board[x][y] === 0) {
                board[x][y] = this.id;
                this.stoneCounter++;
            }
        } while (this.stoneCounter < this.numberOfStones);
    }
}

const stone = new Stone();