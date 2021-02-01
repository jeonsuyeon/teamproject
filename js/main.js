/* main.js */
$(function(){
    // 메인메뉴 열기
    $('.btn_toggle').on('click',function(){
      $('#gnb').show();
    })
    // 메인메뉴 닫기
    $('.btn_close').on('click',function(){
      $('#gnb').hide();
    });
  
    let num = 0;
    let slider = setInterval(function(){
      if(num > 1) { num = 0; }
      $('.slider > img').removeClass('show');
      $('.slider > img').eq(num).addClass('show');
      console.log(num)
      num++;
    }, 3000);
    num++; 
}, 5000);