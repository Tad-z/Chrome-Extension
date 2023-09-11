# Simple REST API for Managing Persons

## This is a simple REST API project for managing information about persons. It provides basic CRUD (Create, Read, Update, Delete) operations on a "person" resource.

## Table of Contents

- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Database Setup](#database-setup)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [UML Diagrams](#uml-diagrams)
- [Testing](#testing)
- [Deployment](#deployment)
- [Known Limitations and Assumptions](#known-limitations-and-assumptions)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Installation

To run this API on your local machine, follow these steps:

- Clone this repository to your local machine:

  ```bash
  git clone https://github.com/Tad-z/HNG_.git

  ```

- Navigate to API directory on your local machine:

  ```bash
  cd HNG_

  ```

- Install Project dependencies:
  ```bash
  npm install
  ```

### Configuration

This project uses environment variables for configuration. Create a .env file in the root directory and configure any required variables (e.g., database connection URI, port number).

- Example .env file:
  ```bash
  DATABASE_URI=mongodb://localhost:27017/persons
  PORT=5000
  ```

### Database Setup

This API uses MongoDB as the database. Make sure you have MongoDB installed and running.

## Usage

- To start the API, run the following command:
  ```bash
  npm start
  ```

The API will be available at http://localhost:5000/api.

## Endpoints

### Create a Person

- [Endpoint: POST /api]
- Request Body:
  ```bash
  {
  "name": "Mark Essien"
  }
  ```
- Make sure name is always a string

- Response (Success - 201 Created):
  ```bash
  {
  "data": {
  "_id": "unique-identifier",
  "name": "Mark Essien"
  },
  "message": "Person created successfully"
  }
  ```

### Get all Persons

- [Endpoint: GET /api]
- Response Body(Success - 200 OK):
  ```bash
  {
  "count": 2,
  "persons": [
  {
  "_id": "unique-identifier-1",
  "name": "Mark Essien"
  },
  {
  "_id": "unique-identifier-2",
  "name": "Jane Smith"
  }
  ],
  "message": "Persons retrieved successfully"
  }
  ```

### Get a Specific Person

- Endpoint: GET /api/:user_id
- Where user_id is the valid \_id of a person document
- Response (Success - 200 OK):
  ```bash
  {
  "_id": "unique-identifier",
  "name": "John Doe"
  }
  ```

### Update a Person

- Endpoint: PUT /api/:user_id
- Where user_id is the valid \_id of a person document
- Request Body:

  ```bash
  {
  "name": "Updated Name"
  }

  ```

- Response (Success - 200 OK):
  ```bash
  {
  "message": "Updated successfully"
  }

### Delete a Person

- Endpoint: DELETE /api/persons/:user_id
- Response (Success - 204 No Content)

## UML Diagrams
<Link to diagrams>

## Testing
- Tested my endpoints using postman


