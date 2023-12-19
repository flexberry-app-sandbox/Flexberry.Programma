import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-programma-отчет-о-сервере', 'Unit | Model | i-i-s-programma-отчет-о-сервере', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
