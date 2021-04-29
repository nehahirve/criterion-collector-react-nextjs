import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const FilmSchema = new Schema({
  spine: { type: String },
  name: { type: String },
  director: { type: String },
  year: { type: String },
  coverUrl: { type: String },
  externalUrl: { type: String },
  country: { type: String }
});

export default mongoose.models.Film || mongoose.model('Film', FilmSchema);
