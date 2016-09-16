
function Utils() {}
    Utils.prototype = {
        constructor: Utils
        , isElementInView: function (element, viewType) {
            if ((typeof element) === "string") {
                var h = $(element).height();
                var elementTop = $(element).offset().top;
                var elementBottom = elementTop + $(element).height();
                
                console.log("eleTop " + elementTop + " : eleBot " +elementBottom +" : eleScroll " + $(window).scrollTop());
            }
            var pageTop = $(window).scrollTop();
            var pageBottom = pageTop + $(window).height();
            if (viewType === 1) {
                return ((pageTop < elementTop) && (pageBottom > elementBottom));
            }
            else if (viewType === 'body') {
                //                return ({view:elementBottom <= pageBottom) && (elementTop >= pageTop)
                return ({
                    view: "body"
                    , percent: Math.floor((pageTop) / (document.documentElement.scrollHeight - $(window).height()) * 100)
                });
            }
            else {
                return ({
                    view: (pageTop <= elementBottom && pageTop >= elementTop)
                    , percent: Math.floor((pageTop - elementTop) / h * 100)
                });
            }
        }
        , remainFixed: function (fixedEle,relativeEle, data){
            
            var $x = $(fixedEle); //.main
            var $y = $(relativeEle); //#database 
                        var pageTop = $(window).scrollTop();

            //stay fixed til x touchs y
            
            // console.log(data.percent);
            var elementTop = $x.offset().top;
            var elementBottom = elementTop + $x.height();

            if((0 >= ($(window).scrollTop()-$x.height())) ||  (($y.offset().top >= elementBottom) && (pageTop <= elementBottom))){
                $x.css("position","fixed");
                console.log($y.offset().top + " : eleB " + elementBottom + " : ");
                // console.log('trigged');
            } else {
                console.log('not triggered');
                $x.css("position","static");
            };
            // console.log($x.scrollTop);
            //get position
            //if in middle of screen, fixed until window top travels height of 1/2 ele
            //else return position to regular 
            
            // if ($x.)
            
            
        }
    };
    