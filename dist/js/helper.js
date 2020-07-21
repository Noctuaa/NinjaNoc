/**
 * Return un nombre aléatoire entre un min et un maxi.
 * @param {number} min - Minimum.
 * @param {number} max - Maximum.
 */
function getRandomInt(min, max){
   return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Affiche l'image sur le canvas.
 * @param {Object} context 
 * @param {string} id - Récupére l'id de l'image.
 * @param {number} x - Coordonnées de la colonne ou l'image doit être affiché.
 * @param {number} y - Coordonnées de la ligne ou l'image doit être affiché.
 */
function draw(context,id, x, y){
    const image = document.getElementById(id);
    context.drawImage(image, x, y, 45, 50)
}