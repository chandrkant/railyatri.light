import Ember from 'ember';

export function etaTime(params/*, hash*/) {
  params = params[0];
  params = moment(params).format('LT')	;
  return params;
}
export {
  etaTime
};
export default Ember.Helper.helper(etaTime);
