class dbProxy {
  static createInstance(Sequelize, config) {
    let connectConfig = {
      host: config.host,
      dialect: config.dialect,
      pool: config.pool
    };

    return new Sequelize(
      config.db,
      config.username,
      config.password,
      connectConfig
    );
  }
}

module.exports = dbProxy;
