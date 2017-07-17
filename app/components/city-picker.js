import Ember from 'ember';
var cache = [];
var search_list = [];
var local_search_list = [];
var $ = Ember.$;
export default Ember.Component.extend({
	didInsertElement: function() {
		Ember.run.scheduleOnce('afterRender', this, function() {
      $( ".citysearch" ).autocomplete({
			  source: function( request, response ) {
			  var term = request.term;
			    if ( term in cache ) {
			      response( cache[ term ] );
			      return;
			    }
        if (term.length <= 1 || search_list.length === 0) {  
			    $.ajax( {
			      url: "https://test.railyatri.in/redbus/source-city-list.json",
			      dataType: "jsonp",
			      data: {
			        q: request.term
			      },
			      success: function( data ) {
			        cache[ term ] = data.city_list;
			        response( get_filter_list_city(data.city_list,term.toLowerCase()) );
			      }
			    } );
        }else{
          response(get_local_filter_list(term.toLowerCase()));
        }
			  },
			  minLength: 1,
			  select: function( event, ui ) {
			    $(this).next().val(ui.item.code);
			    $("#from-city").val(ui.item.label);
			    $("#from_code").val(ui.item.code);
			    $("#from_search_suggestion_page").hide();
			  }
			});

      $( ".citysearchdest" ).autocomplete({
      	source: function( request, response ) {
      	var term = request.term;
        if ( term in cache ) {
          response( cache[ term ] );
          return;
        }
        if (term.length <= 1 || search_list.length === 0) {
          $.ajax( {
            url: "https://test.railyatri.in/redbus/bus-destination-city.json",
            dataType: "jsonp",
            data: {
              source_city_id: $('#from_code').val(),
              q: request.term
            },
            success: function( data ) {
              cache[ term ] = data.city_list;
              response( get_filter_list_city(data.city_list,term.toLowerCase()) );
            	}
          });
        }
        else{
            response(get_local_filter_list(term.toLowerCase()));
        }
      },
      minLength: 1,
       select: function( event, ui ) {
         $(this).next().val(ui.item.code);
         $("#to-city").val(ui.item.label);
         $("#to_code").val(ui.item.code);
         $("#to_search_suggestion_page").hide();
        }
       });

  		});
		}
});

function get_filter_list_city(data, term) {
    cache.length = 0;
    $.map(data, function (d) {
        if (d.city_name.toLowerCase().search(term) >= 0) {
            cache.push({
                label: d.city_name ,
                value: d.city_name ,
                name: d.city_name.toLowerCase(),
                code: d.city_id

            });
        }


    });
    return cache;
}

function get_local_filter_list(term) {
    local_search_list.length = 0;
    var code,name;
    search_list.filter(function(list) {
        code = list.city_id;
        name = list.city_name;
        if (code.search(term) >= 0 || name.search(term) >= 0) {
            local_search_list.push(list);
        }
    });
    return local_search_list;
}
