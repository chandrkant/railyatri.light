import Ember from 'ember';

export function dataPresent(params/*, hash*/) {		
  if (typeof params[0][params[1]]==="undefined" || params[0][params[1]].length<=0){
   return false;	
  }else{
  	return true;
  }
}

export default Ember.Helper.helper(dataPresent);
