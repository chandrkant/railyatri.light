//Code for AutoSuggest
var search_list =[];
var local_search_list =[];
$(document).ready(function () {
    FLTR = {
        day: 'ALL',
        station: {
            enabled: false,
            trains: []
        }
    };

    $('.back').click(function () {
        reset();
    });

    $('.stationpicker').autocomplete({
        minLength: 1,
        source: function (request, response) {
            if (request.term.length <= 3 || search_list.length === 0) {
                $.ajax({
                    url: 'https://search.railyatri.in/station/search',
                    data: {
                        q: request.term
                    },
                    dataType: 'jsonp',
                    success: function (json) {
                        response(get_filter_list(json, request.term.toLowerCase()));
                    }
                });
            }
            else {
                response(get_local_filter_list_station(request.term.toLowerCase()));
            }
        },
        select: function (event, ui) {
            $(this).removeClass("ui-autocomplete-loading");
            $(this).val(ui.item.value);
            $(this).next().css('display', 'block');
            if (this.id === 'station_name') {
                block_ui('');
                $(this.form).submit();
            }
        },
        change: function(event,ui)
        {
        if (ui.item==null)
            {
            $(this).val('');
            $(this).focus();
            }
        }
    });

    $('.stationpicker').bind('autocompletesearch', function (e, ui) {
        $(this).next().css('display', 'none');
        // $(this).parent().addClass('loading');
        FLTR.station.trains = [];
        FLTR.station.enabled = false;
        // $schedule.trigger('filter');
    });

    $(".stationpicker").on("autocompleteselect", function (event, ui) {
        //$(this).next().css('display', 'block');
        //$(this).attr('station_code', ui.item.stationcode);
        //$(this).attr('station_name', ui.item.name);
        // $('[id$=hiddenGoingorComingStationCode]').val(ui.item.stationcode);
        //$('[id$=hiddenGoingorComingStationName]').val(ui.item.value);
        //alert(ui.item);
    });
});

function get_filter_list(data, term) {
    search_list.length = 0;
    $.map(data, function (d) {
        if (d.code.toLowerCase().search(term) >= 0 || d.name.toLowerCase().search(term) >= 0 ) {
            search_list.push({
                label: d.name + ' | ' + d.code,
                value: d.name + ' | ' + d.code,
                name: d.name.toLowerCase(),
                code: d.code.toLowerCase()

            });
        }
    });
    index = search_list.filter(function(el,i) {
      if (el.code == term.toLowerCase())
      {
        return i
      }  
      
    });

    if (index.length>0){
     diff = $(search_list).not(index).get();
     diff.unshift(index[0])
     search_list = diff
    }
    return search_list;
}

function get_local_filter_list_station(term) {
    local_search_list.length = 0;
    search_list.filter(function (list) {
        code = list.code, name = list.name;
        if (code.search(term) >= 0 || name.search(term) >= 0) {
            local_search_list.push(list);
        }
    });
    return local_search_list;
}