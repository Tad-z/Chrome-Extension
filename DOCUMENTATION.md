# Chrome Extension API

## This is a chrome extension backend where the frontend can send chunks of video data, merge and save the video, get the video back, transcribe the video and get a downloadable link for that video.

## Table of Contents

- [Endpoints](#endpoints)
- [Testing](#testing)

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
    "transcript": "1\n00:00:00,199 --> 00:00:03,073\nFine one's learning technique is effective for learning\n\n2\n00:00:03,073 --> 00:00:06,106\nsomething new, deepening your understanding of what you\n\n3\n00:00:06,106 --> 00:00:08,900\nalready know, or helping you study for an\n\n4\n00:00:08,900 --> 00:00:09,140\nexam.\n\n5\n00:00:11,300 --> 00:00:13,206\nThe first step is to pick a topic\n\n6\n00:00:13,206 --> 00:00:15,985\nyou want to understand and start studying it.\n\n7\n00:00:17,017 --> 00:00:18,367\nOnce you know what it is about,\n\n8\n00:00:19,017 --> 00:00:20,922\ntake a piece of paper and write about\n\n9\n00:00:20,922 --> 00:00:22,985\nit as if you're teaching the idea to\n\n10\n00:00:22,985 --> 00:00:23,620\nsomeone else.\n\n11\n00:00:24,652 --> 00:00:27,032\nIdeally, write and speak at the same time.\n\n12\n00:00:27,603 --> 00:00:29,192\nJust as a teacher does it at the\n\n13\n00:00:29,192 --> 00:00:29,589\nblackboard board.\n\n14\n00:00:31,813 --> 00:00:34,435\nThis makes you realize which part you understand\n\n15\n00:00:34,435 --> 00:00:35,920\nand where you still have gaps\n\n16\n00:00:36,832 --> 00:00:39,450\nWhenever you get stuck, go back to study\n\n17\n00:00:39,450 --> 00:00:41,910\nand repeat that process until you have explained\n\n18\n00:00:41,910 --> 00:00:43,734\na whole topic from start to end.\n\n19\n00:00:45,980 --> 00:00:48,453\nWhen you're done, repeat the process from the\n\n20\n00:00:48,453 --> 00:00:50,150\nbeginning, but this time\n\n21\n00:00:50,527 --> 00:00:51,245\nsimplify your language.\n\n22\n00:00:51,659 --> 00:00:53,573\nOr use a graphic analogy to make a\n\n23\n00:00:53,573 --> 00:00:53,812\npoint.\n\n24\n00:00:54,689 --> 00:00:57,559\nIf your explanation ends up word or confusing,\n\n25\n00:00:57,958 --> 00:01:00,111\nyou probably have not understood it well enough.\n\n26\n00:01:00,684 --> 00:01:01,882\nSo you should start again.\n\n27\n00:01:04,037 --> 00:01:07,070\nThinking about an idea by explaining it, makes\n\n28\n00:01:07,070 --> 00:01:08,906\nthis learning method very effective.\n\n29\n00:01:09,798 --> 00:01:11,950\nOnce you can explain an idea in simple\n\n30\n00:01:11,950 --> 00:01:15,058\nlanguage, you have deeply understood it and will\n\n31\n00:01:15,058 --> 00:01:16,333\nremember it for a long time.\n\n32\n00:01:18,814 --> 00:01:21,436\nRichard Fe was a leading theoretical physicist,\n\n33\n00:01:21,833 --> 00:01:24,058\nwho received a nobel prize for his work\n\n34\n00:01:24,058 --> 00:01:25,670\nin quantum electro dynamics.\n\n35\n00:01:26,777 --> 00:01:29,191\nHe was notorious for asking his fellow\n\n36\n00:01:29,569 --> 00:01:32,759\nmathematicians to explain concepts in simple language to\n\n37\n00:01:32,759 --> 00:01:34,035\ntest their understanding.\n\n38\n00:01:37,081 --> 00:01:37,958\nThanks for watching.\n\n39\n00:01:38,915 --> 00:01:41,864\nAlso check out other sprouts learning techniques as\n\n40\n00:01:41,864 --> 00:01:44,177\nthey can complement the methods explained in this\n\n41\n00:01:44,177 --> 00:01:44,575\nvideo,\n\n42\n00:01:45,866 --> 00:01:47,779\nPlease use the comments below to give us\n\n43\n00:01:47,779 --> 00:01:49,693\nfeedback. Or tell us which of the techniques\n\n44\n00:01:49,693 --> 00:01:50,570\nis your favorite.\n"
}


### Downloadable link 

- Endpoint: GET /download/:fileName
- Where fileName is filename gotten in the upload endpoint
- Example Request: https://helpmeout-e2c4.onrender.com/file/download/vid2.mp4

### List all files

- Endpoint: GET /file/
- Where fileName is filename gotten in the upload endpoint
- Example Request: https://helpmeout-e2c4.onrender.com/file/

## Testing

- Tested my endpoints with my frontend partner
- View my documentation here: 


