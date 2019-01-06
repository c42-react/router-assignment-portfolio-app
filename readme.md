### The Complete React Web Developer Course (with Redux) | Andrew Mead | Udemy
https://www.udemy.com/react-2nd-edition/ 

#### Commands
| Install Live Server  | npm install -g live-server  | 
| Run live web server  | live-server <folder-to-serve>  |  
|  Babel transpile on watch  | babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch  

## Webpack upgrade
1. Removed 'live-server' & 'babel-cli' from global npm -
    npm uninstall -g live-server babel-cli
2. Installed them back as local packages
    npm install live-server babel-cli@6.24.1
3. Added two scripts to package.json
      "scripts": {
            "serve": "live-server public/",
            "build": "babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch"
        },
4. From command line can invoke these scripts via npm -
    npm run serve
    npm run build

-----------------------------------------------------------------------------------------------
## Assignment tasks:

Create a routing scheme for following:

header
home
    - contact
    - portfolio
        - portfolio/:id

header: to contain links to home, contact & portfolio pages
home: display a welcome message
portfolio: to link to individual projects
portfolio: display project id passed in as param