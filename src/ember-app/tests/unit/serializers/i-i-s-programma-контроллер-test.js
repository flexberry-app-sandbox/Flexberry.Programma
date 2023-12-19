import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-programma-контроллер', 'Unit | Serializer | i-i-s-programma-контроллер', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-programma-контроллер',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-programma-режим-сервера',

    'model:i-i-s-programma-должность',
    'model:i-i-s-programma-контроллер',
    'model:i-i-s-programma-отчет-о-сервере',
    'model:i-i-s-programma-расположение',
    'model:i-i-s-programma-сенсоры',
    'model:i-i-s-programma-серверная',
    'model:i-i-s-programma-сотрудник',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
