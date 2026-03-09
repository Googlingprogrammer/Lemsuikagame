// ============================================================================
// LEADERBOARD CONFIGURATION (jsonbin.io)
// ============================================================================
// Setup instructions:
// 1. Go to https://jsonbin.io and create a free account
// 2. Go to API Keys and copy your X-Master-Key
// 3. Paste it below as your apiKey
// 4. Run the game and submit a score - a bin will be auto-created
//    OR manually create a bin with: {"leaderboard": []}
// ============================================================================

const LEADERBOARD_CONFIG = {
  // Your jsonbin.io API key (get it from https://jsonbin.io/api-keys)
  apiKey: '$2a$10$zjOOtlkC1tU6WcX5iWPsO.akFkQFN6KyZgLbU7HtkTCnVUJNd9ipu',

  // Bin ID - leave empty for first run, will be logged to console
  // After first score submission, copy the bin ID from console and paste here
  binId: '69af0fd543b1c97be9c5f318',

  // jsonbin.io base URL
  baseUrl: 'https://api.jsonbin.io/v3/b',

  // Leaderboard settings
  maxEntries: 50,           // Max entries to keep
  maxNameLength: 5,         // Player name length (5 letters)

  // Admin settings (for clearing leaderboard)
  showAdminControls: true,

  // UI Settings
  ui: {
    panelColor: 'rgba(255, 248, 235, 0.98)',
    titleColor: '#8B4513',
    headerColor: '#A0522D',
    textColor: '#5D4037',
    highlightColor: '#FFD700',
    inputBackgroundColor: '#FFF8DC',
    inputBorderColor: '#DEB887',
    buttonNormal: '#8BC34A',
    buttonHover: '#7CB342',
    buttonText: '#FFFFFF',
    errorColor: '#E74C3C'
  }
};
