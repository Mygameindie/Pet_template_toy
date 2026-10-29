// ===========================================================
// 🎀 outfit_presets.js — Saved outfit "looks" (PER-GAME data only;
// the Outfits button UI lives in engine/outfit_presets_ui.js)
// ===========================================================
//
//  A PRESET is a named set of clothes (and optional colors) that you can
//  apply to the pet with a single tap. Think of it as a saved outfit.
//
//  HOW TO ADD / EDIT A PRESET (one place — the list below):
//    1. Add an object to window.OUTFIT_PRESETS.
//    2. `clothes` maps a category -> the item id from outfit_config.js.
//       Categories: topUnderwear, bottomUnderwear, onepieceUnderwear,
//                   top, bottom, dress, shoes, hat.
//       Any category you leave out is treated as "None" (taken off).
//    3. `colors` is OPTIONAL. Map a category -> a color name:
//       Original, Red, Orange, Yellow, Green, Cyan, Blue, Purple, Pink.
//    4. Refresh. A button for the preset appears in the 🎀 Outfits panel.
//
//  Example:
//    { name: "Cool", emoji: "😎",
//      clothes: { top: "top1", bottom: "pants1", shoes: "shoes1" },
//      colors:  { top: "Blue", bottom: "Green" } }
//
//  BOY / GIRL: the pet's gender is set in game_config.js. A preset can give the
//  boy his own version of the look with a `boy` block (and the girl a `girl`
//  block); the top-level clothes/colors are the default for whoever has no
//  block. This is how the same preset dresses the girl in a dress and the boy
//  in a top + pants:
//
//    { name: "Party", emoji: "🎀",
//      clothes: { dress: "dress1", shoes: "shoes1" },       // girl (default)
//      colors:  { dress: "Red" },
//      boy: {                                               // boy version
//        clothes: { top: "top1", bottom: "pants1", shoes: "shoes1" },
//        colors:  { top: "Red" },
//      } }
//
//  You can write ids either way ("top1" or "top1_2") — they are translated to
//  the id that exists for the gender being dressed, and anything that gender
//  doesn't have is simply skipped (taken off).
//
//  NOTE: presets only use item ids that exist in outfit_config.js. If you add
//  new clothes there, you can reference them here right away.
// ===========================================================

window.OUTFIT_PRESETS = [
  {
    name: "Casual",
    emoji: "👕",
    clothes: { hat: "hat1",
      bottomUnderwear: "bottomunderwear1",
      dress: "dress1"},
  },
  {
    name: "Skirt Day",
    emoji: "🌸",
    clothes: { top: "top1", bottom: "skirt1", shoes: "shoes1", hat: "hat1" },
    colors:  { top: "Pink", bottom: "Purple" },
    // Boy version: no skirt — same look with pants.
    boy: {
      clothes: { top: "top1", bottom: "pants1", shoes: "shoes1", hat: "hat1" },
      colors:  { top: "Pink", bottom: "Purple" },
    },
  },
  {
    name: "Party Dress",
    emoji: "🎀",
    clothes: { dress: "dress1", shoes: "shoes1", hat: "hat1" },
    colors:  { dress: "Red", hat: "Yellow" },
    // Boy version: no dress — a red top + pants instead.
    boy: {
      clothes: { top: "top1", bottom: "pants1", shoes: "shoes1", hat: "hat1" },
      colors:  { top: "Red", hat: "Yellow" },
    },
  },
  {
    name: "Comfy",
    emoji: "🩲",
    clothes: { topUnderwear: "topunderwear1", bottomUnderwear: "bottomunderwear1" },
    // Boy version: no top underwear — just boxers.
   
  },
  {
    name: "Swimsuit",
    emoji: "🩱",
    clothes: { topUnderwear: "topunderwear1", bottomUnderwear: "bottomunderwear1" },
    // Boy version: no one-piece — he swims in boxers.
    boy: {
      clothes: { bottomUnderwear: "boxers1" },
      colors:  { bottomUnderwear: "Cyan" },
    },
  },
  {
    name: "Birthday Suit",
    emoji: "🚫",
    clothes: {}, // take everything off
  },
];


// The engine reads a per-character look from a `pet1` block — for a boy pet,
// use each preset's `boy` block (no need to edit).
if (window.GAME_CONFIG && window.GAME_CONFIG.gender === "boy") {
  window.OUTFIT_PRESETS.forEach(p => { if (p.boy) p.pet1 = p.boy; });
} else {
  window.OUTFIT_PRESETS.forEach(p => { if (p.girl) p.pet1 = p.girl; });
}
