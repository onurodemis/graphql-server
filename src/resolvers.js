import { User } from './models/User';

  export const resolvers = {
    Query: {
      healthy: () => 'GraphQL server is healthy',
      users: () => User.find()
    },
  Mutation: {
    createUser: async (_, { name, surname, email, birthDate = "", phone = "" }) => {
      const user = new User({ name, surname, email, birthDate, phone });
      let foundUser = [];

      await User.find((_, item) => {
        foundUser = item.filter(usr => usr.email === email);
      });

      if (foundUser.length === 0) {
        await user.save();
      }
      else {
        return new Error(`${email} already exist please check your information`);
      }

      return user;
    },
    updateUser: async (_, { id }) => {
      console.log(id);
    }
  }
};