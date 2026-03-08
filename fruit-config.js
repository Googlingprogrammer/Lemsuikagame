// ============================================================================
// FRUIT CONFIGURATION FILE
// ============================================================================
// Edit this file to customize fruits for your game!
// Changes take effect on page refresh.
// ============================================================================

const FRUIT_CONFIG = {
  // -------------------------------------------------------------------------
  // FRUIT DEFINITIONS
  // -------------------------------------------------------------------------
  // Each fruit has:
  //   - name: Internal name (lowercase, no spaces)
  //   - displayName: Name shown in game (can have spaces/caps)
  //   - radius: Size of the fruit in pixels (20-90 recommended)
  //   - color: Fallback color if no image (hex color code)
  //   - score: Points awarded when TWO of this fruit merge
  //   - spawnRate: Relative chance to spawn (higher = more likely)
  //                Only fruits with spawnRate > 0 can be dropped!
  //   - image: Path to image file (null = use color circle)
  // -------------------------------------------------------------------------

  fruits: [
    {
      name: 'cherry',
      displayName: 'Cherry',
      radius: 20,
      color: '#e74c3c',
      score: 1,
      spawnRate: 50,  // Most common drop
      image: null     // Set to 'images/cherry.png' to use image
    },
    {
      name: 'strawberry',
      displayName: 'Strawberry',
      radius: 25,
      color: '#e91e63',
      score: 3,
      spawnRate: 35,  // Common drop
      image: null
    },
    {
      name: 'grape',
      displayName: 'Grape',
      radius: 40,
      color: '#9b59b6',
      score: 6,
      spawnRate: 15,  // Rare drop
      image: null
    },
    {
      name: 'orange',
      displayName: 'Orange',
      radius: 60,
      color: '#f39c12',
      score: 10,
      spawnRate: 0,   // Cannot be dropped (merge only)
      image: null
    },
    {
      name: 'apple',
      displayName: 'Apple',
      radius: 65,
      color: '#27ae60',
      score: 15,
      spawnRate: 0,   // Cannot be dropped (merge only)
      image: null
    },
    {
      name: 'pear',
      displayName: 'Pear',
      radius: 80,
      color: '#f1c40f',
      score: 21,
      spawnRate: 0,   // Cannot be dropped (merge only)
      image: null
    },
    {
      name: 'watermelon',
      displayName: 'Watermelon',
      radius: 120,
      color: '#2ecc71',
      score: 28,
      spawnRate: 0,   // Cannot be dropped (merge only) - this is the WIN fruit!
      image: null
    }
  ],

  // -------------------------------------------------------------------------
  // GAME SETTINGS
  // -------------------------------------------------------------------------

  // Global fruit size multiplier (1.0 = default, 0.8 = 20% smaller, 1.2 = 20% larger)
  fruitScale: 1,

  // Time in milliseconds between drops
  dropCooldown: 400,

  // Danger zone settings
  dangerLineY: 120,        // Distance from top in pixels
  dangerTime: 10000,        // Time above line before game over (ms)
  warningTime: 3000,       // Flash warning during last X ms

  // Physics settings
  gravity: 20,
  bounciness: 0.2,
  friction: 0.5
};

// ============================================================================
// EXAMPLE: HOW TO ADD CUSTOM IMAGES
// ============================================================================
//
// 1. Place your image files in the 'images' folder
// 2. Update the 'image' property for each fruit:
//
//    {
//      name: 'cherry',
//      displayName: 'Cherry',
//      radius: 20,
//      color: '#e74c3c',
//      score: 1,
//      spawnRate: 50,
//      image: 'images/cherry.png'  // <-- Add path here
//    }
//
// 3. Refresh the page to see your images!
//
// TIP: Use square PNG images with transparency for best results.
//      Images will be automatically scaled to fit the fruit's diameter.
// ============================================================================

// ============================================================================
// EXAMPLE: HOW TO ADD A NEW FRUIT
// ============================================================================
//
// To add a new fruit between existing ones (e.g., "Lemon" between Pear and Watermelon):
//
// 1. Add the new fruit object in the correct position in the fruits array
// 2. Adjust the radius to fit between neighboring fruits
// 3. Set spawnRate to 0 if it should only appear via merging
//
// Example:
//    {
//      name: 'lemon',
//      displayName: 'Lemon',
//      radius: 82,           // Between pear (75) and watermelon (90)
//      color: '#fff176',
//      score: 24,
//      spawnRate: 0,
//      image: null
//    }
//
// ============================================================================

// ============================================================================
// EXAMPLE: ADJUSTING DIFFICULTY
// ============================================================================
//
// EASIER GAME:
//   - Increase spawnRate for larger fruits (grape, orange)
//   - Decrease dangerTime (more time before game over)
//   - Decrease gravity (fruits fall slower)
//
// HARDER GAME:
//   - Set spawnRate to 0 for grape (only cherry and strawberry drop)
//   - Increase dangerTime (less time before game over)
//   - Increase gravity (fruits fall faster)
//   - Decrease dropCooldown (faster drops allowed)
//
// ============================================================================
