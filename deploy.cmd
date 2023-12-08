echo "Switching to branch main"
git checkout main

echo "Building the app"
npm run build

echo "Deploying files to server"
scp -r dist/* kaolhou@154.56.43.108:/var/www/endlesschasegame.com

echo "DONE!!"
pause