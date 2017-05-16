import Ember from 'ember';
var $ = Ember.$;
export default Ember.Controller.extend({
	title: "Bus Booking",
	queryParams: ['from_code','to_code','doj','num_of_pass'],
	from_code: null,
	to_code: null,
	doj:null,
	num_of_pass: null,
	actions:{
	 changePass: function(ch){
    var no_pass = $("#french-hens").val();
    var res = 1;
    no_pass = parseInt(no_pass);
    if (ch === 0 && no_pass>1){
       res = no_pass-1;
    }else if(ch === 1 && no_pass<6){
       res = no_pass+1;
    }else{
    	res = no_pass;
    }
    $("#french-hens").val(res);
    console.log(res);
	},
	getBus: function(){
	  var from_code= $("#from_code").val();
	  var to_code= $("#to_code").val();
	  var from_name= $("#from-city").val();
	  var to_name= $("#to-city").val();
	  var doj = $("#auto-dp").val();
	  var num_of_pass = $("#french-hens").val();
	  from_name = from_name.toLowerCase().split(' ').join('-');
	  to_name = to_name.toLowerCase().split(' ').join('-');
	  var quryparam = from_name +"-to-"+to_name;
	  this.transitionToRoute('bus-booking.search-result',quryparam,{queryParams: {to_code: to_code,from_code: from_code,doj: doj,num_of_pass: num_of_pass}});
	  console.log('test');
	}

}
});
