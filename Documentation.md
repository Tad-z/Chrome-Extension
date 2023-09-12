# Simple REST API for Managing Persons

## This is a simple REST API project for managing information about persons. It provides basic CRUD (Create, Read, Update, Delete) operations on a "person" resource.

## Table of Contents

- [Endpoints](#endpoints)
- [Testing](#testing)
- [Known Limitations and Assumptions](#known-limitations-and-assumptions)
- [Deployment](#deployment)

## Endpoints

### Base URL

- https://stage1-gyv4.onrender.com

### Create a Person

- Endpoint: POST /api
- Example Request: https://stage1-gyv4.onrender.com/api
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
  "_id": "64fedd4ce39b198b4d772eaf",
  "name": "Mark Essien"
  },
  "message": "Person created successfully"
  }
  ```

### Get a Specific Person

- Endpoint: GET /api/:user_id
- Example Request: https://stage1-gyv4.onrender.com/64fedd4ce39b198b4d772eaf
- Where user_id is the valid \_id of a person document
- Response (Success - 200 OK):

  ```bash
  {
  "_id": "64fedd4ce39b198b4d772eaf",
  "name": "Mark Essien"
  }
  ```

### Update a Person

- Endpoint: PUT /api/:user_id
- Where user_id is the valid \_id of a person document
- Example Request: https://stage1-gyv4.onrender.com/api/64fedd4ce39b198b4d772eaf
- Request Body:

  ```bash
  {
  "name": "Akintade Kayode"
  }

  ```

- Response (Success - 200 OK):

  ```bash
  {
    "updatedPerson": [
        {
            "_id": "64fedd4ce39b198b4d772eaf",
            "name": "Akintade Kayode",
            "__v": 0
        }
    ],
    "message": "Updated Successfully!"
  }
  ```

### Delete a Person

- Endpoint: DELETE /api/:user_id
- Example Request: https://stage1-gyv4.onrender.com/api/64fedd4ce39b198b4d772eaf
- Response (Success - 204 No Content)

## Testing

- Tested my endpoints using postman
- View my documentation here: https://documenter.getpostman.com/view/22831205/2s9YC32E7R

## Known Limitations and Assumptions

- The API assumes that the name field contains only alphabetic characters and spaces.

## Deployment on render

- Sign up and Login on render using your github
- Once signed up and logged in to your account, you will see a dashboard
- Click on the New Web Service button under the Web Services option.
- Once clicked you will see a screen where you will click on the "Build and deploy from a Git repository" radio button
- Now click on the connect button for the HNG\_ repo
- Fill in the fields appropriately
- Add environmental variables
- Click on Deploy.
