ProjFlow - Multi-Project Profitability Dashboard
This project was bootstrapped with Create React App.

Available Scripts
In the project directory, you can run:

npm start
Runs the app in development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

json-server --watch projects.json --port 5000
Runs the JSON server to serve the project data.
Open http://localhost:5000/projects to view the project data.

This command is required to provide the project data to the application.

npm test
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified, and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

npm run eject
Note: this is a one-way operation. Once you eject, you can’t go back!

If you are not satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) directly into your project so you have full control over them. At this point, you are on your own.

Project Setup
1. Clone the Repository

git clone git@github.com:ronniearistil/ProjFlow.git
cd ProjFlow
2. Install Dependencies

npm install
3. Running the React App

npm start
Runs the app at http://localhost:3000.

4. Running the JSON Server
Install JSON Server globally if you don't have it:

npm install -g json-server
Start the JSON server to serve the project data:

json-server --watch projects.json --port 5000
Runs the server at http://localhost:5000/projects.

Learn More
You can learn more in the Create React App documentation.

To learn React, check out the React documentation.

Code Splitting
This section has moved here: Code Splitting

Analyzing the Bundle Size
This section has moved here: Analyzing the Bundle Size

Making a Progressive Web App
This section has moved here: Making a Progressive Web App

Advanced Configuration
This section has moved here: Advanced Configuration

Deployment
This section has moved here: Deployment

npm run build fails to minify
This section has moved here: npm run build fails to minify