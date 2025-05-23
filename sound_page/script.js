const sounds = ['who', 'Pikachu', 'Pikapi', 'PikaPika']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    if (sound === 'who') {
        btn.innerText = "Who's that Pokémon?"
    } else {
        btn.innerText = sound
    }

    btn.addEventListener('click', () => {
        stopSongs()

        document.getElementById(sound).play()
    })

    document.getElementById('btns').appendChild(btn)
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
}