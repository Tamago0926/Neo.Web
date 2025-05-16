"use-strict";

const notice = ["夏休み中に大会を開きます","Online Tetris Neoの大会記録用のWebページを作りました"];
const notice_n = notice.length - 1;
console.log(notice_n);

for( i = 0;i <= notice_n;i++){
    document.getElementById("notice").insertAdjacentHTML("afterend", `<div id="notices">・${notice[i]}</div>`);
}