import dbConnect from '../../../../utils/dbConnect'
import User from '../../../../models/User'
import { getSession } from 'next-auth/client'

const handler = async (req, res) => {
  if (req.method !== 'PUT') {
    return
  }

  const { seen } = JSON.parse(req.body)
  const { userId, filmId } = req.query

  const session = await getSession({ req })
  if (!session) return

  await dbConnect()

  try {
    User.findById(userId).then(userDoc => {
      let user = userDoc.toObject()
      user._id = userDoc._id.toString()
      const filmExists = user.filmsSeen.some(film => film.id === filmId)
      if (!filmExists) {
        userDoc.filmsSeen.push({
          id: filmId,
          seen,
          notes: ''
        })
      } else {
        userDoc.filmsSeen.forEach(film => {
          if (film._id === filmId) {
            film.seen = seen
            film.notes = ''
          }
        })
      }
      return userDoc.save()
    })
    // let user = userDoc.toObject()

    // User.save(user)
  } catch (err) {
    console.log('error is ' + err)
  }

  return res.status(201).json({ message: 'resource updated successfully' })
}

export default handler
