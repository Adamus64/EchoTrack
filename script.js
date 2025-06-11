hra.style.display = "none";
let nahodnyVyber = null;

let spravne = 0;
let spatne = 0;

function generation()
{
    generace.style.display = "none";
    hra.style.display = "block";
    nahodnyVyber = Math.floor(Math.random()*songy.length)
}


const songy = [
    "Smell Like Teen Spirit - Nirvana", //0
    "Don't look back in anger - Oasis", //1
    "Where is my mind - Pixies", //2
    "Tvoje holka - MC Gey", //3
    "White Ferrari - Frank Ocean", //4
    "Michael Jackson - Bad", //5
    "Figure.09 - Linkin Park", //6
    "Ich will - Rammstein" ,//7
    "American Idiot - Green Day" ,//8
    "99 Luftballons - Nena", //9
    "In The End - Linkin Park", //10
    "Man in the box - Alice in Chains", //11
    "Come as you are - Nirvana", //12
    "Dreams - Fleetwood Mac", //13
    "Alright - Supergrass", //14
    "Feather - Nujabes" ,//15
    "Viva la vida - Coldplay", //16
    "No Surprises - Radiohead", //17
    "Everlong - Foo Figthers", //18
    "Just Can't Get Enough - Depeche Mode", //19
    "Cheri Cheri Lady - Modern Talking", //20
    "Who's Ready for Tomorrow - RAT BOY", //21
    "The Adults Are Talking - The Strokes", //22
    "Sunflower - Post Malone ft. Swae Lee", //23
    "Take Me Out - Franz Ferdinand", //24
    "Zombie - The Cranbarries", //25
    "ChuChu Lovely MuniMuni - MAXIMUM THE HORMONE", //26
    "Duvet - Bôa", //27
    "Holiday - Green Day", //28
    "Rollin' - Limp Bizkit", //29
    "Sk8er Boi - Avril Lavigne", //30
    "Nobody's Listening - Linkin Park", //31
    "Bohemian Rhapsody - Queen", //32
    "Black Hole Sun - Soundgarden", //33
    "Thunderstuck - AC/DC", //34
    "See You Again - Tyler, The Creator", //35

]

const moznostiVyberu = document.getElementById('vyberSong');
songy.forEach(song => {
    const option = document.createElement('option');
    option.value = song;
    option.textContent = song;
    moznostiVyberu.appendChild(option)
})

let audio;
let isPlaying = false;

function play()
{

    if (isPlaying) return alert("Počkejte než úryvek dohraje pro opětovné spuštění!");

    isPlaying = true;
    let songaRandom = ("sounds/" + nahodnyVyber + ".mp3");
    console.log(songaRandom);
    audio = new Audio(songaRandom);
    audio.volume = 0.2;
    audio.play();

    setTimeout(() => {
        audio.pause();
        audio.currentTime = 0;
        isPlaying = false;

    }, 5000);

    

   
}

let pokusy = 3;

function potvrdit()
{
   audio.pause();

    let vyberUzivatele = vyberSong.value;
    if (vyberUzivatele == songy[nahodnyVyber])
    {
        
        alert("Správně je to: " + vyberUzivatele)
        hra.style.display = "none";
        generace.style.display = "block";
        spravne = spravne + 1;
        right.textContent = ("✅Správně uhodnuté: " + spravne)
        pokusy = 3;
        isPlaying = false;

    }

    else
    {
        pokusy--;
        alert("Špatně. Zbývají vám ještě: " + pokusy + " pokusy.");
        if (pokusy == 0)
        {
            alert("Bylo to: " + songy[nahodnyVyber]);
            pokusy = 3;
            hra.style.display = "none";
            generace.style.display = "block";
            spatne = spatne + 1;
            wrong.textContent = ("❌Špatně uhodnuté: " + spatne);
            isPlaying = false;
        }
        
    }
    
}
    
    

