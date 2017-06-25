const Sequelize = require('sequelize');

(async function (Sequelize) {
  const sequelize = new Sequelize('gameinfo', 'postgres', 'lich1394', {
    host: 'localhost',
    dialect: 'postgres',

    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  });

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
    await User.sync({force: true})
    let u = await User.build({
      firstName: 'John',
      lastName: 'Hancock'
    });
    console.log(u.save);
    console.log(u.constructor.prototype);
  } catch(err) {
    console.error(err);
  } finally {
    console.log('success');
  }
  
})(Sequelize);
