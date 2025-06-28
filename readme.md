
# NotesApp

A full-stack Notes application with a **React/Next.js** frontend and an **Express/MongoDB** backend.

---

## Project Structure

```
NotesApp/
│
├── Backend/      # Express.js backend (API, MongoDB)
│
└── frontend/     # Next.js frontend (React)
```

---

## Features

- Create, read, update, and delete notes
- Responsive UI with Next.js and Tailwind CSS
- RESTful API with Express.js and MongoDB

---

## Prerequisites

- Node.js (v18+ recommended)
- npm or yarn
- MongoDB instance (local or cloud)

---

## Getting Started

### 1. Clone the repository

```sh
git clone <repo-url>
cd NotesApp
```

---

### 2. Setup Backend

1. Go to the backend folder:
    ```sh
    cd Backend
    ```
2. Install dependencies:
    ```sh
    npm install
    ```
3. Create a `.env` file in `Backend/` with the following:
    ```
    MONGO_URI=<your-mongodb-connection-string>
    PORT=8000
    ```
4. Start the backend server:
    ```sh
    node server.js
    ```
    The backend will run on `http://localhost:8000`.

---

### 3. Setup Frontend

1. Open a new terminal and go to the frontend folder:
    ```sh
    cd frontend
    ```
2. Install dependencies:
    ```sh
    npm install
    ```
3. (Optional) Create a `.env` file in frontend for frontend environment variables if needed.
4. Start the frontend development server:
    ```sh
    npm run dev
    ```
    The frontend will run on `http://localhost:3000`.

---

## API Endpoints

The backend exposes the following endpoints:

- `GET    /api/notes`         — Get all notes
- `GET    /api/notes/:id`     — Get a single note
- `POST   /api/notes`         — Create a new note
- `PUT    /api/notes/:id`     — Update a note
- `DELETE /api/notes/:id`     — Delete a note

---

## Technologies Used

- **Frontend:** Next.js, React, Tailwind CSS, Axios
- **Backend:** Express.js, MongoDB, Mongoose, dotenv, cors

---

## Development Notes

- The frontend expects the backend API to be running at `http://localhost:8000/api`.
- You can change the backend port or API URL as needed (update in both backend `.env` and frontend api.js).

---

## License

This project is licensed under the MIT License.

---

## Author

- Parth Singh

```
- [Backend/server.js](Backend/server.js)
- [frontend/src/app/page.js](frontend/src/app/page.js)
```
```
