// タイトルの総時間
// + 2500 + 1600 + 160 + 1600 + 1000

// このシーンの総時間
// 3600 + 6600 + 1200 + 800 + 1200 + 800 + 2300 + 2150 + 1500 + 1600 +1600,

// ケトル
var back = anime.timeline();
back
	// 表示
	.add({
        targets: '.ketol0',
        easing:'easeOutExpo',
        autoplay:true,
        scale: [1.5, 1.5],
        translateX:[200, 0],
        translateY:[-80, 0],
        elasticity: 800,
        duration: 800,
        delay: 1500 + 2500 + 1600 + 160 + 1600 + 1000,
    })
    // ケトル消去
    .add({
        targets: '.ketol0',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing:'easeOutExpo',
        autoplay:true,
        scale: [1.5, 1.5],
        opacity:[1, 0],
        duration: 100,
        delay: 100,
    });

var steam = anime.timeline();

steam
    .add({
        targets: '.ketol3',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing:'easeOutExpo',
        autoplay:true,
        scale: [1.5, 1.5],
        opacity:[0, 1],
        duration: 100,
        delay: 2300 + 2500 + 1600 + 160 + 1600 + 1000,
    })
// 湯気表現
    .add({
        targets:'.ketol3',
        easing: 'easeOutExpo',
        scale: [1.5, 1.5],
        translateX:[0.1, -0.1, 0.1, -0.1, 0.1, -0.1, 0.1, -0.1, 0.1, -0.1, 0.2, -0.2 , 0.2, -0.2, 0.2, -0.2 , 0.2, -0.2, 0.2, -0.2],
        duration: 1500,
        delay: 650,
    })
    .add({
        targets:'.ketol3',
        easing: 'easeOutExpo',
        scale: [1.5, 1.5],
        translateX:[0.2, -0.2, 0.2, -0.2, 0.2, -0.2, 0.2, -0.2, 0.2, -0.2, 0.2, -0.1 , 0.2, -0.3, 0.1, -0.2 , 0.2, -0.2, 0.2, -0.2],
        rotate:[1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 2, -2 , 2, -2, 2, -2 , 2, -2, 2, -2, 3, -1 , 2, -3, 1, -3 , 2, -2, 2, -2],
        duration: 1500,
        delay: 0,
    })
    // 湯気後(最初のケトル削除)
    .add({
        targets:'.ketol3',
        easing: 'linear',
        scale: [1.5, 1.5],
        opacity: [1.5, 0],
        translateX:[0.2, -0.2, 0.2, -0.2, 0.2, -0.2, 0.2, -0.2, 0.2, -0.2, 0.3, -0.3 , 0.3, -0.3, 0.3, -0.3 , 0.3, -0.3, 0.3, -0.3],
        rotate:[1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 2, -2 , 2, -2, 2, -2 , 2, -2, 2, -2, 4, -4 , 4, -4, 4, -4 , 4, -4, 4, -4],
        duration: 1400,
        delay: 0,
    });

// // ケトル(手)
var ketol_hand = anime.timeline();

ketol_hand
    .add({
        targets: '.ketol2',
        easing:'linear',
        scale: [1.6, 1.6],
        opacity: [0, 1],
        rotate: [47, 47],
        duration: 1200,
        delay: 360 + 2300 + 2150 + 1500  + 2500 + 1600 + 160 + 1600 + 1000,
    })

    .add({
        targets: '.ketol2',
        easing:'easeOutQuint',
        scale: [1.7, 1],
        rotate: [47, 45],
        translateY:[0, 60],
        translateX: [0, -220],
        duration: 1600,
        delay: 32,
        elasticity: 1000,
    })

    .add({
        targets: '.ketol2',
        easing:'easeInSine',
        scale: [1, 1],
        rotate: [47, 16],
        translateY:[60, -240],
        translateX: [-220, 16],
        translateZ: [0, 360],
        duration: 1600,
        delay: 80,
    });

// カップ表示
var hotwater = anime.timeline();
hotwater
    .add({
        targets: '.cafee',
        strokeDashoffset: [anime.setDashoffset, 0],
        scale: [0, 1],
        easing:'easeOutSine',
        translateY:[-250, 0],
        translateX:[1500, 0],
        rotate: [20, 0],
        elasticity: 1000,
        duration: 1200,
        delay: 800 + 2300 + 2150 + 1500 + 1600 +1600  + 2500 + 1600 + 160 + 1600 + 1000,
    })
    .add({
        targets: '.cafee',
        strokeDashoffset: [anime.setDashoffset, 0],
        opacity: [1, 0],
        easing:'easeOutSine',
        elasticity: 1000,
        delay: 800
    });

// 水
var hotwater = anime({
    targets: '.water_hot',
    strokeDashoffset: [anime.setDashoffset, 0],
    scale: [0,0,1],
    autoplay:true,
    easing:'easeOutSine',
    translateY:[-800, -0.5],
    translateX:[1500, 0],
    rotate: [20, 0],
    elasticity: 1000,
    duration: 1200,

    delay:  800 + 2300 + 2150 + 1500 + 1600 +1600  + 2500 + 1600 + 160 + 1600 + 1000,

    opacity:{value:[1,0],delay: 2000 + 2300 + 2150 + 1500 + 1600 +1600   + 2500 + 1600 + 160 + 1600 + 1000}
});

// コヒーカップの取っ手
var ccup = anime.timeline();
ccup
    .add({
        targets: '.coffecup',
        strokeDashoffset: [anime.setDashoffset, 0],
        opacity: [0, 1],
        easing:'easeOutSine',
        elasticity: 400,
        duration: 600,
        delay: 800 + 1200 + 800 + 2300 + 2150 + 1500 + 1600 +1600 + 2500 + 1600 + 160 + 1600 + 1000,
    })
    // カップの拡大
    .add({
        targets: '.coffecup',
        easing:'linear',
        scale:[1, 3],
        elasticity: 0,
        duration:800,
        delay: 600
    })

    .add({
        targets: '.coffecup',
        easing:'linear',
        scale:[3, 1.5],
        easing:'easeOutSine',
        elasticity: 640,
        rotate: -20,
        translateY: 62,
        translateX: -40,
        duration: 1200,
        delay: 1460
    })
    ;

// カップの拡大に合わせて顔画像の表示
var face = anime({
    targets: '.face1',
    strokeDashoffset: [anime.setDashoffset, 0],
    opacity: [0, 1],
    translateX:[-16, 0],
    translateY:[-16, 0],
    easing:'linear',
    autoplay:true,
    duration: 1000,
    
    delay: 2500 + 1200 + 800 + 1200 + 800 + 2300 + 2150 + 1500 + 1600 +1600  + 2500 + 1600 + 160 + 1600 + 1000,
});


// カップの拡大に合わせて湯気と水とその他の削除
var back = anime.timeline();
back
    .add({
        targets: '.water',
        strokeDashoffset: [anime.setDashoffset, 0],
        // scale: [0,1],
        opacity: [0,1],
        // translateX:[-200, 0],
        // translateY:[-800, 0],
        // rotateX: [-40, 0],
        easing:'easeOutSine',
        duration: 1000,
        delay: 1700 + 2300 + 2150 + 1500 + 1600 +1600  + 2500 + 1600 + 160 + 1600 + 1000,
    })
    .add({
        targets: '.water',
        strokeDashoffset: [anime.setDashoffset, 0],
        opacity: [1, 0],
        scale:[1, 2.7],
        translateX:[0, 0],
        translateY:[0, -2],
        easing:'linear',
        autoplay:true,
        duration: 720,
        delay: (220 + 800 + 1200 + 800 + 2300 + 2150 + 1500 + 1600 +1600) -(1700 + 2300 + 2150 + 1500 + 1600 +1600),
    });
    
var steam = anime.timeline();
steam
    .add({
        targets: '.steam',
        strokeDashoffset: [anime.setDashoffset, 0],
        opacity: [0, 1],
        scale: [0, 1],
        autoplay:true,
        easing:'easeOutSine',
        
        elasticity: 1000,
        duration: 600,
        // delay: 1500 + 800 + 2300 + 2150 + 1500 + 1600 +1600  + 2500 + 1600 + 160 + 1600 + 1000,
        delay: 1500 + 1700 + 2300 + 2150 + 1500 + 1600 +1600  + 2500 + 1600 + 160 + 1600 + 1000,

    })
    .add({
        targets: '.steam',
        strokeDashoffset: [anime.setDashoffset, 0],
        opacity: [1, 0],
        scale:[1, 2.7],
        translateX:[0, 180],
        translateY:[0, -36],
        easing:'linear',
        autoplay:true,
        duration: 2600,
        // delay: 600 + 800 + 1200 + 800 + 2300 + 2150 + 1500 + 1600 +1600 - (1500 + 800 + 2300 + 2150 + 1500 + 1600 +1600) + 2500 + 1600 + 160 + 1600 + 1000,
        delay: 0,
    });
    
var back = anime({
    targets: '.scene',
    strokeDashoffset: [anime.setDashoffset, 0],
    opacity: [1, 0],
    scale:[1, 2.7],
    translateX:[0, -7],
    translateY:[0, -6],
    easing:'linear',
    autoplay:true,
    duration: 600,
    delay: 1200 + 1200 + 800 + 1200 + 800 + 2300 + 2150 + 1500 + 1600 +1600 + 2500 + 1600 + 160 + 1600 + 1000,
    
});


// カップの拡大に合わせて場面転換
var back = anime({
    targets: '#cmask',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing:'linear',
    autoplay:true,
    duration: 1600,
    offset: function(cmask, i) {
        return 800+(i*256);
    },
    delay: 1200 + 1200 + 800 + 1200 + 800 + 2300 + 2150 + 1500 + 1600 +1600 + 2500 + 1600 + 160 + 1600 + 1000,
});


// 黒バック
var back = anime({
    targets: '#write_disp .write',
    strokeDashoffset: [anime.setDashoffset, 0],
    opacity:[0, 1],
    easing:'linear',
    autoplay:true,
    duration: 1600,
    offset: function(write, j) {
        return 800+(j*256);
    },
    delay:800 + 2500 + 1600 + 160 + 1600 + 1000,
});

// パン焼き機
var bread = anime({
    targets:'#bred-stand',
    strokeDashoffset: [anime.setDashoffset, 0],
    autoplay:true,
    
    opacity:[0, 1],
    easing:'linear',
    autoplay:true,
    elasticity: 800,
    duration: 640,
    delay:800 + 2500 + 1600 + 160 + 1600 + 1000,
});

// パン表示
var ground = anime({
        targets:'.bread4',
        strokeDashoffset: [anime.setDashoffset, 0],
        
        translateY: [0, -256, -60],
        scale:[1, 1.3, 1],
        opacity:1,
        easing:'linear',
        autoplay:true,
        elasticity: 800,
        duration: 640,
        // delay: 1600 + 2150 + 1500 + 32 + 1600 + 80 + 1600 + 2500 + 1600 + 160 + 1600 + 1000 -(800 + 2500 + 1600 + 160 + 1600 + 1000),
        delay:260 + 2300 + 2150 + 1500 + 32 + 1600 + 80 + 1600 + 2500 + 1600 + 160 + 1600 + 1000,
        
    })
    ;
// ハンドル
var ground = anime({
    targets:'.bread3',
    strokeDashoffset: [anime.setDashoffset, 0],

    translateY: -35,
    translateX: 4,

    opacity:1,
    easing:'easeInExpo',
    autoplay:true,
    duration: 800,
    duration: 100,
    delay:100 + 360 + 2300 + 2150 + 1500 + 32 + 1600 + 80 + 1600 + 2500 + 1600 + 160 + 1600 + 1000,

});

// コーヒーブレイクの表示
var face = anime({
    targets: '.cofee_title',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing:'linear',
    autoplay:true,
    duration: 1600,
    offset: function(cofee_title, k) {
        return 800+(k*680);
    },
    
    delay: 1000 + 2500 + 1200 + 800 + 1200 + 800 + 2300 + 2150 + 1500 + 1600 +1600  + 2500 + 1600 + 160 + 1600 + 1000,
    // delay: 0,
});


// シーン１ラストクリア
var face = anime({
    targets: '.scene1_last',
    strokeDashoffset: [anime.setDashoffset, 0],
    opacity: [1, 0],
    easing:'easeOutQuint',
    autoplay:true,
    elasticity: 600,
    duration: 3600,
    delay: 6600 + 1200 + 800 + 1200 + 800 + 2300 + 2150 + 1500 + 1600 +1600 + 2500 + 1600 + 160 + 1600 + 1000,
});