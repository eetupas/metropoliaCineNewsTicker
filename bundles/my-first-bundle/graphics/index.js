import { gsap } from '../../../node_modules/gsap/src/index.js';

const nameplateEl = document.getElementById('nameplate');
const nameEl = document.getElementById('name');
const twitterEl = document.getElementById('twitter');

nodecg.listenFor('showLowerthird', (data) => {
    nameEl.innerHTML = data.name;
    twitterEl.innerHTML = data.twitter;

})