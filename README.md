

### README.md

```markdown
# ChatApp

ChatApp is a real-time messaging application built using modern web technologies. It provides users with a seamless experience for chatting, including features like user authentication, message history, real-time notifications, and more. The app is powered by Node.js, Express, MongoDB, and React, and uses Socket.io for real-time communication.

## Features

- **User Authentication:** Secure signup and login using JWT-based authentication.
- **Real-Time Messaging:** Instant messaging between users powered by Socket.io.
- **Message History:** View past messages in a conversation with persistent storage in MongoDB.
- **Online Status:** See which users are online in real-time.
- **State Management:** Zust and is used for managing the application's global state.
- **API Documentation:** Swagger API documentation available for backend endpoints.

## Technologies Used

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB with Mongoose
  - JWT for authentication
  - Socket.io for real-time communication
  - Nodemailer for email notifications

- **Frontend:**
  - React.js
  - Vite.js
  - TailwindCSS
  - Zustand for state management
  - Socket.io-client for real-time updates

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine
- MongoDB Atlas account or a local MongoDB instance

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Sujeethy/ChatApp.git
   ```
2. Navigate to the project directory:
   ```bash
   cd ChatApp
   ```
3. Install backend dependencies:
   ```bash
   npm install
   ```
4. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
   ```

### Running the Application

1. Create a `.env` file in the root directory with the following environment variables:
   ```env
   MONGO_URI=<your-mongo-uri>
   PORT=5000
   JWT_SECRET=<your-jwt-secret>
   SOCKET_URL=<your-socket-url>
   ```
2. Start the backend server:
   ```bash
   npm run dev
   ```
3. Start the frontend development server:
   ```bash
   cd frontend
   npm run dev
   ```
4. Access the application in your browser at `http://localhost:5173`.

### API Documentation

Swagger API documentation is available at `http://localhost:5000/api-docs`.

## Contributing

Contributions are welcome! Please create a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.
```
