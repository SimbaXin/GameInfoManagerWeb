const dateType = require('./date-type');

let _sequelize = null;

module.exports = () => {
  if (!_sequelize) {
    throw "Please inject sequelize first.";
  }

  return _sequelize.define('Platform', {
    id: {
      type: dateType.BIGINT,
      primaryKey: true,
      unique: true
    },
    name: { type: dateType.STRING },
    slug: { type: dateType.STRING },
    url: { type: dateType.STRING },
    logo: dateType.JSON,
    website: { type: dateType.STRING },
    summary: { type: dateType.TEXT('long')},
    alternative_name: { type: dateType.STRING },
    generation: { type: dateType.INTEGER },
    games: { type: dateType.ARRAY(dateType.BIGINT) },
    versions: { type: dateType.ARRAY(dateType.JSON) }
  });
}

module.exports.inject = (sequelize) => {
  _sequelize = sequelize;
}
