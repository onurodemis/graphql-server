import { User } from './models/User';

export const resolvers = {
  Query: {
    healty: () => 'Graphql server is healthy',
    users: () => User.find()
  },
  Mutation: {
    createUser: async (_, { name, surname, email, birthDate = "", phone = "" }) => {
      const user = new User({ name, surname, email, birthDate, phone });

      const foundUser = await User.find({ email });

      if (foundUser.length === 0) {
        await user.save();
        return user;
      }

      throw new Error(`${email} already exists please check your information`);
    },
    updateUser: async (_, { id }) => {
      console.log(id);
    }
  }
};