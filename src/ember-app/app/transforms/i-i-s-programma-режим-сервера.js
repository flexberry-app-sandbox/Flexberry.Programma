import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import РежимСервераEnum from '../enums/i-i-s-programma-режим-сервера';

export default FlexberryEnum.extend({
  enum: РежимСервераEnum,
  sourceType: 'IIS.Programma.РежимСервера'
});
