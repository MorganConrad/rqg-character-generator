// import { marked } from "./marked_min.esm.js";

const HL = {
  rleg: {id: "Right Leg", d20: "01-04"},
  lleg: {id: "Left Leg", d20: "05-08"},
  abd: {id: "Abdomen", d20: "09-11"},
  chest: {id: "Chest", d20: "12"},
  rarm: {id: "Right Arm", d20: "13-15"},
  larm: {id: "Left Arm", d20: "16-18"},
  head: {id: "Head", d20: "19-20"}
};


const WEAPONS_STATS = {  // damage, SR, HP
  Broadsword : ["1D8+1", 2, 12],
  Kopis : ["1D8+1", 2, 12],
  "Battle Axe": ["1D8+2", 3, 8],
  Shield: ["1D4", 3, 12],    // assume Medium
  Missile : ["~1D8", -2, 7],
  "Composite Bow" : ["1D8+1", -2, 7],
  "Elf Bow" : ["1D8+1", -2, 6],
  Sling: ["1D8", -2, 1],
  "Long Spear": ["1D10+1", 0, 10],
  "Heavy Mace": ["1D8+2", 3, 10],
  Unknown: ["1D8", 2, 10]
};


/**
 *
 * @param char  {}  The character
 * @param h         Initial header level, default = 2
 * @returns {string}
 */
export function importCharacter(char, h=2) {
  let hh = "#####".substr(0, h);

  return character_start(char, hh) +
  `<h${h+1} id="stats-${char.name}">Stats</h${h+1}>
  <div class="row">
    <div class="col-7">` +
  statsBlock(char, hh) +
  weaponsBlock(char, hh) +
    `</div>
    <div class="col-1"></div>
    <div class="col-4">` +
  hitLocationsBlock(char, hh) +
  `  </div>
   </div>` +
  otherBlock(char, hh);
}

function character_start(char, hh) {
  return `
<article class="character">

 ${hh} ${char.name}

<section class="character-desc">

 ${hh}# Description
 ${char.comment}

  </section>`;
}


function statsBlock(char, hh) {
  let statsLine = Object.values(char.stats).join(' | ');

  return `
<section class="character-stats">

  | STR | CON | SIZ | DEX | INT | POW | CHA |
  |:---:|:---:|:---:|:---:|:---:|:---:|:---:|
  | ${statsLine} |

</section>
 `
}


function weaponsBlock(char, hh) {
  let db = char.damageBonus;
  let meleeSR = +char.SR.dex + char.SR.siz;
  let dexSR = +char.SR.dex;
  let sc = char.skills['Spirit Combat'] || '??';  // FIXME
  let lines = Object.entries(char.weaponSkills)
    .map(function([weapon, skill]) {
      let ws = WEAPONS_STATS[weapon] || WEAPONS_STATS.Unknown;

      let sr = meleeSR + ws[1];  // assume melee
      let damage = `${ws[0]}${db}`;
      if (ws[1] <  0) { // code for missile weapon
        sr = `${dexSR},${dexSR * 2 + 5}`;
        damage = ws[0];
      }
      return `| ${weapon} | ${skill} | ${damage} | ${sr} | ${ws[2]} |`
    });

  lines.push(`| _Spirit Combat_ | _${sc}_ | _${char.spiritDamage}_ | _12_ |   |`);

  return `

${hh}# Weapons

<section class="weapons table0">

  | Weapon  | %  | Damage  | SR  | Pts |
  |:---|:---:|:---:|:---:|:---:|
  ${lines.join('\n  ')}

</section>

`
}


function hitLocationsBlock(char, hh) {
  let lines = Object.entries(HL)
    .map(function([o, {id, d20}]) {
      let ap = char.armor[o] || 0;
      let hp = char.hitLocations[o];
      return `| ${id} | ${d20} | ${ap}/${hp} |`
    })
    .join('\n  ');


  return `
 
 ${hh}# Hit Locations

<section class="hitlocations table0">

  | Location  | D20  | AP/HP |
  |:---|:---:|:---:|
  ${lines}

</section>
`
}

function otherBlock(char, hh) {
  let lines = Object.entries(char.skills)
    .map(function([skill, pct]) {
      let skillUC = skill[0].toUpperCase() + skill.slice(1);
      return `${skillUC} ${pct}%`
    })
    .join(', ');

  let runeSpells = char.runeSpells || [];
  let mp = char.stats.pow + (char.storedMP || 0);

  return `
  
  ${hh}# Other

<section class="character-other">

  **Race:** ${char.race} &nbsp;&nbsp;&nbsp; **Move:** 8 &nbsp;&nbsp;&nbsp; **Damage Bonus:** ${char.damageBonus} &nbsp;&nbsp;&nbsp; **HitPoints:** ${char.hitPoints}
<br>**Runes:** ${doJoinHash(char.runes, '%, ')}%.
<br>**Cults:** ${doJoin(char.cults)}&nbsp;&nbsp;**Archetypes:** ${doJoin(char.archetypes)}.
<br>**Passions:** ${doJoinHash(char.passions, '%, ')}%.
<br>**Reputation:** ${char.reputation || 'TBD'}&nbsp;&nbsp; **Ransom:** TBD L.

<section class="spirits">

**Allied and Bound Spirits:**  TBD

</section>

<div class="row">

  <div class="col-6 rune-magic">

  <br>**Rune Spells:** (${char.runePoints || 3} Rune Points)
${joinLI(runeSpells)}

  </div>
  <div class="col-1"></div>
  <div class="col-5 spirit-magic">

  **Spirit Magic:** (${mp} Magic Points)
${joinLI(char.spiritMagic)}

  </div>
</div>

<div class="skills">

  **Skills:** ${lines}.

</div>

</section>

</article>
`
}


function doJoin(arr, delim = ", ") {
  return (Array.isArray(arr)) ? arr.join(delim) : (arr || "");
}

function doJoinHash(hash = {}, delim = ", ") {
  let asArray = Object.entries(hash).map(([k,v]) => k + " " +v);
  return doJoin(asArray, delim);
}

function joinLI(arr) {
  if (!arr || !arr.length)
    return ""
  return ' - ' + arr.join("\n - ");
}
