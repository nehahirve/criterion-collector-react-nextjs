import dbConnect from '../../../../utils/dbConnect'
import User from '../../../../models/User'
import { getSession } from 'next-auth/client'
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils'

const handler = async (req, res) => {
  if (req.method !== 'PUT') {
    return
  }

  const body = JSON.parse(req.body)
  const { userId, filmId } = req.query
  const session = await getSession({ req })
  if (!session) return

  await dbConnect()
  if (body.seen === true || body.seen === false) {
    const { seen } = JSON.parse(req.body)
    try {
      User.findById(userId).then(userDoc => {
        let user = userDoc.toObject()
        user._id = userDoc._id.toString()
        const filmExists = user.filmsSeen.some(film => film.id === filmId)
        if (!filmExists) {
          userDoc.filmsSeen.push({
            id: filmId,
            seen
          })
        } else {
          userDoc.filmsSeen.forEach(film => {
            if (film.id === filmId) {
              film.seen = seen
            }
          })
        }
        userDoc.save()
        return res.status(201).json({ message: 'seen updated successfully' })
      })
    } catch (err) {
      return res.status(201).json({ message: err })
    }
  }

  if (body.notes) {
    const { notes } = JSON.parse(req.body)
    try {
      User.findById(userId).then(userDoc => {
        let user = userDoc.toObject()
        user._id = userDoc._id.toString()
        const filmExists = user.filmsSeen.some(film => film.id === filmId)
        if (!filmExists) {
          userDoc.filmsSeen.push({
            id: filmId,
            notes
          })
        } else {
          userDoc.filmsSeen.forEach(film => {
            if (film.id === filmId) {
              film.notes = notes
            }
          })
        }
        userDoc.save()
        return res.status(201).json({ message: 'notes updated successfully' })
      })
    } catch (err) {
      return res.status(201).json({ message: err })
    }
  }
}

export default handler
