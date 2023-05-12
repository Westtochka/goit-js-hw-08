import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const CURRENT_TIME_NOW='videoplayer-current-time';

    player.on('timeupdate',throttle(saveCurrentTime, 1000));
    function saveCurrentTime(currentTime) {
        const timeNowVideo=currentTime.seconds
        console.log(timeNowVideo)
    localStorage.setItem('CURRENT_TIME_NOW', JSON.stringify(timeNowVideo));
    }

player.setCurrentTime(JSON.parse(localStorage.getItem('CURRENT_TIME_NOW'))).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});

