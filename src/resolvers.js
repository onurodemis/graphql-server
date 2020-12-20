import { User } from './models/User';

export const resolvers = {
  Query: {
    healty: () => 'Graphql server is healthy',
    users: () => User.find()
  },
  Mutation: {
    createUser: async (_, { name, surname, email, birthDate = "", phone = "" }) => {
      const user = new User({ name, surname, email, birthDate, phone });
      await user.save();
      return user;
    }
  }
}; 