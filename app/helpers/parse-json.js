import Ember from 'ember';

export function parseJson(params/*, hash*/) {
  return JSON.stringify(params[0]);
}

export default Ember.Helper.helper(parseJson);
