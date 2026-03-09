@echo off
echo ========================================
echo   Starting local server...
echo ========================================
echo.
echo   Open in browser:
echo   http://localhost:8000
echo.
echo   Press Ctrl+C to stop the server
echo ========================================
echo.
python -m http.server 8000
