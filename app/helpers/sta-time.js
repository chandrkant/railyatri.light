import Ember from 'ember';
export function staTime(time_data) {
	var time ="";
	var hours=0;
	var min=0;
	var sta_time = time_data[1];
	var std_time = time_data[0];
	var hrs = time_data[2];
  if(hrs){
	 sta_time = sta_time-std_time;
  }
  
	if (sta_time>60){
		hours = parseInt(sta_time/60);
		min = sta_time%60;
		if(hrs){
		  time = hours+'hrs'+' '+min+"mins";	
		}else{
			time =hours+":"+min;
		}
		
	}else{
 		time = min+"mins";
	}
	
  return time;
}
export {
  staTime
};
export default Ember.Helper.helper(staTime);
