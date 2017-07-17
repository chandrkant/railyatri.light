import Ember from 'ember';
    var $selectedSeats = [];
  	var $suggested_seats = [];
  	var $no_passengers   =  1; 
  	var $suggested_seats_lng = 0;
  	var $ = Ember.$;
export default Ember.Component.extend({
	didInsertElement: function() {
		Ember.run.scheduleOnce('afterRender', this, function() {
			$('#drawerExample').on('drawer.closed', function(){$('.open-seat').hide();});
			$suggested_seats = $("#suggested_seats").data('suggestedseats');
			$no_passengers   =  $("#no_of_passengers").data('passengers');
			$suggested_seats_lng =$suggested_seats.split(',').length;
			$suggested_seats = $suggested_seats.split(',');
			if ($suggested_seats_lng===0){
  		 $suggested_seats_lng = $no_passengers;
  	  } 
  	  $selectedSeats = $suggested_seats;
     if($('#mobile_lower .seats_row_spc').length===4){
      $('#mobile_lower .seats_row_spc').css('width',"25%"); 
      }else if($('#mobile_lower .seats_row_spc').length===6){
        $('#mobile_lower .seats_row_spc').css('width',"16.65%");
        $('#mobile_lower .seats_row_spc').css('padding', '10px 0 0 0');
      }else if($('#mobile_lower .seats_row_spc').length===3){
        $('#mobile_lower .seats_row_spc').css('width',"33%");
      }else{
       $('#mobile_lower .seats_row_spc').css('width',"20%");
      }

    	if($('#mobile_upper .seats_row_spc').length===4){
       $('#mobile_upper .seats_row_spc').css('width',"25%"); 
    	}else if($('#mobile_upper .seats_row_spc').length===6){
        $('#mobile_upper .seats_row_spc').css('width',"16.65%");
        $('#mobile_upper .seats_row_spc').css('padding', '10px 0 0 0');
      }else if($('#mobile_upper .seats_row_spc').length===3){
        $('#mobile_upper .seats_row_spc').css('width',"33%");
      }else{
       $('#mobile_upper .seats_row_spc').css('width',"20%");
    	}
      try{
        displayOnSelectSeats($selectedSeats);
        updateFare();
      }catch(e){}
      
      $.each($selectedSeats, function( index, value ) {
		  $("._3AF7").each(function(){
        var st = $(this).data('seat');
        if (st.name === value){
          $(this).children().addClass('_1LG_');	
        }
      });
		 });
     
     $(document).on('click', "._3AF7",function(){
  		// var self = $(this);
  		var data = $(this).data('seat');
  		if($selectedSeats.indexOf(data.name)>=0){
  		}else{
  		  if(data.available==="true"){
  			  if ($selectedSeats.length === $suggested_seats_lng){
            var id = $selectedSeats.reverse().pop();
            console.log(id);
            $selectedSeats.reverse();
            $("._3AF7").each(function(){
	            $(this).children().removeClass('_1LG_');
	          });
  			  }
  			  
  			  $selectedSeats.push(data.name);  
  			  $.each($selectedSeats, function( index, value ) {
					  $("._3AF7").each(function(){
	            var st =  $(this).data('seat');
	            if (st.name === value){
	              $(this).children().addClass('_1LG_');	
	            }
	          });
					});
          try{
            displayOnSelectSeats($selectedSeats);
            updateFare();
          }catch(e){
          	console.log(e);
          }   
          console.log("==============================");
          console.log(data.name);
          console.log(data.fare);
          console.log("==============================");
          	   
  			  // console.log($selectedSeats) 
	  		  // self.children().addClass('_1LG_')
  		  }	
  		}	
  	});

	  $(document).on('click', ".fare-filter li",function(){
	     var self = this;
	     $(".fare-filter li").removeClass('activeli');
	     $(self).addClass('activeli');
	     var fare =  $(this).data('fare');
	     if (fare===""){
	      $("._3AF7").each(function(){
	        $(this).children().removeClass('IlqMQ');
	     });	
	     }else{
	     fare = parseInt(fare);
       $("._3AF7").each(function(){
	        $(this).children().removeClass('IlqMQ');
	     });
	     $("._3AF7").each(function(){	
	     	var data = $(this).data('seat');
	     	if(data.column!=="-1"){
	     	 try{
         var baseFare =  parseInt(data.baseFare);
	     	if (baseFare!==fare){
          $(this).children().addClass('IlqMQ');
          // $(this).children().removeClass("_1LG_");
	     	}
	     	}catch(e){
         console.log(e);
	     	}	
	     	} 
	     });
	     }
	  });

		}); 
	}
});
function displayOnSelectSeats(selectedSeats){
    $("#seat-on-select").text(selectedSeats.join(','));
   }
   function updateFare(){
    var $fare = 0.0;
    $.each($selectedSeats, function( index, value ) {
        $("._3AF7").each(function(){
          var st =  $(this).data('seat');
          if (st.name === value){
              $fare =  $fare+ parseFloat(st.fare);
          }
        });
      });
      $("#seat-on-select-fare").html("&#x20b9; " +parseFloat($fare));
   }