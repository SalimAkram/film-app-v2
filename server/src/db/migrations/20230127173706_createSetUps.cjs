const tableName = "setups";

/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  const tableExists = await knex.schema.hasTable(tableName);

  if (!tableExists) {
    console.log(`Creating ${tableName}`);
    return knex.schema.createTable("setups", (table) => {
      table.bigIncrements("id");
      table.string("cameraBrand").notNullable();
      table.string("cameraModel").notNullable();
      table.string("lenseType");
      table.string("lenseBrand");
      table.string("lenseModel");
      table.string("focalLength");
      table.string("lenseAperature");
      table.string("notes")
      table.string("focusType")
      table
        .bigInteger("userId")
        .unsigned()
        .notNullable()
        .index()
        .references("users.id")
      table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now());
      table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now());
    });
  }
};

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  console.log(`Rolling back ${tableName}`);
  return knex.schema.dropTableIfExists(tableName);
};
