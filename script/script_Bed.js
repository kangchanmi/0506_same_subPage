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


    /* 푸터 슬라이드 */
    setInterval(footSlide, 5000)

    function footSlide() {

        $("#footShuttleFrame").animate({
                "margin-left": "-178.5px"
            },
            1500,
            "swing",
            function () {
                $("#footShuttleFrame a:first-child").insertAfter("#footShuttleFrame a:last-child");
                $("#footShuttleFrame").css({
                    "margin-left": "0"
                });
            });
    };
    /* 푸터 슬라이드 */


    /* 모달레이어 */
    /* 닫기 */
    $(".modalSide>button").click(function () {
        $(".modal").css({
            "display": "none"
        });
    });
    /* 닫기 */


    /* 찜버튼 중복 아이콘 제거 */
    $(".modalSide>button").click(function () {
        $(".delivery a:nth-child(2)").css({
            "display": "none"
        });
    });
    /* 찜버튼 중복 아이콘 제거 */


    /* 리뷰 */
    $(".deliveryBtn button:first-child").click(function () {
        alert("등록된 리뷰가 없습니다.");
    });
    /* 리뷰 */


    /* 장바구니 */
    $(".delivery a:last-child").click(function () {
        location.href = "../Order/Basket.html";
    });
    /* 장바구니 */


    /* 바로 구매 */
    $(".deliveryBtn button:last-child").click(function () {
        location.href = "../Order/Basket.html";
    });
    /* 바로 구매 */



    /* 1 */
    $(".bed_Img:first-child").click(function () {
        $("#bedModal1").css({
            "display": "block"
        });
    });
    /* 1 */

    /* 2 */
    $(".bed_Img:nth-child(2)").click(function () {
        $("#bedModal2").css({
            "display": "block"
        });
    });
    /* 2 */

    /* 3 */
    $(".bed_Img:nth-child(3)").click(function () {
        $("#bedModal3").css({
            "display": "block"
        });
    });
    /* 3 */

    /* 4 */
    $(".bed_Img:nth-child(4)").click(function () {
        $("#bedModal4").css({
            "display": "block"
        });
    });
    /* 4 */

    /* 5 */
    $("#2th_content .bed_Img:first-child").click(function () {
        $("#bedModal5").css({
            "display": "block"
        });
    });
    /* 5 */

    /* 6 */
    $("#2th_content .bed_Img:nth-child(2)").click(function () {
        $("#bedModal6").css({
            "display": "block"
        });
    });
    /* 6 */

    /* 7 */
    $("#2th_content .bed_Img:nth-child(3)").click(function () {
        $("#bedModal7").css({
            "display": "block"
        });
    });
    /* 7 */

    /* 8 */
    $("#2th_content .bed_Img:last-child").click(function () {
        $("#bedModal8").css({
            "display": "block"
        });
    });
    /* 8 */

    /* 9 */
    $("#3rd_content .bed_Img:first-child").click(function () {
        $("#bedModal9").css({
            "display": "block"
        });
    });
    /* 9 */

    /* 10 */
    $("#3rd_content .bed_Img:nth-child(2)").click(function () {
        $("#bedModal10").css({
            "display": "block"
        });
    });
    /* 10 */

    /* 11 */
    $("#3rd_content .bed_Img:nth-child(3)").click(function () {
        $("#bedModal11").css({
            "display": "block"
        });
    });
    /* 11 */

    /* 12 */
    $("#3rd_content .bed_Img:last-child").click(function () {
        $("#bedModal12").css({
            "display": "block"
        });
    });
    /* 12 */



    /* 찜하기 버튼 */
    $(".delivery a:first-child").click(function () {
        $(this).css({
            "display": "none"
        });
        $(".delivery a:nth-child(2)").css({
            "display": "inline-block"
        });
    });
    $(".delivery a:nth-child(2)").click(function () {
        $(this).css({
            "display": "none"
        });
        $(".delivery a:first-child").css({
            "display": "inline-block"
        });
    });
    /* 찜하기 버튼 */

    /* 모달레이어 */


    /* 고객센터 메뉴 안내 메세지 */
    $("#gnb .custom").click(function () {
        alert("준비 중입니다");
    });
    /* 고객센터 메뉴 안내 메세지 */



});
