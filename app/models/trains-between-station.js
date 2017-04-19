import DS from 'ember-data';

export default DS.Model.extend({
   fromCode: DS.attr('string'),
   toCode: DS.attr('string'),
   hours:  DS.attr('number')
});
