import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: {
    strategies: [
      {
        name: 'dev-bypass',
        authenticate: async ({ payload }) => {
          try {
            const users = await payload.find({
              collection: 'users',
              limit: 1,
            })
            let user = users.docs[0]
            if (!user) {
              user = await payload.create({
                collection: 'users',
                data: {
                  email: 'dev@ar-construction.ca',
                  password: 'devpassword123',
                },
              })
            }
            return {
              user: {
                ...user,
                collection: 'users',
                _strategy: 'dev-bypass',
              },
            }
          } catch (e) {
            console.error('Bypass auth error:', e)
            return { user: null }
          }
        },
      },
    ],
  },
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
}
