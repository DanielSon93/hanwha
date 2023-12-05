// 슬라이드 전체
let slides_wrapper = document.querySelector('.pi-slide-wrapper');
let slides = document.querySelector('.pi-slides');
let slide = document.querySelectorAll('.pi-slides img');
let current_idx = 0;
let slide_width = 1440;
let slide_cnt = slide.length;
// 슬라이드 버튼 이동
let prev_btn = document.querySelector('.prev');
let next_btn = document.querySelector('.next');
// 슬라이드 버튼 비활성화 flag
let is_event_disabled = false;
// 페이징 슬라이드
let dot_btn = document.querySelectorAll('.pi-slides-dot span');
// 슬라이드 정보
let slide_title = document.querySelectorAll('.pi-info-title div');
let slide_sub = document.querySelectorAll('.pi-info-sub-wrapper div');
let slide_detail_btn = document.querySelector('.pi-info-sub-wrapper a');
const slide_detail = ['https://hcc.hanwha.co.kr/ko/business/pvc-cpvc', 'https://hcc.hanwha.co.kr/ko/business/pvc-plasticizer', 'https://hcc.hanwha.co.kr/ko/company/rnd'];
// 슬라이드 드래그
let mouse_start_point = 0;
let mouse_end_point = 0;
let slides_position_check = 0;
let is_mouse_down = false;
let is_mouse_move = false;
let is_valid_drag = false;

document.addEventListener('DOMContentLoaded', function(){
    // 슬라이드 복제본 생성
    make_slide_clone();

    // 이전 버튼 클릭
    prev_btn.addEventListener('click',function(e){
        // 일시적인 버튼 비활성화 (다중 클릭 시 에러 방지)
        if(is_event_disabled){
            return;
        }
        btn_stop();
        // 슬라이드 이동
        move_slide(current_idx - 1);
    });

    // 다음 버튼 클릭
    next_btn.addEventListener('click',function(e){
        // 일시적인 버튼 비활성화 (다중 클릭 시 에러 방지)
        if(is_event_disabled){
            return;
        }
        btn_stop();
        // 슬라이드 이동
        move_slide(current_idx + 1);
    });

    // 페이징을 통한 슬라이드 이동
    for (let i=0; i<dot_btn.length; i++) {
        dot_btn[i].addEventListener('click', function(e){
            let move_idx = e.target.getAttribute('data-idx');
            move_slide(parseInt(move_idx));
        });
    }

    // 마우스 드래그를 통한 슬라이드 이동
    slides_wrapper.addEventListener('mousedown', function(e){
        is_mouse_down = true;
        mouse_start_point = e.clientX;
        slides_position_check = e.clientX - slides.offsetLeft;
        console.log("mousedown -> " + e.clientX, slides.offsetLeft, slides_position_check);
    });

    window.addEventListener('mouseup', function(e){
        // 마우스를 움직이지 않고 클릭만 했을 경우 mousemove에 타지않는 현상 방지 (마우스를 조금이라도 움직였는지 판단)
        if(is_mouse_move){
            slides.classList.add('animated');
            // 일정 이상 드래그 여부 확인
            if(is_valid_drag){
                if(mouse_start_point - mouse_end_point > 0){ // 왼쪽 드래그
                    next_btn.click();
                } else { // 오른쪽 드래그
                    prev_btn.click();
                }
            } else {
                move_slide(current_idx);
            }
        }
        is_mouse_move = false;
        is_mouse_down = false;
    });

    slides_wrapper.addEventListener('mousemove', function(e){
        if(is_mouse_down){
            e.preventDefault();
            is_mouse_move = true;
            slides.classList.remove('animated');
            mouse_end_point = e.clientX;
            // 일정 이상 드래그 여부 확인
            is_valid_drag = Math.abs(mouse_start_point - mouse_end_point) >= 250 ? true : false;
            // 마우스 움직이는 만큼 슬라이드 이동
            console.log("mousemove -> " + e.clientX);
            slides.style.left = (mouse_end_point - slides_position_check) + 'px';
        }
    });
    
});

// 슬라이드 복제본 생성
function make_slide_clone(){
    // 복제본 앞뒤로 생성
	for(let i=0; i<slide_cnt; i++){
		let clone_slide = slide[i].cloneNode(true);
		clone_slide.classList.add('clone-slide');
		slides.appendChild(clone_slide);
	}

	for(let i=slide_cnt-1; i>=0; i--){
		let clone_slide = slide[i].cloneNode(true);
		clone_slide.classList.add('clone-slide');
		slides.prepend(clone_slide);
	}

	// 슬라이드 길이 업데이트
	update_slide_width();
	// 슬라이드 시작지점 업데이트
	update_slide_position();
    // 슬라이드 애니메이션 클래스 추가
    setTimeout(function(){
        // 새로고침 시 슬라이드 시작지점 업데이트를 안보여주기 위해 timeout 지정
        slides.classList.add('animated');
    }, 300);
}

// 슬라이드 길이 업데이트
function update_slide_width(){
	let update_slide_cnt = document.querySelectorAll('.pi-slides img').length;
	let update_slide_width = update_slide_cnt * slide_width;
	slides.style.width = update_slide_width + 'px';
}

// 슬라이드 시작지점 업데이트
function update_slide_position(){
	let start_position = slide_width * slide_cnt;
	slides.style.transform = 'translateX(-' + start_position + 'px)';
}

// 슬라이드 이동
function move_slide(idx){
    slides.style.left = -(idx * slide_width) + 'px';
    current_idx = idx;

    // 페이징 처리를 위한 인덱스 재설정
    if (Math.abs(idx) >= slide.length) {
        idx = 0;
    } else if (idx < 0) {
        idx += slide.length;
    }

    // 페이징 부분 active 설정
    for(let i=0; i<dot_btn.length; i++){
        if(i == idx){
            dot_btn[i].classList.add('active');
        } else {
            dot_btn[i].classList.remove('active');
        }
    }

    // 슬라이드 관련 정보 active 설정
    for(let i=0; i<slide_title.length; i++){
        if(i == idx){
            slide_title[i].classList.add('active');
            slide_sub[i].classList.add('active');
            slide_detail_btn.setAttribute('href', slide_detail[i]);
        } else {
            slide_title[i].classList.add('deactive');
            slide_sub[i].classList.add('deactive');
            slide_title[i].classList.remove('active');
            slide_sub[i].classList.remove('active');
            setTimeout(function(){
                slide_title[i].classList.remove('deactive');
                slide_sub[i].classList.remove('deactive');
            }, 400);
        }
    }

    // 슬라이드가 좌우 맨 끝일때 처음으로 초기화
    if(current_idx == slide_cnt || -current_idx == slide_cnt){
        setTimeout(function(){
            slides.classList.remove('animated');
            slides.style.left = '0px';
            current_idx = 0;
        }, 500);

        setTimeout(function(){
            slides.classList.add('animated');
        }, 550)
    }
}

// 일시적인 버튼 비활성화 (슬라이드 에러 방지)
function btn_stop(){
    is_event_disabled = true;
    setTimeout(function(){
        is_event_disabled = false;
    }, 550);
}

