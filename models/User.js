import mongoose from 'mongoose'

const Schema = mongoose.Schema

const FilmSchema = new Schema({
  seen: { type: Boolean },
  notes: { type: String },
  id: { type: String }
})

const UserSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  filmsSeen: [FilmSchema]
})

export default mongoose.models.User || mongoose.model('User', UserSchema)
