$(function() {		

	var $body =$("body");
	var $win = $(window), _winW ,_winH;		

	 var swiper = new Swiper('#banner-swiper', {
		 		slidesPerView: 'auto',
				 spaceBetween: 30,
				 	centeredSlides: true,
				 autoplay: {
				 	delay: 4000,
				 	disableOnInteraction: false,
				 },
	      pagination: {
	        el: '.swiper-pagination',
	        type: 'fraction',	        
	      },
	      navigation: {
	        nextEl: '.swiper-button-next',
	        prevEl: '.swiper-button-prev',
	      },
	    });

	$(window).load(function () {

		$('.tool-bar').find('.text-mode').click(function(){
			var $this = $(this);
			var TextMode = $this.data('textsize');
			$this.addClass('active').siblings().removeClass('active');
			$body.removeClass('lg md sm').addClass(TextMode);
			return false
		})

		 	
		$(window).resize(function() {
		  if($(window).width()<768){
		  	var swiper = new Swiper('#info-box-swiper', {
		      pagination: {
		        el: '.swiper-pagination',
		        type: 'fraction',
		      },
		      navigation: {
		        nextEl: '.swiper-button-next',
		        prevEl: '.swiper-button-prev',
		      },
		    });
		  }
		}).resize();


function setBstModalMaxHeight(element) {
  this.$element          = $(element);
  this.$modalContent     = this.$element.find('.modal-content');
  var $window            = $(window);
  var $modalContentOH    = this.$modalContent.outerHeight();
  var $modalContentIH    = this.$modalContent.innerHeight();
  var _modalBorderWidth   = $modalContentOH - $modalContentIH;
  var _modalDialogMargin  = $window.width() < 768 ? 20 : 60;
  var _modalContentHeight = $window.height() - (_modalDialogMargin + _modalBorderWidth);
  var _modalHeaderHeight  = this.$element.find('.modal-header').outerHeight() || 0;
  var _modalFooterHeight  = this.$element.find('.modal-footer').outerHeight() || 0;
  var _modalMaxHeight     = _modalContentHeight - (_modalHeaderHeight + _modalFooterHeight);

  this.$modalContent.css({
      'overflow': 'hidden'
  });
  
  this.$element
    .find('.modal-body').css({
      'max-height': _modalMaxHeight,
      'overflow-y': 'auto'
  });
}

$('.modal').on('show.bs.modal', function() {
  $(this).show();
  setBstModalMaxHeight(this);
});

$(window).resize(function() {
  if ($('.modal.in').length != 0) {
    setBstModalMaxHeight($('.modal.in'));
  }
});
			
	});//end load
	    
	    
})
