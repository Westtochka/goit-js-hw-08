import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const CURRENT_TIME_NOW='videoplayer-current-time';
const saveLocalStorage=localStorage.getItem(CURRENT_TIME_NOW) || 0;

player.on('timeupdate',throttle(saveCurrentTime, 1000));

function saveCurrentTime(currentTime) {
    const timeNowVideo=currentTime.seconds   
    console.log(timeNowVideo)
    localStorage.setItem(CURRENT_TIME_NOW, timeNowVideo)}  

player.setCurrentTime(saveLocalStorage);

    



