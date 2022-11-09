/* Lots of Constants */

export { CharacterGenerator }


const STATS = ["str","con","siz","dex","int","pow","cha"];
const HIT_LOCATIONS = ["rleg", "lleg", "abd", "chest", "rarm", "larm", "head"];
// const LEVELS = ["none", "poor", "ok", "good", "great", "rune"];


const ARCHETYPE_SKILLS = {
  Archer : { minor: ["Spot", "Dodge"] },
  Melee:   { minor: ["Dodge"] },
  Cavalry: { minor: ["Lance"], major: ["Ride"]},
  Caster:  { minor: ["Sing", "Dodge"] },
  None:    { minor: ["Spirit Combat"] },
  Scholar: { minor: ["Read/Write A", "Read/Write B"] },
  Bandit:  { minor: ["Intimidate", "Track"],
             major: ["Hide", "Survival"] },
  Healer:  { minor: ["Treat Poison", "Orate", "Insight"],
             major: ["Treat Disease", "First Aid", "Plant Lore"]},
  Hunter:  { minor: ["Scan", "Hide", "Listen"],
             major: ["Animal Lore", "Track"]},
  Noble:   { minor: ["Ride", "Insight", "Intrigue"],
             major: ["Orate"]},
  Shaman:  { minor: ["Meditate", "Spirit Dance", "Sing"],
             major: ["Spirit Combat", "Spirit Travel"]},
  Entertainer: { minor: ["Charm"],
                 major: ["Dance", "Sing", "Play Instrument"]}
}


const CULT_INFO = {
  Ernalda: {
    runes: ['Earth', 'Fertility'],
    passions: [],
    meleeWeapons: ["Battle Axe"],
    cultSkills: ["Animal Lore", "Plant Lore"],
    runeSpells: ["Shield 1+", "Earth Shield (3)", "Heal Body (3)", "Summon Gnome (1-3)", "Inviolable (1)"]
  },
  Orlanth: {
    runes: ['Air', 'Movement'],
    passions: ['Honor'],
    // meleeWeapons: ["Broadsword"],
    cultSkills: ["Battle", "Orate", "Scan", "Sing"],
    runeSpells: ["Shield 1+", "Flight ~3", "Leap 1+", "Teleport 3+", "Summon Sylph (1-2)",
                 "Dark Walk (1)", "Earth Shield (3)", "Lightning 1+"]
  },
  Humakt: {
    runes: ['Death', 'Truth'],
    passions: ['Honor'],
    meleeWeapons: ["Broadsword","Greatsword"],
    cultSkills: ["Battle", "Scan", "Sense Assassin"],
    runeSpells: ["Shield 1+", "True Sword (1)", "Sword Trance (1)", "Oath 1+", "Morale (2)", "Sever Spirit (3)"]
  },
  Issaries: {
    runes: ['Movement', 'Harmony'],
    meleeWeapons: ["Broadsword", "Quarterstaff"],
    cultSkills: ["Bargain", "Evaluate", "Orate"],
    runeSpells: ["Path Watch (2)", "Spell Trading (2)", "Flight ~3", "Clever Tongue (1)", "Analyze Magic (1)"]
  },
  'Lhankor Mhy': {
    runes: ['Truth', 'stasis'],
    cultSkills: ["Evaluate", "Read/Write"],
    runeSpells: ["Analyze Magic (1)", "Clairvoyance (2)", "Find X (1)", "Clever Tongue (1)", "Wind Words (1)"]
  },
  'Storm Bull': {
    runes: ['Death', 'Movement', 'Beast'],
    passions: ['Hate Chaos'],
    cultSkills: ["Battle", "Ride", "Scan", "Sense Chaos"],
    runeSpells: ["Shield 1+", "Berserker (2)", "Impede Chaos 1+"]
  },
  "Seven Mothers": {
    runes: ['Death', 'Moon', 'Fertility'],
    meleeWeapons: ["Kopis"],
    cultSkills: ["Insight", "Listen", "Scan"],
    runeSpells: ["Madness (2)", "Mindblast (2)", "Reflection 1+", "Summon Lune (1-3)"]
  },
  Yelmalio: {
    runes: ['Fire', 'Truth'],
    passions: ['Honor'],
    meleeWeapons: ["Long Spear"],
    missileWeapon: "Composite Bow",
    cultSkills: ["Battle", "Listen", "Scan"],
    runeSpells: ["Catseye (1)", "Sunbright (2)", "Heal Body (3)"]
  },
  Aldrya: {
    runes: ['Plant', 'Fertility'],
    passions: ['Hate Trolls'],
    // meleeWeapons: ["Long Spear"],
    missileWeapon: "Elf Bow",
    cultSkills: ["Hide", "Move Silently", "Track", "Listen", "Scan", "Climb"],
    runeSpells: ["Shield 1+", "Arrow Trance (1)", "Catseye (1)", "Chameleon (2)", "Animate War Tree (1)", "Tanglethicket (1)", "Silence Sphere (1)", "Heal Body (3)"]
  },
  "Kygor Litor": {
    runes: ['Darkness', 'Man'],
    passions: ['Hate'],
    meleeWeapons: ["Heavy Mace"],
    missileWeapon: "Sling",
    cultSkills: ["Hide", "Move Silently", "Track", "Listen", "Scan", "Spirit Combat"],
    runeSpells: ["Absorbtion", "Attack Soul (1)", "Darksee (1)", "Blinding (1)", "Crush 1+", "Summon Shade (1-3)"]
  },
  "Zorak Zoran": {
    runes: ['Darkness', 'Death', 'Disorder'],
    passions: ['Hate'],
    meleeWeapons: ["Heavy Mace"],
    missileWeapon: "Sling",
    cultSkills: ["Orate", "Hide","Climb", "Jump", "Devise"],
    runeSpells: ["Darksee (1)", "Create Zombie (2)", "Crush 1+", "Summon Shade (1-3)", "Fear", "Seal Wound", "Berserker"]
  },
  Thed: {
    runes: ['Chaos', 'Spirit'],
    passions: ['Hate'],
    meleeWeapons: ["Heavy Mace"],
    missileWeapon: "Sling",
    cultSkills: ["Orate", "Hide","Climb", "Jump", "Devise"],
    runeSpells: ["Cause Disease 1+", "Chaos Feature (2)", "Chaos Spawn (3)", "Crack (2)", "Curse of Thed (2)", "Fumble (1)"],
  },
  None : {
    runes: [],
    passions: [],
    cultSkills: []
  }
};


// Racial Modifiers to Stats, always rounded down, relative to 3D6
// Changing from +D6 to +6 adds 2.5 on the average, rounded down here to 2
const RACIAL_MODIFIERS = {
  Human: { siz: +2, int: +2 },
  "Brown Elf":   { str: -1, siz: -2, int: +6, pow: +2, dex: +3 },
  Baboon: { str: +6, siz: -2, int: +2, pow: +2, dex: +6, skin: 1 },
  Duck: { str: -2, con: +2, int: +2, siz: -5, dex: +2 },
  Minotaur: { str: +12, con: +2, siz: +12, int: -3, cha: -3, skin: 3 },
  Agimori: { str: +6, con: +6, siz: +6, int: +2, skin: 2 },
  Morokanth: { str: +6, siz: +3, int: +2, skin: 4},
  Dwarf: { str: +3, con: +2, siz: -3, int: +2 },
  "Tusk Rider": { str: +2, con: +2, int: +2, cha: -6 },
  "Dark Troll": { str: +6, siz: +8, int: +2, skin: 1},
  "Great Troll": { str: +15, con: +6, siz: +15, int: -1, cha: -3, skin: 3},
  Trollkin: { siz: -3, pow: -3, dex: +3, cha: -3},
  Broo: { str: +2, con: +5, siz: +2, int: +2, cha: -3 },
  Ghoul: { str: +3, siz: +2 },
  Harpie: { siz: -3, dex: +3, cha: -7, skin: 1 },
  "Huan To": { str: +12, con: +6, siz: +12, int: +6, pow: +5, cha: -3, skin: 4},
  Ogre: { str: +8, con: +2, siz: +2, int: +2, pow: +2 },
  Zombie: { str: +5, con: +5, siz: +2, int: -5, dex: -3 }

};


const ARMOR = {
  none: [0,0,0,0,0,0,0],
  poor: [1,1,1,1,1,1,2],
  ok:   [3,3,3,3,3,3,3],
  good: [4,4,5,5,4,4,5],
  great: [6,6,5,5,6,6,5],
  rune: [9,9,8,8,9,9,8]
};

const DEX_SR_LUT = {
  0: 5,
  6: 4,
  9: 3,
  13: 2,
  16: 1,
  19: 0
}

const SIZ_SR_LUT = {
  0: 3,
  7: 2,
  15: 1,
  22: 0
}

const MELEE_DAMAGE_LUT = {
  0: "-1D4",
  13: "",
  25: "+1D4",
  33: "+1D6",
  41: "+2D6",
  57: "+3D6",
  73: "+4D6"
}

const SPIRIT_DAMAGE_LUT = {
  0: "1D3",
  13: "1D6",
  25: "1D6+1",
  33: "1D6+3",
  41: "2D6+3",
  57: "3D6+4"
}

const HP_POW_LUT = {
  0: -1,
  5: 0,
  17: (v) => steps4(v)-1
}


const DEFAULT_OPTIONS = {
  HIT_LOCATIONS,
  //LEVELS,
  //ROLL_FORMULAS,
  defaultSkillAverage: 50,
  defaultStatAverage: 12
}


/* class here */

class CharacterGenerator {

  constructor(options) {
    this.options = Object.assign({}, DEFAULT_OPTIONS, options);
  }


  generate(settings) {

    // tweak settings: note, if coming from a form the inputs may be strings, convert some here
    let fightingStyle = settings.fightingStyle || "";
    settings.archetypes.push(...fightingStyle.split('&'));
    settings.skillsAverage = Number(settings.skillsAverage || this.options.defaultSkillAverage);
    settings.weaponsAverage = Number(settings.weaponsAverage || this.options.defaultSkillAverage);
    settings.overallLevel = Math.round(0.5*(settings.skillsAverage + settings.weaponsAverage));

    this.settings = settings;
    this.archetypes = settings.archetypes
    let cults = makeArray(settings.cults);
    this.cultInfo = CULT_INFO[cults[0]] || {};
    let race = settings.race || 'Human';
    this.racialModifiers = RACIAL_MODIFIERS[race];

    let name = settings.name || "unnamed character";

    let stats = this.rollStats(settings.stats);
    let hitPoints = calcHitPoints(stats);
    let hitLocations = calcHitLocations(hitPoints);
    let damageBonus = calcDamageBonus(stats);
    let spiritDamage = calcSpiritDamage(stats);

    let skin = this.racialModifiers.skin || 0;
    let armor = armorLocations(settings.armor, skin);

    let w1 = this.setupWeaponAverages(settings.weaponsAverage);
    specializeSkills(w1, settings.specialization);
    let weaponSkills = this.rollSkills(w1);
    Object.assign(weaponSkills, settings.setWeaponsSkills);

    let s1 = this.setupSkillAverages(settings.skillsAverage);
    specializeSkills(s1, settings.specialization);
    let skills = this.rollSkills(s1);
    Object.assign(skills, settings.setSkills);

    let { runes, passions } = this.doRunesAndPassions(settings);

    // 60% ->3, 100% -> 7
    let runePoints = Math.round(this.settings.overallLevel/10)-3;
    let runeSpells = this.chooseRuneSpells(runePoints);

    let SR = calcSR(stats);
    let reputation = settings.overallLevel - 50 + D(20);
    let mp = (settings.overallLevel > 70) ? 10 : 0

// try to use a nice order.  TODO: this is a mess: organize?
    return {
      name,
      comment: settings.comment || (name + " has no comments"),
      stats,
      hitPoints, damageBonus, spiritDamage, SR, reputation, mp,
      armor,
      hitLocations,
      runes,
      cults,
      archetypes: this.archetypes,
      passions,
      skills,
      weaponSkills,
      runeSpells, runePoints,
      race
    }
  }

  doRunesAndPassions(settings) {

    let base = settings.overallLevel + 10;

    let runeList = settings.runes || [];
    runeList.push(...(this.cultInfo.runes || []));
    let runes = {}
    runeList.forEach(function(rune, idx) {
      let pct = base - idx * 4 + D(10);
      runes[rune] = Math.min(100, pct);
    })

    let passionList = settings.passions || ["Loyalty"];
    passionList.push(...(this.cultInfo.passions || []));
    let passions = {}
    passionList.forEach(function(p, idx) {
      let pct = base-10 -idx*4 + D(10);  // -10 so passions are lower than runes
      passions[p] = Math.min(100, pct);
    });

    return { runes, passions }
  }


  setupSkillAverages(majorAvg) {
    let minorAvg = majorAvg - 20;

    let cultSkillList = this.cultInfo.cultSkills || [];
    let cultSkills = {}
    for (let skill of cultSkillList)
      cultSkills[skill] = minorAvg;

    let typeSkills = { "Spirit Combat": minorAvg, };
    for (let type of this.archetypes)
      Object.assign(typeSkills, this.skillAveragesForType(type, majorAvg, minorAvg));

    return Object.assign(cultSkills, typeSkills);
  }


  setupWeaponAverages(majorAvg) {
    let minorAvg = majorAvg - 20;

    let { goodArcher, goodMelee } = this.archerOrMelee();

    let archeryLevel = goodArcher ? majorAvg : minorAvg;
    let meleeLevel = goodMelee ? majorAvg : minorAvg;
    let missileWeapon = this.cultInfo.missileWeapon ||
      (goodArcher ? "Composite Bow" : "Missile");
    let meleeWeapons = this.cultInfo.meleeWeapons || ["Broadsword"];
    let weapons = { "Shield": meleeLevel }; // always get a shield
    meleeWeapons.forEach(function(weapon, idx) {
      weapons[weapon] = meleeLevel - idx*4;
    })
    weapons[missileWeapon] = archeryLevel;

    return weapons;
  }


  archerOrMelee() {
    let fightingStyle = this.settings.fightingStyle || "Archer&Melee";
    let goodArcher =
      this.hasArchetype("Archer", "Hunter") ||
      ["Archer", "Archer&Melee"].includes(fightingStyle);
    let goodMelee = ["Melee", "Archer&Melee"].includes(fightingStyle);

    return { goodArcher, goodMelee };
  }


  hasArchetype(...types) {
    return types.some((t) => this.archetypes.includes(t));
  }


  rollSkills(skillSettings) {
    let skills = {}
    for (let [skill, avg] of Object.entries(skillSettings)) {
      let roll = avg - 10 + D(21);
      if (this.settings.round5)
        roll = Math.round(0.2 * roll)*5;
      skills[skill] = roll;
    }

    return skills;
  }


  rollStats(statsSettings) {
    let defaultAverage = Number(statsSettings.average || this.options.defaultStatAverage);
    let stats = {};
    STATS.forEach((s) => {
      let roll = +statsSettings[s] || (defaultAverage - 2 + D(5));
      let modifier = this.racialModifiers[s] || 0;
      stats[s] = roll + modifier;
    })

    return stats;
  };


  skillAveragesForType(archetype, majorAvg, minorAvg = majorAvg-20) {

    // everybody has some Spirit Combat
    let averagesForType = {};

    let skills = ARCHETYPE_SKILLS[archetype] || {};
    let minors = skills.minor || [];
    for (let s of minors)
      averagesForType[s] = minorAvg;
    let majors = skills.major || [];
    for (let s of majors)
      averagesForType[s] = majorAvg;

    return averagesForType
  }


  chooseRuneSpells(count) {
    let availableSpells = this.cultInfo.runeSpells || [];
    let randomized = shuffled(availableSpells);
    count = Math.min(count, randomized.length);
    return randomized.slice(0, count);
  }
}

/* -- end of class, utilities follow -- */

function steps4(stat, offset=9) {
  return Math.floor((stat - offset) *0.25);
}


function lookup(stat, lut) {
  let steps = Object.keys(lut);
  let values = Object.values(lut);
  steps.push(999); // so we will stop!
  let idx = 0;
  while (stat >= steps[idx])
    idx++;

  let nOrFn = values[idx-1];
  return (nOrFn instanceof Function) ? nOrFn(stat) : nOrFn;
}


function D(max = 100) {
  return Math.floor(Math.random() * max) + 1;
}


function armorLocations(level, skin) {
  let locations = {};
  let armor = ARMOR[level || "ok"];
  armor.forEach(function(ap, idx) {
    locations[HIT_LOCATIONS[idx]] = ap + skin;
  });

  return locations;
}


function calcHitLocations(hitPoints) {
  let div3 = Math.ceil(hitPoints/3.0);
  let leg = div3 < 2 ? 2 : div3;
  return {
    head: leg,
    larm: leg-1, rarm: leg-1,
    chest: leg+1,
    abd: leg,
    lleg: leg,   rleg: leg
  };
}


function calcHitPoints(stats) {
  return stats.con + steps4(stats.siz) + lookup(stats.pow, HP_POW_LUT);
}


function specializeSkills(original, mods = {}) {
  for (let [ k, v ] of Object.entries(mods)) {
    let value = original[k];
    if (value) {
      original[v] = value;
      delete original[k];
    }
  }

  return original;
}

function calcDamageBonus(stats) {
  return lookup(stats.siz + stats.str, MELEE_DAMAGE_LUT)
}

function calcSpiritDamage(stats) {
  return lookup(stats.pow + stats.cha, SPIRIT_DAMAGE_LUT);
}


function calcSR(stats) {
  return {
    dex: lookup(stats.dex, DEX_SR_LUT),
    siz: lookup(stats.siz, SIZ_SR_LUT)
  }
}


function makeArray(arg) {
  if (!arg)
    return [];
  if (Array.isArray(arg))
    return arg;
  return [ arg ];
}


function shuffled(arr) {
  return arr.map(function(v){ return [Math.random(), v] })
   .sort(([r1,v1], [r2, v2]) => r1-r2)
   .map(([r, v]) => v );
}


// module.exports = { CharacterGenerator };
