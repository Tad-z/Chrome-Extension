import mongoose, { Document, Model, Schema } from 'mongoose';

interface Ifile extends Document {
  file: string,
}

const fileSchema: Schema<Ifile> = new mongoose.Schema({
  file: {
    type: String,
    required: true
  },
});

const File: Model<Ifile> = mongoose.model<Ifile>('File', fileSchema);
export default File;
