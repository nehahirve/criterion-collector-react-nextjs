import mongoose from 'mongoose'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import dbConnect from '../../../utils/dbConnect'
import User from '../../../models/User'
import { verify } from '../../../utils/hash'

export default NextAuth({
  session: {
    jwt: true
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        await dbConnect()
        const { email } = credentials
        const user = await User.findOne({ email }).exec()
        if (!user) {
          throw new Error('no user found')
        }

        const isValid = await verify(credentials.password, user.password)
        if (!isValid) throw new Error('password doesnt match')
        return {
          email: user.email
        }
      }
    })
  ]
})
