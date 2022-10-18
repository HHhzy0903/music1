const sounds = ['夏天', '遗失的心跳', '你若成风', '林俊杰串烧', '春娇与志明', '给你一瓶魔法药水'];
const btns = document.querySelector('.btns');
sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;
    btn.addEventListener('click', () => {
        stopsSongs();
        document.getElementById(sound).play();
    })
    btns.appendChild(btn);
})

function stopsSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
    })
}