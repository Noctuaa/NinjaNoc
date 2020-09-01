class Player {
    /**
     * Donnée du Joueur
     * @param {number} id - id du joueur
     * @param {Object} weapon - Arme du joueur par défaut.
     */
    constructor(id, weapon) {
        this.position = false;
        this.x = Number;
        this.y = Number;
        this.id = id;
        this.weapon = weapon;
        this.defend = Boolean;
        this.sante = 100;

    }
    /**
     * Initialise le joueur sur la map en vérifiant si la place est disponible.
     * @param {Array} board - Tableau du board
     */
    init(board) {

        do {
            this.x = getRandomInt(0, 9);
            this.id === 1 ? this.y = getRandomInt(0, 2) : this.y = getRandomInt(7, 9);

            if (board[this.x][this.y] === 0) {
                board[this.x][this.y] = this.id;
                this.position = true;
            }
        } while (this.position === false);
    }

    /**
     * Description et état du Joueur.
     */
    description() {
        const description = ("<div class='card-header'>☯ Joueur " + this.id + " ☯ </div><div class='card-body'><p class='card-text'>Santé : " +
            this.sante + " HP <br> Arme : " + this.weapon.name + " <br> Dégats : " + this.weapon.force + "  <br> Posture : " +
            (this.defend == true ? 'Défensive' : !this.defend ? 'Offensive' : 'Neutre' + "</p></div>"));

        document.querySelector('#statPlayer' + this.id).innerHTML = description;
    }

    /**
     * Pertmet d'échanger son arme avec une autre sur la board.
     * @param {Array} board - Tableau du board.
     * @param {Number} x - Coordonnées du click où souhaite aller le joueur (colonne du Board).
     * @param {Number} y - Coordonnées du click où souhaite aller le joueur (ligne du Board). 
     * @param {Object} weapon - Caractéristique de l'arme.
     */
    changeWeapon(board, x, y, weapon) {
        board[x][y] = this.weapon.id;
        this.weapon = weapon;
    }

    /**
     * Déplace le joueur aux coordonnées indiquées.
     * Si le joueur va sur une id d'une arme alors on appelle la méthode changeWeapon pour échanger l'arme.
     * @param {*} board 
     * @param {*} x 
     * @param {*} y 
     */
    moveTo(board, x, y) {
        this.x = x;
        this.y = y;

        switch (board[x][y]) {
            case 4:
                this.changeWeapon(board, x, y, stick);
                break;
            case 5:
                this.changeWeapon(board, x, y, dagger);
                break;
            case 6:
                this.changeWeapon(board, x, y, dualsword);
                break;
            case 7:
                this.changeWeapon(board, x, y, pugilat);
                break;
            case 8:
                this.changeWeapon(board, x, y, sword);
                break;
            default:
                break;

        }
    }

    /**
     * Attaque la cible, on retire le nombre de hp celon la force de l'arme.
     * Si la cible est en posture défensive alors les dégats sont divisé par 2.
     * @param {Object} target - Object du joueur qui est ciblé.
     */
    attack(target) {
        if (target.defend) {
            target.sante = target.sante - Math.round(this.weapon.force / 2);
        } else {
            target.sante = target.sante - this.weapon.force;
        }
    }
}

const player1 = new Player(1, stick)
const player2 = new Player(2, stick)