FinTrackFlow - A Seamless Project Forecasting, Budgeting, and Expense Management Hub
FinTrackFlow is a React-based project management tool that allows users to forecast budgets, manage projects and expenses, and archive projects. It provides a dynamic UI with project filtering, searching, and data management using React Context and JSON Server.

Key Features
Project and Expense Management: Add new projects and expenses using dedicated forms.
Archiving Functionality: Mark projects as archived to manage the project lifecycle.
Search and Filter: Easily search projects and filter by status using the navigation bar.
Global State Management: Uses React Context to share project and expense data across components.
Mock Backend: Uses JSON Server to simulate backend interactions with project and expense data.

Project Architecture Overview
App.jsx: The main entry point managing layout, routing, and shared state.
NavBar.jsx: Allows users to search and filter projects by status.
ProjectsContainer.jsx / ExpensesContainer.jsx: Displays filtered lists of projects and expenses.
ProjectContext.jsx: Manages global state for projects and expenses.
ProjectForm.jsx / ExpenseForm.jsx: Forms for adding new projects and expenses.
ProjectCard.jsx / ExpenseCard.jsx: Components for displaying individual projects and expenses.
useFilteredItems.js: A custom hook for filtering lists based on search terms and status.

Available Scripts
1. Start the Development Server
npm start

Runs the React app in development mode.
Open http://localhost:3000 to view the app.
2. Start the JSON Server
json-server --watch projects.json --port 5000

Runs a mock backend to provide project and expense data.
Open http://localhost:5000/projects to view the data.
Note: Ensure the JSON server is running for the React app to access the project data.
3. Run Tests
npm test

Launches the test runner in interactive mode.
4. Build for Production
npm run build

Creates a production-optimized build in the build folder.

Project Setup
1. Clone the Repository
git clone git@github.com:ronniearistil/ProjFlow.git
cd ProjFlow

2. Install Dependencies
npm install

3. Running the React App
npm start
Opens the app at http://localhost:3000.
4. Running the JSON Server

npm install -g json-server
json-server --watch projects.json --port 5000
Starts the server at http://localhost:5000/projects.

Application Flow
Global State Management: ProjectContext shares project and expense data across the app.
Navigation Bar: Users can search and filter projects in real time.
Dynamic Rendering: Projects and expenses are filtered based on user input.
Forms: Users can add new projects and expenses, which update the global state.

Deployment Instructions
Run npm run build to generate a production build.
Deploy the contents of the build folder to your preferred hosting provider.

Learn More
Create React App Documentation
React Documentation

Optional: JSON Server Installation
If you don’t have JSON Server installed globally, you can install it with:
npm install -g json-server
