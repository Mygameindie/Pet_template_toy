// ===========================================================
// 🎛️ GAME CONFIG — this file is PER-GAME (safe to edit here).
// The engine/ folder is SHARED between games: never edit it in
// only one repo — edit it once, then run ./sync_engine.sh
//
// This game has ONE pet, and that pet is a GIRL or a BOY.
//
//  ── HOW TO SET THE GENDER ────────────────────────────────────
//  Change ONE word below:      gender: "girl"      or      gender: "boy"
//  Refresh. Done. Everything else follows automatically:
//    • the pet's body art   girl: base.png, head.png ...
//                           boy:  base_2.png, head_2.png ... ("_2" added)
//    • the clothes it wears (outfit_config.js: girl list / boy list)
//    • the outfit presets   (outfit_presets.js: `boy` blocks)
//  Missing boy art is safe: the engine falls back to the girl picture.
//
// pets: one entry per character (built from `gender` below).
//   artSuffix : filename suffix for this pet's art.
//   xFrac     : horizontal start position, 0..1 of screen width.
//   drawFilter: CSS filter used when this pet falls back to pet 1's
//               art ("none" for no tint).
//
// posesFromHeads: true = there are no whole-body pictures (base.png,
//   base_sick.png, base_happy.png ...). Every pose is the body built from
//   images/parts/ plus that pose's head (head_sick.png, head_happy.png ...).
//
// startInventory (optional): how many of each food are in the bag at the
//   start, e.g. { jelly: 2, fish: 3 }. Same keys as feed_items.json and
//   garden_items.json; a food with no entry starts at 0. Leave it out for
//   the default gummy-bear bag.
// ===========================================================
window.GAME_CONFIG = {
  // 👇 THE SETTING: "girl" or "boy"
  gender: "girl",

  saveKey: "purelilypet_save",
  posesFromHeads: false,
};

// The one pet, from the gender above (no need to edit).
window.GAME_CONFIG.pets = [
  { artSuffix: window.GAME_CONFIG.gender === "boy" ? "_2" : "", xFrac: 0.5, drawFilter: "none" },
];
