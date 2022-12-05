//use populate to get any nested objects with mongoos

const { AuthenticationError } = require('apollo-server-express');
const { User, Recipe, Rating, UserRecipe } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {
        
// user: async (parent, args, context) => {
//     console.log(args)
//     if (context.user) {
//       const user = await User.findOne({_id: context.user._id}).select('-__v -password')

//     //   .populate({
    //     path: '',  //??
    //     populate: '' //??
    //   });


//       return user;
//     }

//     throw new AuthenticationError('Not logged in');
//   },

  recipe: async (parent, { _id }, context) => {
    if (context.user) {
      const user = await User.findById({_id: context.user._id})
      .populate([{
        path: 'recipe', //??
        populate: 'Recipe' //??
      }, {
        path: 'raiting',
        populate: 'Rating'
      }]);
    //   .populate({})

      return user.recipes.id(_id);
    }

    throw new AuthenticationError('Not logged in');
  },
},
Mutation: {
    addUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);
  
        return { token, user };
      },

      addRating: async (parent, { recipes }, context) => {
        console.log(context);
        if (context.user) {
          const rating = new Rating({ recipes });
  
          await User.findByIdAndUpdate(context.user._id, { $push: { ratings: rating } });
  
          return order;
        }
        throw new AuthenticationError('Not logged in');
    },

    saveRecipe: async (parent, { recipe: {name, cookingInstruction} }) => {
        const savedRecipe = await new Recipe ({
            name: name,
            cookingInstruction: cookingInstruction,
            ingridients: [], 
            raiting:[]                 // should be asigned to user

        })
        const output = savedRecipe.save()
        return{
            id: output.id,
            ...output._doc
        }


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
      }
}
};

module.exports = resolvers;

