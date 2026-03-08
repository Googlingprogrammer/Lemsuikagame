# Fruit Drop - Suika Game Clone

A browser-based clone of the popular Suika Game (Watermelon Game). Drop fruits, merge matching pairs, and try to create the ultimate watermelon!

## How to Play

1. Move your mouse/finger to position the fruit
2. Click/tap to drop the fruit
3. When two identical fruits touch, they merge into the next larger fruit
4. Don't let fruits stack above the danger line!
5. Create a watermelon to win (Normal Mode) or keep going for a high score (Endless Mode)

## Configuration

The game is highly customizable through config files:

### Fruit Configuration (`fruit-config.js`)

Customize fruits, sizes, colors, spawn rates, and images:

```javascript
{
  name: 'cherry',
  displayName: 'Cherry',
  radius: 20,
  color: '#e74c3c',      // Fallback color
  score: 1,
  spawnRate: 50,         // Higher = more common (0 = can't spawn, only merge)
  image: 'images/cherry.png'  // Optional custom image
}
```

### Sound Configuration (`sound-config.js`)

Configure background music and sound effects:

```javascript
{
  enabled: true,
  volume: 0.5,
  bgm: {
    file: 'sounds/bgm.mp3',
    loop: true,
    volume: 0.3
  },
  sounds: {
    spawn: { file: 'sounds/spawn.wav', volume: 0.5 },
    merge: { file: 'sounds/merge.wav', volume: 0.6 }
  }
}
```

### UI Configuration (`ui-config.js`)

Customize colors, backgrounds, and visual appearance:

```javascript
{
  background: {
    color: '#C8956C',              // Fallback color
    image: 'images/background.png', // Optional background image
    imageMode: 'cover'             // 'cover', 'contain', 'stretch', or 'tile'
  },
  playArea: {
    color: '#FEF4E1'               // Inner play area color
  },
  frame: {
    outerWood: '#B8834A',          // Wooden frame colors
    innerWood: '#D4A574'
  }
  // ... more options for menus, buttons, etc.
}
```

## Folder Structure

```
Lemsuikagame/
├── index.html          # Main game file
├── fruit-config.js     # Fruit customization
├── sound-config.js     # Sound customization
├── ui-config.js        # UI/visual customization
├── images/             # Place fruit & background images here
│   └── README.txt      # Image size recommendations
└── sounds/             # Place sound files here
    └── bgm.mp3         # Background music
```

## Adding Custom Images

### Fruit Images

1. Place images in the `images/` folder
2. Recommended sizes (2x radius for crisp display):
   - cherry.png: 40x40 px
   - strawberry.png: 60x60 px
   - grape.png: 80x80 px
   - orange.png: 110x110 px
   - apple.png: 130x130 px
   - pear.png: 150x150 px
   - watermelon.png: 180x180 px
3. Update `fruit-config.js` with the image paths

### Background Image

1. Place your background image in `images/` (e.g., `images/background.png`)
2. Edit `ui-config.js`:
   ```javascript
   background: {
     color: '#C8956C',                // Fallback if image fails to load
     image: 'images/background.png',  // Your background image
     imageMode: 'cover'               // How to scale the image
   }
   ```

**Image Modes:**
- `cover` - Scale to fill canvas, may crop edges (default)
- `contain` - Scale to fit inside canvas, may show background color
- `stretch` - Stretch to exact canvas size, may distort
- `tile` - Repeat the image as tiles

## Running Locally

Simply open `index.html` in a modern browser, or use a local server:

```bash
# Python 3
python -m http.server 8000

# Node.js (with http-server)
npx http-server
```

Then open `http://localhost:8000` in your browser.

## Technologies Used

- [p5.js](https://p5js.org/) - Creative coding library
- [p5play](https://p5play.org/) - Game engine for p5.js
- [Planck.js](https://piqnt.com/planck.js/) - 2D physics engine
- Web Audio API - Procedural sound generation

## License

MIT License - Feel free to modify and share!
