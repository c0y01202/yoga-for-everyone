const { AuthenticationError } = require('apollo-server-express');
const { User, Class } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('classes')
          .populate('friends');

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('classes')
        .populate('friends');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('friends')
        .populate('classes');
    },
    classes: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Class.find(params).sort({ createdAt: -1 });
    },
    class: async (parent, { _id }) => {
      return Class.findOne({ _id });
    }
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    addClass: async (parent, args, context) => {
      if (context.user) {
        const class1 = await Class.create({ ...args, username: context.user.username });
        
        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { classes: class1._id } },
          { new: true }
        );

        return class1;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    addReaction: async (parent, { classId, reactionBody }, context) => {
      if (context.user) {
        const updatedClass = await Class.findOneAndUpdate(
          { _id: classId },
          { $push: { reactions: { reactionBody, username: context.user.username } } },
          { new: true, runValidators: true }
        );

        return updatedClass;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    addFriend: async (parent, { friendId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { friends: friendId } },
          { new: true }
        ).populate('friends');

        return updatedUser;
      }

      throw new AuthenticationError('You need to be logged in!');
    }
  }
};

module.exports = resolvers;
