/*
 * Fit
 * Copyright 2013, Bill Hinderman http://billhinderman.com
 * 
 * jQuery listener to resize text per the size of its container.
 * 
 * Listens for data-resizer on an element, and takes in a default font-size (in px) for the text to take on,
 * then divides the element's width by it's parent's width, and divides the default size by this number.  If the
 * result is smaller than the default size, then the new size is applied to the element.
 * 
 * Element Attributes:
 *    data-resizer : Selector for resize
 *    data-resizer-size : Ideal font size for the text
 * 
 * Example:
 * <div>
 *    <div data-resizer data-resizer-size="45">I'm some text</div>
 *    <div data-resizer data-resizer-size="16">I'm smaller text</div>
 * </div>
 */
jQuery(function($){
	$.fn.fitText = function(defaultSize) {
		return this.each(function(){
			var $this = $(this);
			var $parent = $(this).parent();
			var resizer = (function(){
				var size = Math.min(defaultSize/($this.width() / $parent.width()), defaultSize);
				$this.css('font-size', size);
			});
			resizer();
		});
	};

	var $element = $('[data-resizer]');
	$element.fitText($element.attr('data-resizer-size'));
});
