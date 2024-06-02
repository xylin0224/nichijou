$(function() { 
    $(".flexslider").flexslider({
      animation: "slide",
      touch: true,
      itemWidth: 800,
      itemMargin: 5,
    }); 
  });

//   function handle_click1(){
//     var answer=prompt("請輸入要對祐子說的話")
//     if (answer=="沒寫作業的人快去罰站"){
//         alert("作業忘寫，因而立於廊，最上川。") 
//     }
//     else if (answer=="我不是機器人!"){
//         alert("我知道名乃不是機器人唷！名乃就是名乃，這樣就很好了不是嗎？")
//     }
//     else{
//         alert("欸？你說什麼？")
//     }
//   }

//   function handle_click2(){
//     var answer=prompt("請輸入要對美緒說的話")
//     if (answer=="可以借我妳的作業嗎?"){
//         alert("真是的，這是最後一次了喔~") 
//     }
//     else{
//         alert("能再說一次嗎？")
//     }
//   }

//   function handle_click3(){
//     var answer=prompt("請輸入要對麻衣說的話")
//     if (answer=="麻衣?"){
//         alert("……")
//     }
//     else{
//         alert("……")
//     }
//   }

//   function handle_click4(){
//     var answer=prompt("請輸入要對名乃說的話")
//     if (answer=="妳背上的東西是什麼?"){
//         alert("那、那只是裝飾而已喔！絕對不是真的發條唷！")
//     }
//     else if(answer=="為什麼名乃那麼想上學呢?"){
//         alert("因為青春的每一天都是很貴重的！")
//     }
//     else{
//         alert("那、那個…可以請你再說一遍嗎？")
//     }
//   }

//   function handle_click5(){
//     var answer=prompt("請輸入要對博士說的話")
//     if (answer=="博士不能再吃零食了!"){
//         alert("才不要！博士還要吃！")
//     }
//     else if (answer=="為什麼博士現在不怕打雷了呢?"){
//         alert("雖然一個人會有點害怕，但兩個人一起就感覺沒問題了。")
//     }
//     else{
//         alert("什麼？")
//     }
//   }
//   function handle_click6(){
//     var answer=prompt("請輸入要對阪本先生說的話")
//     if (answer=="阪本!"){
//         alert("喂!小鬼!有禮貌一點!")
//     }
//     else{
//         alert("你在說什麼？")
//     }
//   }
var answer1 = document.getElementById("answer1");
var btn1 = document.getElementById("btn1");
btn1.addEventListener("click",function(){
    if (answer1.value=="沒寫作業的人快去罰站"){
        alert("作業忘寫，因而立於廊，最上川。") 
    }
    else if (answer1.value=="我不是機器人!"){
        alert("我知道名乃不是機器人唷！名乃就是名乃，這樣就很好了不是嗎？")
    }
    else if (answer1.value=="早上好"){
        alert("selamat pagi！")
    }
    else{
        num = Math.floor(Math.random()*10);
        if(num>=5){
            alert("因為天氣（tenki）很好所以想要去買數字鍵盤（tenkey）啊～")
        }
        else{
            alert("地理（chiri）的預習很完美（batchiri）！")
        }
    }
    answer1.value=""
  }
)
var answer2 = document.getElementById("answer2");
var btn2 = document.getElementById("btn2");
btn2.addEventListener("click",function(){
    if (answer2.value=="可以借我你的作業嗎?"){
        alert("真是的，這是最後一次了喔~") 
    }
    else{
        alert("能再說一次嗎？")
    }
    answer2.value=""

  }
)
var answer3 = document.getElementById("answer3");
var btn3 = document.getElementById("btn3");
btn3.addEventListener("click",function(){
    if (answer3.value=="selamat pagi"){
        alert("selamat malam")
    }
    else{
        alert("……")
    }
    answer3.value=""

  }
)
var answer4 = document.getElementById("answer4");
var btn4 = document.getElementById("btn4");
btn4.addEventListener("click",function(){
    if (answer4.value=="妳背上的東西是什麼?"){
        alert("那、那只是裝飾而已喔！絕對不是真的發條唷！")
    }
    else if(answer4.value=="為什麼名乃那麼想上學呢?"){
        alert("因為青春的每一天都是很貴重的！")
    }
    else{
        alert("那、那個…可以請你再說一遍嗎？")
    }

    answer4.value=""

  }
)
var answer5 = document.getElementById("answer5");
var btn5 = document.getElementById("btn5");
btn5.addEventListener("click",function(){
    if (answer5.value=="博士不能再吃零食了!"){
        alert("才不要！博士還要吃！")
    }
    else if (answer5.value=="為什麼博士現在不怕打雷了呢?"){
        alert("雖然一個人會有點害怕，但兩個人一起就感覺沒問題了。")
    }
    else{
        alert("什麼？")
    }

    answer5.value=""

  }
)
var answer6 = document.getElementById("answer6");
var btn6 = document.getElementById("btn6");
btn6.addEventListener("click",function(){
    if (answer6.value=="阪本!"){
        alert("喂!小鬼!有禮貌一點!")
    }
    else{
        alert("你在說什麼？")
    }

    answer6.value=""

  }
)

var buttonstop = document.getElementById("buttonstop");
var audioplayer = document.getElementById("audioplayer");
buttonstop.addEventListener("click",function(){
      if(audioplayer.paused){                 
          audioplayer.play();
      }else{
       audioplayer.pause();
      }
})