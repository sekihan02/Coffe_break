// 地面
var ground = anime({
    targets:'.watch2',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing:'linear',
    autoplay:true,
    duration:1500,
    delay:1000,
    opacity:{value:[0,1],delay:0}
});

// アラーム
var ground = anime({
    targets:'.watch1',
    strokeDashoffset: [anime.setDashoffset, 0],
    rotate: [3, -3, 3, -3, 3, -3, 3, -3, 3, -3, 3, -3, 3, -3, 3, -3, 3, -3, 3, -3, 3, -3, 3, -3, 3, -3, 3, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5,  0],

    translateY: [0, -30, 0, -30, 0, -50, 0, -50, -20, -60, -20, -60, -20, -90, -30, -100, -50, -100, -50, -120, -70, -50, -80],
    scaleY: [1, 1.03, 1, 1.03, 1, 1.05, 1, 1.05, 1.02, 1.06, 1.02, 1.06, 1.02, 1.09, 1.03, 1.1, 1.05, 1.1, 1.05, 1.12, 1.17, 1.15, 1],
    translateX: [0, 70],
    scale:[1, 0.6],
    easing: "easeInOutBack",
    autoplay:true,
    duration: 1480,
    // duration: 1800,
    delay:1690 + 2500 + 1600,

    // opacity:{value:[0,1],delay:0}
    elasticity: 800,
});
// 手
var ground = anime({
    targets:'.hand',
    strokeDashoffset: [anime.setDashoffset, 0],

    translateY: [-48, 0],
    translateX: [32, 0],

    // scale:[0,1],
    opacity:[0, 1],
    easing: "easeInQuint",
    autoplay:true,
    // duration: 800,
    duration: 480,
    delay:1690 + 2500 + 1600 + 1000,
    // elasticity: 800,
});

// 時計とタイトル
var title = anime.timeline();
title
    .add({
        targets: '.watch1',
        translateY: [500, 0],
        scaleX:[5, 1],
        scale:[0, 1],
        duration: 1690,
        
        delay:2500,
        elasticity: 800,
    })

    // .add({
    //     targets: '#lofi-life .title',
    //     strokeDashoffset: [anime.setDashoffset, 0],
    //     easing:'linear',
    //     autoplay:true,
    //     duration: 1600,
    //     offset: function(title, j) {
    //         return 800+(j*144);
    //     },
    //     delay:160,
    // })

    // タイトルのラスト(画面クリア)
    // .add({
    //     targets: '#lofi-life .title, #time, .title',
    //     easing:'linear',
    //     opacity:[1, 0],
    //     duration: 1600,
    //     delay:1000
    // })
    // コーヒーブレイクタイトルの表示
    .add({
        targets: '#lofi-life .title, #time, .title',
        easing:'linear',
        opacity:[1, 0],
        duration: 2600,
        delay:1600
    })
    ;