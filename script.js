"use-strict";

//お知らせ
const notice = ["夏休み中に大会を開きます","Online Tetris Neoの大会記録用のWebページを作りました","Hello World"];
const n_number = notice.length - 1;

for(i = 0;i <= n_number;i++){
    document.getElementById("notice").insertAdjacentHTML("afterend", `<div id="notices">・${notice[i]}</div>`);
}

//参加者
const participant = ["tamago0926","tamago1","tamago2"];
const p_number = participant.length -1;
for(i = 0;i <= p_number;i++){
    document.getElementById("participant").insertAdjacentHTML("afterend",`<div id="Participants">・${participant[i]}</div>`);
}
