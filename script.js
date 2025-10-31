// Dados dos medos - Halloween Edition 🎃
const medos = [
  {
    numero: 10,
    titulo: 'O "Síndrome do Impostor Turbo" 👻',
    descricao: '"Será que me contrataram por engano? Será que acham que eu sei programar? Vou descobrir que a vaga era para \'JavaScript\' e eu pensei que era Java com Script de cinema?"'
  },
  {
    numero: 9,
    titulo: 'O Teste Prático que Vira um Episódio de "Black Mirror" 🦇',
    descricao: '"Preciso criar uma IA que preveja o mercado de ações, em 30 minutos, usando apenas CSS e um abacaxi. Isso é normal?"'
  },
  {
    numero: 8,
    titulo: 'O Medo do "Você Vai Usar Cobol em Mainframe" 💀',
    descricao: '"E se a única vaga disponível for para manter um sistema mais velho que a internet, escrito em uma linguagem que meu avô usava?"'
  },
  {
    numero: 7,
    titulo: 'O Pânico do "Merge" no Primeiro Dia 🕷️',
    descricao: '"E se, sem querer, eu apagar todo o repositório com um `git push --force`? Vou ser lembrado como o estagiário que derrubou a empresa."'
  },
  {
    numero: 6,
    titulo: 'A Entrevista com o Sênior que Parece um Robô do Exterminador do Futuro 🤖',
    descricao: '"Ele não pisca. Ele só me pergunta sobre complexidade de algoritmos que eu só ouvi falar em sonhos. Será que ele está me julgando pela minha camiseta do Hello Kitty?"'
  },
  {
    numero: 5,
    titulo: 'O Clássico "E Se o Computador Travar na Hora do Live Coding?" 💥',
    descricao: '"Minha internet vai falhar, o notebook vai pegar fogo e meu cachorro vai começar a latir o hino nacional. O destino é cruel."'
  },
  {
    numero: 4,
    titulo: 'O Terror do "Explique Sua Lógica" 🧟',
    descricao: '"Como eu explico que meu código funciona por \'vibes positivas\' e porque o Stack Overflow disse que sim?"'
  },
  {
    numero: 3,
    titulo: 'O Pesadelo do "Onde Você Se Vê em 5 Anos?" 🔮',
    descricao: '"Bem, em 5 anos espero ter descoberto como sair do modo vim. E talvez ter aprendido a usar o Docker sem ter pesadelos."'
  },
  {
    numero: 2,
    titulo: 'O Desespero do "Temos um Cultura Ágil" ⚡',
    descricao: '"Tradução: teremos daily meetings às 7h da manhã e você vai explicar por que não terminou uma tarefa que recebeu há 10 minutos."'
  },
  {
    numero: 1,
    titulo: 'O Primeiro Commit no Repositório da Empresa 💣',
    descricao: '"É isso. Vou escrever `console.log(\'funcionou?)` e serei responsável por quebrar a produção, causando um prejuízo de milhões. Vou mudar meu nome para \'Erro 500\' e fugir para as montanhas."'
  }
];

const lista = document.getElementById("medos-lista");
let medoAtual = 10; // Começa pelo 10
let medosRevelados = new Set(); // Controla quais medos já foram revelados

// Função para revelar o próximo medo
function revelarProximoMedo() {
  if (medoAtual >= 1) {
    const medoElement = document.querySelector(`.medo-item[data-number="${medoAtual}"]`);
    if (medoElement) {
      medoElement.style.display = 'flex';
      medoElement.style.animation = 'fadeInUp 0.6s ease forwards';
      medosRevelados.add(medoAtual);
      
      // Atualizar contador
      const contador = document.getElementById('contador');
      if (contador) {
        contador.textContent = `Medos revelados: ${10 - medoAtual + 1}/10`;
      }
      
      // Atualizar texto do botão
      const shareBtn = document.getElementById('shareBtn');
      if (shareBtn && medoAtual > 1) {
        shareBtn.textContent = `Revelar Medo ${medoAtual - 1} 👻`;
      } else if (shareBtn && medoAtual === 1) {
        shareBtn.textContent = 'Todos os Medos Revelados! 🎃';
        shareBtn.style.background = 'linear-gradient(135deg, #00ff00, #00cc00)';
        shareBtn.onclick = function() {
          const url = encodeURIComponent(window.location.href);
          const text = encodeURIComponent('🎃👻 REVELEI todos os 10 Medos Assustadores do Dev Iniciante! E você? #Halloween #DevIniciante');
          window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
        };
      }
      
      medoAtual--;
    }
  }
}

// Função para inicializar a lista (todos os medos começam escondidos)
function inicializarLista() {
  lista.innerHTML = ''; // Limpa a lista
  
  medos.forEach(medo => {
    const div = document.createElement("div");
    div.classList.add("medo-item");
    div.setAttribute('data-number', medo.numero);
    div.style.display = 'none'; // Todos começam escondidos
    
    div.innerHTML = `
      <div class="numero">${medo.numero}</div>
      <div class="content">
        <h3>${medo.titulo}</h3>
        <p>${medo.descricao}</p>
      </div>
    `;
    
    lista.appendChild(div);
  });
}

// Função para adicionar evento de clique ao botão
function configurarBotaoRevelar() {
  const shareBtn = document.getElementById('shareBtn');
  if (shareBtn) {
    shareBtn.textContent = 'Revelar Primeiro Medo (10) 👻';
    shareBtn.onclick = revelarProximoMedo;
  }
}

// Função para criar efeito de digitação
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = '';
  
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

// Função para adicionar efeitos de Halloween
function addHalloweenEffects() {
  // Efeito de sombra assustadora nos itens
  const medoItems = document.querySelectorAll('.medo-item');
  
  medoItems.forEach(item => {
    // Efeito de hover com sombra laranja
    item.addEventListener('mouseenter', function() {
      this.style.boxShadow = '0 0 25px rgba(255, 120, 0, 0.7)';
      this.style.transform = 'scale(1.05) translateY(-5px)';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.boxShadow = '0 4px 12px rgba(255, 120, 0, 0.3)';
      this.style.transform = 'scale(1) translateY(0)';
    });
    
    // Efeito de clique - "assustador"
    item.addEventListener('click', function() {
      this.style.animation = 'shake 0.5s ease-in-out';
      setTimeout(() => {
        this.style.animation = '';
      }, 500);
    });
  });
  
  // Adicionar CSS para animação de shake
  const style = document.createElement('style');
  style.textContent = `
    @keyframes shake {
      0%, 100% { transform: translateX(0) scale(1.05); }
      25% { transform: translateX(-5px) scale(1.05); }
      50% { transform: translateX(5px) scale(1.05); }
      75% { transform: translateX(-5px) scale(1.05); }
    }
    
    .medo-item:hover::before {
      opacity: 0.4;
      transition: opacity 0.3s ease;
    }
  `;
  document.head.appendChild(style);
}

// Função para inicializar efeitos do título
function initTitleEffects() {
  const title = document.querySelector('h1');
  if (title) {
    // Efeito de brilho intermitente no título
    setInterval(() => {
      title.style.textShadow = `
        2px 2px 8px #000,
        0 0 10px rgba(255, 120, 0, ${Math.random() * 0.8 + 0.2})
      `;
    }, 2000);
  }
}

// Efeito especial para o número 1 (o mais assustador)
function highlightTopFear() {
  const topFear = document.querySelector('.medo-item[data-number="1"]');
  if (topFear) {
    setInterval(() => {
      topFear.style.border = '2px solid rgba(255, 69, 0, 0.8)';
      topFear.style.boxShadow = '0 0 30px rgba(255, 69, 0, 0.6)';
      
      setTimeout(() => {
        topFear.style.border = '1px solid rgba(255, 120, 0, 0.2)';
        topFear.style.boxShadow = '0 4px 12px rgba(255, 120, 0, 0.3)';
      }, 1000);
    }, 3000);
  }
}

// Easter egg: efeito especial ao pressionar certas teclas
document.addEventListener('keydown', function(e) {
  if (e.key === 'h' || e.key === 'H') {
    // Efeito Halloween extra!
    document.body.style.background = 'radial-gradient(circle at top, #ff4500 30%, #8b0000 100%)';
    setTimeout(() => {
      document.body.style.background = 'radial-gradient(circle at top, #0b0b0b 30%, #1a1a1a 100%)';
    }, 1000);
  }
});

// Inicializar todos os efeitos quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
  // Inicializar lista com todos os medos escondidos
  inicializarLista();
  
  // Configurar botão para revelar medos
  configurarBotaoRevelar();
  
  // Efeito de digitação no título
  const title = document.querySelector('h1');
  if (title) {
    const originalTitle = title.textContent;
    setTimeout(() => {
      typeWriter(title, originalTitle, 120);
    }, 1000);
  }
  
  // Inicializar outros efeitos de Halloween
  setTimeout(() => {
    addHalloweenEffects();
    initTitleEffects();
    highlightTopFear();
  }, 1500);
  // Controles de Música
function initMusicPlayer() {
  const audio = document.getElementById('halloween-music');
  const toggleBtn = document.getElementById('music-toggle');
  const volumeSlider = document.getElementById('volume-slider');
  const volumeDown = document.getElementById('volume-down');
  const volumeUp = document.getElementById('volume-up');
  const musicPlayer = document.getElementById('music-player');

  // Configurar volume inicial
  audio.volume = 0.3;
  volumeSlider.value = 0.3;

  // Toggle play/pause
  toggleBtn.addEventListener('click', function() {
    if (audio.paused) {
      audio.play();
      toggleBtn.textContent = '🎵 Música Tocando';
      musicPlayer.classList.add('music-playing');
    } else {
      audio.pause();
      toggleBtn.textContent = '🎵 Ligar Música';
      musicPlayer.classList.remove('music-playing');
    }
  });

  // Controle de volume
  volumeSlider.addEventListener('input', function() {
    audio.volume = this.value;
  });

  volumeDown.addEventListener('click', function() {
    if (audio.volume > 0.1) {
      audio.volume -= 0.1;
      volumeSlider.value = audio.volume;
    }
  });

  volumeUp.addEventListener('click', function() {
    if (audio.volume < 1) {
      audio.volume += 0.1;
      volumeSlider.value = audio.volume;
    }
  });

  // Auto-play (com interação do usuário primeiro)
  document.addEventListener('click', function initAutoPlay() {
    audio.play().then(() => {
      toggleBtn.textContent = '🎵 Música Tocando';
      musicPlayer.classList.add('music-playing');
    }).catch(error => {
      console.log('Auto-play prevented. User needs to interact first.');
    });
    document.removeEventListener('click', initAutoPlay);
  });
}

// Inicializar o player de música quando o DOM carregar
document.addEventListener('DOMContentLoaded', function() {
  // ... seus outros códigos ...
  
  // Inicializar player de música
  setTimeout(initMusicPlayer, 1000);
}); 
  console.log('🎃👻 Site dos Medos do Dev Iniciante carregado! Clique para revelar os medos... 💀');
});