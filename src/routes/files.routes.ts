import express from 'express';
import { fileUpload, fileDownload, streamVideoFiles  } from '../controllers/files.controllers';
import uploadFilesMiddleware from '../controllers/uploads'

const router = express.Router();

router.post('/', uploadFilesMiddleware, fileUpload);
router.get('/download/:fileName', fileDownload);
router.get('/:videoName', streamVideoFiles)

export default router;
