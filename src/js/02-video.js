import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player', {
    id: "vimeo-player"
});

let currentTime;

const onPlay = function (data) {
    currentTime = JSON.stringify(data.seconds);

    localStorage.setItem("videoplayer-current-time", currentTime);
};

player.on('timeupdate', throttle(onPlay, 1000));

const savedTime = localStorage.getItem("videoplayer-current-time");
if (savedTime === null) {
    return;
}

player.setCurrentTime(savedTime);