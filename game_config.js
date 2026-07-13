// ===========================================================
// 🎛️ GAME CONFIG — this file is PER-GAME (safe to edit here).
// The engine/ folder is SHARED between games: never edit it in
// only one repo — edit it once, then run ./sync_engine.sh
//
// pets: one entry per character.
//   artSuffix : filename suffix for this pet's art.
//               "" -> base.png, "_2" -> base_2.png, etc.
//               If a pet's art is missing, the engine falls back
//               to pet 1's art and applies drawFilter (a CSS
//               filter tint) so the pet still looks different.
//   xFrac     : horizontal start position, 0..1 of screen width.
//   drawFilter: CSS filter used when this pet falls back to
//               pet 1's art ("none" for no tint).
// ===========================================================
window.GAME_CONFIG = {
  saveKey: "purelilypet_save",
  pets: [
    { artSuffix: "", xFrac: 0.5, drawFilter: "none" },
  ],
};
