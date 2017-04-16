import Ember from 'ember';
var $ = Ember.$;
var search_list = [];
var local_search_list = [];
export default Ember.Component.extend({
	 actions:{
      clearInput: function(self,name){
        this.set('name',undefined);
        $("."+self).prev().prev().focus();
        $("."+self).prev().prev().val('');
        $("."+self).css('display', 'none');
        console.log(name);
       }
     },
	 didInsertElement: function() {
		Ember.run.scheduleOnce('afterRender', this, function() {
			$('.trainpicker').autocomplete({
        minLength: 3,
        source: function(request, response) {
            // var loadingElement = $(this)[0]["element"].siblings();
            // $(loadingElement).show();            
            if (request.term.length <= 3 || search_list.length === 0) {

                $.ajax({
                    // url: 'https://search.railyatri.in/search',
                    url: 'https://search.railyatri.in/mobile/trainsearch',
                    data: {
                        q: request.term,
                        slip_type: 1
                    },
                    dataType: 'jsonp',
                    success: function(json) {
                        response(train_get_filter_list(json));
                    }
                });
            }
            else {
                response(get_local_filter_list(request.term.toLowerCase()));
            }
        },
        select: function(event, ui) {
            $(this).removeClass("ui-autocomplete-loading");
            $(this).val(ui.item.value); 
            $(this).next().next().css('display', 'block');  
        }
    });

    $('.trainpicker').bind('autocompletesearch', function() {
        $(this).next().css('display', 'none');
        // FLTR.station.trains = [];
        // FLTR.station.enabled = false;
    });

    $(".trainpicker").on("autocompleteselect", function() {
        $(this).next().css('display', 'block');
    	});

		});
  }
});
function train_get_filter_list(data) {
    search_list.length = 0;
    $.map(data, function(d) {
        search_list.push({
            label: d[0] + " " + d[1].replace(/\./g, ''),
            value: d[0] + " - " + d[1].replace(/\./g, ''),
            number: d[0],
            name: d[1].replace(/\./g, '').toLowerCase(),
            code: d[0],
            change: d[2]
        });
    });
    return search_list;
}

function get_local_filter_list(term) {
    local_search_list.length = 0;
    var code,name,change='';
    search_list.filter(function(list) {
        code = list.code; 
        name = list.name;
        change = list.change;
        if (code.search(term) >= 0 || name.search(term) >= 0 || change.search(term) >= 0) {
            local_search_list.push(list);
        }
    });
    return local_search_list;
}


    