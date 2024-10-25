# FinTrackFlow  
_A Seamless Project Forecasting, Budgeting, and Expense Management Hub_

FinTrackFlow is a React-based project management tool designed to empower users with budget forecasting, project tracking, and expense management. With dynamic UI elements, archiving capabilities, and search, filter, and sorting options, the application offers streamlined workflows. Using React Context for state management and JSON Server for a mock backend, FinTrackFlow ensures a smooth development experience.

---

## Key Features  

- **Project and Expense Management**  
  Add and manage projects and expenses using intuitive forms.  

- **Archiving Functionality**  
  Archive and unarchive projects and expenses to efficiently manage their lifecycle.  

- **Search, Filter, and Sort Options**  
  Search by name or ID, filter by status, and sort projects to improve navigation and access.  

- **Global State Management**  
  Uses React Context to ensure consistent data updates across components.  

- **Mock Backend with JSON Server**  
  Simulates backend interactions, allowing development without a real backend service.  

---

## Project Architecture Overview  

- **App.jsx**: Manages layout, routing, and wraps all child components.  
- **NavBar.jsx**: Provides search, filter, and sort options for projects and expenses.  
- **ProjectsContainer.jsx / ExpensesContainer.jsx**: Displays lists of filtered projects and expenses with real-time updates.  
- **ProjectContext.jsx**: Manages global state for projects and expenses using React Context.  
- **ProjectForm.jsx / ExpenseForm.jsx**: Forms for adding new projects and expenses with controlled inputs.  
- **ProjectCard.jsx / ExpenseCard.jsx**: Displays individual projects and expenses with edit and archive options.  
- **useFilteredItems.js**: A custom hook for filtering lists based on search terms, status, and archive state.  

---

## Available Scripts  

**Start the Development Server**  
    npm start

Runs the React app in development mode.
Open http://localhost:3000 to view it in your browser.

## Start the JSON Server
    npm run server

Runs the mock backend using JSON Server.
Open (http://localhost:5001/projects | http://localhost:5001/expenses) to view the project and expense data.

Ensure the JSON Server is running for the React app to access the project and expense data.

## Run Tests
    npm test
    Launches the test runner in interactive mode.

## Build for Production
    npm run build
    Creates an optimized production build in the build folder.

# Project Setup
1. Clone the Repository
    git clone git@github.com:ronniearistil/FinTrackFlow.git
    cd FinTrackFlow

2. Install Dependencies
    npm install

3. Run the React App
    npm start
4. Start the JSON Server - If JSON Server is not installed globally:
    npm install -g json-server

Then, start the server:
    json-server --watch projects.json --port 5000

# Application Flow
Global State Management:
    ProjectContext ensures that all data related to projects and expenses is shared and updated across components in real-time.

Navigation Bar:
    Users can search, filter, and sort projects and expenses with immediate UI updates.

Dynamic Rendering:
    Projects and expenses are updated dynamically based on user input and interactions.

Forms:
    Add new projects and expenses using controlled forms. Changes are instantly reflected in the app’s state.

Archiving Options:
    Archive and unarchive projects and expenses easily using a toggle feature.

# Deployment Instructions
1. Generate a Production Build
    npm run build
2. Deploy the Build Folder
    Deploy the contents of the build folder to a hosting provider (e.g., Netlify, Vercel, or GitHub Pages).
## Contributing
    Feel free to submit issues or pull requests to help improve the project.
## License
    This project is licensed under the MIT License - see the LICENSE file for details.
## Contact
    Developer: Ronnie Aristil
    Email: contact@fintrackpro.com

## Final Thoughts

FinTrackFlow simplifies project management by offering essential tools for budget tracking, expense management, and project forecasting. If you have any feedback or feature requests, don’t hesitate to reach out.
