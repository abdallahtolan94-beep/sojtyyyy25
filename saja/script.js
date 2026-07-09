const start = document.getElementById("start");
const game = document.getElementById("game");
const finalPage = document.getElementById("final");
const gift = document.getElementById("gift");

const startBtn = document.getElementById("startBtn");
const yes = document.getElementById("yes");
const no = document.getElementById("no");
const giftBtn = document.getElementById("giftBtn");

const music = document.getElementById("music");
const question = document.getElementById("question");

const questions = [
"بتحبيني؟ ❤️",
"هتفضلي معايا على طول؟ 🥺",
"أنا أحلى واحد عندك؟ 😎",
"هنتجوز؟ 💍",
"مستعدة للمفاجأة؟ 🎁"
];

let index = 0;
let yesSize = 22;

startBtn.onclick = () => {
    start.style.display = "none";
    game.style.display = "block";

    music.play().catch(() => {});
};

no.addEventListener("mouseover", () => {

    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 80);

    no.style.left = x + "px";
    no.style.top = y + "px";

    yesSize += 8;
    yes.style.fontSize = yesSize + "px";

});

yes.onclick = () => {

    index++;

    if(index < questions.length){

        question.innerHTML = questions[index];

    }else{

        game.style.display = "none";
        finalPage.style.display = "block";

        createConfetti();

    }

};

giftBtn.onclick = ()=>{

    finalPage.style.display="none";
    gift.style.display="block";

}

/* قلوب */

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*30)+"px";

heart.style.animationDuration=(4+Math.random()*5)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},9000);

}

setInterval(createHeart,300);

/* كونفيتي */

function createConfetti(){

for(let i=0;i<200;i++){

let c=document.createElement("div");

c.innerHTML=["🎉","❤️","💖","✨"][Math.floor(Math.random()*4)];

c.style.position="fixed";

c.style.left=Math.random()*100+"vw";

c.style.top="-20px";

c.style.fontSize=(20+Math.random()*25)+"px";

c.style.transition="4s linear";

document.body.appendChild(c);

setTimeout(()=>{

c.style.top="110vh";

},50);

setTimeout(()=>{

c.remove();

},5000);

}

}