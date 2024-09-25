# Chatbot

This is a simple chatbot application built using React for the frontend and Express for the backend. The chatbot uses Google's Generative AI to generate responses.

## Prerequisites

- Node.js (v20.11.0 or later)
- npm (v8.0.0 or later)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/chatbot.git
   cd chatbot
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

3. Create a `.env` file in the root directory and add your Google Generative AI API key:
   ```env
   API_KEY=your_api_key_here
   ```

## Running the Application

1. Start the backend server:

   ```sh
   npm run start:backend
   ```

2. In a new terminal, start the frontend development server:

   ```sh
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173/` to see the application.

## Project Structure

- `src/`: Contains the React frontend code.
  - `App.jsx`: Main application component.
  - `main.jsx`: Entry point for the React application.
  - `App.css`: Styles for the application.
- `server.js`: Express server for handling API requests.
- `.env`: Environment variables (not included in the repository).
- `package.json`: Project metadata and scripts.
- `package-lock.json`: Lockfile for npm dependencies.

## Usage

- Enter a question in the input field and click "Ask" to get a response from the chatbot.
- Click "Surprise me" to get a random question.
- Click "Clear" to reset the chat history and input field.

## Dependencies

- Frontend:
  - React
  - Vite
- Backend:
  - Express
  - dotenv
  - cors
  - @google/generative-ai

## License

This project is licensed under the MIT License.
