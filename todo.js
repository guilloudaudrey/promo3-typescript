"use strict";
exports.__esModule = true;
var Todo = /** @class */ (function () {
    function Todo() {
        this.liste = [];
    }
    Todo.prototype.ajouter = function (item) {
        this.liste.push(item);
    };
    Todo.prototype.supprimer = function (item) {
        this.liste = this.liste.filter(function (valeur) { return valeur !== item; });
    };
    Todo.prototype.lister = function () {
        return this.liste;
    };
    return Todo;
}());
exports.Todo = Todo;
