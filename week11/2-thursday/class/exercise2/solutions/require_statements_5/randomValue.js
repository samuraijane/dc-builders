module.exports = function(val1, val2) {
    var items = [val1, val2];
    var randomIndex = Math.floor(Math.random()*2);
    return items[randomIndex];
}