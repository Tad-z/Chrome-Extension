# Simple REST API for Managing Persons

## This is a simple REST API project for managing information about persons. It provides basic CRUD (Create, Read, Update, Delete) operations on a "person" resource.

## Table of Contents

- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Database Setup](#database-setup)
- [Usage](#usage)
- [Endpoints](#endpoints)

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
  PORT=3000
  ```

### Database Setup

This API uses MongoDB as the database. Make sure you have MongoDB installed and running.

## Usage

- To start the API, run the following command:
  ```bash
  npm start
  ```

Base URL: http://localhost:3000

## Endpoints

### Create a Person
- Endpoint: POST /api

### Get a Specific Person
- Endpoint: GET /api/:user_id
- Where user_id is the valid _id of a person document

### Update a Person
- Endpoint: PUT /api/:user_id

### Delete a Person
- Endpoint: DELETE /api/:user_id





