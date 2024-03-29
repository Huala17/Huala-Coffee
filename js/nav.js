$(function(){
    function move(e){

        var scrollNull = $("html,body").scrollTop();
        var $windowWidth = window.innerWidth
        console.log(scrollNull);
        // MENU效果
        if($windowWidth > 1024){
            if( scrollNull < 150 ){
                $(".nav_1").css("background-color","#4C2A1D00");
                $(".nav_1").hover(function(){
                    $(".nav_1").css("background-color","#301011");
                },function(){
                    $(".nav_1").css("background-color","#30101100");
                })
            }else{
                $(".nav_1").css({"background-color":"#301011"})
            }
        }else{
            if( scrollNull <= 0 ){
                $(".nav_1").css("background-color","#4C2A1D");
                $(".nav_1").hover(function(){
                    $(".nav_1").css("background-color","#4C2A1D");
                },function(){
                    $(".nav_1").css("background-color","#4C2A1D");
                })
            }else{
                $(".nav_1").css({"background-color":"#4C2A1DD1"})
            }
        }
    };

    $(".menuList>li").hover(function(){
        var $sub = $(this).children(".menuList-1");
        $sub.slideToggle(300);
    });


    $(".menuList_m>li").click(function(){
        var $menu02 = $(this).children(".menuList-1_m");
        $menu02.slideToggle(300);
        var $otherMenu = $(this).siblings().children(".menuList-1_m");
        $otherMenu.slideUp(300)
    })

    $(".mobileMenu").click(function(){
        var $menu01 = $(".mobileDisplay");
        $menu01.slideToggle(300);
        var $otherMenu = $(this).siblings().children(".menuList_m");
        $otherMenu.slideUp(300);
    })
    
    

    function debounce(fn){
        var timerID=null
        return function(){
        var arg=arguments[0]   //获取事件
            if(timerID){
            clearTimeout (timerID)
            }
            timerID=setTimeout( function(){
            fn(arg)              //事件传入函数
            },100)
        }
    }
    
    $(document).on("scroll",debounce(move));
})
