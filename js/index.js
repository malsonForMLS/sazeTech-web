define(function (require) {
    var $ = require('jquery'),
        detail = require('detail');

    function initSazeTechIndex() {
        setTimeout(function () {
            $('.saze-tech-logo').removeClass('fadeIn').addClass('fadeOut'); //隐藏首页LOGO
            setTimeout(function () {
                $('.saze-tech-logo').addClass('saze-tech-logo-after');
                $('.saze-tech-logo-title').addClass('saze-tech-logo-title-after');
                showSazeTechIndex(); //显示主页
                $('.saze-tech-logo').click(showSazeTechIndex); //添加点击logo事件
                $('.saze-tech-detail').load('../pages/detail.html'); //预加载详情页
            }, 600);
        }, 1000)
    }

    function showSazeTechIndex() {
        $('.saze-tech-detail').removeClass('fadeIn').addClass('animated fadeOut').addClass('hidden');

        $('.saze-tech-logo').removeClass('fadeOut').addClass('animated fadeIn');
        $('.saze-tech-index').removeClass('hidden').removeClass('fadeOut').addClass('animated fadeIn');
    }

    function showSazeTechDetail() {
        $('.saze-tech-index').removeClass('fadeIn').addClass('animated fadeOut').addClass('hidden');

        $('.saze-tech-logo').removeClass('fadeOut').addClass('animated fadeIn');
        $('.saze-tech-detail').removeClass('hidden').removeClass('fadeOut').addClass('animated fadeIn');
    }

    $(function () {
        initSazeTechIndex();
        $('.saze-tech-index-desc a').click(showSazeTechDetail);
    });
});