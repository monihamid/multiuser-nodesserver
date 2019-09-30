# Create a new directory nodeJs-setup, and from there:

### path http://localhost:3000/api/v1/documentation

    - Run: cd myproject this goes into the created project folder.
    - Run: npm init -y and follow the prompts, this will generate a package.json file for you.
    - add nodemon
    - touch README.md
    - create src folder  mkddir src

    - addmkdir src app.js and package.json inside the src
    - add core and api folder inside src
    - add framework and routes inside core folder
    - add code in app.js file
    - add package.json file inside core folder
    - npm i --save hapi joi inert vision json_merger knex hapi-swagger hapi-api-version inside core folder
    - add config.js file inside core folder
    - ES6  npm install -D babel-cli babel-preset-es2015
    - add package.json "build": "babel --presets es2015 ./src -d ./dist",
## database connection and table creation
    - npm install aguid pg --save install  

    - need babel/register for implement ES6
    - "build": "babel --presets es2015 ./src -d ./dist",
    - https://dev.to/dhruv/writing-es6-in-your-nodejs-applications-33jk


### add swagger
   - https://akhromieiev.com/tutorials/getting-started-with-swagger-and-hapi/
   - npm i hapi-swagger inert vision -s
### add auth
   - npm install --save hapi-auth-jwt2 aguid  inside src folder
   - add security: [{ 'jwt': [] }], in Hapi swager plugin options
   - Fix expirity time
   - nodemon: nodemon --exec
