@echo off
cd /d "%~dp0"
if not exist node_modules call npm install
start "SFT Workspace" http://localhost:3000
call npm run dev
pause
