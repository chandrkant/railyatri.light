import Ember from 'ember';

export function lateTime(params/*, hash*/) {
	 var sta_time = params[0];
	 var hours,min=0;
	 var text='';
   if (sta_time>60){
		hours = parseInt(sta_time/60);
		min = sta_time%60;
		text = hours+"h:"+min+"m late";
	}else{
 		if(sta_time<11){
 			text = "On Time";
 		}else{
 			text = sta_time+"m late";
 		} 

	}	
  return text;
}
export {
  lateTime
};
export default Ember.Helper.helper(lateTime);
