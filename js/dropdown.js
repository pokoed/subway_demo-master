$(document).ready(function () {
	/* 드롭다운 */
	$('.gnb > ul > li').on('mouseenter', function () {
		$('.snb').css('display', 'block');
		$('.snb').stop().animate({ opacity: '1' });
		$('header').stop().animate({ height: '400px' });
	});

	$('.gnb').on('mouseleave', function () {
		$('header').stop().animate({ height: '175px' });
		$('.snb')
			.stop()
			.animate({ opacity: '0' }, 500, function () {
				$('.snb').css('display', 'none');
			});
	});
});
