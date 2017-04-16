import Ember from 'ember';

export function runDay(params/*, hash*/) {
  var time_table = params[0];
  var self = params[1];
  var count = self.get('countDay');
  var text ="";
  if (time_table.day===count){
   text ='<label class="current-day">Day '+time_table.day+'</label>';
   count = count+1;
    self.set('countDay',count);
  }
  return Ember.String.htmlSafe(text);
}
export {
  runDay
};
export default Ember.Helper.helper(runDay);
