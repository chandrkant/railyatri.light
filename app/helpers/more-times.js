import Ember from 'ember';

export function moreTimes(params/*, hash*/) {
 var n = params[0];
 var accum = '';
 for(var i = 1; i < n; ++i){
   accum += '<option value="'+i+'">'+i+'</option>';
 }
  return Ember.String.htmlSafe(accum);
}
export {
  moreTimes
};
export default Ember.Helper.helper(moreTimes);
