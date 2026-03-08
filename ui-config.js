// ============================================================================
// UI CONFIGURATION
// ============================================================================
// Customize the visual appearance of the game here.
// All colors use hex format (#RRGGBB) or rgba format for transparency.
// ============================================================================

const UI_CONFIG = {
  // ==========================================================================
  // BACKGROUND & PLAY AREA
  // ==========================================================================
  background: {
    color: '#C8956C',           // Fallback color (warm tan)
    // image: 'images/background.png',  // Optional: background image path
    // imageMode: 'cover',       // 'cover', 'contain', 'stretch', or 'tile'
  },

  playArea: {
    color: '#FEF4E1',           // Inner play area (cream)
  },

  // ==========================================================================
  // WOODEN FRAME
  // ==========================================================================
  frame: {
    outerWood: '#B8834A',       // Darker outer wood
    innerWood: '#D4A574',       // Lighter inner wood highlight
    wallHighlight: '#D4A574',   // Wall inner edge highlight
  },

  // ==========================================================================
  // DANGER LINE
  // ==========================================================================
  dangerLine: {
    normalColor: '#C94C4C',     // Normal danger line color
    flashColor: '#CC3333',      // Flashing warning color
  },

  // ==========================================================================
  // DROP GUIDE
  // ==========================================================================
  dropGuide: {
    color: 'rgba(93, 78, 55, 0.3)',  // Subtle brown guide line
  },

  // ==========================================================================
  // SCORE DISPLAY
  // ==========================================================================
  score: {
    backgroundColor: '#D4A574',
    borderColor: '#B8834A',
    textColor: '#5D4E37',
    highScoreColor: '#8B7355',
    endlessModeColor: '#D4894A',
  },

  // ==========================================================================
  // NEXT FRUIT INDICATOR
  // ==========================================================================
  nextFruit: {
    backgroundColor: '#D4A574',
    borderColor: '#B8834A',
    labelColor: '#5D4E37',
  },

  // ==========================================================================
  // MENU SCREEN
  // ==========================================================================
  menu: {
    panelColor: '#FEF4E1',
    titleColor: '#5D4E37',
    highScoreColor: '#8B7355',
    instructionColor: '#8B7355',
    button: {
      normal: '#D4894A',
      hover: '#E8A060',
      textColor: '#FFFFFF',
    },
  },

  // ==========================================================================
  // WIN SCREEN
  // ==========================================================================
  win: {
    overlayColor: 'rgba(139, 90, 43, 0.78)',
    panelColor: '#FEF4E1',
    titleColor: '#4CAF50',
    scoreColor: '#5D4E37',
    highScoreColor: '#8B7355',
    playAgainButton: {
      normal: '#D4894A',
      hover: '#E8A060',
      textColor: '#FFFFFF',
    },
    endlessButton: {
      normal: '#A86830',
      hover: '#C17A3A',
      textColor: '#FFFFFF',
    },
  },

  // ==========================================================================
  // LOSE SCREEN
  // ==========================================================================
  lose: {
    overlayColor: 'rgba(139, 90, 43, 0.78)',
    panelColor: '#FEF4E1',
    titleColor: '#C94C4C',
    scoreColor: '#5D4E37',
    highScoreColor: '#8B7355',
    tryAgainButton: {
      normal: '#D4894A',
      hover: '#E8A060',
      textColor: '#FFFFFF',
    },
    menuButton: {
      normal: '#A87840',
      hover: '#B8834A',
      textColor: '#FFFFFF',
    },
  },

  // ==========================================================================
  // DEBUG OVERLAY
  // ==========================================================================
  debug: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    textColor: '#00FF00',
  },
};
