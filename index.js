const Sequelize = require('sequelize');
const dbProxy = require('./src/util/db-proxy');
const config = require('./config');

(async function () {
  const sequelize = dbProxy.createInstance(Sequelize, config);

  try {
    await sequelize.authenticate();

    const User = sequelize.define('user', {
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      }
    });

    // force: true will drop the table if it already exists
    // await User.sync({force: true})
    let u = await User.build({
      firstName: 'John',
      lastName: 'Hancock'
    });
    await u.save();
  } catch(err) {
    console.error(err);
  } finally {
    console.log('success');
  }
  await sequelize.close();
})();
