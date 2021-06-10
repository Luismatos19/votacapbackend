"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class QuestionSchema extends Schema {
  up() {
    this.create("questions", (table) => {
      table.increments();
      table.varchar("title", 50).notNullable();
      table.varchar("description", 300).notNullable();
      table.date("initial_date").notNullable();
      table.date("created_in");
      table.date("final_date").notNullable();
      table.boolean("checked").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("questions");
  }
}

module.exports = QuestionSchema;
