//画像の名前を配列の要素として保存
var pics_src = new Array("piano_c.png","piano_d.png","piano_e.png","piano_f.png","piano_g.png","piano_a.png"
,"piano_h.png","piano_c-.png","piano_c3.png","piano_d2.png","piano_f2.png","piano_g2.png","piano_a2.png");
var num = -1;

//キーボードを押すと処理がされるようにする
    window.onkeydown = function(e) {
        //
        if(event.key === 'a' ){
            //musicにm4aファイルを代入,audioオブジェクトは音声を扱うオブジェクト
            var music = new Audio('C.m4a');
            //音声の再生
            music.play();
            //変数numの値を設定
            num = 0;
            //getElementByIdでhtmlないのmypicを指定しdocument.画像名.srcで画像のURLを参照する、それをpics_src[num]に書き換え
            document.getElementById("mypic").src=pics_src[num];
        }
        if(event.key === 's' ){
            var music = new Audio('D.m4a');
            music.play();
            num = 1;
            document.getElementById("mypic").src=pics_src[num];
        }
        if(event.key === 'd' ){
            var music = new Audio('E.m4a');
            music.play();
            num = 2;
            document.getElementById("mypic").src=pics_src[num];
      }
        if(event.key === 'f' ){
            var music = new Audio('F.m4a');
            music.play();
            num = 3;
            document.getElementById("mypic").src=pics_src[num];
      } 
        if(event.key === 'g' ){
            var music = new Audio('G.m4a');
            music.play();
            num = 4;
            document.getElementById("mypic").src=pics_src[num];
        }
        if(event.key === 'h' ){
            var music = new Audio('A.m4a');
            music.play();
            num = 5;
            document.getElementById("mypic").src=pics_src[num];
        }
        if(event.key === 'j' ){
            var music = new Audio('H.m4a');
            music.play();
            num = 6;
            document.getElementById("mypic").src=pics_src[num];
        }
        if(event.key === 'k' ){
            var music = new Audio('C-.m4a');
            music.play();
            num = 7;
            document.getElementById("mypic").src=pics_src[num];
        }
        if(event.key === 'w' ){
            var music = new Audio('C2.m4a');
            music.play();
            num = 8;
            document.getElementById("mypic").src=pics_src[num];
      } 
        if(event.key === 'e' ){
            var music = new Audio('D2.m4a');
            music.play();
            num = 9;
            document.getElementById("mypic").src=pics_src[num];
        }
        if(event.key === 't' ){
            var music = new Audio('F2.m4a');
            music.play();
            num = 10;
            document.getElementById("mypic").src=pics_src[num];
        }
        if(event.key === 'y' ){
            var music = new Audio('G2.m4a');
            music.play();
            num = 11;
            document.getElementById("mypic").src=pics_src[num];
        }
        if(event.key === 'u' ){
            var music = new Audio('A2.m4a');
            music.play();
            num = 12;
            document.getElementById("mypic").src=pics_src[num];
        }
    
    
      }
