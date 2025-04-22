#!/bin/bash

chmod +x build.sh

npm init -y

touch .env
touch .gitignore
mkdir src
cd src && touch index.js


sudo npm install
sudo npm install express cors dotenv argon2 jsonwebtoken 
sudo npm install nodemon morgan --save-dev