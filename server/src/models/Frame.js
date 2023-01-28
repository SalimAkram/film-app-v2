const Model = require("./Model");

class Frame extends Model {
  static get tableName() {
    return "frames";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["aperature", "shutterSpeed"],
      properties: {
        aperature: { type: "integer" },
        shutterSpeed: { type: "string" },
        frameNumber: { type: "integer" },
        location: { type: "json" },
        notes: { type: "string" },
      },
    };
  }

  static get relationMappings() {
    const Roll = require("./Roll")

    return {
      roll: {
        relation: Model.BelongsToOneRelation,
        ModelClass: Roll,
        join: {
          from: "frames.rollId",
          to: "rolls.id"
        }
      }
    }
  }
}

module.exports = Frame