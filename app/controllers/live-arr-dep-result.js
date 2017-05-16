import Ember from 'ember';

export default Ember.Controller.extend({
  title: "Live Arr/Dep",
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
  actions: {
  	filterResult: function(hours){
		var self = this;
    var result = self.filterResultData(self.get('trainResult'),hours);
    self.set('filter',result);
		}
  }
  
});
