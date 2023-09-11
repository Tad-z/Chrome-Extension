# Simple REST API for Managing Persons

## This is a simple REST API project for managing information about persons. It provides basic CRUD (Create, Read, Update, Delete) operations on a "person" resource.

## Table of Contents

- [Endpoints](#endpoints)
- [Testing](#testing)
- [Known Limitations and Assumptions](#known-limitations-and-assumptions)
- [Deployment](#deployment)


## Endpoints

### Base URL
- http://localhost:5000

### Create a Person

- Endpoint: POST /api
- Example Request: http://localhost:5000/api
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

- Endpoint: GET /api/get
- Example Request: http://localhost:5000/api/get
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
- Example Request: http://localhost:5000/api/64fedd4ce39b198b4d772eaf
- Where user_id is the valid _id of a person document
- Response (Success - 200 OK):

  ```bash
  {
  "_id": "unique-identifier-1",
  "name": "Mark Essien"
  }
  ```

### Update a Person

- Endpoint: PUT /api/:user_id
- Where user_id is the valid _id of a person document
- Example Request: http://localhost:5000/api/64fedd4ce39b198b4d772eaf
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

- Endpoint: DELETE /api/:user_id
- Example Request: http://localhost:5000/api/64fedd4ce39b198b4d772eaf
- Response (Success - 204 No Content)


## Testing
- Tested my endpoints using postman

## Known Limitations and Assumptions
- The API assumes that the name field contains only alphabetic characters and spaces.

## Deployment on render
- Sign up and Login on render using your github
- Once signed up and logged in to your account, you will see a dashboard
- Click on the New Web Service button under the Web Services option.
- Once clicked you will see a screen where you will click on the "Build and deploy from a Git repository" radio button
- Now click on the connect button for the HNG_ repo
- Fill in the fields appropriately
- Add environmental variables
- Click on Deploy.


