import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-programma-должность-l');
  this.route('i-i-s-programma-должность-e',
  { path: 'i-i-s-programma-должность-e/:id' });
  this.route('i-i-s-programma-должность-e.new',
  { path: 'i-i-s-programma-должность-e/new' });
  this.route('i-i-s-programma-отчет-о-сервере-l');
  this.route('i-i-s-programma-отчет-о-сервере-e',
  { path: 'i-i-s-programma-отчет-о-сервере-e/:id' });
  this.route('i-i-s-programma-отчет-о-сервере-e.new',
  { path: 'i-i-s-programma-отчет-о-сервере-e/new' });
  this.route('i-i-s-programma-расположение-l');
  this.route('i-i-s-programma-расположение-e',
  { path: 'i-i-s-programma-расположение-e/:id' });
  this.route('i-i-s-programma-расположение-e.new',
  { path: 'i-i-s-programma-расположение-e/new' });
  this.route('i-i-s-programma-сенсоры-l');
  this.route('i-i-s-programma-сенсоры-e',
  { path: 'i-i-s-programma-сенсоры-e/:id' });
  this.route('i-i-s-programma-сенсоры-e.new',
  { path: 'i-i-s-programma-сенсоры-e/new' });
  this.route('i-i-s-programma-серверная-l');
  this.route('i-i-s-programma-серверная-e',
  { path: 'i-i-s-programma-серверная-e/:id' });
  this.route('i-i-s-programma-серверная-e.new',
  { path: 'i-i-s-programma-серверная-e/new' });
  this.route('i-i-s-programma-сотрудник-l');
  this.route('i-i-s-programma-сотрудник-e',
  { path: 'i-i-s-programma-сотрудник-e/:id' });
  this.route('i-i-s-programma-сотрудник-e.new',
  { path: 'i-i-s-programma-сотрудник-e/new' });
});

export default Router;
