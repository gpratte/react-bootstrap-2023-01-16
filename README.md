# React 18.2 frontend with react bootstrap 2.7

## step 03 react router
Added the react routing dependency.
* _npm i --save react-router-dom_

## step 02 add bootstrap
Added the react-bootstrap dependency
* _npm install --save react-bootstrap bootstrap_

Imported the bootstrap css

    import 'bootstrap/dist/css/bootstrap.min.css';

Coded a simple bootstrap Container in the App component.

## step 01 create development environment
To get started did the following.

node version: 18.12.1
npm version: 8.19.2

From https://reactjs.org/docs/create-a-new-react-app.html#create-react-app
* _npx create-react-app react-bootstrap-2023-01-16_
* _cd react-bootstrap-2023-01-16_

Removed the .git directory
* _rm -rf .git_

Created github repository react-bootstrap-2023-01-16

Hook up the react-bootstrap-2023-01-16 with the github repository
* _git init_
* _git add ._
* _git commit -m "app created with create-react-app"_
* _git remote add origin git@github.com:gpratte/react-bootstrap-2023-01-16.git_
* _git push origin master_

Make sure the initial react application works. Should see the default react page in the web browser at http://localhost:3000/
* _npm start_

Create the first branch
* _git checkout -b step-01-create-development-environment_
* _git push origin step-01-create-development-environment_


