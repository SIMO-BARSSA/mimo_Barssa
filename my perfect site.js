var img=document.querySelector('.img'),
song_name=document.querySelector('.song_name'),
artist=document.querySelector('.artist'),
audio=document.querySelector('.audio'),
play=document.getElementById('play')
pause=document.querySelector('.pause'),
line_move=document.querySelector('.line_move'),
durationtime=document.querySelector('.durationtime'),
currentTimetime=document.querySelector('.currentTime'),
navi=document.querySelector('.navigation'),
imagra=document.querySelector('.imagr'),
bigimg=document.querySelector('.bigimg');

function dad(){
    navi.classList.toggle('active')
}
function imagraa(){
    imagra.classList.toggle('img')
}
let musicList = [
    {
        src:'lefrda ma joli.mp3',
        music_name:"ma joli",
        artist:'Lefrda',
        img:'lferda.jpg',
    },
    {
        src:'BIG lqaleb.mp3',
        music_name:"Leqaleb",
        artist:'DON BIGG',
        img:'don bigg.jpg',
    },
    {
        src:'quatrehuit .mp3',
        music_name:"quatrehuit؟?",
        artist:'Quatrehuit',
        img:'Quatrehuit.jpg',
    },
    {
        src:'toto meghayer.mp3',
        music_name:"Meghayer",
        artist:'ElGrandDeToto',
        img:'toto.jpg',
    },
    
]

function play_music(){
    if(play.textContent==("play_arrow")){
        audio.play();
        play.textContent=("pause");
    }
    else{
        audio.pause();
        play.textContent=("play_arrow");
    }
}
var rakm=0;
function skip(){
    rakm=rakm+1;
    rakm >= 4 ? rakm= 0 :rakm=rakm++ ;
    audio.src=musicList[rakm].src;
    bigimg.src=musicList[rakm].img;
    img.src=musicList[rakm].img;
    song_name.innerText=musicList[rakm].music_name;
    artist.innerText=musicList[rakm].artist;
    audio.play();
    play.textContent=("pause");
}
function back(){
    rakm=rakm-1;
    rakm <= -1 ? rakm= 3 :rakm=rakm++ ;
    audio.src=musicList[rakm].src;
    img.src=musicList[rakm].img;
    song_name.innerText=musicList[rakm].music_name;
    artist.innerText=musicList[rakm].artist;
    audio.play();
    play.textContent=("pause");
}
audio.addEventListener('timeupdate' ,(e)=>{
    /* line move */
    const currentTime= e.target.currentTime;
    const duration = e.target.duration;
    var e=(currentTime/duration)*100 +'%';
    line_move.style.width=e;

    /* time last */
    var totalmin=Math.floor(duration/60),
        totalsec=Math.floor(duration%60);

        if(totalsec<10){
            totalsec='0'+totalsec;
        }

    durationtime.innerText=(totalmin +":"+totalsec);

    /* time first */
    var timemin=Math.floor(currentTime/60),
    timesec=Math.floor(currentTime%60);
    if(timesec<10){
         timesec='0'+timesec;
    }

    if(timemin>59){
        
        currentTimetime.innerText=(timemin+':'+timesec);
    }
    else{
        currentTimetime.innerText=(timemin+':'+timesec);
    }
    
    if(duration==currentTime){
        rakm=rakm+1;
    rakm >= 4 ? rakm= 0 :rakm=rakm++ ;
    audio.src=musicList[rakm].src;
    bigimg.src=musicList[rakm].img;
    img.src=musicList[rakm].img;
    song_name.innerText=musicList[rakm].music_name;
    artist.innerText=musicList[rakm].artist;
    audio.play();
    play.textContent=("pause");
    }
})