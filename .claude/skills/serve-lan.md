# serve-lan

Start a local HTTP server for testing the game on mobile devices over LAN.

## Instructions

Start a local HTTP server to serve the game files for mobile device testing:

1. First, get the local IP address by running `ipconfig` and look for the IPv4 address (usually starts with 192.168.x.x)
2. Start a Python HTTP server on port 8000 in the project directory using `python -m http.server 8000 --bind 0.0.0.0`
3. Display the URL to access from mobile: `http://<local-ip>:8000`
4. Tell the user to ensure both devices are on the same WiFi network
5. Run the server in the background so the user can continue working

The server should bind to 0.0.0.0 to allow connections from other devices on the network.
