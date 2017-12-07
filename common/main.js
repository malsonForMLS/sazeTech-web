require.config({
    baseUrl: '../js/',
    paths: {
        "jquery": "../lib/jquery-3.2.1.min",
        "bootstrap": "../lib/bootstrap.min",
        "detail": "detail",
        "index": "index"
    },
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports: 'bootstrap'
        }
    }
});


//load index
require(['index'], function (index) {
    console.log('load index complete!');
});