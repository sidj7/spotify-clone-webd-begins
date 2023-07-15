console.log("welcome to Spotify");
//initialize variables
let index = 0;
let audioelement = new Audio('/songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let songitem = Array.from(document.getElementsByClassName('songitem'));
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');

let songs = [
    { songname: "track1", filepath: "/songs/1.mp3", coverpath: "/covers/1.jpg" },
    { songname: "track2", filepath: "/songs/2.mp3", coverpath: "/covers/2.jpg" },
    { songname: "track3", filepath: "/songs/3.mp3", coverpath: "/covers/3.jpg" },
    { songname: "track4", filepath: "/songs/4.mp3", coverpath: "/covers/4.jpg" },
    { songname: "track5", filepath: "/songs/5.mp3", coverpath: "/covers/5.jpg" },
    { songname: "track6", filepath: "/songs/6.mp3", coverpath: "/covers/6.jpg" },
    { songname: "track7", filepath: "/songs/7.mp3", coverpath: "/covers/7.jpg" },
    { songname: "track8", filepath: "/songs/8.mp3", coverpath: "/covers/8.jpg" },
    { songname: "track9", filepath: "/songs/9.mp3", coverpath: "/covers/9.jpg" },
    { songname: "track10", filepath: "/songs/10.mp3", coverpath: "/covers/10.jpg" },
]
songitem.forEach((element, i) => {
        // console.log(element, i);
        element.getElementsByTagName("img")[0].src = songs[i].coverpath;
        element.getElementsByClassName("songname")[0].innerText = songs[i].songname;

    })
    // audioelement.play();
    //handle play/pause click
masterplay.addEventListener('click', () => {
        if (audioelement.paused || audioelement.currentTime <= 0) {
            audioelement.play();
            masterplay.classList.remove('fa-play-circle');
            masterplay.classList.add('fa-pause-circle');
            gif.style.opacity = 1;
        } else {
            audioelement.pause();
            masterplay.classList.remove('fa-pause-circle');
            masterplay.classList.add('fa-play-circle');
            gif.style.opacity = 0;

        }
    })
    // listen to event
audioelement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    let progress = parseInt((audioelement.currentTime / audioelement.duration) * 100);
    myprogressbar.value = progress;
})

myprogressbar.addEventListener('change', () => {
    audioelement.currentTime = (myprogressbar.value * audioelement.duration / 100)
})
const makeallplays = () => {
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeallplays();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioelement.src = `/songs/${index}.mp3`;
        audioelement.currentTime = 0;
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;

    })
})
document.getElementById('previous').addEventListener('click', () => {
    if (index <= 0) {
        index = 9;
    } else {
        index -= 1;
    }
    audioelement.src = `/songs/${index}.mp3`;
    audioelement.currentTime = 0;
    audioelement.play();
    mastersongname.innerText = songs[index].songname;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
});
document.getElementById('next').addEventListener('click', () => {
    if (index >= 9) {
        index = 0;
    } else {
        index += 1;
    }
    audioelement.src = `/songs/${index}.mp3`;
    audioelement.currentTime = 0;
    audioelement.play();
    mastersongname.innerText = songs[index].songname;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
});