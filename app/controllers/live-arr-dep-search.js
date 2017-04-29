
import Ember from 'ember';
import config from 'railyatri/config/environment';
var $ = Ember.$;
export default Ember.Controller.extend({
	trainResult:[],
	showResult: false,
  showRecent: true,
  filter: [],
  filterResultData: function(posts,hours){

  	var filteredJson = posts.filter(function (row) {
  	var time = moment(row.eta).isBetween(moment().format(),moment().add(hours,'hours').format());
  
	    	if(time) {
	     	 return row;
	    	}
  	});
  	return filteredJson;
  },
	actions:{
		editForm: function(){
     $("#searchForm").slideToggle( "slow" );
		},
		filterResult: function(hours){
			var self = this;
      var result = self.filterResultData(self.get('trainResult'),hours);
      self.set('filter',result);
		},
		getTrains: function(){
			var self = this;
			$('.search-train').button('loading');
			var from_code = self.get('model.fromCode');
			if(from_code===undefined || from_code===""){
				alertify.error("Please Enter a valid Station");
				self.set('showResult',false);
				$('.search-train').button('reset');
			}else{
			from_code = from_code.split('|')[0].trim();	
			var to_code = self.get('model.toCode');
			var api = '';
			if(to_code=== undefined || to_code===""){
        api = new RestClient(config.RAILS_SERVER+'/api/live_arr_dep/'+from_code);
			}else{
				to_code = to_code.split('|')[0].trim();
        api = new RestClient(config.RAILS_SERVER+'/api/live_arr_dep/'+from_code+"/"+to_code);
			} 
			api.get().then(function(json){
				$("#searchForm").slideToggle( "slow" );
    	  $('.search-train').button('reset');
          self.set('trainResult',json.all_trains);
          self.set('showResult',true);
          self.set('showRecent',false);
          self.set('filter',self.filterResultData(self.get('trainResult'),2));
          console.log(json); 
			  },function(xhr) {
          $('.search-train').button('reset');   //XMLHtppRequest instance
          alertify.error(xhr);
      }); 
			}
		}
	}
});


