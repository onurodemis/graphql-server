import { User } from './models/User';

export const resolvers = {
  Query: {
    healty: () => 'Graphql server is healthy',
    users: () => User.find()
  },
  Mutation: {
    createUser: async (_, { name, surname, email, birthDate = "", phone = "" }) => {
      try {
        const user = new User({ name, surname, email, birthDate, phone });
        const foundUser = await User.find({ email });

        if (foundUser.length === 0) {
          await user.save();
        } else {
          return new Error(`${email} already exist please check your information`);
        }

        return user;
      } catch (error) {
        throw new Error('Failed to create user');
      }
    },
    updateUser: async (_, { id }) => {
      console.log(id);
    }
  }
};