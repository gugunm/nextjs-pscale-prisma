import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

export default async function assetHandler(req, res) {
  const { method } = req

  switch (method) {
    case 'GET':
      try {
        const users = await prisma.user.findMany()
        res.status(200).json(users)
      } catch (e) {
        console.error('Request error', e)
        res.status(500).json({ error: 'Error fetching posts' })
      }
      break
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
      break
  }
}

// export default async function handler(req, res) {
//   // let includePosts = false
//   // let user

//   // // Check if posts should be included in the query
//   // if (includePosts) {
//   //   user = {
//   //     email: 'elsa@prisma.io',
//   //     name: 'Elsa Prisma',
//   //     posts: {
//   //       create: {
//   //         title: 'Include this post!',
//   //       },
//   //     },
//   //   }
//   // } else {
//   //   user = {
//   //     email: 'elsa@prisma.io',
//   //     name: 'Elsa Prisma',
//   //   }
//   // }

//   // const createUser = await prisma.user.create({ data: user })
//   res.status(200).json({ data: createUser })
// }

// main()
//   .catch((e) => {
//     throw e
//   })
//   .finally(async () => {
//     await prisma.$disconnect()
//   })
