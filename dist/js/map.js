class Map {
    constructor(debug) {
        this.debug = debug;
        this.x = 0;
        this.y = 0;
        this.stone = new Stone();
        this.board = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ];
    }

    /**
     * Initialise la map.
     * Placement des éléments et des joueurs.
     */
    init() {
        stone.init(this.board);
        pugilat.init(this.board);
        dagger.init(this.board);
        sword.init(this.board);
        dualsword.init(this.board);
        player1.init(this.board);
        player2.init(this.board);
    }

    /**
     * Affiche la map et ses éléments.
     * @param {Object} context 
     */
    display(context) {

        for (this.x = 0; this.x < this.board.length; this.x++) {
            for (this.y = 0; this.y < this.board[this.x].length; this.y++) {
                context.strokeStyle = "grey";
                context.strokeRect(this.x * 50, this.y * 50, 50, 50);

                //Pour chaque identifiant dans la board on dessine les images correspondantes
                switch (this.board[this.x][this.y]) {
                    case 1: // Player 1
                        //draw(context, 'player1', this.x * 50, this.y * 50)
                        break;
                    case 2: // Player 2
                        //draw(context, 'player2', this.x * 50, this.y * 50);
                        break;
                    case 3: // Rocher
                        draw(context, 'stone', this.x * 50, this.y * 50);
                        break;
                    case 4: // Bâton
                        draw(context, 'stick', this.x * 50, this.y * 50);
                        break;
                    case 5: // Dague
                        draw(context, 'dagger', this.x * 50, this.y * 50);
                        break;
                    case 6: // Double épee
                        draw(context, 'dualSword', this.x * 50, this.y * 50);
                        break;
                    case 7: // Pugilat
                        draw(context, 'pugilat', this.x * 50, this.y * 50);
                        break;
                    case 8: // Epée
                        draw(context, 'sword', this.x * 50, this.y * 50);
                        break;
                }
            }
        };

        draw(context, 'player1', player1.x * 50, player1.y * 50)
        draw(context, 'player2', player2.x * 50, player2.y * 50);
        this.showBoard();
    }

    /**
     * Efface la Map.
     * @param {object} context 
     */
    delete(context) {
        context.clearRect(0, 0, 10 * 50, 10 * 50, 45, 50);
    }

    /**
     * Affiche la board dans la console si l'on souhaite debug.
     */
    showBoard() {
        if (this.debug) {
            var line = "";
            for (this.y = 0; this.y < this.board.length; this.y++) {
                for (this.x = 0; this.x < 10; this.x++) {
                    line += this.board[this.x][this.y] + ' ';
                }
                line += "\n";
            }
            console.log("\nMap\n\n" + line);
            console.log("Id 0 == Case libre \nId 1 == Joueur 1 \nId 2 == Joueur 2 \nId 3 == Rocher \nId 4 == Bâton \nId 5 == Dague \nId 6 == Double épée \nId 7 == Pugilat  \nId 8 == Epée ");
            console.log('Il y a ' + stone.numberOfStones + ' rocher sur la map');
        }

    }

}

const map = new Map(false);