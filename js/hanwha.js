// 제품검색 메뉴명
const serach_menu_obj = {
	'PO': {
		'LDPE': [
			'사출성형', '코팅', '필름 발포 중공성형'
		], 
		'EVA': [
			'압출코팅', '발포', '핫멜트', '전선', '필름'
		], 
		'LLDPE': [
			'필름', '필름(Metallocene LLD)', '사출성형', '압출피복'
		], 
		'HDPE': [
			'실란수가교', 'Yarn', '사출', 'Cap'
		], 
		'전선수지(W&C)': [
			'저압 케이블 절연', '고압 케이블 절연', '옥외배전 케이블 절연', '반도전', '피복', '통신케이블', '전자선기기'
		], 
		'석유수지': []
	},
	'PVC': {
		'PVC Resin': [
			'Homopolymer', 'Copolymer', 'Terpolymer'
		], 
		'CPVC': [
			'CPVC Resin', 'CPVC Compound'
		], 
		'PSR': [
			'Micro-Suspension',
			'Emulsion',
			'Blend Resin'
		], 
		'가소제': [], 
		'OA': [], 
		'PA/MA': []
	},
	'CA': {
		'가성소다': [], 
		'염소': [], 
		'EDC': [],
		'VCM': [],
		'ECH': [],
		'염산': [],
		'HYPO': []
	},
	'TDI': {
		'TDIs': [], 
		'TDI 유도체': [],
		'TM': [
			'Mixed lsocyanate'
		],
		'TDAs': [
			'Toluene Diamine'
		],
		'XDI': []
	},
	'ASR': {
		'Soluryl Resins': [],
		'Soluryl Additives': [],
		'Soluryl Solutions': [],
		'Soluryl Emulsions': [
			'colloidal and General', 'General RFE', 'Crosslinkable RFE', 'Special RFE'
		]
	}
};

// 헤더 하위 메뉴명
const menu_list_obj = {
	'about-us': ['회사개요', '걸어온길', '중앙연구소', '글로벌 네트워크', '뉴스 & 공지사항'],
	'business-area': ['전체사업분야', 'PO', 'PVC', 'CA', 'TDI', 'ASR'],
	'sustainable-management': ['지속가능경영', '안전보건환경경영', '품질경영', '나눔경영', '상생경영', '정도경영'],
	'recruitment': ['인재상', '직무소개', '인사제도', '조직문화']
};

// 헤더 하위 메뉴 링크
const menu_list_link = {
	'about-us': ['https://hcc.hanwha.co.kr/ko/company/introduction', 'https://hcc.hanwha.co.kr/ko/company/history', 'https://hcc.hanwha.co.kr/ko/company/rnd', 'https://hcc.hanwha.co.kr/ko/company/introduction?office=fore#companySection5', 'https://hcc.hanwha.co.kr/ko/cs/news/list'],
	'business-area': ['https://hcc.hanwha.co.kr/ko/business/at-a-glance', 'https://hcc.hanwha.co.kr/ko/business/po-ldpe', 'https://hcc.hanwha.co.kr/ko/business/pvc-pvc-resin', 'https://hcc.hanwha.co.kr/ko/business/ca-naoh', 'https://hcc.hanwha.co.kr/ko/business/tdi-tdis', 'https://hcc.hanwha.co.kr/ko/business/asr-soluryl-resins'],
	'sustainable-management': ['https://hcc.hanwha.co.kr/ko/sustainabilit/sustainable-management', 'https://hcc.hanwha.co.kr/ko/sustainabilit/environmental-health-and-safety', 'https://hcc.hanwha.co.kr/ko/sustainabilit/quality-management', 'https://hcc.hanwha.co.kr/ko/sustainabilit/social-contribution', 'https://hcc.hanwha.co.kr/ko/sustainabilit/win-win-partnership', 'https://hcc.hanwha.co.kr/ko/sustainabilit/precision-management'],
	'recruitment': ['https://hcc.hanwha.co.kr/ko/recruit/talent', 'https://hcc.hanwha.co.kr/ko/recruit/job-introduction-tab1', 'https://hcc.hanwha.co.kr/ko/recruit/hr-system', 'https://hcc.hanwha.co.kr/ko/recruit/org-culture']
};
document.addEventListener('DOMContentLoaded', function(){
	// slick-slider 플러그인을 통한 main 이미지 슬라이드 구현
	$('.slider-wrapper').slick({
		autoplay: true, // 슬라이드 자동 전환 지정
    	autoplaySpeed: 4000, // 슬라이드 전환 시간 5초 지정
    	speed: 1800, // 슬라이드 전환 속도 조절
		draggable: false, // 클릭 또는 드래그로 슬라이드 넘기는 기능 비활성화
		pauseOnFocus: false, // 슬라이드에 포커스를 줄 때 슬라이드 일시정지 비활성화
		pauseOnHover: false, // 슬라이드에 마우스 올렸을 때 일시정지 비활성화
		pauseOnDotsHover: false, // 페이징 버튼에 마우스 호버 시 일시정지 비활성화
		fade: true,
	});
	
	// 페이지 alt+tab 시 슬라이더 중지/실행
	document.addEventListener('visibilitychange', function(e){
		if (document.visibilityState == 'visible') {
			$('.slider-wrapper').slick('slickPlay');
		} else {
			$('.slider-wrapper').slick('slickPause');
		}
	});

	// 브라우저 탭 이동 시 슬라이더 중지/실행
	window.addEventListener('focus', function () {
		$('.slider-wrapper').slick('slickPlay');
	});
	
	window.addEventListener('blur', function () {
		$('.slider-wrapper').slick('slickPause');
	});

	// 처음 페이지 접근 시 progress bar 실행
	let slick_init = false;
	if(!slick_init){
		let slider_index = document.querySelector('.slick-active').getAttribute('data-slick-index');
		setProgressbar(slider_index);
		slick_init = true;
	}
	
	// slide 변환 시 progress bar 실행
	$('.slider-wrapper').on('afterChange', function(e){
		let slider_index = document.querySelector('.slick-active').getAttribute('data-slick-index');
		setProgressbar(slider_index);
	});

	// progress bar click 시 slide 변화 이벤트
	let menu_select_btn = document.querySelector('.menu-select-btn-wrapper');
	menu_select_btn.addEventListener('click', function(e){
		let after_slide_idx = e.target.id.split('-')[1];
		$('.slider-wrapper').slick('slickGoTo', after_slide_idx);
	});

	// header 메뉴 hover 시 depth 구현
	let menu_list = document.querySelectorAll('#menu-wrapper ul li');
	let menu_depth_wrapper = document.querySelector('.menu-depth-wrapper');
	let header_wrapper = document.querySelector('.header-wrapper');
	let slider_wrapper = document.querySelector('.slider-wrapper')
	let hanwha_logo_wrapper = document.querySelector('.hanwha-logo-wrapper');
	let body = document.body;

	header_wrapper.addEventListener('mouseenter', function(e){
		header_wrapper.classList.remove('header-wrapper-deactive');
		header_wrapper.classList.add('header-wrapper-active');
		hanwha_logo_wrapper.classList.remove('hanwha-logo-wrapper-deactive');
		hanwha_logo_wrapper.classList.add('hanwha-logo-wrapper-active');
	});

	header_wrapper.addEventListener('mouseleave', function(e){
		let search_active_check = document.querySelector('.search-active');
		let all_menu_wrapper = document.querySelector('.all-menu-wrapper');
		if(!search_active_check.classList.contains('display-block') && !all_menu_wrapper.classList.contains('display-flex') && !(window.scrollY > slider_wrapper.clientHeight-100)){
			header_wrapper.classList.remove('header-wrapper-active');
			header_wrapper.classList.add('header-wrapper-deactive');
			hanwha_logo_wrapper.classList.remove('hanwha-logo-wrapper-active');
			hanwha_logo_wrapper.classList.add('hanwha-logo-wrapper-deactive');
		}
	});

	// 헤더 메인메뉴 이벤트
	for(let menu of menu_list){
		menu.addEventListener('mouseenter', function(e){
			create_depth_menu_html(e.target.id, menu_depth_wrapper, menu.offsetLeft);
		});

		menu.addEventListener('click', function(e){
			link_main_menu(e.target.id);
		});
	}

	// 헤더 하위메뉴 이벤트
	let menu_depth = document.querySelector('.header-depth');
	let menu_main_arr = Array.from(document.querySelectorAll('#menu-wrapper ul li'));
	menu_depth.addEventListener('mouseenter', function(e){
		let relatedTarget = e.relatedTarget;
		menu_main_arr.map((menu) => {
			if(menu == relatedTarget){
				menu.style.borderBottom = '3px solid #f37321';
				menu.classList.add('font-color-orange');
			} else {
				menu.style.borderBottom = '#000000';
				menu.classList.remove('font-color-orange');
			}
		});
	});

	menu_depth.addEventListener('mouseleave', function(e){
		menu_main_arr.map((menu) => {
			menu.style.borderBottom = 'none';
			menu.classList.remove('font-color-orange');
		});
	});

	// 마우스가 header 메뉴 또는 depth 메뉴를 벗어날 경우 depth 닫힘
	body.addEventListener('mouseover', function(e){
		if(!e.target.classList.contains('header-depth')){
			menu_depth_wrapper.style.display = 'none';
		}
	});

	// 마우스가 body(사이트 화면) 밖으로 벗어났을 경우 depth 닫힘
	body.addEventListener('mouseout', function(e){
		if(e.relatedTarget == null){
			menu_depth_wrapper.style.display = 'none';
		}
	});
	
	// 햄버거 버튼 header 이벤트
	let all_menu_btn = document.querySelector('.all-menu');
	let go_main_btn = document.querySelector('.close');
	
	all_menu_btn.addEventListener('click', function(e){
		all_menu_enter(true);
	});
	
    go_main_btn.addEventListener('click', function(e){
		all_menu_enter(false);
    });

	// 검색 버튼 클릭
	let search_btn = document.querySelector('#search');
	search_btn.addEventListener('click', function(e){
		let search_bg = document.querySelector('.search-bg-color');
		let product_search = document.querySelector('#product-search');
		let search_icon = document.querySelector('.fa-magnifying-glass');
		let closed_icon = document.querySelector('.fa-x');
		let search_show = document.querySelector('.search-active');
		let body = document.body;

		if(search_show.classList.contains('display-block')){
			search_close();
		} else {
			product_search.innerHTML = 'CLOSE';
			search_bg.classList.add('display-block');
			closed_icon.classList.add('display-block');
			search_icon.classList.add('display-none');
			search_show.classList.add('display-block');
			search_btn.querySelector('span').classList.add('font-color-orange');
			closed_icon.classList.add('font-color-orange');
			search_btn.style.border = '1px solid #f37321';
			search_btn.classList.remove('search');
			search_btn.classList.add('search-active-btn');
			body.style.overflowY = 'hidden';
		}
	});

	// 검색 시 메뉴 선택에 따른 depth html 생성
	let search_business_area = document.querySelectorAll('#business-contents ul li');
	for(let business_area of search_business_area){
		business_area.addEventListener('click', function(e){
			create_search_depth_menu_html(e);
			let search_product_name = document.querySelectorAll('#product-name-contents ul li');
			for(let product_name of search_product_name){
				product_name.addEventListener('click', function(e){
					create_search_depth_menu_html(e);
					let search_product_use = document.querySelectorAll('#product-use-contents ul li');
					for(let product_use of search_product_use){
						product_use.addEventListener('click', function(e){
							create_search_depth_menu_html(e);
						});
					}
				});
			}
			event_flag = true;
		});
	}

	// 검색 초기화
	let search_reset = document.querySelector('.search-reset');
	search_reset.addEventListener('click', function(e){
		// 검색창 텍스트 초기화
		document.querySelector('.search-input').value = '';

		// [사업분야 메뉴, 제품명 메뉴, 제품용도 메뉴] 초기화
		let menu_contents_arr = Array.from(document.querySelectorAll('.menu-contents'));
		let search_menu_wrapper_arr = Array.from(document.querySelectorAll('.search-popup-wrapper'));
		let search_menu_arr = Array.from(document.querySelectorAll('.search-menu'));
		let sample_menu_arr = Array.from(document.querySelectorAll('.menu-sample'));
		
		search_menu_arr.map((search_menu, index) => {
			if(index == 0){
				search_menu.classList.add('active-menu');
				search_menu.classList.remove('deactive-menu');
			} else {
				search_menu.classList.remove('active-menu');
				search_menu.classList.add('deactive-menu');
			}
		});
		
		search_menu_wrapper_arr.map((search_menu_wrapper, index) => {
			if(index == 0){
				search_menu_wrapper.classList.add('search-active-wrapper');
				search_menu_wrapper.classList.remove('search-deactive-wrapper');
			} else {
				search_menu_wrapper.classList.remove('search-active-wrapper');
				search_menu_wrapper.classList.add('search-deactive-wrapper');
			}
		});
		
		// [제품명 메뉴, 제품용도 메뉴] 메뉴 리스트 존재 시 삭제 / [사업분야 메뉴] 메뉴 리스트 선택 초기화
		menu_contents_arr.map((menu_contents, index) => {
			if(index == 0){
				Array.from(menu_contents.querySelectorAll('ul li')).map((menu) => {
					menu.classList.remove('search-menu-not-selected');
					menu.classList.remove('search-menu-selected');
					menu.querySelector('i').classList.remove('display-block');
				});
			} else {
				let ul = menu_contents.querySelector('ul');
				if(ul != null){
					menu_contents.removeChild(ul);
				}
			}
		});

		// [제품명 메뉴, 제품용도 메뉴] sample 이미지 생성 
		sample_menu_arr.map((sample_menu, index) => {
			sample_menu.classList.remove('display-none');
		});
	});

	// sns, language hover 이벤트
	let sns = document.querySelector('.sns');
	let sns_list = document.querySelector('.sns-list');
	let language = document.querySelector('.language');
	let language_list = document.querySelector('.language-list');
	sns.addEventListener('mouseenter', function(e){
		sns_list.classList.add('display-block');
	});

	sns.addEventListener('mouseleave', function(e){
		sns_list.classList.remove('display-block');
	});

	language.addEventListener('mouseenter', function(e){
		language_list.classList.add('display-block');
	});

	language.addEventListener('mouseleave', function(e){
		language_list.classList.remove('display-block');
	});

	// 한화 로고 클릭 이벤트
	hanwha_logo_wrapper.addEventListener('click', function(e){
		location.href = 'https://www.hanwhasolutions.com/ko/';
	});

	// 슬라이더에서 scroll-down 클릭 시 이동
	let scroll = document.querySelector('.scroll-down');
	scroll.addEventListener('click', scroll_move_click);

	window.addEventListener('scroll', function(e){
		// 일정 이상 scroll 시 header 색상 변경
		let hanwha_logo_wrapper = document.querySelector('.hanwha-logo-wrapper');
		if(window.scrollY > slider_wrapper.clientHeight - 100){
			header_wrapper.classList.remove('header-wrapper-deactive');
			header_wrapper.classList.add('header-wrapper-active');
			hanwha_logo_wrapper.classList.remove('hanwha-logo-wrapper-deactive');
			hanwha_logo_wrapper.classList.add('hanwha-logo-wrapper-active');
		} else if(this.window.scrollY <= slider_wrapper.clientHeight - 100) {
			header_wrapper.classList.remove('header-wrapper-active');
			header_wrapper.classList.add('header-wrapper-deactive');
			hanwha_logo_wrapper.classList.remove('hanwha-logo-wrapper-active');
			hanwha_logo_wrapper.classList.add('hanwha-logo-wrapper-deactive');
		}

		// Top 버튼 생성
		let top_btn = document.querySelector('.top-btn');
		if(window.scrollY > slider_wrapper.clientHeight / 2){
			top_btn.classList.add('top-btn-active');
			if(window.scrollY > 3700){
				top_btn.style.bottom = '170px';
			} else {
				top_btn.style.bottom = '60px';
			}
		} else {
			top_btn.classList.remove('top-btn-active');
		}
	});

	let top_btn = document.querySelector('.top-btn div img');
	top_btn.addEventListener('mouseenter', function(e){
		top_btn.style.bottom = '0';
	});

	top_btn.addEventListener('mouseleave', function(e){
		top_btn.style.bottom = '';
	})

	top_btn.addEventListener('click', function(e){
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	});

	let challenge_title = document.querySelectorAll('.challenge-me-detail-title');
	for(let i=0; i<challenge_title.length; i++){
		challenge_title[i].addEventListener('click', function(e){
			challenge_title[i].classList.add('active');
			if(i == 0){
				challenge_title[i].querySelector('img').setAttribute('src', '../image/challenge-me-icon-intro-active.png');
				challenge_title[i].querySelector('.arrow').classList.add('active');
				challenge_title[i].parentElement.querySelector('.challenge-me-detail-detail').classList.add('active');
				challenge_title[1].querySelector('img').setAttribute('src', '../image/challenge-me-icon-wanted.png');
				challenge_title[1].querySelector('.arrow').classList.remove('active');
				challenge_title[1].parentElement.querySelector('.challenge-me-detail-detail').classList.remove('active');
			} else {
				challenge_title[0].querySelector('img').setAttribute('src', '../image/challenge-me-icon-intro.png');
				challenge_title[0].querySelector('.arrow').classList.remove('active');
				challenge_title[0].parentElement.querySelector('.challenge-me-detail-detail').classList.remove('active');
				challenge_title[i].querySelector('img').setAttribute('src', '../image/challenge-me-icon-wanted-active.png');
				challenge_title[i].querySelector('.arrow').classList.add('active');
				challenge_title[i].parentElement.querySelector('.challenge-me-detail-detail').classList.add('active');
			}
		});
	}

	let sns_channel_btn = document.querySelectorAll('.sns-menu-list li');
	for(let btn of sns_channel_btn){
		btn.addEventListener('click', function(e){
			window.scrollTo({
				top: document.body.scrollHeight,
			});
			let posts = document.querySelectorAll('.posts ul');
			for(let i=0; i<sns_channel_btn.length; i++){
				if(sns_channel_btn[i] != btn){
					sns_channel_btn[i].classList.remove('active');
					posts[i].classList.remove('active');
				} else {
					sns_channel_btn[i].classList.add('active');
					posts[i].classList.add('active');
				}
			}
		});
	}

	// footer family site select box
	let select_box_btn = document.querySelector('.family-site-wrapper');
	select_box_btn.addEventListener('click', function(e){
		let select_box = document.querySelector('.fs-select-box');
		if(select_box.classList.contains('active')){
			select_box.classList.remove('active');
		} else {
			select_box.classList.add('active');
		}
	})

});

// 하위 메뉴 html 생성
function create_depth_menu_html(menu_name, menu_depth_wrapper, menu_start_point){
	// 해당하는 하위메뉴명, 링크 세팅
	let depth_menu_list = [];
	let depth_menu_link = [];
	
	if(menu_name == 'about-us'){
		depth_menu_list = menu_list_obj['about-us'];
		depth_menu_link = menu_list_link['about-us'];
	} else if(menu_name == 'business-area'){
		depth_menu_list = menu_list_obj['business-area'];
		depth_menu_link = menu_list_link['business-area'];
	} else if(menu_name == 'sustainable-management'){
		depth_menu_list = menu_list_obj['sustainable-management'];
		depth_menu_link = menu_list_link['sustainable-management'];
	} else if(menu_name == 'recruitment'){
		depth_menu_list = menu_list_obj['recruitment'];
		depth_menu_link = menu_list_link['recruitment'];
	}
	
	// 하위 메뉴가 하나라도 있을 경우에만 html 생성
	menu_depth_wrapper.innerHTML = '';
	if(depth_menu_list.length > 0){
		let ul = document.createElement('ul');
		// 하위 메뉴 시작위치 지정
		ul.style.marginLeft = menu_start_point + 'px';
		ul.classList.add('header-depth');
		
		depth_menu_list.forEach(function(menu, index){
			let li = document.createElement('li');
			li.classList.add('header-depth');
			
			let a = document.createElement('a');
			a.classList.add('menu-hover', 'header-depth');
			a.textContent = menu;
			a.href = depth_menu_link[index];
			
			li.appendChild(a);
			ul.appendChild(li);
			
			// 메뉴 사이 구분자 추가
			if(index != depth_menu_list.length - 1){
				let middot = document.createElement('span');
				middot.innerHTML = '&middot;';
				middot.classList.add('header-depth');
				ul.appendChild(middot);
			}
		});
		
		menu_depth_wrapper.appendChild(ul);
		menu_depth_wrapper.style.display = 'flex';
	} else {
		menu_depth_wrapper.style.display = 'none';
	}
}

// 메인 메뉴 클릭 시 링크 지정
function link_main_menu(menu_name){
	if(menu_name == 'about-us'){
		location.href = menu_list_link['about-us'][0];
	} else if(menu_name == 'business-area'){
		location.href = menu_list_link['business-area'][0];
	} else if(menu_name == 'sustainable-management'){
		location.href = menu_list_link['sustainable-management'][0];
	} else if(menu_name == 'recruitment'){
		location.href = menu_list_link['recruitment'][0];
	} else if(menu_name == 'tour'){
		location.href = 'https://www.hanwhaenergyinnovation.com/index_kr.html';
	} else if(menu_name == 'laboratory'){
		location.href = menu_list_link['about-us'][2];;
	}
}

// 햄버거 메뉴 클릭 및 화면시 전체 메뉴 이벤트 지정
function all_menu_enter(flag){
	let hide_hamburger = document.querySelector('#menu-wrapper i');
	let hide_menu = document.querySelector('#menu-wrapper ul');
	let hide_convenience = document.querySelector('.convenience-wrapper');
	let slider_wrapper = document.querySelector('.slider-wrapper');
	let slider_btn = document.querySelector('.menu-select-btn-wrapper');
	let all_menu_close_btn = document.querySelector('.all-menu-close-btn');
	let header_wrapper = document.querySelector('.header-wrapper');
	let open_menu = document.querySelector('.all-menu-wrapper');
	let search_show = document.querySelector('.search-active');
	let body = document.body;

	// 검색창 열려있는지 확인
	if(search_show.classList.contains('display-block')){
		search_close();
	}

	if(flag){
		hide_hamburger.classList.add('display-none');
		hide_menu.classList.add('display-none');
		hide_convenience.classList.add('display-none');
		slider_wrapper.classList.add('display-none');
		slider_btn.classList.add('display-none');
		all_menu_close_btn.classList.add('display-flex');
		open_menu.classList.add('display-flex');
		header_wrapper.classList.remove('header-wrapper-deactive');
		header_wrapper.classList.add('header-wrapper-active');
		body.style.overflowY = 'hidden';
	} else {
		hide_hamburger.classList.remove('display-none');
		hide_menu.classList.remove('display-none');
		hide_convenience.classList.remove('display-none');
		slider_wrapper.classList.remove('display-none');
		slider_btn.classList.remove('display-none');
		all_menu_close_btn.classList.remove('display-flex');
		open_menu.classList.remove('display-flex');
		body.style.overflowY = '';
	}
}

// progressbar 게이지 조절
let style_flag = true;
function setProgressbar(index){
	let progress_bar = document.querySelectorAll('.progress');
	let progress_value = parseInt(progress_bar[index].getAttribute('value'));
	let timeout;
	let active_progress = document.querySelectorAll('.menu-select-btn-wrapper ul li');

	if(progress_value < 80){
		if(style_flag){
			progress_bar[index].style.display = 'block';
			active_progress[index].style.backgroundColor = '#ffffff';
			active_progress[index].style.color = '#000000';
			style_flag = false;
		}
		progress_value++;
		progress_bar[index].setAttribute('value', progress_value);
		timeout = setTimeout(function() {
			setProgressbar(index);
		}, 45);
	} else {
		progress_bar[index].setAttribute('value', 0);
		progress_bar[index].style.display = 'none';
		active_progress[index].style.backgroundColor = 'rgba(14,10,22,0.2)';
		active_progress[index].style.color = '#ffffff';
		clearTimeout(timeout);
		style_flag = true;
		return;
	}
}

// 검색 버튼 depth 메뉴 클릭 시
function create_search_depth_menu_html(e){
	let target_depth = e.target.parentElement.parentElement;
	let selected_menu = e.target.innerHTML.split('<')[0];
	let sample_menu_arr = document.querySelectorAll('.menu-sample');
	let search_menu_wrapper_list = document.querySelectorAll('.search-popup-wrapper');
	let search_menu_list = document.querySelectorAll('.search-menu');

	if(target_depth.id == 'business-contents'){ // STEP 1 . 사업분야에서 메뉴 선택 시
		// [사업분야 메뉴] 제품용도 메뉴 선택되어있을 경우 초기화
		search_menu_list[2].classList.remove('active-menu');
		search_menu_list[2].classList.add('deactive-menu');
		search_menu_wrapper_list[2].classList.remove('search-active-wrapper');
		search_menu_wrapper_list[2].classList.add('search-deactive-wrapper');
		let ul = search_menu_list[2].querySelector('ul');
		if(ul != null){
			search_menu_list[2].querySelector('.menu-contents').removeChild(ul);
			sample_menu_arr[1].classList.remove('display-none');
		}

		// [사업분야 메뉴] 전체 색상 변경
		search_menu_list[0].classList.remove('active-menu');
		search_menu_list[0].classList.add('deactive-menu');
		search_menu_wrapper_list[0].classList.remove('search-active-wrapper');
		search_menu_wrapper_list[0].classList.add('search-deactive-wrapper');
		
		// [사업분야 메뉴] 선택한 li background 색상 및 화살표 효과
		selected_search_target_change(target_depth, e.target);

		// [제품명 메뉴] 전체 색상 변경
		search_menu_list[1].classList.remove('deactive-menu');
		search_menu_list[1].classList.add('active-menu');
		search_menu_wrapper_list[1].classList.remove('search-deactive-wrapper');
		search_menu_wrapper_list[1].classList.add('search-active-wrapper');

		// [제품명 메뉴] sample 이미지 숨기기
		sample_menu_arr[0].classList.add('display-none');

		// [제품명 메뉴] html 생성
		if(selected_menu == 'PO'){
			get_search_depth_items(Object.keys(serach_menu_obj['PO']).length, Object.keys(serach_menu_obj['PO']), 'search-product-name');
		} else if(selected_menu == 'PVC'){
			get_search_depth_items(Object.keys(serach_menu_obj['PVC']).length, Object.keys(serach_menu_obj['PVC']), 'search-product-name');
		} else if(selected_menu == 'CA'){
			get_search_depth_items(Object.keys(serach_menu_obj['CA']).length, Object.keys(serach_menu_obj['CA']), 'search-product-name');
		} else if(selected_menu == 'TDI'){
			get_search_depth_items(Object.keys(serach_menu_obj['TDI']).length, Object.keys(serach_menu_obj['TDI']), 'search-product-name');
		} else if(selected_menu == 'ASR'){
			get_search_depth_items(Object.keys(serach_menu_obj['ASR']).length, Object.keys(serach_menu_obj['ASR']), 'search-product-name');
		}
	} else if(target_depth.id == 'product-name-contents'){ // STEP 2 . 제품명에서 메뉴 선택 시
		// [제품명 메뉴] 전체 색상 변경
		search_menu_list[1].classList.remove('active-menu');
		search_menu_list[1].classList.add('deactive-menu');
		search_menu_wrapper_list[1].classList.remove('search-active-wrapper');
		search_menu_wrapper_list[1].classList.add('search-deactive-wrapper');

		// [제품명 메뉴] 선택한 li background 색상 및 화살표 효과
		selected_search_target_change(target_depth, e.target);

		// [제품용도 메뉴] 전체 색상 변경
		search_menu_list[2].classList.remove('deactive-menu');
		search_menu_list[2].classList.add('active-menu');
		search_menu_wrapper_list[2].classList.remove('search-deactive-wrapper');
		search_menu_wrapper_list[2].classList.add('search-active-wrapper');

		// [제품용도 메뉴] sample 이미지 숨기기
		sample_menu_arr[1].classList.add('display-none');

		// [제품용도 메뉴] html 생성
		if(selected_menu == 'LDPE'){
			get_search_depth_items(serach_menu_obj['PO']['LDPE'].length, serach_menu_obj['PO']['LDPE'], 'search-product-use');
		} else if(selected_menu == 'EVA'){
			get_search_depth_items(serach_menu_obj['PO']['EVA'].length, serach_menu_obj['PO']['EVA'], 'search-product-use');
		} else if(selected_menu == 'LLDPE'){
			get_search_depth_items(serach_menu_obj['PO']['LLDPE'].length, serach_menu_obj['PO']['LLDPE'], 'search-product-use');
		} else if(selected_menu == 'HDPE'){
			get_search_depth_items(serach_menu_obj['PO']['HDPE'].length, serach_menu_obj['PO']['HDPE'], 'search-product-use');
		} else if(selected_menu == '전선수지(W&C)'.replace(/&/g, '&amp;')){
			get_search_depth_items(serach_menu_obj['PO']['전선수지(W&C)'].length, serach_menu_obj['PO']['전선수지(W&C)'], 'search-product-use');
		} else if(selected_menu == '석유수지'){
			get_search_depth_items(serach_menu_obj['PO']['석유수지'].length, serach_menu_obj['PO']['석유수지'], 'search-product-use');
		} else if(selected_menu == 'PVC Resin'){
			get_search_depth_items(serach_menu_obj['PVC']['PVC Resin'].length, serach_menu_obj['PVC']['PVC Resin'], 'search-product-use');
		} else if(selected_menu == 'CPVC'){
			get_search_depth_items(serach_menu_obj['PVC']['CPVC'].length, serach_menu_obj['PVC']['CPVC'], 'search-product-use');
		} else if(selected_menu == 'PSR'){
			get_search_depth_items(serach_menu_obj['PVC']['PSR'].length, serach_menu_obj['PVC']['PSR'], 'search-product-use');
		} else if(selected_menu == '가소제'){
			get_search_depth_items(serach_menu_obj['PVC']['가소제'].length, serach_menu_obj['PVC']['가소제'], 'search-product-use');
		} else if(selected_menu == 'OA'){
			get_search_depth_items(serach_menu_obj['PVC']['OA'].length, serach_menu_obj['PVC']['OA'], 'search-product-use');
		} else if(selected_menu == 'PA/MA'){
			get_search_depth_items(serach_menu_obj['PVC']['PA/MA'].length, serach_menu_obj['PVC']['PA/MA'], 'search-product-use');
		} else if(selected_menu == '염소'){
			get_search_depth_items(serach_menu_obj['CA']['염소'].length, serach_menu_obj['CA']['염소'], 'search-product-use');
		} else if(selected_menu == 'EDC'){
			get_search_depth_items(serach_menu_obj['CA']['EDC'].length, serach_menu_obj['CA']['EDC'], 'search-product-use');
		} else if(selected_menu == 'VCM'){
			get_search_depth_items(serach_menu_obj['CA']['VCM'].length, serach_menu_obj['CA']['VCM'], 'search-product-use');
		} else if(selected_menu == 'ECH'){
			get_search_depth_items(serach_menu_obj['CA']['ECH'].length, serach_menu_obj['CA']['ECH'], 'search-product-use');
		} else if(selected_menu == '염산'){
			get_search_depth_items(serach_menu_obj['CA']['염산'].length, serach_menu_obj['CA']['염산'], 'search-product-use');
		} else if(selected_menu == 'HYPO'){
			get_search_depth_items(serach_menu_obj['CA']['HYPO'].length, serach_menu_obj['CA']['HYPO'], 'search-product-use');
		} else if(selected_menu == 'TDIs'){
			get_search_depth_items(serach_menu_obj['TDI']['TDIs'].length, serach_menu_obj['TDI']['TDIs'], 'search-product-use');
		} else if(selected_menu == 'TDI 유도체'){
			get_search_depth_items(serach_menu_obj['TDI']['TDI 유도체'].length, serach_menu_obj['TDI']['TDI 유도체'], 'search-product-use');
		} else if(selected_menu == 'TM'){
			get_search_depth_items(serach_menu_obj['TDI']['TM'].length, serach_menu_obj['TDI']['TM'], 'search-product-use');
		} else if(selected_menu == 'TDAs'){
			get_search_depth_items(serach_menu_obj['TDI']['TDAs'].length, serach_menu_obj['TDI']['TDAs'], 'search-product-use');
		} else if(selected_menu == 'XDI'){
			get_search_depth_items(serach_menu_obj['TDI']['XDI'].length, serach_menu_obj['TDI']['XDI'], 'search-product-use');
		} else if(selected_menu == 'Soluryl Resins'){
			get_search_depth_items(serach_menu_obj['ASR']['Soluryl Resins'].length, serach_menu_obj['ASR']['Soluryl Resins'], 'search-product-use');
		} else if(selected_menu == 'Soluryl Additives'){
			get_search_depth_items(serach_menu_obj['ASR']['Soluryl Additives'].length, serach_menu_obj['ASR']['Soluryl Additives'], 'search-product-use');
		} else if(selected_menu == 'Soluryl Solutions'){
			get_search_depth_items(serach_menu_obj['ASR']['Soluryl Solutions'].length, serach_menu_obj['ASR']['Soluryl Solutions'], 'search-product-use');
		} else if(selected_menu == 'Soluryl Emulsions'){
			get_search_depth_items(serach_menu_obj['ASR']['Soluryl Emulsions'].length, serach_menu_obj['ASR']['Soluryl Emulsions'], 'search-product-use');
		}
	} else { // STEP 3 . 제품용도에서 메뉴 선택 시
		// [제품용도 메뉴] 전체 색상 변경
		search_menu_list[2].classList.remove('active-menu');
		search_menu_list[2].classList.add('deactive-menu');
		search_menu_wrapper_list[2].classList.remove('search-active-wrapper');
		search_menu_wrapper_list[2].classList.add('search-deactive-wrapper');

		// [제품용도 메뉴] 선택한 li background 색상 및 체크 효과
		selected_search_target_change(target_depth, e.target);
	}
}

// 검색창 선택한 요소 background 색상 및 화살표 표현
function selected_search_target_change(target, now_target){
	let search_depth_list = Array.from(target.querySelectorAll('ul li'));
	search_depth_list.map((menu) => {
		let right_icon = menu.querySelector('i');
		if(now_target == menu){
			menu.classList.remove('search-menu-not-selected');
			menu.classList.add('search-menu-selected');
			right_icon.classList.add('display-block');
		} else {
			menu.classList.add('search-menu-not-selected');
			menu.classList.remove('search-menu-selected');
			right_icon.classList.remove('display-block');
		}
	});
}

// search depth 메뉴 html 생성
function get_search_depth_items(loop, menu_list, target){
	let ul = document.createElement('ul');
	for(let i=0; i<loop; i++){
		let li = document.createElement('li');
		li.textContent = menu_list[i];
		let icon = document.createElement('i');
		if(target == 'search-product-name'){
			icon.classList.add('fa-solid', 'fa-right-long');
		} else if(target =='search-product-use'){
			icon.classList.add('fa-solid', 'fa-check');
		}
		li.appendChild(icon);
		ul.appendChild(li);
	}

	// 메뉴가 5개가 초과될경우 scrollbar 생성
	if(loop > 5){
		ul.style.overflowY = 'scroll';
	} else {
		ul.style.overflowY = 'hidden';
	}

	// 기존에 ul 태그(데이터)가 있을 경우 삭제 후 추가
	let target_elements = document.querySelectorAll('.menu-contents');
	if(target == 'search-product-name'){
		let target_exists = target_elements[1].querySelector('ul');
		if(target_exists != null){
			target_elements[1].removeChild(target_exists);
		}
		target_elements[1].appendChild(ul);
	} else if(target == 'search-product-use'){
		let target_exists = target_elements[2].querySelector('ul');
		if(target_exists != null){
			target_elements[2].removeChild(target_exists);
		}
		target_elements[2].appendChild(ul);
	}
}

// 검색창 닫을때 효과
function search_close(){
	let search_btn = document.querySelector('#search');
	let search_bg = document.querySelector('.search-bg-color');
	let product_search = document.querySelector('#product-search');
	let search_icon = document.querySelector('.fa-magnifying-glass');
	let closed_icon = document.querySelector('.fa-x');
	let search_show = document.querySelector('.search-active');
	let body = document.body;

	product_search.innerHTML = '제품검색';
	search_bg.classList.remove('display-block');
	closed_icon.classList.remove('display-block');
	search_icon.classList.remove('display-none');
	search_show.classList.remove('display-block');
	search_btn.querySelector('span').classList.remove('font-color-orange');
	closed_icon.classList.remove('font-color-orange');
	search_btn.style.border = '1px solid #ccc';
	search_btn.classList.add('search');
	search_btn.classList.remove('search-active-btn');
	body.style.overflowY = '';
}

//scroll-down
function scroll_move(){
	let slider_wrapper = document.querySelector('.slider-wrapper');
	if(window.scrollY < slider_wrapper.clientHeight){
		window.scrollTo({
			top: slider_wrapper.clientHeight,
			behavior: 'smooth'
		});
	}
}

function scroll_move_click(){
	scroll_move();
	let header_wrapper = document.querySelector('.header-wrapper');
	header_wrapper.classList.remove('header-wrapper-deactive');
	header_wrapper.classList.add('header-wrapper-active');
}
