import { Location } from "../../models/index.js";

class LocationSeeder {
  static async seed() {
    const locationData = [
      {
        id: 1,
        longitude: "-71.107209",
        latitude: "42.349847",
        rollId: 1,
      },
      {
        id: 2,
        latitude: "42.364692",
        longitude: "-71.157094",
        rollId: 1,
      },
      {
        id: 3,
        latitude: "42.357226",
        longitude: "-71.073699",
        rollId: 2,
      },
      {
        id: 4,
        latitude: "42.359541",
        longitude: "-71.092695",
        rollId: 2,
      },
    ];

    for (const singleLocationData of locationData) {
      await Location.query().insert(singleLocationData);
    }
  }
}

export { LocationSeeder };
