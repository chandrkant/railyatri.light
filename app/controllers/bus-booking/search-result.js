import Ember from 'ember';

export default Ember.Controller.extend({
	title: "Bus Booking",
	queryParams: ['from_code','to_code','doj','num_of_pass'],
	from_code: null,
	to_code: null,
	doj:null,
	from_name: '',
	to_name: '',
	num_of_pass: null,
	availableTrips: null,
	responseData: null, 
	filterCheck: true,
	actions: {
	 sort: function(){
       // var result = this.get('availableTrips');

	 }
	}
});
// function sortResults(prop, asc) {
//     people = people.sort(function(a, b) {
//         if (asc) {
//             return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
//         } else {
//             return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
//         }
//     });
//     showResults();
// }
