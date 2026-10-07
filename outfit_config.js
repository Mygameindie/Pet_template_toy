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
//  in its name) blow in the wind automatically. Only the skirt part moves
//  (never sleeves/arms). The normal skirt image is bent in code (flared,
//  lifted, hem fluttering, folds shaded), so no extra "blown" art is
//  needed. Two styles: "flow" (soft billow, the default) and "lift" (the hem
//  is thrown up and flared wide like an umbrella). Pick per item with
//  windStyle below. The skirt is a small cloth simulation: it lags,
//  overshoots and settles, reacts to gusts and to the pet moving, and reads
//  its own shape from the picture (a longer skirt swings slower). Tune it with
//  WIND_PRESETS / WIND_PHYS in outfit_system_single_sprite.js.
//
//  This is a plain JS file (no network/JSON loading) so it can't glitch or
//  fail to load mid-game — it's the smoothest, simplest setup.
// ===========================================================

// The moving skirt piece of dress1, as fractions (0..1) of the picture.
const DRESS1_SKIRT = {
  left: 0.41, right: 0.59, top: 0.605, bottom: 0.80,
  // the lower underskirt outline: it fades away while the skirt is blown up
  hide: { left: 0.37, right: 0.63, top: 0.83, bottom: 0.91 },
};

window.OUTFIT_CONFIG = {

  // -------------------------------------------------------------------------
  // BACK PIECES (drawn BEHIND the body)
  // A clothing item can have a second picture that sits behind the pet, so a
  // skirt/dress can have a back part (seen between and behind the legs) and a
  // front part. Draw both on the same canvas size, then in the wardrobe list:
  //     dress: [ "dress1", { id: "dress2", back: true } ]
  //   -> dress2.png       = front piece (on top of the body, as usual)
  //   -> dress2_back.png  = back piece  (behind the body)
  // (use back: "myname" to pick a different file name). The back piece gets the
  // same colour. For skirts/dresses it BLOWS IN THE WIND TOGETHER WITH THE
  // FRONT (only its skirt part, hanging from the same waist as the front). To
  // give it its own skirt box add backRegion in windStyle; to keep it still
  // add backWind: false.
  //
  // A whole category can also sit behind the body: add behind: true to its line
  // in categories below (e.g. a cape or back hair).
  // -------------------------------------------------------------------------

  // Wind style per skirt/dress id: "flow" or "lift". Anything not listed uses
  // "default". Add a line here for each skirt that should blow up high.
  //
  // For a dress that also has a veil, sleeves, crown... use { style, region }
  // so ONLY the skirt piece moves. region is the skirt's box as fractions
  // (0..1) of the image: left/right edges, top = waist, bottom = hem.
  // If the hem gets cut off, raise bottom; if veil bits get dragged along,
  // narrow left/right. Optional tune: { flare, lift, speed } changes the blown-up
  // pose of one item (flare = hem widening, lift = how high the hem rises,
  // speed = swing speed, wave = hem flutter). Optional hide = a box (same
  // fractions) that fades away while blowing, for parts of the dress that
  // shouldn't stay under a lifted skirt.
  //
  // ONLY THE SKIRT MOVES: the engine finds the skirt in the picture by itself
  // (the cloth hanging from the waist to the hem) and leaves sleeves, arms,
  // hands, veils and bows exactly as drawn. If a sleeve or hand is drawn
  // pressed flat against the skirt and still gets pulled along, add
  // keep: [ { left, right, top, bottom } ] (same fractions) around it - keep
  // boxes never move (backKeep does the same for the back piece).
  windStyle: {
    default: "flow",
    skirt1: "lift",
    // The gold skirt of dress1. Its back picture has the same skirt in the same
    // place, so the back piece uses the same box and lifts together with it.
    dress1: { style: "lift", region: DRESS1_SKIRT, backRegion: DRESS1_SKIRT },
  },

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
    dress:             [{ id: "dress1", back: true }],
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
