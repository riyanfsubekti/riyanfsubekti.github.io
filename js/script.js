$('.page-scroll').on('click', function(e)
{

	var tujuan = $(this).attr('href');

	var elemenTujuan = $(tujuan);

	$('html, body').animate({
		scrollTop: elemenTujuan.offset().top
	}, 800, 'easeInOutExpo');

	e.preventDefault();
});

$(window).on('load', function(){
	$('.jumbotron .judul-atas').addClass('muncul');
	$('.jumbotron .judul-bawah').addClass('muncul');
});

$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	$('.jumbotron h1').css({
	'transform' : 'translate(0px, '+ wScroll +'%)'
	});

	$('.jumbotron h2').css({
	'transform' : 'translate(0px, '+ wScroll/0.9 +'%)'
	});

	// panel
	if(wScroll > $('.panel').offset().top -450){
		$('.panel .animasi').each(function(i){
			setTimeout(function(){
				$('.panel .animasi').eq(i).addClass('muncul');
			}, 300 * (i+1));
		});		
	};

	// panel kecil
	if(wScroll > $('.panel-kecil').offset().top -600){
		$('.panel-kecil .animasi').each(function(i){
			setTimeout(function(){
				$('.panel-kecil .animasi').eq(i).addClass('muncul');
			}, 300 * (i+1));
		});		
	};

	// tentang
	if(wScroll > $('.tentang').offset().top -400){
		$('.tentang .animasi').each(function(i){
			setTimeout(function(){
				$('.tentang .animasi').eq(i).addClass('muncul');
			}, 300 * (i+1));
		});		
	};

	// kontak
	if(wScroll > $('.kontak').offset().top -650){
		
		$('.kontak .animasi').each(function(i){
			setTimeout(function(){
				$('.kontak .animasi').eq(i).addClass('muncul');
			}, 300 * (i+1));
			setTimeout(function(){
				$('.kontak .kiri').eq(i).addClass('muncul');
			}, 300 * (i+1));
			setTimeout(function(){
				$('.kontak .kanan').eq(i).addClass('muncul');
			}, 300 * (i+1));
		});

	};
	
	// galeri
	if(wScroll > $('.galeri').offset().top -550){
		$('.galeri .animasi').each(function(i){
			setTimeout(function(){
				$('.galeri .animasi').eq(i).addClass('muncul');
			}, 300 * (i+1));
		});		
	};
	// daftar
	if(wScroll > $('.daftar').offset().top -450){
		$('.daftar .kanan').each(function(i){
			setTimeout(function(){
				$('.daftar .kanan').eq(i).addClass('muncul');
			}, 300 * (i+1));
		});
		$('.daftar .kiri').each(function(i){
			setTimeout(function(){
				$('.daftar .kiri').eq(i).addClass('muncul');
			}, 300 * (i+1));
		});
	};

	// navigasi
	if(wScroll > $('.navigasi').offset().top -600){
		$('.navigasi').each(function(i){
			setTimeout(function(){
				$('.navigasi').eq(i).addClass('muncul');
			}, 300 * (i+1));
		});		
	};
});