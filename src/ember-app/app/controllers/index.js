import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.курсовая.caption'),
          title: i18n.t('forms.application.sitemap.курсовая.title'),
          children: [{
            link: null,
            caption: i18n.t('forms.application.sitemap.курсовая.сотрудники.caption'),
            title: i18n.t('forms.application.sitemap.курсовая.сотрудники.title'),
            children: [{
              link: 'i-i-s-programma-должность-l',
              caption: i18n.t('forms.application.sitemap.курсовая.сотрудники.i-i-s-programma-должность-l.caption'),
              title: i18n.t('forms.application.sitemap.курсовая.сотрудники.i-i-s-programma-должность-l.title'),
              icon: 'tags',
              children: null
            }, {
              link: 'i-i-s-programma-сотрудник-l',
              caption: i18n.t('forms.application.sitemap.курсовая.сотрудники.i-i-s-programma-сотрудник-l.caption'),
              title: i18n.t('forms.application.sitemap.курсовая.сотрудники.i-i-s-programma-сотрудник-l.title'),
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.курсовая.серверная-комната.caption'),
            title: i18n.t('forms.application.sitemap.курсовая.серверная-комната.title'),
            children: [{
              link: 'i-i-s-programma-серверная-l',
              caption: i18n.t('forms.application.sitemap.курсовая.серверная-комната.i-i-s-programma-серверная-l.caption'),
              title: i18n.t('forms.application.sitemap.курсовая.серверная-комната.i-i-s-programma-серверная-l.title'),
              icon: 'suitcase',
              children: null
            }, {
              link: 'i-i-s-programma-расположение-l',
              caption: i18n.t('forms.application.sitemap.курсовая.серверная-комната.i-i-s-programma-расположение-l.caption'),
              title: i18n.t('forms.application.sitemap.курсовая.серверная-комната.i-i-s-programma-расположение-l.title'),
              icon: 'book',
              children: null
            }, {
              link: 'i-i-s-programma-сенсоры-l',
              caption: i18n.t('forms.application.sitemap.курсовая.серверная-комната.i-i-s-programma-сенсоры-l.caption'),
              title: i18n.t('forms.application.sitemap.курсовая.серверная-комната.i-i-s-programma-сенсоры-l.title'),
              icon: 'address card',
              children: null
            }, {
              link: 'i-i-s-programma-отчет-о-сервере-l',
              caption: i18n.t('forms.application.sitemap.курсовая.серверная-комната.i-i-s-programma-отчет-о-сервере-l.caption'),
              title: i18n.t('forms.application.sitemap.курсовая.серверная-комната.i-i-s-programma-отчет-о-сервере-l.title'),
              icon: 'chart line',
              children: null
            }]
          }]
        }
      ]
    };
  }),
})