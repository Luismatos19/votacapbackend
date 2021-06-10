"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Question extends Model {
  option() {
    return this.hasMany("App/Models/Option");
  }
}

module.exports = Question;
