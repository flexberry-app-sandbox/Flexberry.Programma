import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISProgrammaДолжностьLForm from './forms/i-i-s-programma-должность-l';
import IISProgrammaОтчетОСервереLForm from './forms/i-i-s-programma-отчет-о-сервере-l';
import IISProgrammaРасположениеLForm from './forms/i-i-s-programma-расположение-l';
import IISProgrammaСенсорыLForm from './forms/i-i-s-programma-сенсоры-l';
import IISProgrammaСервернаяLForm from './forms/i-i-s-programma-серверная-l';
import IISProgrammaСотрудникLForm from './forms/i-i-s-programma-сотрудник-l';
import IISProgrammaДолжностьEForm from './forms/i-i-s-programma-должность-e';
import IISProgrammaОтчетОСервереEForm from './forms/i-i-s-programma-отчет-о-сервере-e';
import IISProgrammaРасположениеEForm from './forms/i-i-s-programma-расположение-e';
import IISProgrammaСенсорыEForm from './forms/i-i-s-programma-сенсоры-e';
import IISProgrammaСервернаяEForm from './forms/i-i-s-programma-серверная-e';
import IISProgrammaСотрудникEForm from './forms/i-i-s-programma-сотрудник-e';
import IISProgrammaДолжностьModel from './models/i-i-s-programma-должность';
import IISProgrammaКонтроллерModel from './models/i-i-s-programma-контроллер';
import IISProgrammaОтчетОСервереModel from './models/i-i-s-programma-отчет-о-сервере';
import IISProgrammaРасположениеModel from './models/i-i-s-programma-расположение';
import IISProgrammaСенсорыModel from './models/i-i-s-programma-сенсоры';
import IISProgrammaСервернаяModel from './models/i-i-s-programma-серверная';
import IISProgrammaСотрудникModel from './models/i-i-s-programma-сотрудник';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-programma-должность': IISProgrammaДолжностьModel,
    'i-i-s-programma-контроллер': IISProgrammaКонтроллерModel,
    'i-i-s-programma-отчет-о-сервере': IISProgrammaОтчетОСервереModel,
    'i-i-s-programma-расположение': IISProgrammaРасположениеModel,
    'i-i-s-programma-сенсоры': IISProgrammaСенсорыModel,
    'i-i-s-programma-серверная': IISProgrammaСервернаяModel,
    'i-i-s-programma-сотрудник': IISProgrammaСотрудникModel
  },

  'application-name': 'Programma',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Programma',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Programma',
          title: 'Programma'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        programma: {
          caption: 'Programma',
          title: 'Programma',
          'i-i-s-programma-сотрудник-l': {
            caption: 'Сотрудник',
            title: ''
          },
          'i-i-s-programma-серверная-l': {
            caption: 'Серверная',
            title: ''
          },
          'i-i-s-programma-расположение-l': {
            caption: 'Расположение',
            title: ''
          },
          'i-i-s-programma-сенсоры-l': {
            caption: 'Сенсоры',
            title: ''
          },
          'i-i-s-programma-должность-l': {
            caption: 'Должность',
            title: ''
          },
          'i-i-s-programma-отчет-о-сервере-l': {
            caption: 'Отчет о сервере',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-programma-должность-l': IISProgrammaДолжностьLForm,
    'i-i-s-programma-отчет-о-сервере-l': IISProgrammaОтчетОСервереLForm,
    'i-i-s-programma-расположение-l': IISProgrammaРасположениеLForm,
    'i-i-s-programma-сенсоры-l': IISProgrammaСенсорыLForm,
    'i-i-s-programma-серверная-l': IISProgrammaСервернаяLForm,
    'i-i-s-programma-сотрудник-l': IISProgrammaСотрудникLForm,
    'i-i-s-programma-должность-e': IISProgrammaДолжностьEForm,
    'i-i-s-programma-отчет-о-сервере-e': IISProgrammaОтчетОСервереEForm,
    'i-i-s-programma-расположение-e': IISProgrammaРасположениеEForm,
    'i-i-s-programma-сенсоры-e': IISProgrammaСенсорыEForm,
    'i-i-s-programma-серверная-e': IISProgrammaСервернаяEForm,
    'i-i-s-programma-сотрудник-e': IISProgrammaСотрудникEForm
  },

});

export default translations;
