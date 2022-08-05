console.log("welcom");
let songIndex =0;
let audioElement =new Audio('Music/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songitem'));

let songs= [
    {songName:"Martin Garrix-Animals",filePath: "Music/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"Faded Alan walker",filePath: "Music/2.mp3",coverPath:"covers/2.jpg"},
    {songName:"Alone Alan walker",filePath: "Music/3.mp3",coverPath:"covers/3.jpg"},
    {songName:"Love Me Like You Do",filePath: "Music/4.mp3",coverPath:"covers/4.jpg"},
    {songName:"On My Way sabrina Carpenter",filePath: "Music/5.mp3",coverPath:"covers/5.jpg"},
    {songName:"One Republic",filePath: "Music/6.mp3",coverPath:"covers/6.jpg"},
]
songItems.forEach((element,i)=>{
element.getElementsByTagName('img')[0].src=songs[i].coverPath;
element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

//let audioElement=new Audio('Music.mp3');
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// audioElement.play();
audioElement .addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currenttime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays =()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle')
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songindex=parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`Music/${songindex+1}.mp3`;
        audioElement.currenttime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
});

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=5){
        songIndex=0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src=`Music/${songIndex+1}.mp3`;
    audioElement.currenttime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -=1;
    }
    audioElement.src=`Music/${songIndex+1}.mp3`;
    audioElement.currenttime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})