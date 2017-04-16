
import Ember from 'ember';

var $ = Ember.$;
export default Ember.Controller.extend({
	trainResult:[],
	showResult: false,
  showRecent: true,
  filter: [],
  filterResultData: function(posts,hours){

  	var filteredJson = posts.filter(function (row) {
  		var time = moment(row.eta).isBetween(moment().format(),moment().add(hours,'hours').format())
  
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
			var url ="";
			$('.search-train').button('loading');
			var from_code = self.get('model.fromCode');
			if(from_code===undefined || from_code===""){
				alertify.error("Please Enter a valid Station");
				self.set('showResult',false);
				$('.search-train').button('reset');
			}else{
			from_code = from_code.split('|')[1].trim();	
			var to_code = self.get('model.toCode');
			if(to_code=== undefined || to_code===""){
        url = "https://livestatus.railyatri.in/api/train_at_station/"+from_code+"/8.json";
			}else{
				to_code = to_code.split('|')[1].trim();
        url = "https://livestatus.railyatri.in/api/train_at_station/"+from_code+"/"+to_code+"/8.json";
			} 
			$.ajax({
		    	url: url,
		    	dataType: 'jsonp',
		    	success: function (json) {
		    		$("#searchForm").slideToggle( "slow" );
		    	  $('.search-train').button('reset');
		          self.set('trainResult',json.all_trains);
              self.set('showResult',true);
              self.set('showRecent',false);
              self.set('filter',self.filterResultData(self.get('trainResult'),2));
		          console.log(json); 
		      	},error: function(e,r,d){
		      		/* exported attrs, d,r */
              $('.search-train').button('reset');
              alertify.error(e);
		      	}
	  		});

			}
		}
	}
});


