import Ember from 'ember';
export default Ember.Controller.extend({
	showMyModal: false,
	actions:{
		doSome: function() {
			// var api = new RestClient('https://food1.railyatri.in/ecomm/save_order.json');
			// api.on('request', function(xhr) {
   //              xhr.setRequestHeader('Accept', '*/*');
   //              // xhr.setRequestHeader('Access-Control-Allow-Credentials ','true');
   //              xhr.setRequestHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
   //          });
   //          api.post({color: 'white', name: 'Moo'}).then(function(cow) {
			//     console.log(cow); 
			// }, function(xhr) {
			//     console.log(xhr);
			// });
            var opt ={
    "customer_details": {
        "success": false,
        "btb": true,
        "btb_org_id": 1,
        "btb_org_name": "BTB Org",
        "pnr_number": "4319083089",
        "railyatri_user_id": 1,
        "journey_id": 1,
        "invoice_id": 0,
        "passenger_name": "Test UserTest",
        "passenger_phone_no": "9639135344",
        "passenger_email": "emp@gmail.com"
    },
    "order_list": [{
        "data": [{
            "date": "2017-05-31",
            "expected_arrival": "18:55",
            "real_day_time": "18:55",
            "res_id": "473",
            "order_item": [{
                "expected_arrival": "18:55",
                "real_day_time": "18:55",
                "station": "SC",
                "price_cart": 101.0,
                "res_id": 480,
                "btb_journey_id": 1,
                "food_type": 1,
                "item_quantity": 1,
                "menu_id": 25165,
                "date": "2016-05-31"
            }]
        }, {
            "date": "2016-05-30",
            "expected_arrival": "15:55",
            "real_day_time": "15:55",
            "res_id": "473",
            "order_item": [{
                "expected_arrival": "15:55",
                "real_day_time": "15:55",
                "station": "SC",
                "price_cart": 156.0,
                "res_id": 480,
                "btb_journey_id": 1,
                "food_type": 1,
                "item_quantity": 1,
                "menu_id": 25161,
                "date": "2016-05-30"
            }, {
                "expected_arrival": "15:55",
                "real_day_time": "15:55",
                "station": "SC",
                "price_cart": 134.0,
                "res_id": 480,
                "btb_journey_id": 1,
                "food_type": 1,
                "item_quantity": 1,
                "menu_id": 25164,
                "date": "2016-05-30"
            }]
        }]
    }]
};
			$.ajax({
        	 url: 'https://food1.railyatri.in/ecomm/save_order.json',
        	 type: 'POST',
        	 dataType: 'json',
        	 crossOrigin: true,
        	 data: opt,
        	 success: function(data){
              console.log(data)
              debugger;
        	},
        	error: function(asd,vgd,nk){
              debugger;
        	}
        	});
		}
	}
});
