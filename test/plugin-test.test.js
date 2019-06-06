'use strict';

const mock = require('egg-mock');

describe('test/plugin-test.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/plugin-test-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, pluginTest')
      .expect(200);
  });
});
