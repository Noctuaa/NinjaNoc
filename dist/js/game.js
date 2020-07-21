class Game {
    /**
     * Régle et actions du jeu.
     */
    constructor() {
        this.start = getRandomInt(0, 1);
        this.counter = this.start;
        this.activePlayer = Object;
        this.passivePlayer = Object;
        this.alert = document.querySelector('#danger');
        this.info = document.querySelector('#info');
    }

    /**
     * Initialise la partie.
     * On récupère le joueur qui commence.
     * On affiche les statistiques des joueurs et on informe le joueur qui démarre en premier.
     */
    init(context) {
        map.init();
        map.display(context);
        this.whoNext();
        this.information();
    }


    /**
     * On récupére le joueur qui doit jouer.
     */
    whoNext() {
        this.counter++;
        if (this.counter % 2 == 1) {
            this.activePlayer = player1
            this.passivePlayer = player2;
        } else {
            this.activePlayer = player2
            this.passivePlayer = player1;
        }
    }

    /**
     * Affiche les Informations des joueurs, du jeu et le tour du joueur qui doit jouer.
     */
    information() {
        if (this.over()) {
            this.info.innerHTML = 'Joueur ' + this.activePlayer.id + ' vous avez gagné !';
            this.info.classList.add('alert-success');
            this.alert.classList.remove('show');
        } else {
            this.info.innerHTML = `C'est à vous de jouez : joueur ` + this.activePlayer.id;
        }

        player1.description();
        player2.description();
    }

    /**
     * Si un Joueur à 0 de vie alors la partie est finie.
     * Sa vie reste à zéro.
     */
    over() {
        if (this.passivePlayer.sante <= 0) {
            this.passivePlayer.sante = 0;
            return true;
        } else {
            return false;
        }
    }

    /**
     * Les actions que peut effectuer le joueur une fois en combat.
     * Si la partie n'est pas finie.
     * On incrémente le counter pour passer son tour et on appelle la méthode whoNext.
     * Ensuite nous mettons à jour les informations.
     * 
     */
    actions() {
        const attack = document.querySelector('#attack');
        attack.addEventListener('click', e => {
            this.activePlayer.attack(this.passivePlayer);
            this.activePlayer.defend = false;
            !this.over() ? this.whoNext() : '';
            game.information();
           
        })

        const defend = document.querySelector('#defend');
        defend.addEventListener('click', e => {
            this.activePlayer.defend = true;
            !this.over() ? this.whoNext() : '';
            game.information();
        })
    }

    /**
     * Verifie si les deux joueurs sont côte à côte.
     * Si c'est le cas alors le combat commence et on affiche un message pour avertir les joueurs
     */
    battle() {
        if (player1.x + 1 == player2.x && player1.y == player2.y ||
            player1.x - 1 == player2.x && player1.y == player2.y ||
            player1.x == player2.x && player1.y + 1 == player2.y ||
            player1.x == player2.x && player1.y - 1 == player2.y) {
            this.alert.innerHTML = 'Vous êtes en combat !'
            this.alert.classList.add("show");
            return true;
        }
        return false;
    }

    /**
     * Verifie si le joueur n'essaye pas d'aller sur un rocher ou de le traverser. 
     * @param {Array} board - Tableau du Board
     * @param {number} x - Coordonnées du click où souhaite aller le joueur (colonne du Board)
     * @param {number} y - Coordonnées du click où souhaite aller le joueur (ligne du Board)
     */
    isMoveStone(x, y) {
        var isStone = false;
        if (this.activePlayer.x < x) {
            for (let i = this.activePlayer.x + 1; i <= x; i++) {
                if (map.board[i][y] === 3) {
                    isStone = true;
                }

            }
        } else if (this.activePlayer.x > x) {
            for (let i = this.activePlayer.x - 1; i >= x; i--) {
                if (map.board[i][y] === 3) {
                    isStone = true;
                }
            }
        }

        if (this.activePlayer.y < y) {
            for (let i = this.activePlayer.y + 1; i <= y; i++) {
                if (map.board[x][i] == 3) {
                    isStone = true;
                }
            }
        } else if (this.activePlayer.y > y) {
            for (let i = this.activePlayer.y - 1; i >= y; i--) {
                if (map.board[x][i] == 3) {
                    isStone = true;
                }
            }
        }

        isStone ?  this.alert.innerHTML = 'Vous ne pouvez pas traverser un rocher !' : '';
        return isStone;
    }

    /**
     * Vérifie si le joueur fait plus de trois pas ou se déplace en diagonal.
     * Le joueur ne peut aller sur la même case d'un autre joueur.
     * @param {number} x - Coordonnées du click où souhaite aller le joueur (colonne du Board)
     * @param {number} y - Coordonnées du click où souhaite aller le joueur (ligne du Board)
     */
    isMoveValid(x, y) {
        const deltaX = Math.abs(this.activePlayer.x - x);
        const deltaY = Math.abs(this.activePlayer.y - y);
        const numberOfSteps = Math.max(deltaX, deltaY);

        if (numberOfSteps > 3 || deltaX >= 1 && deltaY >= 1 || this.passivePlayer.x === x && this.passivePlayer.y === y) {
            this.alert.innerHTML = 'Vous ne pouvez pas faire plus de trois pas ou vous déplacez en diagonal !';
            return true;
        } else {
            return false;
        }
    }


    /**
     * On appelle les methodes qui vérifie les déplacements du joueur ou si il n'est pas en combat.
     * Si Ok on autorise le déplacement sinon on affiche un message d'erreur.
     * @param {number} x - Coordonnées du click où souhaite aller le joueur (colonne du Board)
     * @param {number} y - Coordonnées du click où souhaite aller le joueur (ligne du Board)
     */
    checkMoveTo(x, y) {
        if (this.battle() || this.isMoveValid(x, y) || this.isMoveStone(x, y)) {

            this.alert.classList.add("show");
            return false;
        } else {
            this.alert.classList.remove('show');
            return true;
        }
    }
}

const game = new Game();