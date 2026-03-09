// ============================================================================
// REWARDS CONFIGURATION FILE
// ============================================================================
// Edit this file to customize reward images shown on watermelon merge!
// Place your images in the 'images/rewards' folder.
// Changes take effect on page refresh.
// ============================================================================

const REWARDS_CONFIG = {
  // -------------------------------------------------------------------------
  // REWARD IMAGES
  // -------------------------------------------------------------------------
  // List of image paths to show when watermelon is created
  // Images are selected randomly and float upward with a fade effect
  // -------------------------------------------------------------------------

  images: [
    'images/rewards/reward1.jpeg',
    'images/rewards/reward2.jpg',
    'images/rewards/reward3.jpg',
    'images/rewards/reward4.jpg',
    'images/rewards/reward5.jpg',
    'images/rewards/reward6.jpg'
  ],

  // -------------------------------------------------------------------------
  // ANIMATION SETTINGS
  // -------------------------------------------------------------------------

  floatSpeed: 2,           // How fast the image floats up
  fadeTime: 120,           // Frames before fully faded (60 = 1 second)
  targetSizePercent: 0.3,  // Target size as % of game width (0.3 = 30%)
  scaleMultiplier: 1.0,    // Extra multiplier on top of auto-scaling
  spawnOffsetX: 30,        // Random X offset range from merge point

  // -------------------------------------------------------------------------
  // FIREWORKS SETTINGS
  // -------------------------------------------------------------------------

  fireworks: {
    particleCount: 30,      // Number of particles per burst
    salvoDuration: 3000,    // Total salvo duration (ms)
    salvoInterval: 150,     // Time between bursts (ms)
    spreadX: 60,            // Horizontal spread from center
    spreadY: 40,            // Vertical spread from center
    playSound: true,        // Play firework sound effect
    soundInterval: 300      // Min time between sounds (ms) to avoid spam
  }
};
