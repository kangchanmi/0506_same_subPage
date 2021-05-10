/* eslint-disable */

$(function () {

    /* 헤더 GNB 메뉴 */
    $("#mainMenu>li").mouseover(function () {
        $(this).children("ul").stop().fadeIn(200);
    });
    $("#mainMenu>li").mouseout(function () {
        $(this).children("ul").stop().fadeOut(200);
    });
    /* 헤더 GNB 메뉴 */


    /* 맨 위로 이동 버튼 */
    /* 스크롤 내렸을 때 버튼 띄우기 */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $("#topBtn").fadeIn(200);
        } else {
            $("#topBtn").fadeOut(200);
        }
    });
    /* 스크롤 내렸을 때 버튼 띄우기 */


    /* 클릭시 맨 위로 이동 */
    $("#topBtn").click(function () {
        $(window).scrollTop(0);

    });
    /* 클릭시 맨 위로 이동 */
    /* 맨 위로 이동 버튼 */



/* 고객센터 메뉴 안내 메세지 */
$("#gnb .custom").click(function() {
    alert("준비 중입니다");
});
/* 고객센터 메뉴 안내 메세지 */




}); /* function */
