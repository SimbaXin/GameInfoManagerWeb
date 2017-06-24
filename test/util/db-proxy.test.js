import test from 'ava';
import sinon from 'sinon';

import dbProxy from '../../src/util/db-proxy';

test('connect', t => {
  let db = 'testDB';
  let username = 'testUser';
  let password = 'testPWD';
  let config = {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
      max: 100,
      min: 0,
      idel: 10000
    }
  };
  let connectConfig = {
    db, username, password,
    host: config.host,
    dialect: config.dialect,
    pool: config.pool
  };

  let fakeSequelize = {
    sequelize: () => {}
  };

  let mock = sinon.mock(fakeSequelize);
  mock.expects('sequelize')
    .once()
    .withExactArgs(
      db,
      username,
      password,
      config
    );

  dbProxy.createInstance(fakeSequelize, connectConfig);

  mock.verify();
  t.pass();
});
