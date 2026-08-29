// ===========================================================
// 👗 outfit_config.js — THE one place to add / edit clothes
// ===========================================================
//
//  This template has ONE pet, and that pet can be a GIRL or a BOY.
//  The gender is set in pet_gender.js ( gender: "girl" / "boy" ), and the
//  pet only ever wears the wardrobe of the gender it currently is:
//
//      girl: { ... }   <- what she can wear
//      boy:  { ... }   <- what he can wear
//
//  HOW TO ADD A NEW CLOTHING ITEM (3 steps):
//    1. Save the artwork as   images/<name>.png   (transparent PNG, same
//       canvas size as the pet base so it lines up).
//    2. Add "<name>" to the matching list below — under girl and/or boy.
//       Example: add a 2nd top for the girl -> "top2".
//    3. Refresh. Done. It shows up in the Dress Up panel automatically.
//
//  LABELS are made automatically from the name:  "top2" -> "Top 2".
//    Want a custom name? Use an object instead of a string:
//        { id: "top2", label: "Cool Hoodie" }
//
//  BOY ART uses the same name with "_2" added:  top1 -> top1_2. That is the
//  same suffix pet_gender.js uses for his body art (base.png -> base_2.png),
//  so a whole boy character is just "the _2 pictures".
//
//  BOY CLOTHING RULES come from this file: he simply has no dress, skirt,
//  top-underwear or one-piece list, so those tabs never appear for him.
//  A category left out of a gender's list is hidden from that gender's
//  Dress Up panel — that is all it takes to change what he can wear.
//
//  UNDERWEAR: a one-piece is a complete set and replaces the separate top +
//  bottom. Switching OFF a one-piece to a separate piece completes the set
//  (top1 -> also bottom1). Once you're already in separates you can mix any
//  top with any bottom (top1 + bottom2) — they are not re-paired.
//
//  WIND (troll blower): skirt-like clothes (dresses + anything with "skirt"
//  in its name) can have a blown-up variant:  images/<name>_w.png
//  (e.g. skirt1.png -> skirt1_w.png, dress1.png -> dress1_w.png). While the
//  troll-mode blower is held under the garment it swaps to the _w art; if the
//  _w image doesn't exist the garment just stays on its normal art.
//
//  This is a plain JS file (no network/JSON loading) so it can't glitch or
//  fail to load mid-game — it's the smoothest, simplest setup.
// ===========================================================

window.OUTFIT_CONFIG = {

  // -------------------------------------------------------------------------
  // CATEGORIES — order, display name, and draw layer (z). Higher z = on top.
  // Add a line here to create a brand-new clothing category, then add a
  // matching list under girl and/or boy below.
  // -------------------------------------------------------------------------

  categories: [
    { key: "topUnderwear",      label: "Top Underwear",             z: 60  },
    { key: "bottomUnderwear",   label: "Bottom Underwear / Boxers", z: 50  },
    { key: "onepieceUnderwear", label: "One-Piece Underwear",       z: 65  },
    { key: "top",               label: "Top",                       z: 120 },
    { key: "bottom",            label: "Pants / Skirt",             z: 110 },
    { key: "dress",             label: "Dress",                     z: 130 },
    { key: "bodysuit",          label: "Bodysuit",                  z: 128 },
    { key: "shoes",             label: "Shoes",                     z: 90  },
    { key: "glove",             label: "Glove",                     z: 140 },
    { key: "bunnysuitbow",      label: "Bunnysuit Bow",             z: 150 },
    { key: "glasses",           label: "Glasses",                   z: 160 },
    { key: "ears",              label: "Ears",                      z: 170 },
    { key: "hat",               label: "Hat",                       z: 180 },
  ],

  // -------------------------------------------------------------------------
  // GIRL — worn when pet_gender.js says gender: "girl". Plain art names
  // (top1.png, dress1.png ...), same as before.
  // -------------------------------------------------------------------------
  girl: {
    topUnderwear:      ["topunderwear1", "topunderwear2", "topunderwear3", "topunderwear4"],
    bottomUnderwear:   ["bottomunderwear1", "bottomunderwear2", "bottomunderwear3", "bottomunderwear4"],
    onepieceUnderwear: ["onepieceunderwear1"],
    top:               ["top1"],
    bottom:            ["pants1", "skirt1"],
    dress:             ["dress1"],
    bodysuit:          ["bodysuit1"],
    shoes:             ["shoes1"],
    glove:             ["glove1"],
    bunnysuitbow:      ["bunnysuitbow1"],
    glasses:           ["glasses1"],
    ears:              ["ears1"],
    hat:               ["hat1"],
  },

  // -------------------------------------------------------------------------
  // BOY — worn when pet_gender.js says gender: "boy". Boy clothing rules:
  // no top underwear, no one-piece underwear, no dress, no skirt. He wears
  // boxers and pants instead, but CAN wear a bunnysuit bow and a bodysuit.
  // Art uses the "_2" suffix (e.g. "top1_2"); drop the matching PNGs in
  // images/. Any category left out here is hidden from his Dress Up panel.
  // -------------------------------------------------------------------------
  boy: {
    bottomUnderwear:   ["bottomunderwear1_2", "boxers1_2"],
    top:               ["top1_2"],
    bottom:            ["pants1_2"],
    bodysuit:          ["bodysuit1_2"],
    shoes:             ["shoes1_2"],
    glove:             ["glove1_2"],
    bunnysuitbow:      ["bunnysuitbow1_2"],
    glasses:           ["glasses1_2"],
    ears:              ["ears1_2"],
    hat:               ["hat1_2"],
  },

  // What the pet is already wearing when the game starts, per gender.
  defaults: {
    girl: {
      onepieceUnderwear: "onepieceunderwear1",
      glove: "glove1",
      shoes: "shoes1",
      ears: "ears1",
      bunnysuitbow: "bunnysuitbow1",
    },
    boy: {
      bottomUnderwear: "boxers1_2",
      glove: "glove1_2",
      shoes: "shoes1_2",
      hat: "hat1_2",
    },
  },
};
