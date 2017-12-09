define(function (require) {
    var $ = require('jquery'),
        detail = require('detail');

    function initSazeTechIndex() {
        setTimeout(function () {
            $('.saze-tech-logo').removeClass('fadeIn').addClass('fadeOut'); //隐藏首页LOGO
            setTimeout(function () {
                //展示logo
                $('.saze-tech-logo-title').addClass('saze-tech-logo-title-after');
                $('.saze-tech-logo').addClass('saze-tech-logo-after').removeClass('fadeOut').addClass('fadeIn');
                //手机端一页展示
                $('.saze-tech-detail').removeClass('hidden').addClass('visible-xs').addClass('animated fadeIn');
                $('.saze-tech-index').removeClass('hidden').addClass('visible-xs').addClass('animated fadeIn');
                showSazeTechIndex(); //显示主页
                $('.saze-tech-logo').click(showSazeTechIndex); //添加点击logo事件
                $('.saze-tech-detail').load('../pages/detail.html', function () { //预加载详情页
                    $('.saze-tech-detail').addClass('fadeIn');
                });
            }, 600);
        }, 1000)
    }

    function showSazeTechIndex() {
        $('.saze-tech-detail').removeClass('fadeIn').addClass('visible-xs');
        $('.saze-tech-index').removeClass('visible-xs').addClass('fadeIn');
    }

    function showSazeTechDetail() {
        $('.saze-tech-index').removeClass('fadeIn').addClass('visible-xs');
        $('.saze-tech-detail').removeClass('visible-xs').addClass('fadeIn');
    }

    $(function () {
        initSazeTechIndex();
        $('.saze-tech-index-desc a').click(showSazeTechDetail);
    });
});