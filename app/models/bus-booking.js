import DS from 'ember-data';

export default DS.Model.extend({
   fromName: DS.attr('string'),
   toName: DS.attr('string'),
   fromCode: DS.attr('number'),
   toCode: DS.attr('number'),
   doj:   DS.attr('string'),
   pass: DS.attr('number')
});
