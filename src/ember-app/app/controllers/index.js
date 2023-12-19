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
          caption: i18n.t('forms.application.sitemap.programma.caption'),
          title: i18n.t('forms.application.sitemap.programma.title'),
          children: [{
            link: 'i-i-s-programma-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.programma.i-i-s-programma-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.programma.i-i-s-programma-сотрудник-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-programma-серверная-l',
            caption: i18n.t('forms.application.sitemap.programma.i-i-s-programma-серверная-l.caption'),
            title: i18n.t('forms.application.sitemap.programma.i-i-s-programma-серверная-l.title'),
            children: null
          }, {
            link: 'i-i-s-programma-расположение-l',
            caption: i18n.t('forms.application.sitemap.programma.i-i-s-programma-расположение-l.caption'),
            title: i18n.t('forms.application.sitemap.programma.i-i-s-programma-расположение-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-programma-сенсоры-l',
            caption: i18n.t('forms.application.sitemap.programma.i-i-s-programma-сенсоры-l.caption'),
            title: i18n.t('forms.application.sitemap.programma.i-i-s-programma-сенсоры-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-programma-должность-l',
            caption: i18n.t('forms.application.sitemap.programma.i-i-s-programma-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.programma.i-i-s-programma-должность-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-programma-отчет-о-сервере-l',
            caption: i18n.t('forms.application.sitemap.programma.i-i-s-programma-отчет-о-сервере-l.caption'),
            title: i18n.t('forms.application.sitemap.programma.i-i-s-programma-отчет-о-сервере-l.title'),
            icon: 'building',
            children: null
          }]
        }
      ]
    };
  }),
})