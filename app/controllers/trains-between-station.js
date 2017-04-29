import Ember from 'ember';
import config from 'railyatri/config/environment';
var $ = Ember.$;
export default Ember.Controller.extend({
	trainResult:[],
	showResult: false,
  showRecent: true,
	actions:{
		getTrains: function(){
			var self = this;
			$('.search-train').button('loading');
			var from_code = self.get('model.fromCode');
			var to_code = self.get('model.toCode');
			if(from_code && to_code){
		  	from_code = from_code.split('|')[0].trim();	
			  to_code = to_code.split('|')[0].trim();
			  var  api = new RestClient(config.RAILS_SERVER+'/api/train_bw_station/'+from_code+"/"+to_code);
			  api.get().then(function(json){
					$('.search-train').button('reset');
        	$("#searchForm").slideToggle( "slow" );
        	self.set('trainResult',json);
        	self.set('showResult',true);
        	self.set('showRecent',false);
			  	},function(xhr) {
	       	$('.search-train').button('reset');   //XMLHtppRequest instance
	       		alertify.error(xhr);
        	});
			}else{
	      alertify.error("Please Enter a valid Station");
				self.set('showResult',false);
				$('.search-train').button('reset');
			}
		}
	}
});