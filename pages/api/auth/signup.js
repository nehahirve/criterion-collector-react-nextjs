import dbConnect from '../../../utils/dbConnect'
import User from '../../../models/User'
import { hashPassword } from '../../../utils/hash'

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    return
  }
  const { email, password } = JSON.parse(req.body)

  if (!email || !password) {
    res.status(422).json({ error: 'Invalid data in json requests' })
  }

  await dbConnect()

  const userExists = await User.findOne({ email }).exec()

  if (userExists) {
    res.status(422).json({ message: 'User already exists' })
    // mongoose.connection.close();
  }

  if (!userExists) {
    const hashedPassword = await hashPassword(password)

    const user = new User({
      email,
      password: hashedPassword
    })

    try {
      await user.save()
      res.status(201).json({ message: 'successful signup' })
      //   mongoose.connection.close();
    } catch (err) {
      console.error(err)
    }
  }
}

export default handler
