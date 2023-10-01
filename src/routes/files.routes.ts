import express from 'express';
import {  receiveVideoChunk, serveMergedVideo, fileUpload, fileDownload, streamVideoFiles  } from '../controllers/files.controllers';
import uploadFilesMiddleware from '../controllers/uploads'

const router = express.Router();

// router.post('/create', createFile)
router.post('/upload', receiveVideoChunk);
// router.post('/finish', finishFile)
router.get('/serve', serveMergedVideo)
router.post('/', uploadFilesMiddleware, fileUpload);
router.get('/download/:fileName', fileDownload);
router.get('/:videoName', streamVideoFiles)

export default router;
