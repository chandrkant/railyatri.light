import Ember from 'ember';

var $ = Ember.$;
export default Ember.Controller.extend({
	trainResult:[],
	showResult: false,
  showRecent: true,
	actions:{
		getTrains: function(){
			var self = this;
			$('.search-train').button('loading');
			var from_code = self.get('model.fromCode').split('|')[1].trim();
			var to_code = self.get('model.toCode').split('|')[1].trim();
			if(false){
				alertify.error("Please Enter a valid train number");
				self.set('showResult',false);
				$('.search-train').button('reset');
			}else{
			$.ajax({
		    	url: "https://food1.railyatri.in/api/trains-between-station.json?from="+from_code+"&to="+to_code,
		    	dataType: 'jsonp',
		    	success: function (json) {
		    		$("#searchForm").slideToggle( "slow" );
		    	  $('.search-train').button('reset');
		          self.set('trainResult',json);
              self.set('showResult',true);
              self.set('showRecent',false);
		          console.log(json); 
		      	}
	  		});

			}
		}
	}
});