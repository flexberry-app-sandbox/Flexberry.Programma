import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iDСерверной: DS.attr('number'),
  iP: DS.attr('string'),
  настройки: DS.attr('string'),
  порт: DS.attr('number'),
  протокол: DS.attr('string'),
  сотрудник: DS.belongsTo('i-i-s-programma-сотрудник', { inverse: null, async: false }),
  контроллер: DS.hasMany('i-i-s-programma-контроллер', { inverse: 'серверная', async: false })
});

export let ValidationRules = {
  iDСерверной: {
    descriptionKey: 'models.i-i-s-programma-серверная.validations.iDСерверной.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  iP: {
    descriptionKey: 'models.i-i-s-programma-серверная.validations.iP.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  настройки: {
    descriptionKey: 'models.i-i-s-programma-серверная.validations.настройки.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  порт: {
    descriptionKey: 'models.i-i-s-programma-серверная.validations.порт.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  протокол: {
    descriptionKey: 'models.i-i-s-programma-серверная.validations.протокол.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-programma-серверная.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  контроллер: {
    descriptionKey: 'models.i-i-s-programma-серверная.validations.контроллер.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СервернаяE', 'i-i-s-programma-серверная', {
    iP: attr('IP', { index: 0 }),
    протокол: attr('Протокол', { index: 1 }),
    порт: attr('Порт', { index: 2 }),
    iDСерверной: attr('I d серверной', { index: 3 }),
    сотрудник: belongsTo('i-i-s-programma-сотрудник', 'Сотрудник', {
      фамилия: attr('', { index: 5 })
    }, { index: 4, displayMemberPath: 'имя' }),
    контроллер: hasMany('i-i-s-programma-контроллер', 'Контроллер', {
      модель: attr('Модель', { index: 0 })
    })
  });

  modelClass.defineProjection('СервернаяL', 'i-i-s-programma-серверная', {
    iP: attr('IP', { index: 0 }),
    настройки: attr('Настройки', { index: 1 }),
    протокол: attr('Протокол', { index: 2 }),
    порт: attr('Порт', { index: 3 }),
    iDСерверной: attr('I d серверной', { index: 4 }),
    сотрудник: belongsTo('i-i-s-programma-сотрудник', 'Имя', {
      имя: attr('Имя', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
