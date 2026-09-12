@echo off
cd /d "%~dp0"
title AFOULLOUS Website
echo ==========================================
echo   AFOULLOUS - Afolous Restaurant Website
echo   Starting... the site will open in your browser.
echo   Keep this window OPEN while presenting.
echo   Close this window to stop the site.
echo ==========================================
echo.
npm run dev -- --open --port 5173
pause
