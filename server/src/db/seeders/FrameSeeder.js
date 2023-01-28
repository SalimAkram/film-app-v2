import { Frame } from "../../models/index.js";

class FrameSeeder {
  static async seed() {
    const framesData = [
      {
        aperature: 2,
        shutterSpeed: "250",
        frameNumber: 1,
        notes: "it was a sunny day, but I think this frame maybe bad",
        location: {
          id: 1,
          longitude: "-71.107209",
          latitude: "42.349847",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        rollId: 1,
      },
      {
        aperature: 6,
        shutterSpeed: "250",
        frameNumber: 2,
        notes: "I think this shoot was great.  On the building steps",
        location: {
          id: 2,
          longitude: "-71.107209",
          latitude: "42.349847",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        rollId: 1,
      },
      {
        aperature: 22,
        shutterSpeed: "250",
        frameNumber: 3,
        notes: "I think this shot was bad?",
        location: {
          id: 3,
          longitude: "-71.107209",
          latitude: "42.349847",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        rollId: 1,
      },
      {
        aperature: 2,
        shutterSpeed: "250",
        frameNumber: 4,
        notes: "too much light!",
        location: {
          id: 4,
          latitude: "42.364692",
          longitude: "-71.157094",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        rollId: 1,
      },
      {
        aperature: 2,
        shutterSpeed: "250",
        frameNumber: 1,
        notes: "overcast I think I should have used different film",
        location: {
          id: 1,
          latitude: "42.357226",
          longitude: "-71.073699",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        rollId: 2,
      },
      {
        aperature: 6,
        shutterSpeed: "250",
        frameNumber: 2,
        notes: "use flash next time indoors",
        location: {
          id: 2,
          latitude: "42.357226",
          longitude: "-71.073699",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        rollId: 2,
      },
      {
        aperature: 22,
        shutterSpeed: "250",
        frameNumber: 3,
        notes: "I think this shot was great?",
        location: {
          id: 3,
          latitude: "42.357226",
          longitude: "-71.073699",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        rollId: 2,
      },
      {
        aperature: 2,
        shutterSpeed: "250",
        frameNumber: 4,
        notes: "I think this shot was really bad?",
        location: {
          id: 4,
          latitude: "42.359541",
          longitude: "-71.092695",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        rollId: 2,
      },
    ];

    for (const singleFrameData of framesData) {
      await Frame.query().insert(singleFrameData);
    }
  }
}

export { FrameSeeder };
