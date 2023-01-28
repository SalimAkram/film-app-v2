// /* eslint-disable no-console */
import { connection } from "../boot.js";
import "../../test/factories/factories.js";

import { FilmSeeder } from "./seeders/FilmSeeder.js";
import { FrameSeeder } from "./seeders/FrameSeeder.js";
import { LocationSeeder } from "./seeders/LocationSeeder.js";
import { RollSeeder } from "./seeders/RollSeeder.js";
import { SetUpSeeder } from "./seeders/SetUpSeeder.js";
import { UserSeeder } from "./seeders/UserSeeder.js";
class Seeder {
  static async seed() {
    await UserSeeder.seed();
    await FilmSeeder.seed();
    await RollSeeder.seed();
    await SetUpSeeder.seed();
    await FrameSeeder.seed();
    await LocationSeeder.seed();

    if (connection) {
      console.log("Done!");
      await connection.destroy();
    }
  }
}

export default Seeder;
