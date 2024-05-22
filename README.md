# MongoDB Relationship between documents

This is a simple MongoDB, Express.js, Node.js stack project following best practices for structuring the backend API.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Error Handling](#error-handling)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
    ```sh
    git clone git@github.com:alkanaziz/aa150-mongoDB-relationships.git
    cd aa150-mongoDB-relationships
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add your MongoDB connection string and port number:
    ```sh
    touch .env
    ```

    Add the following to `.env`:
    ```
    MONGO_DB_URL=your_mongo_db_connection_string
    PORT=5000
    ```

## Usage

1. Start the server:
    ```sh
    node server.js
    ```
    or with nodemon, if you have nodemon installed. If not, install it with `npm install -g nodemon`:
    ```sh
    nodemon server.js
    ```
    

2. The server will be running on `http://localhost:5000`.

## Project Structure

- **config/db.js**: Database connection setup.
- **controllers**: Contains the controller logic for posts and users.
- **models**: Contains the Mongoose schemas for posts and users.
- **routes**: Contains the route definitions for posts and users.
- **server.js**: Contains the server setup.
- **middleware/errorHandler.js**: Error handling middleware.

## API Endpoints

### User Endpoints

- **Create User**
    ```http
    POST /api/users/create
    ```
    Request body:
    ```json
    {
        "name": "John Doe"
    }
    ```

- **Get All Users**
    ```http
    GET /api/users/
    ```

- **Get Single User**
    ```http
    GET /api/users/:userId
    ```

### Post Endpoints

- **Create Post**
    ```http
    POST /api/posts/create
    ```
    Request body:
    ```json
    {
        "title": "My First Post",
        "userId": "user_id_here"
    }
    ```

- **Get All Posts**
    ```http
    GET /api/posts/
    ```

## Environment Variables

The following environment variables are required to run the project:

- `MONGO_DB_URL`: Your MongoDB connection string.
- `PORT`: The port number the server will run on.

## Error Handling

Errors are handled centrally using a custom middleware.

## Contributing

Contributions are welcome! Please create an issue or submit a pull request for any changes or enhancements.

## License

This project is licensed under the MIT License.