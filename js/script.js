// Controles customizados de mídia (Vídeo e Áudio)
function criarControlesDeMidia(idMedia, idBotao, idTempo) {
    const media = document.getElementById(idMedia);
    const botao = document.getElementById(idBotao);
    const tempo = document.getElementById(idTempo);

    if (!media || !botao || !tempo) return;

    botao.addEventListener('click', function () {
        if (media.paused) {
            media.play();
            botao.textContent = '⏸ Pausar';
        } else {
            media.pause();
            botao.textContent = '▶ Reproduzir';
        }
    });

    media.addEventListener('timeupdate', function () {
        tempo.textContent = `${formatarTempo(media.currentTime)} / ${formatarTempo(media.duration || 0)}`;
    });
}

function formatarTempo(segundos) {
    const min = Math.floor(segundos / 60);
    const seg = Math.floor(segundos % 60).toString().padStart(2, '0');
    return `${min}:${seg}`;
}

criarControlesDeMidia('videoEvento', 'btnPlayVideo', 'tempoVideo');
criarControlesDeMidia('audioEvento', 'btnPlayAudio', 'tempoAudio');
