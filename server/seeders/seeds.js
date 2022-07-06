// const faker = require('faker');
const userSeeds = require('./userSeed.json');
const classSeeds = require('./classSeed.json');
const db = require('../config/connection');
const { Class, User } = require('../models');

db.once('open', async () => {
  try {
    await Class.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < classSeeds.length; i++) {
      const { _id, classAuthor } = await Class.create(classSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: classAuthor },
        {
          $addToSet: {
            classes: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});