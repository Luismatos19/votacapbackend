"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class OptionsSchema extends Schema {
  up() {
    this.create("options", (table) => {
      table.increments(),
        table
          .integer("question_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("questions")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
      table.integer("vote").notNullable();
      table.varchar("name", 300).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("options");
  }
}

module.exports = OptionsSchema;
