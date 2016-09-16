        var Utils = new Utils();


$(document).ready(function () {
    var x = $(".stickynav").height();
    var bg = document.getElementById("num");
    var ctx = bg.getContext('2d');
    ctx.canvas.width = x;
    ctx.canvas.height = x;
    var imd = null;
    var circ = Math.PI * 2;
    var quart = Math.PI / 2;
    ctx.beginPath();
    ctx.strokeStyle = '#99CC33';
    ctx.lineCap = 'square';
    ctx.closePath();
    ctx.fill();
    ctx.lineWidth = x / 10;
    imd = ctx.getImageData(0, 0, x, x);
    var draw = function (current) {
        current = current / 100;
        ctx.putImageData(imd, 0, 0);
        ctx.beginPath();
        ctx.arc(x / 2, x / 2, x / 3.5, -(quart), ((circ) * current) - quart, false);
        ctx.stroke();
    }

    
    
//    Event Controlling with jQuery
    $("#db").click(function () {
        $("#database").velocity("scroll", {
            duration: 1000
            , easing: "easeInBack"
        });
    });
    $('.codes').mouseenter(function () {
        $(this).addClass('hover');
        $('.hover').velocity({
            opacity: '1'
        }, {
            duration: 700
        });
    }).mouseleave(function () {
        $('.hover').velocity('reverse');
        $(this).removeClass('hover');
    });
    $("#db").click(function () {
        $("#database").velocity("scroll", {
            duration: 1000
            , easing: "easeInBack"
        });
    });
    $('.texts>p').mouseenter(function () {
        $(this).addClass('hover2');
        $('.hover2').velocity({
            color: '#ffffff'
        }, {
            duration: 700
            , easing: "easeOutQuad"
        }).velocity({
            backgroundColor: "#111100"
        }, {
            duration: 700
            , easing: "fadeIn"
            , queue: false
        });
    }).mouseleave(function () {
        $('.hover2').velocity('reverse').velocity({
            backgroundColor: "#FFFFFF"
        }, {
            duration: 700
            , easing: "fadeIn"
            , queue: false
        });
        $(this).removeClass('hover2');
    });
    
    $(window).scroll(function () {
        var isElementInView = Utils.isElementInView(0, "body");
        //        if (isElementInView.view) {
        draw(isElementInView.percent);
        //            $("#num").text(isElementInView.percent);
        // console.log("percent " + isElementInView.percent);
        //        }
        //        else {
        //            console.log('out of view');
        //        }
        
        Utils.remainFixed(".main", "#database", 0);
    });
});