// JavaScript Document

'use strict';

{
	const btn = document.querySelector('.btn');
	const container = document.querySelector('.container');

	btn.addEventListener('click', () => {
		btn.classList.toggle('active');
		container.classList.toggle('active');
	});
}


$(function () {
	// ハンバーガーメニューボタンがクリックされたときのイベントハンドラを設定
	$(".btn").click(function () {
	  // 現在のbodyタグのoverflowスタイルを確認
	  if ($("body").css("overflow") === "hidden") {
		// もしoverflowがhiddenなら、bodyのスタイルを元に戻す
		$("body").css({ height: "", overflow: "" });
	  } else {
		// そうでなければ、bodyにheight: 100%とoverflow: hiddenを設定し、スクロールを無効にする
		$("body").css({ height: "100%", overflow: "hidden" });
	  }
	});
});

//　メニュー内のリンクを押すとメニューページが消える
$('#nav_list a[href]').on('click', function(event) {
    $('.btn').trigger('click');
});


//　＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝　HOME　＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
//　ヘッダー
$(window).on('load scroll', function(){
    if($(this).scrollTop() > 500) {
        $('.home_header').addClass('is-show');
    }else{
        $('.home_header').removeClass('is-show');
    }
});

//　TOPイメージ
$(window).on('load scroll', function(){
    if($(this).scrollTop() > -1) {
        $('#TOP_img').addClass('is-show');
		$('#TOP_title_h1').addClass('is-show');
		$('#TOP_title_p').addClass('is-show');
    }
});

//　＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝　SALON, MENU　＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
$(window).on('load scroll', function(){
    if($(this).scrollTop() > -1) {
        $('#info_text').addClass('is-show');
		$('#menu_text').addClass('is-show');
    }
});




/*
スクロール出現
（「.offs」が付いた要素に対して、表示領域に入ったら「.ons」にクラスを変更する。）
・判定タイミング：対象がブラウザの下から 10%以上 入ったら実行、画面から出たら戻す
*/
// スクロール出現用関数（.offs ⇄ .ons）
function scr_ani(scr, offs_max) {
	var window_h = $(window).height(),
	  offs_length = $(".offs").length,
	  ons_length = $(".ons").length;
	if (offs_length) {
	  var first_item = offs_max - offs_length;
	  for (var i = 0; i < offs_length; i++) {
		var data_scr = first_item + i;
		var offs = $('.offs[data-scr="' + data_scr + '"]');
		var target = offs.offset().top;
		var trigger = target - (window_h + scr - window_h * 0.2);
		if (trigger < 0) {
		  offs.removeClass("offs").addClass("ons");
		} else {
		//   break;
		return;
		}
	  }
	}
	if (ons_length) {
	  var last_item = ons_length - 1;
	  for (var i = 0; i < ons_length; i++) {
		var data_scr = last_item - i;
		var ons = $('.ons[data-scr="' + data_scr + '"]');
		var target = ons.offset().top;
		var trigger = target - (window_h + scr);
		if (trigger > 0) {
		  ons.removeClass("ons").addClass("offs");
		} else {
		//   break;
		return;
		}
	  }
	}
}
  $(function () {
	/*
	スクロール出現
	*/
	var scr = $(window).scrollTop();
	// スクロール出現アイテムにナンバリング
	var offs_max = $(".offs").length;
	for (var i = 0; i < offs_max; i++) {
	  $(".offs").eq(i).attr("data-scr", i);
	}
	scr_ani(scr, offs_max);
	/************
	スクロール時
	************/
	$(window).on("scroll", function () {
	  var scr = $(window).scrollTop();
	  /*
	  スクロール出現
	  */
	  scr_ani(scr, offs_max);
	}); // end scroll
  }); // end function


  	// MAP
	const images = document.querySelectorAll('.img-wrap');
	const animationClassName = 'img-animation';

	const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
		entry.target.classList.add(animationClassName);
		observer.unobserve(entry.target);
		}
	});
	});

	images.forEach((image) => {
	observer.observe(image);
	});

	// title　アニメーション
	const titles = document.querySelectorAll('.title_wrap');
	const animationClassName2 = 'title_animation';

	const observer2 = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
		entry.target.classList.add(animationClassName2);
		observer2.unobserve(entry.target);
		}
	});
	});

	titles.forEach((title) => {
	observer2.observe(title);
	});


//　＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝　MENU(工程)　＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
// ヘッドセラピー
{
	const open = document.getElementById('modal-open');
	const container = document.getElementById('modal-container');
	const modalBg = document.getElementById('modal-bg');
	const close = document.getElementById('modal-close');

	open.addEventListener('click', () => {
		container.classList.add('active');
		modalBg.classList.add('active');
	});
	close.addEventListener('click', () => {
		container.classList.remove('active');
		modalBg.classList.remove('active');
	});
	modalBg.addEventListener('click', () => {
		container.classList.remove('active');
		modalBg.classList.remove('active');
	});
}

// ボディケア
{
	const open = document.getElementById('modal-open_2');
	const container = document.getElementById('modal-container_2');
	const modalBg = document.getElementById('modal-bg_2');
	const close = document.getElementById('modal-close_2');

	open.addEventListener('click', () => {
		container.classList.add('active');
		modalBg.classList.add('active');
	});
	close.addEventListener('click', () => {
		container.classList.remove('active');
		modalBg.classList.remove('active');
	});
	modalBg.addEventListener('click', () => {
		container.classList.remove('active');
		modalBg.classList.remove('active');
	});
}

// マタニティケア
{
	const open = document.getElementById('modal-open_3');
	const container = document.getElementById('modal-container_3');
	const modalBg = document.getElementById('modal-bg_3');
	const close = document.getElementById('modal-close_3');

	open.addEventListener('click', () => {
		container.classList.add('active');
		modalBg.classList.add('active');
	});
	close.addEventListener('click', () => {
		container.classList.remove('active');
		modalBg.classList.remove('active');
	});
	modalBg.addEventListener('click', () => {
		container.classList.remove('active');
		modalBg.classList.remove('active');
	});
}

// よもぎ蒸し
{
	const open = document.getElementById('modal-open_4');
	const container = document.getElementById('modal-container_4');
	const modalBg = document.getElementById('modal-bg_4');
	const close = document.getElementById('modal-close_4');

	open.addEventListener('click', () => {
		container.classList.add('active');
		modalBg.classList.add('active');
	});
	close.addEventListener('click', () => {
		container.classList.remove('active');
		modalBg.classList.remove('active');
	});
	modalBg.addEventListener('click', () => {
		container.classList.remove('active');
		modalBg.classList.remove('active');
	});
}

// baseball care&lesson
{
	const open = document.getElementById('modal-open_5');
	const container = document.getElementById('modal-container_5');
	const modalBg = document.getElementById('modal-bg_5');
	const close = document.getElementById('modal-close_5');

	open.addEventListener('click', () => {
		container.classList.add('active');
		modalBg.classList.add('active');
	});
	close.addEventListener('click', () => {
		container.classList.remove('active');
		modalBg.classList.remove('active');
	});
	modalBg.addEventListener('click', () => {
		container.classList.remove('active');
		modalBg.classList.remove('active');
	});
}

// ドライヘッドスパ
{
	const open = document.getElementById('modal-open_6');
	const container = document.getElementById('modal-container_6');
	const modalBg = document.getElementById('modal-bg_6');
	const close = document.getElementById('modal-close_6');

	open.addEventListener('click', () => {
		container.classList.add('active');
		modalBg.classList.add('active');
	});
	close.addEventListener('click', () => {
		container.classList.remove('active');
		modalBg.classList.remove('active');
	});
	modalBg.addEventListener('click', () => {
		container.classList.remove('active');
		modalBg.classList.remove('active');
	});
}