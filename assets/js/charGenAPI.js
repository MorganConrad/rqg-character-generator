
// const { CharacterGenerator }  = require("./CharacterGenerator");
import { CharacterGenerator } from "./CharacterGenerator.js";

function handler() {}

export function doGenerate(settings) {
  const cg = new CharacterGenerator();
  const archetypes = settings.archetypes || [];

  return cg.generate(settings, ...archetypes);
}


const TEST_SETTINGS = {
  comment: "Sam the weak genius light cavalry",
  stats: {
    str: 8,
    con: 15,
    int: 18,
    average: 13  // TODO - use this concept everywhere, like in weapons & armor
                     // rename to "level" or "inGeneral"???
  },
  cults: 'issaries',
  weaponsAverage: 50,
  skillAverage: 60,
  setWeaponsSkills: {Dagger: 77},
  setSkills: {Sing: 66, ride: 55},
  armor: "good",
  specialization: {missile: "Javelin"},
  archetypes: ["archer", "cavalry"]
}



// onsole.dir(doGenerate(TEST_SETTINGS));

