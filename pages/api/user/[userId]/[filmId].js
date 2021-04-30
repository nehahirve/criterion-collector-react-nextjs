import dbConnect from '../../../../utils/dbConnect'
import User from '../../../../models/User'
import { getSession } from 'next-auth/client'
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils'

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
          if (film.id === filmId) {
            film.seen = seen
            film.notes = ''
          }
        })
      }
      userDoc.save()
      return res.status(201).json({ message: 'resource updated successfully' })
    })
  } catch (err) {
    throw new Error(err)
  }
}

export default handler
