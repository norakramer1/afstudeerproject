# CMD Afstudeerproject - YourEventGuide

For my graduation project i created a webapp that lets you make an account and log in to see cultural events based on your interests. In the second iteration i'm adding a way for you to interact with your 'friends'. This will be hardcoded so don't expect much.

## Features

- **User Authentication:** Users can create an account, log in, and securely authenticate using Firebase Authentication.

- **Interest Management:** Users can add their interests, which are then used to tailor event recommendations.

- **Personalized Events:** The app uses user interests to suggest events that match their preferences.

## Demo

View the live prototype on Vercel: [YourEventGuide Demo](afstudeerproject-omega.vercel.app)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/your-repo.git
Install dependencies:
bash
Copy code
cd your-repo
npm install
Configure Firebase:

Create a Firebase project: Firebase Console
Obtain your Firebase configuration and update the configuration file in src/firebase/config.js.

Start the development server:
npm start
The app will be running at http://localhost:3000.
```

## Technologies Used

- create-react-app
- react-router-dom
- react-dom.
- Firebase (Authentication, Firestore)
