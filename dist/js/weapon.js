class Weapon{
    /**
     * Caractéristiques de l'arme.
     * @param {Number} id - id de l'arme 
     * @param {string} name - nom de l'arme
     * @param {Number} force - Puissance de l'arme
     */
    constructor(id, name, force){
        this.id = id;
        this.position = false;
        this.x = Number;
        this.y = Number;
        this.name = name;
        this.force = force;
    }

    /**
     * Initialise le placement aléatoire de l'arme sur la board en vérifiant que la place est disponible.
     * @param {Array} board - Tableau du board
     */
    init(board) {
        do {
            this.x = getRandomInt(0,9);
            this.y = getRandomInt(0,9);
            if(board[this.x][this.y] === 0){
                board[this.x][this.y] = this.id;
                this.position = true;
            }
        } while (this.position === false);
    }
}

/**
 * Création des armes.
 */
const stick = new Weapon(4, 'Bâton', 3);
const dagger = new Weapon(5, 'Dague', 5);
const dualsword = new Weapon(6, 'Double épée', 7);
const pugilat = new Weapon(7, 'Pugilat', 5);
const sword = new Weapon(8, 'Epée', 6);