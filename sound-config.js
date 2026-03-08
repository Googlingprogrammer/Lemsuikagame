// ============================================================================
// SOUND CONFIGURATION FILE
// ============================================================================
// Edit this file to customize game sounds!
// Place your sound files in the 'sounds' folder.
// Changes take effect on page refresh.
// ============================================================================

const SOUND_CONFIG = {
  // -------------------------------------------------------------------------
  // SOUND SETTINGS
  // -------------------------------------------------------------------------
  // enabled: Master switch to enable/disable all sounds
  // volume: Global volume multiplier (0.0 to 1.0)
  // -------------------------------------------------------------------------

  enabled: true,
  volume: 0.5,

  // -------------------------------------------------------------------------
  // SOUND EFFECTS
  // -------------------------------------------------------------------------
  // Each sound has:
  //   - file: Path to the sound file (null = use placeholder sound)
  //   - volume: Individual volume multiplier (0.0 to 1.0)
  //
  // Supported formats: mp3, wav, ogg
  // NOTE: If file is null, a procedurally generated placeholder sound plays!
  // -------------------------------------------------------------------------

  sounds: {
    // Played when a fruit is dropped/spawned (placeholder: rising pop)
    spawn: {
      file: null,  // Set to 'sounds/spawn.mp3' to override placeholder
      volume: 0.6
    },

    // Played when two fruits merge (placeholder: two-tone chime)
    merge: {
      file: null,  // Set to 'sounds/merge.mp3' to override placeholder
      volume: 0.7
    },

    // Played when player wins (placeholder: ascending fanfare)
    victory: {
      file: null,  // Set to 'sounds/victory.mp3' to override placeholder
      volume: 0.8
    },

    // Played when game is over (placeholder: descending tone)
    gameOver: {
      file: null,  // Set to 'sounds/gameover.mp3' to override placeholder
      volume: 0.7
    }
  }
};

// ============================================================================
// EXAMPLE: HOW TO ADD SOUND FILES
// ============================================================================
//
// 1. Place your sound files in the 'sounds' folder
// 2. Update the 'file' property for each sound:
//
//    spawn: {
//      file: 'sounds/pop.mp3',  // <-- Add path here
//      volume: 0.6
//    }
//
// 3. Refresh the page to hear your sounds!
//
// TIP: Short sound effects (< 1 second) work best for spawn and merge.
//      Victory sounds can be longer (1-3 seconds).
//
// RECOMMENDED SOUND TYPES:
//   - spawn: A light "pop" or "plop" sound
//   - merge: A satisfying "swoosh" or "ding" sound
//   - victory: A celebratory fanfare or chime
//   - gameOver: A sad trombone or descending tone
//
// FREE SOUND RESOURCES:
//   - freesound.org
//   - mixkit.co/free-sound-effects
//   - pixabay.com/sound-effects
//
// ============================================================================
