# FinTrackFlow  
_A Seamless Project Forecasting, Budgeting, and Expense Management Hub_

FinTrackFlow is a React-based project management tool designed to empower users to forecast budgets, manage projects and expenses, and streamline workflows. With features such as dynamic UI elements, archiving capabilities, search, filtering, and global state management through React Context, it offers seamless data interaction via a mock backend powered by JSON Server.

---

## Key Features  

- **Project and Expense Management**  
  Add new projects and expenses using intuitive forms.  

- **Archiving Functionality**  
  Archive and unarchive projects and expenses to efficiently manage their lifecycle.  

- **Search, Filter, and Sort Options**  
  Search by name or ID, filter by status, and sort projects based on customizable criteria for easy navigation.  

- **Global State Management**  
  Uses React Context to share project and expense data across components for consistent updates.  

- **Mock Backend with JSON Server**  
  Simulates backend interactions with project and expense data, ensuring a smooth development experience.  

---

## Project Architecture Overview  

- **App.jsx**: Manages layout, routing, and shared state across the app.  
- **NavBar.jsx**: Provides search, filter, and sort options for projects and expenses.  
- **ProjectsContainer.jsx / ExpensesContainer.jsx**: Displays lists of filtered projects and expenses.  
- **ProjectContext.jsx**: Manages global state for projects and expenses using React Context.  
- **ProjectForm.jsx / ExpenseForm.jsx**: Forms for adding new projects and expenses.  
- **ProjectCard.jsx / ExpenseCard.jsx**: Components for displaying individual projects and expenses.  
- **useFilteredItems.js**: A custom hook for filtering lists based on search terms, status, and archived items.  

---

## Available Scripts  

1. **Start the Development Server**  
npm start
Runs the React app in development mode.
Open http://localhost:3000 to view the app.
Start the JSON Server
npm run server

Runs the mock backend to provide project and expense data.
Open http://localhost:5000/projects to view the data.
Note: Ensure the JSON server is running for the React app to access project and expense data.
Run Tests
npm test

Launches the test runner in interactive mode.
Build for Production
npm run build

Creates a production-optimized build in the build folder.

Project Setup
Clone the Repository
git clone git@github.com:ronniearistil/ProjFlow.git
cd ProjFlow
Install Dependencies
npm install
Run the React App
npm start

Opens the app at http://localhost:3000.
Start the JSON Server

npm install -g json-server
json-server --watch projects.json --port 5000
Starts the server at http://localhost:5000/projects.

Application Flow
Global State Management
ProjectContext shares project and expense data across the app for real-time updates.

Navigation Bar
Users can search, filter, and sort projects and expenses in real time.

Dynamic Rendering
Projects and expenses are dynamically updated based on user input.

Forms
Add new projects and expenses, with changes reflected in the global state immediately.

Archiving Options
Users can archive/unarchive projects and expenses with a toggle feature.

Deployment Instructions
Run the following command to generate a production build:
npm run build
Deploy the contents of the build folder to your preferred hosting provider.

Learn More
Create React App Documentation
React Documentation

Optional: JSON Server Installation

If you don’t have JSON Server installed globally, install it with:
npm install -g json-server