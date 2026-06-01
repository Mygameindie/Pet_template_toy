// ===========================================================
// 👗 outfit_config.js — THE one place to add / edit clothes
// ===========================================================
//
//  HOW TO ADD A NEW CLOTHING ITEM (3 steps):
//    1. Save the artwork as   images/<name>.png   (transparent PNG, same
//       canvas size as the pet base so it lines up).
//    2. Add "<name>" to the matching list below — under pet1.
//       Example: add a 2nd top -> "top2".
//    3. Refresh. Done. It shows up in the Dress Up panel automatically.
//
//  LABELS are made automatically from the name:  "top2" -> "Top 2".
//    Want a custom name? Use an object instead of a string:
//        { id: "top2", label: "Cool Hoodie" }
//
//  Matching set numbers auto-pair the top & bottom underwear
//  (e.g. "topunderwear3" + "bottomunderwear3" are treated as set 3).
//
//  This is a plain JS file (no network/JSON loading) so it can't glitch or
//  fail to load mid-game — it's the smoothest, simplest setup.
// ===========================================================

window.OUTFIT_CONFIG = {

  // -------------------------------------------------------------------------
  // CATEGORIES — order, display name, and draw layer (z). Higher z = on top.
  // Add a line here to create a brand-new clothing category, then add a
  // matching list under pet1 below.
  // -------------------------------------------------------------------------
  categories: [
    { key: "topUnderwear",      label: "Top Underwear",             z: 60  },
    { key: "bottomUnderwear",   label: "Bottom Underwear / Boxers", z: 50  },
    { key: "onepieceUnderwear", label: "One-Piece Underwear",       z: 65  },
    { key: "top",               label: "Top",                       z: 120 },
    { key: "bottom",            label: "Pants / Skirt",             z: 110 },
    { key: "dress",             label: "Dress",                     z: 130 },
    { key: "shoes",             label: "Shoes",                     z: 90  },
    { key: "hat",               label: "Hat",                       z: 180 },
  ],

  // -------------------------------------------------------------------------
  // PET 1 — the wardrobe. Add image base-names to each list.
  // -------------------------------------------------------------------------
  pet1: {
    topUnderwear:      ["topunderwear1"],
    bottomUnderwear:   ["bottomunderwear1"],
    onepieceUnderwear: ["onepieceunderwear1"],
    top:               ["top1"],
    bottom:            ["pants1", "skirt1"],
    dress:             ["dress1"],
    shoes:             ["shoes1"],
    hat:               ["hat1"],
  },

  // -------------------------------------------------------------------------
  // DEFAULTS — what the pet is wearing when the game starts.
  // Use an item id from the lists above, or 0 for "nothing".
  // -------------------------------------------------------------------------
  defaults: {
    pet1: { topUnderwear: "topunderwear1", bottomUnderwear: "bottomunderwear1" },
  },
};
