FRUIT IMAGES FOR SUIKA GAME
============================

Place your fruit images in this folder.

RECOMMENDED IMAGE SIZES (2x radius for crisp display):
  cherry.png      - 40x40 px
  strawberry.png  - 60x60 px
  grape.png       - 80x80 px
  orange.png      - 110x110 px
  apple.png       - 130x130 px
  pear.png        - 150x150 px
  watermelon.png  - 180x180 px

NOTES:
- PNG format with transparency recommended
- Square images work best (they auto-scale to fit)
- Images are automatically centered and scaled to the fruit's diameter

TO ENABLE IMAGES:
Edit fruit-config.js and set the 'image' property for each fruit:

  {
    name: 'cherry',
    displayName: 'Cherry',
    radius: 20,
    color: '#e74c3c',
    score: 1,
    spawnRate: 50,
    image: 'images/cherry.png'  // <-- Add path here
  }

Then refresh the page to see your images!
