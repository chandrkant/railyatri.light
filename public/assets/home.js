$(function(){
  var $marketScrllEl = $('.rail-mall-icon'),
	marketScrlLength = $marketScrllEl.length,
	marketScrllW = $marketScrllEl.outerWidth() + 34;
	$('#mrkt-plc-scrl').width(marketScrllW * marketScrlLength);
});