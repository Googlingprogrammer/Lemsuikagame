@echo off
echo ========================================
echo   Starting LAN server...
echo ========================================
echo.

:: Get local IP address
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /c:"IPv4"') do (
    set IP=%%a
    goto :found
)
:found
:: Trim leading space
set IP=%IP:~1%

echo   Local (this PC):
echo   http://localhost:8000
echo.
echo   LAN (mobile/other devices):
echo   http://%IP%:8000
echo.
echo   Make sure your firewall allows connections!
echo   Press Ctrl+C to stop the server
echo ========================================
echo.
python -m http.server 8000 --bind 0.0.0.0
