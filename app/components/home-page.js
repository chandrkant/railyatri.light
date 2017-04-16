import Ember from 'ember';
var $ = Ember.$;
var $marketScrllEl ='';
var $marketScrlLength =0;
var $marketScrllW =0;
export default Ember.Component.extend({
	
	didInsertElement: function() {
	 'use strict';
	 Ember.run.scheduleOnce('afterRender', this, function() {
	   $marketScrllEl= $('.rail-mall-icon');
      $marketScrlLength = $marketScrllEl.length;
      $marketScrllW =  marketScr($marketScrllEl);
      $('#mrkt-plc-scrl').width($marketScrllW * $marketScrlLength);
	});	
	},
});

function marketScr(data){
	'use strict';
  return data.outerWidth()+34;
}