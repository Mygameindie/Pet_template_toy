// ===========================================================
// 🎀 outfit_presets.js — Save & apply whole outfit "looks"
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
//  NOTE: presets only use item ids that exist in outfit_config.js. If you add
//  new clothes there, you can reference them here right away.
// ===========================================================

window.OUTFIT_PRESETS = [
  {
    name: "Casual",
    emoji: "👕",
    clothes: { top: "top1", bottom: "pants1", shoes: "shoes1" },
    colors:  { bottom: "Blue" },
  },
  {
    name: "Skirt Day",
    emoji: "🌸",
    clothes: { top: "top1", bottom: "skirt1", shoes: "shoes1", hat: "hat1" },
    colors:  { top: "Pink", bottom: "Purple" },
  },
  {
    name: "Party Dress",
    emoji: "🎀",
    clothes: { dress: "dress1", shoes: "shoes1", hat: "hat1" },
    colors:  { dress: "Red", hat: "Yellow" },
  },
  {
    name: "Comfy",
    emoji: "🩲",
    clothes: { topUnderwear: "topunderwear1", bottomUnderwear: "bottomunderwear1" },
  },
  {
    name: "Swimsuit",
    emoji: "🩱",
    clothes: { onepieceUnderwear: "onepieceunderwear1" },
    colors:  { onepieceUnderwear: "Cyan" },
  },
  {
    name: "Birthday Suit",
    emoji: "🚫",
    clothes: {}, // take everything off
  },
];


// The apply logic + Outfits button UI live in the shared engine:
// engine/outfit_presets_ui.js (loaded by index.html after this file).
