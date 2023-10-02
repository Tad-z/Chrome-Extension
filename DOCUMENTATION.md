# Chrome Extension API

## This is a simple REST API project for managing information about persons. It provides basic CRUD (Create, Read, Update, Delete) operations on a "person" resource.

## Table of Contents

- [Endpoints](#endpoints)
- [Testing](#testing)
- [Known Limitations and Assumptions](#known-limitations-and-assumptions)
- [Deployment](#deployment)

## Endpoints

### Base URL

- https://helpmeout-e2c4.onrender.com

### Receive chunks from the front end

- Endpoint: POST /file/upload
- Example Request: https://helpmeout-e2c4.onrender.com/file/upload
- Request Body:

  ```bash
  Frontend sends chunks of data in array buffer format to the backend
  My frontend partner got blobs of data every 2 seconds, converted them to base64
  then to an arry buffer and sent them to the backend
  ```
- Response (Success - 200 OK):

  ```bash
  {
    "message": "Chunk received",
    "fileName": "Untitled.mp4",
  }


### Merge and Save chunks from the front end to form a video file

- Endpoint: POST /file/save
- Example Request: https://helpmeout-e2c4.onrender.com/file/save
- Response (Success - 200 OK):

  ```bash
  {
  "_id": "651a190fa1878497b7a551f2",
  "file": "/opt/render/project/src/src/uploads/Untitled_Video_20231002.mp4",
   "metadata": {
       "fileFormat": "matroska,webm",
        "Duration": "N/A"
   }
  }
  ```

### Get the video file

- Endpoint: GET /file/:fileName
- Where fileName is filename gotten in the upload endpoint
- Example Request: https://helpmeout-e2c4.onrender.com/file/declan.mp4

- Endpoint: GET /api/:fileName
- Where fileName is filename gotten in the upload endpoint
- Example Request: https://helpmeout-e2c4.onrender.com/api/declan.mp4

- Endpoint: GET /:fileName
- Where fileName is filename gotten in the upload endpoint
- Example Request: https://helpmeout-e2c4.onrender.com/declan.mp4

### Transcribe the video

- Endpoint: GET /file/transcribe/:fileName
- Where fileName is filename gotten in the upload endpoint
- Example Request: https://helpmeout-e2c4.onrender.com/file/transcribe/The Feynman Technique.mp4

- Response (Success - 200 OK):

  ```bash
  {
    
   
  }


### Downloadable link 

- Endpoint: GET /download/:fileName
- Where fileName is filename gotten in the upload endpoint
- Example Request: https://helpmeout-e2c4.onrender.com/file/download/declan.mp4

### List all files

- Endpoint: GET /file/
- Where fileName is filename gotten in the upload endpoint
- Example Request: https://helpmeout-e2c4.onrender.com/file/





## Testing

- Tested my endpoints with my frontend partner
- View my documentation here: https://documenter.getpostman.com/view/22831205/2s9YC32E7R


