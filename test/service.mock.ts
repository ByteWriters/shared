import { jest } from '@jest/globals';

import { sql } from '../../../server/src/lib/db/postgres/sql';
import { emitter } from '../../../server/src/lib/util/emitter';

function mockPostgres () {
  const fakeEmitter = emitter();

  return {
    connect: jest.fn(async () => true),
    disconnect: jest.fn(async () => null),
    load: jest.fn(async () => null),
    migrate: jest.fn(async () => 'unchanged'),
    on: fakeEmitter.on,
    onAny: fakeEmitter.onAny,
    query: jest.fn(async () => ([])),
    sql: sql,
    table: (name) => ({
      name,
      one: jest.fn(async () => ({})),
      find: jest.fn(async () => ([])),
      insert: jest.fn(async () => ({})),
      update: jest.fn(async () => ({})),
      upsert: jest.fn(async () => ({})),
      delete: jest.fn(async () => ({})),
    }),
    transaction: jest.fn(async () => ([])),
  }
}

jest.mock('../../../server/src/service', () => ({
  db: mockPostgres()
}));
