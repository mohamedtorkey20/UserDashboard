
# User Dashboard 

## Overview

This project is an interactive user dashboard built with Angular (17), demonstrating advanced features such as state management, observables, custom directives, caching mechanisms, and user interface enhancements. The application fetches and displays user data, enabling seamless navigation, instant search functionality, and a smooth user experience.

## Features

- **User List with Pagination:** Displays a list of users fetched from an API, paginated for easier navigation.
- **User Details Page:** Clicking on a user card navigates to a detailed view of the selected user.
- **Instant Search:** Search for users by ID with real-time results and navigation to user details.
- **Caching:** Optimizes performance by caching API responses to reduce redundant HTTP requests.
- **Loading Indicator:** Enhances user experience with a loading bar during data retrieval.
- **State Management:** Efficient handling of application state using NgRx.
- **Custom Directives:** Implements reusable UI interactions.
- **Responsive Design:** Ensures a consistent experience across various screen sizes.
- **Styling and Animations:** Utilizes Angular Material and custom CSS for a polished UI.

## Technologies Used

- **Angular (17):** Core framework for building the application.
- **NgRx:** State management.
- **RxJS:** Asynchronous data handling with observables.
- **Angular Material:** UI component library.
- **tailwind:**  For responsive design and animations.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mohamedtorkey20/UserDashboard.git
   ```
2. Navigate to the project directory:
   ```bash
   cd UserDashboard
  ```
3. Install the dependencies:
  ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   ng serve
  ```
5. Open your browser and go to \`http://localhost:4200\`.

## Usage

- **User List:** Browse through the paginated user list.
- **User Details:** Click on any user card to view detailed information.
- **Search:** Use the search bar in the header to find a user by ID.
- **Navigation:** Use the back button on the user details page to return to the main list.





