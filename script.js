// ========================================
// TAROT MÍSTICO - JAVASCRIPT
// ========================================

// ========================================
// CONFIGURAÇÃO E CONSTANTES
// ========================================

const SESSION_STATES = {
    INITIAL: 'initial',
    WELCOME: 'welcome',
    INSTRUCTIONS: 'instructions',
    SELECTING: 'selecting',
    REVEALING: 'revealing',
    INTERPRETING: 'interpreting',
    COMPLETE: 'complete'
};

const VIDENTE_SPEECHES = {
    welcome: "Bem-vindo, querido buscador... Entre, sente-se. Sinto energias poderosas ao seu redor... A sala está preparada para revelar os mistérios que o aguardam.",
    instructions: "Vamos revelar o que as cartas guardam para você... Concentre-se em sua pergunta, respire fundo... e escolha três cartas que chamem sua atenção.",
    cardSelected: "Sinto uma energia forte nesta carta...",
    cardReveal: [
        "A primeira carta... representa seu passado recente. Vejo aqui...",
        "A segunda carta... mostra seu presente, o momento que você vive agora...",
        "E a terceira carta... revela seu futuro próximo, os caminhos que se abrem..."
    ],
    interpretation: "Interessante... estas três energias se conectam de forma poderosa... Vejo um padrão revelador em sua jornada. As cartas falam de transformação e crescimento.",
    closing: "Esta leitura revela aspectos profundos de sua jornada. Que esta sabedoria ilumine seu caminho, querido buscador. Até breve..."
};

// Dados das cartas de tarot com imagens
const tarotCards = [
    {
        name: "O Louco",
        number: 0,
        meaning: "Novos começos, espontaneidade, fé no universo. Um convite para seguir sua intuição sem medo do desconhecido.",
        image: "https://sacred-texts.com/tarot/pkt/img/ar00.jpg"
    },
    {
        name: "O Mago",
        number: 1,
        meaning: "Poder pessoal, habilidade, manifestação. Você tem todas as ferramentas necessárias para criar sua realidade.",
        image: "https://sacred-texts.com/tarot/pkt/img/ar01.jpg"
    },
    {
        name: "A Sacerdotisa",
        number: 2,
        meaning: "Intuição, mistério, sabedoria interior. Confie em seus instintos e no conhecimento que vem do seu subconsciente.",
        image: "https://sacred-texts.com/tarot/pkt/img/ar02.jpg"
    },
    {
        name: "A Imperatriz",
        number: 3,
        meaning: "Fertilidade, beleza, abundância. Momento de nutrir seus projetos e conectar-se com a natureza e a criatividade.",
        image: "https://sacred-texts.com/tarot/pkt/img/ar03.jpg"
    },
    {
        name: "O Imperador",
        number: 4,
        meaning: "Estrutura, autoridade, estabilidade. Estabeleça limites e tome o controle da sua vida com sabedoria.",
        image: "https://sacred-texts.com/tarot/pkt/img/ar04.jpg"
    },
    {
        name: "O Hierofante",
        number: 5,
        meaning: "Tradição, espiritualidade, conselhos. Busque orientação em sistemas de crenças estabelecidos ou mentores.",
        image: "https://sacred-texts.com/tarot/pkt/img/ar05.jpg"
    },
    {
        name: "Os Enamorados",
        number: 6,
        meaning: "Amor, harmonia, relacionamentos. Decisões do coração e escolhas que refletem seus valores mais profundos.",
        image: "https://sacred-texts.com/tarot/pkt/img/ar06.jpg"
    },
    {
        name: "O Carro",
        number: 7,
        meaning: "Determinação, vitória, controle. Avance com confiança em direção aos seus objetivos, superando obstáculos.",
        image: "https://sacred-texts.com/tarot/pkt/img/ar07.jpg"
    },
    {
        name: "A Força",
        number: 8,
        meaning: "Coragem, paciência, compaixão. Sua força interior é maior do que qualquer desafio que enfrente.",
        image: "https://sacred-texts.com/tarot/pkt/img/ar08.jpg"
    },
    {
        name: "O Eremita",
        number: 9,
        meaning: "Introspecção, sabedoria, solidão. Momento de buscar respostas dentro de si mesmo através da reflexão.",
        image: "https://sacred-texts.com/tarot/pkt/img/ar09.jpg"
    },
    {
        name: "A Roda da Fortuna",
        number: 10,
        meaning: "Ciclos, destino, mudança. As circunstâncias estão mudando a seu favor - esteja aberto ao fluxo da vida.",
        image: "https://sacred-texts.com/tarot/pkt/img/ar10.jpg"
    },
    {
        name: "A Justiça",
        number: 11,
        meaning: "Equilíbrio, verdade, causa e efeito. Suas ações terão consequências - aja com integridade e honestidade.",
        image: "https://sacred-texts.com/tarot/pkt/img/ar11.jpg"
    },
    {
        name: "O Enforcado",
        number: 12,
        meaning: "Rendição, nova perspectiva, pausa. Às vezes, é preciso parar e ver as coisas de um ângulo diferente.",
        image: "https://sacred-texts.com/tarot/pkt/img/ar12.jpg"
    },
    {
        name: "A Morte",
        number: 13,
        meaning: "Fim de ciclo, transformação, renovação. Deixe ir o que não serve mais para abrir espaço para o novo.",
        image: "https://sacred-texts.com/tarot/pkt/img/ar13.jpg"
    },
    {
        name: "A Temperança",
        number: 14,
        meaning: "Moderação, equilíbrio, paciência. Encontre o ponto médio em situações extremas e pratique a autodisciplina.",
        image: "https://sacred-texts.com/tarot/pkt/img/ar14.jpg"
    },
    {
        name: "O Diabo",
        number: 15,
        meaning: "Escravidão, materialismo, limitações. Examine quais crenças ou hábitos estão te prendendo.",
        image: "https://sacred-texts.com/tarot/pkt/img/ar15.jpg"
    },
    {
        name: "A Torre",
        number: 16,
        meaning: "Mudança abrupta, revelação, libertação. Estruturas que não são sólidas estão desmoronando para seu crescimento.",
        image: "https://sacred-texts.com/tarot/pkt/img/ar16.jpg"
    },
    {
        name: "A Estrela",
        number: 17,
        meaning: "Esperança, fé, inspiração. Após um período difícil, a luz está brilhando - mantenha a fé no futuro.",
        image: "https://sacred-texts.com/tarot/pkt/img/ar17.jpg"
    },
    {
        name: "A Lua",
        number: 18,
        meaning: "Ilusão, ansiedade, subconsciente. Confie em sua intuição para navegar por emoções confusas ou situações incertas.",
        image: "https://sacred-texts.com/tarot/pkt/img/ar18.jpg"
    },
    {
        name: "O Sol",
        number: 19,
        meaning: "Alegria, sucesso, vitalidade. Um período de felicidade, realização e energia positiva está chegando.",
        image: "https://sacred-texts.com/tarot/pkt/img/ar19.jpg"
    },
    {
        name: "O Julgamento",
        number: 20,
        meaning: "Renascimento, despertar, chamado interior. É hora de responder a um chamado superior e viver seu propósito.",
        image: "https://sacred-texts.com/tarot/pkt/img/ar20.jpg"
    },
    {
        name: "O Mundo",
        number: 21,
        meaning: "Conclusão, realização, unidade. Você alcançou um marco importante e está pronto para um novo ciclo.",
        image: "https://sacred-texts.com/tarot/pkt/img/ar21.jpg"
    }
];

// ========================================
// CLASSE: SISTEMA DE VOZ (Web Speech API)
// ========================================

class TarotVoice {
    constructor() {
        this.synth = window.speechSynthesis;
        this.voice = null;
        this.enabled = true;
        this.isSpeaking = false;
        this.speechQueue = [];
        this.initVoice();
    }
    
    initVoice() {
        // Esperar as vozes carregarem
        if (this.synth.getVoices().length > 0) {
            this.selectVoice();
        } else {
            this.synth.addEventListener('voiceschanged', () => {
                this.selectVoice();
            });
        }
    }
    
    selectVoice() {
        const voices = this.synth.getVoices();
        
        // Tentar encontrar uma voz feminina em português
        this.voice = voices.find(v => 
            (v.lang.includes('pt') || v.lang.includes('BR')) && 
            (v.name.includes('female') || v.name.includes('Female') || v.name.includes('Luciana') || v.name.includes('Francisca'))
        ) || voices.find(v => v.lang.includes('pt')) || voices[0];
        
        console.log('✅ Voz selecionada:', this.voice?.name);
        console.log('📋 Idioma:', this.voice?.lang);
        console.log('🎭 Local:', this.voice?.localService ? 'Local' : 'Online');
    }
    
    getAllVoices() {
        return this.synth.getVoices();
    }
    
    setVoice(voice) {
        this.voice = voice;
        console.log('🔄 Voz alterada para:', voice.name);
    }
    
    testVoice(voice, text = "Olá, eu sou a vidente. Esta é minha voz.") {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.voice = voice;
        utterance.rate = 0.85;
        utterance.pitch = 1.1;
        utterance.volume = 0.9;
        this.synth.speak(utterance);
    }
    
    speak(text, callback) {
        if (!this.enabled || !this.synth) {
            if (callback) callback();
            return;
        }
        
        this.stop(); // Para qualquer fala anterior
        
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.voice = this.voice;
        utterance.rate = 1.1; // Um pouco mais lento para atmosfera
        utterance.pitch = 1.0; // Levemente mais agudo
        utterance.volume = 0.9;
        
        utterance.onstart = () => {
            this.isSpeaking = true;
            this.showVoiceIndicator();
        };
        
        utterance.onend = () => {
            this.isSpeaking = false;
            this.hideVoiceIndicator();
            if (callback) callback();
        };
        
        utterance.onerror = (e) => {
            console.error('Erro na síntese de voz:', e);
            this.isSpeaking = false;
            this.hideVoiceIndicator();
            if (callback) callback();
        };
        
        this.synth.speak(utterance);
    }
    
    stop() {
        if (this.synth) {
            this.synth.cancel();
            this.isSpeaking = false;
            this.hideVoiceIndicator();
        }
    }
    
    toggle() {
        this.enabled = !this.enabled;
        if (!this.enabled) {
            this.stop();
        }
        return this.enabled;
    }
    
    showVoiceIndicator() {
        const indicator = document.getElementById('voiceIndicator');
        indicator.classList.add('speaking');
    }
    
    hideVoiceIndicator() {
        const indicator = document.getElementById('voiceIndicator');
        indicator.classList.remove('speaking');
    }
}

// ========================================
// CLASSE: SISTEMA DE CANVAS (Partículas e Velas)
// ========================================

class TarotCanvas {
    constructor() {
        this.particlesCanvas = document.getElementById('particlesCanvas');
        this.candlesCanvas = document.getElementById('candlesCanvas');
        this.particles = [];
        this.candles = [];
        this.animationFrame = null;
        this.isMobile = window.innerWidth < 768;
        
        this.initCanvases();
        this.initParticles();
        this.initCandles();
        this.animate();
        
        window.addEventListener('resize', () => this.handleResize());
    }
    
    initCanvases() {
        [this.particlesCanvas, this.candlesCanvas].forEach(canvas => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    }
    
    initParticles() {
        const particleCount = this.isMobile ? 100 : 250;
        const ctx = this.particlesCanvas.getContext('2d');
        
        for (let i = 0; i < particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.particlesCanvas.width,
                y: Math.random() * this.particlesCanvas.height,
                size: Math.random() * 3 + 1,
                speedX: (Math.random() - 0.5) * 0.3,
                speedY: (Math.random() - 0.5) * 0.3,
                opacity: Math.random() * 0.5 + 0.3,
                color: Math.random() > 0.5 ? '#ba68c8' : '#ffd700'
            });
        }
    }
    
    initCandles() {
        const positions = [
            { x: 50, y: 50 },      // Superior esquerdo
            { x: window.innerWidth - 50, y: 50 },  // Superior direito
            { x: 50, y: window.innerHeight - 100 }, // Inferior esquerdo
            { x: window.innerWidth - 50, y: window.innerHeight - 100 } // Inferior direito
        ];
        
        positions.forEach(pos => {
            this.candles.push({
                x: pos.x,
                y: pos.y,
                flicker: Math.random() * Math.PI * 2,
                flickerSpeed: 0.1 + Math.random() * 0.05
            });
        });
    }
    
    animate() {
        this.drawParticles();
        this.drawCandles();
        this.animationFrame = requestAnimationFrame(() => this.animate());
    }
    
    drawParticles() {
        const ctx = this.particlesCanvas.getContext('2d');
        ctx.clearRect(0, 0, this.particlesCanvas.width, this.particlesCanvas.height);
        
        this.particles.forEach(particle => {
            // Atualizar posição
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            
            // Wrapping
            if (particle.x < 0) particle.x = this.particlesCanvas.width;
            if (particle.x > this.particlesCanvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = this.particlesCanvas.height;
            if (particle.y > this.particlesCanvas.height) particle.y = 0;
            
            // Desenhar
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.globalAlpha = particle.opacity * (0.7 + Math.sin(Date.now() * 0.001 + particle.x) * 0.3);
            ctx.fill();
            
            // Brilho
            const gradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.size * 3);
            gradient.addColorStop(0, particle.color + '40');
            gradient.addColorStop(1, 'transparent');
            ctx.fillStyle = gradient;
            ctx.fillRect(particle.x - particle.size * 3, particle.y - particle.size * 3, particle.size * 6, particle.size * 6);
        });
        
        ctx.globalAlpha = 1;
    }
    
    drawCandles() {
        const ctx = this.candlesCanvas.getContext('2d');
        ctx.clearRect(0, 0, this.candlesCanvas.width, this.candlesCanvas.height);
        
        this.candles.forEach(candle => {
            // Atualizar flicker
            candle.flicker += candle.flickerSpeed;
            
            const flickerAmount = Math.sin(candle.flicker) * 3;
            const flameHeight = 25 + flickerAmount;
            const flameWidth = 12 + Math.abs(flickerAmount) * 0.5;
            
            // Brilho da vela
            const gradient = ctx.createRadialGradient(
                candle.x, candle.y - 15, 0,
                candle.x, candle.y - 15, 60
            );
            gradient.addColorStop(0, 'rgba(255, 200, 100, 0.4)');
            gradient.addColorStop(0.5, 'rgba(255, 150, 50, 0.1)');
            gradient.addColorStop(1, 'transparent');
            ctx.fillStyle = gradient;
            ctx.fillRect(candle.x - 60, candle.y - 75, 120, 120);
            
            // Chama
            const flameGradient = ctx.createLinearGradient(
                candle.x, candle.y,
                candle.x, candle.y - flameHeight
            );
            flameGradient.addColorStop(0, '#ff6b00');
            flameGradient.addColorStop(0.4, '#ff9500');
            flameGradient.addColorStop(0.7, '#ffcc00');
            flameGradient.addColorStop(1, 'rgba(255, 255, 200, 0.9)');
            
            ctx.fillStyle = flameGradient;
            ctx.beginPath();
            ctx.ellipse(candle.x, candle.y - 10, flameWidth / 2, flameHeight / 2, 0, 0, Math.PI * 2);
            ctx.fill();
            
            // Ponta brilhante
            ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
            ctx.beginPath();
            ctx.arc(candle.x, candle.y - flameHeight + 5, 2, 0, Math.PI * 2);
            ctx.fill();
        });
    }
    
    handleResize() {
        this.isMobile = window.innerWidth < 768;
        this.initCanvases();
        this.particles = [];
        this.candles = [];
        this.initParticles();
        this.initCandles();
    }
    
    destroy() {
        if (this.animationFrame) {
            cancelAnimationFrame(this.animationFrame);
        }
    }
}

// ========================================
// CLASSE: SISTEMA DE ANIMAÇÕES
// ========================================

class TarotAnimations {
    fadeIn(element, duration = 1000) {
        return new Promise(resolve => {
            element.style.transition = `opacity ${duration}ms ease`;
            element.style.opacity = '0';
            element.style.visibility = 'visible';
            element.style.display = 'flex';
            
            setTimeout(() => {
                element.style.opacity = '1';
            }, 10);
            
            setTimeout(resolve, duration);
        });
    }
    
    fadeOut(element, duration = 500) {
        return new Promise(resolve => {
            element.style.transition = `opacity ${duration}ms ease`;
            element.style.opacity = '0';
            
            setTimeout(() => {
                element.style.visibility = 'hidden';
                resolve();
            }, duration);
        });
    }
    
    focusCard(cardElement) {
        const rect = cardElement.getBoundingClientRect();
        const centerX = (rect.left + rect.right) / 2;
        const centerY = (rect.top + rect.bottom) / 2;
        
        const spotlight = document.getElementById('spotlight');
        spotlight.style.setProperty('--spotlight-x', `${centerX}px`);
        spotlight.style.setProperty('--spotlight-y', `${centerY}px`);
        spotlight.classList.add('active');
        
        cardElement.classList.add('focused');
    }
    
    unfocusAll() {
        const spotlight = document.getElementById('spotlight');
        spotlight.classList.remove('active');
        
        document.querySelectorAll('.card.focused').forEach(card => {
            card.classList.remove('focused');
        });
    }
}

// ========================================
// CLASSE: SESSÃO DE TAROT (Gerenciador Principal)
// ========================================

class TarotSession {
    constructor() {
        this.state = SESSION_STATES.INITIAL;
        this.voice = new TarotVoice();
        this.canvas = new TarotCanvas();
        this.animations = new TarotAnimations();
        
        this.selectedCards = [];
        this.revealedCards = [];
        this.currentRevealIndex = 0;
        
        this.isMusicPlaying = false;
        
        this.initDOM();
        this.initEventListeners();
        this.initGame();
    }
    
    initDOM() {
        // Elementos principais
        this.elements = {
            loadingScreen: document.getElementById('loadingScreen'),
            mainHeader: document.getElementById('mainHeader'),
            tarotDeck: document.getElementById('tarotDeck'),
            selectedCardsContainer: document.getElementById('selectedCards'),
            selectingInstructions: document.getElementById('selectingInstructions'),
            selectedCount: document.getElementById('selectedCount'),
            readingResult: document.getElementById('readingResult'),
            interpretations: document.getElementById('interpretations'),
            crystalBall: document.getElementById('crystalBall'),
            
            // Telas de sessão
            welcomeScreen: document.getElementById('welcomeScreen'),
            welcomeMessage: document.getElementById('welcomeMessage'),
            instructionsScreen: document.getElementById('instructionsScreen'),
            instructionsMessage: document.getElementById('instructionsMessage'),
            interpretingScreen: document.getElementById('interpretingScreen'),
            interpretingMessage: document.getElementById('interpretingMessage'),
            completeScreen: document.getElementById('completeScreen'),
            completeMessage: document.getElementById('completeMessage'),
            
            // Tela de revelação de carta
            cardRevealScreen: document.getElementById('cardRevealScreen'),
            revealPosition: document.getElementById('revealPosition'),
            revealCardImage: document.getElementById('revealCardImage'),
            revealCardName: document.getElementById('revealCardName'),
            revealCardMeaning: document.getElementById('revealCardMeaning'),
            revealSpeechText: document.getElementById('revealSpeechText'),
            
            // Modal de vozes
            voiceModal: document.getElementById('voiceModal'),
            voiceList: document.getElementById('voiceList'),
            voiceSelector: document.getElementById('voiceSelector'),
            closeVoiceModal: document.getElementById('closeVoiceModal'),
            
            // Botões
            startSession: document.getElementById('startSession'),
            continueFromWelcome: document.getElementById('continueFromWelcome'),
            startSelection: document.getElementById('startSelection'),
            continueFromInterpreting: document.getElementById('continueFromInterpreting'),
            newReading: document.getElementById('newReading'),
            voiceToggle: document.getElementById('voiceToggle'),
            musicToggle: document.getElementById('musicToggle'),
            
            // Áudio
            backgroundMusic: document.getElementById('backgroundMusic'),
            cardFlipSound: document.getElementById('cardFlipSound'),
            revealSound: document.getElementById('revealSound')
        };
    }
    
    initEventListeners() {
        this.elements.startSession.addEventListener('click', () => this.startSession());
        this.elements.continueFromWelcome.addEventListener('click', () => this.changeState(SESSION_STATES.INSTRUCTIONS));
        this.elements.startSelection.addEventListener('click', () => this.changeState(SESSION_STATES.SELECTING));
        this.elements.continueFromInterpreting.addEventListener('click', () => this.changeState(SESSION_STATES.COMPLETE));
        this.elements.newReading.addEventListener('click', () => this.resetSession());
        
        this.elements.voiceToggle.addEventListener('click', () => this.toggleVoice());
        this.elements.musicToggle.addEventListener('click', () => this.toggleMusic());
        
        // Modal de seleção de voz
        this.elements.voiceSelector.addEventListener('click', () => this.openVoiceModal());
        this.elements.closeVoiceModal.addEventListener('click', () => this.closeVoiceModal());
        this.elements.voiceModal.addEventListener('click', (e) => {
            if (e.target === this.elements.voiceModal) {
                this.closeVoiceModal();
            }
        });
    }
    
    initGame() {
        // Criar baralho
        const shuffledCards = [...tarotCards].sort(() => Math.random() - 0.5);
        
        shuffledCards.forEach((card, index) => {
            const cardElement = this.createCardElement(card, index);
            this.elements.tarotDeck.appendChild(cardElement);
        });
        
        // Configurar música
        this.elements.backgroundMusic.volume = 0.2;
        
        // Esconder loading screen após inicialização
        setTimeout(() => {
            this.elements.loadingScreen.classList.add('hidden');
        }, 1500);
    }
    
    createCardElement(card, index) {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.dataset.index = index;
        cardElement.dataset.cardName = card.name;
        
        cardElement.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <span>Tarot</span>
                </div>
                <div class="card-back">
                    <img src="${card.image}" alt="${card.name}" class="card-image">
                    <div class="card-name">${card.name}</div>
                </div>
            </div>
            <div class="card-glow"></div>
        `;
        
        cardElement.addEventListener('click', () => this.selectCard(cardElement, card));
        return cardElement;
    }
    
    // ========================================
    // MÉTODOS DE CONTROLE DE ESTADO
    // ========================================
    
    startSession() {
        // Iniciar música se não estiver tocando
        if (!this.isMusicPlaying) {
            this.toggleMusic();
        }
        
        this.changeState(SESSION_STATES.WELCOME);
    }
    
    changeState(newState) {
        console.log('Mudando estado para:', newState);
        this.state = newState;
        
        switch (newState) {
            case SESSION_STATES.WELCOME:
                this.showWelcomeScreen();
                break;
            case SESSION_STATES.INSTRUCTIONS:
                this.showInstructionsScreen();
                break;
            case SESSION_STATES.SELECTING:
                this.showSelectingScreen();
                break;
            case SESSION_STATES.REVEALING:
                this.revealCardsSequence();
                break;
            case SESSION_STATES.INTERPRETING:
                this.showInterpretingScreen();
                break;
            case SESSION_STATES.COMPLETE:
                this.showCompleteScreen();
                break;
        }
    }
    
    // ========================================
    // TELAS DE SESSÃO
    // ========================================
    
    showWelcomeScreen() {
        this.elements.mainHeader.classList.add('hidden');
        this.elements.welcomeMessage.textContent = VIDENTE_SPEECHES.welcome;
        this.elements.welcomeScreen.classList.add('active');
        this.elements.crystalBall.classList.add('visible');
        
        this.voice.speak(VIDENTE_SPEECHES.welcome, () => {
            this.elements.continueFromWelcome.style.display = 'flex';
        });
    }
    
    showInstructionsScreen() {
        this.elements.welcomeScreen.classList.remove('active');
        this.elements.instructionsMessage.textContent = VIDENTE_SPEECHES.instructions;
        this.elements.instructionsScreen.classList.add('active');
        
        this.voice.speak(VIDENTE_SPEECHES.instructions, () => {
            this.elements.startSelection.style.display = 'flex';
        });
    }
    
    showSelectingScreen() {
        this.elements.instructionsScreen.classList.remove('active');
        this.elements.selectingInstructions.style.display = 'block';
        this.elements.tarotDeck.classList.add('visible');
        // Manter header escondido e mostrar bola de cristal
        this.elements.mainHeader.classList.add('hidden');
        this.elements.crystalBall.classList.add('visible');
        
        // Ativar cartas para seleção
        document.querySelectorAll('.card').forEach(card => {
            card.classList.add('selectable');
        });
    }
    
    async showInterpretingScreen() {
        // Esconder cartas e deck
        this.elements.tarotDeck.style.opacity = '0';
        this.elements.selectingInstructions.style.display = 'none';
        
        await new Promise(resolve => setTimeout(resolve, 500));
        
        this.elements.interpretingMessage.textContent = VIDENTE_SPEECHES.interpretation;
        this.elements.interpretingScreen.classList.add('active');
        
        this.voice.speak(VIDENTE_SPEECHES.interpretation, () => {
            this.elements.continueFromInterpreting.style.display = 'flex';
        });
    }
    
    showCompleteScreen() {
        this.elements.interpretingScreen.classList.remove('active');
        this.elements.completeMessage.textContent = VIDENTE_SPEECHES.closing;
        this.elements.completeScreen.classList.add('active');
        
        this.voice.speak(VIDENTE_SPEECHES.closing);
        
        // Mostrar resultado final
        setTimeout(() => {
            this.showFinalReading();
        }, 2000);
    }
    
    // ========================================
    // LÓGICA DE SELEÇÃO DE CARTAS
    // ========================================
    
    selectCard(cardElement, card) {
        if (this.state !== SESSION_STATES.SELECTING) return;
        if (this.selectedCards.includes(cardElement) || this.selectedCards.length >= 3) return;
        
        // Som de carta
        this.elements.cardFlipSound.currentTime = 0;
        this.elements.cardFlipSound.play();
        
        // Virar carta
        cardElement.classList.add('flipped', 'selected');
        cardElement.classList.remove('selectable');
        
        // Adicionar à seleção
        this.selectedCards.push(cardElement);
        this.revealedCards.push(card);
        
        // Atualizar contador
        this.elements.selectedCount.textContent = this.selectedCards.length;
        
        // Se completou 3 cartas, iniciar revelação
        if (this.selectedCards.length === 3) {
            setTimeout(() => {
                // Desabilitar todas as cartas
                document.querySelectorAll('.card').forEach(c => {
                    c.classList.remove('selectable');
                    c.style.pointerEvents = 'none';
                });
                
                this.changeState(SESSION_STATES.REVEALING);
            }, 1000);
        }
    }
    
    // ========================================
    // REVELAÇÃO DAS CARTAS
    // ========================================
    
    async revealCardsSequence() {
        this.elements.revealSound.play();
        
        for (let i = 0; i < this.selectedCards.length; i++) {
            await this.revealCard(this.selectedCards[i], this.revealedCards[i], i);
            await new Promise(resolve => setTimeout(resolve, 1500));
        }
        
        // Após revelar todas, ir para interpretação
        setTimeout(() => {
            this.animations.unfocusAll();
            this.changeState(SESSION_STATES.INTERPRETING);
        }, 2000);
    }
    
    revealCard(cardElement, card, index) {
        return new Promise(resolve => {
            // Mostrar tela de revelação
            const positions = [
                '🔮 Passado - As raízes de sua jornada',
                '✨ Presente - O momento atual',
                '🌟 Futuro - O que está por vir'
            ];
            
            this.elements.revealPosition.textContent = positions[index];
            this.elements.revealCardImage.src = card.image;
            this.elements.revealCardName.textContent = card.name;
            this.elements.revealCardMeaning.textContent = card.meaning;
            
            // Fala completa da vidente
            const speech = `${VIDENTE_SPEECHES.cardReveal[index]} ${card.name}. ${card.meaning}`;
            this.elements.revealSpeechText.textContent = speech;
            
            // Mostrar a tela
            this.elements.cardRevealScreen.classList.add('active');
            
            // Animar texto palavra por palavra
            this.animateText(this.elements.revealSpeechText, speech, 50);
            
            // Falar sobre a carta
            this.voice.speak(speech, () => {
                // Aguardar um pouco antes de esconder
                setTimeout(() => {
                    this.elements.cardRevealScreen.classList.remove('active');
                    // Aguardar animação de saída
                    setTimeout(resolve, 500);
                }, 2000);
            });
        });
    }
    
    animateText(element, text, delay = 50) {
        element.textContent = '';
        const words = text.split(' ');
        let currentIndex = 0;
        
        const interval = setInterval(() => {
            if (currentIndex < words.length) {
                element.textContent += (currentIndex > 0 ? ' ' : '') + words[currentIndex];
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, delay);
    }
    
    // ========================================
    // LEITURA FINAL
    // ========================================
    
    showFinalReading() {
        this.elements.completeScreen.style.pointerEvents = 'none';
        this.elements.completeScreen.style.opacity = '0.3';
        
        this.elements.interpretations.innerHTML = '';
        
        this.revealedCards.forEach((card, index) => {
            const position = ['Passado', 'Presente', 'Futuro'][index];
            const icons = ['fas fa-history', 'fas fa-clock', 'fas fa-hourglass-end'];
            
            const interpretationElement = document.createElement('div');
            interpretationElement.className = 'card-interpretation';
            interpretationElement.innerHTML = `
                <div class="interpretation-card-container">
                    <img src="${card.image}" alt="${card.name}" class="interpretation-card-image">
                </div>
                <div class="interpretation-text">
                    <h3><i class="${icons[index]}"></i> ${position}: ${card.name}</h3>
                    <p>${card.meaning}</p>
                </div>
            `;
            
            this.elements.interpretations.appendChild(interpretationElement);
        });
        
        this.elements.readingResult.classList.add('visible');
        this.elements.readingResult.scrollIntoView({ behavior: 'smooth' });
    }
    
    // ========================================
    // RESET E CONTROLES
    // ========================================
    
    resetSession() {
        // Parar voz
        this.voice.stop();
        
        // Limpar seleções
        this.selectedCards = [];
        this.revealedCards = [];
        this.currentRevealIndex = 0;
        
        // Limpar telas
        this.elements.welcomeScreen.classList.remove('active');
        this.elements.instructionsScreen.classList.remove('active');
        this.elements.interpretingScreen.classList.remove('active');
        this.elements.completeScreen.classList.remove('active');
        
        // Esconder elementos
        this.elements.continueFromWelcome.style.display = 'none';
        this.elements.startSelection.style.display = 'none';
        this.elements.continueFromInterpreting.style.display = 'none';
        this.elements.selectingInstructions.style.display = 'none';
        this.elements.readingResult.classList.remove('visible');
        this.elements.crystalBall.classList.remove('visible');
        
        // Resetar opacidade
        this.elements.completeScreen.style.pointerEvents = 'all';
        this.elements.completeScreen.style.opacity = '1';
        
        // Limpar containers
        this.elements.selectedCardsContainer.innerHTML = '';
        this.elements.interpretations.innerHTML = '';
        
        // Resetar cartas
        document.querySelectorAll('.card').forEach(card => {
            card.classList.remove('flipped', 'selected', 'revealing', 'focused', 'selectable');
            card.style.pointerEvents = 'auto';
        });
        
        // Resetar contador
        this.elements.selectedCount.textContent = '0';
        
        // Resetar deck
        this.elements.tarotDeck.style.opacity = '0';
        this.elements.tarotDeck.classList.remove('visible');
        
        // Embaralhar
        const cardElements = Array.from(this.elements.tarotDeck.children);
        cardElements.sort(() => Math.random() - 0.5);
        cardElements.forEach(card => this.elements.tarotDeck.appendChild(card));
        
        // Resetar header
        this.elements.mainHeader.classList.remove('hidden');
        
        // Voltar ao estado inicial
        this.state = SESSION_STATES.INITIAL;
    }
    
    toggleVoice() {
        const enabled = this.voice.toggle();
        const icon = this.elements.voiceToggle.querySelector('i');
        
        if (enabled) {
            icon.className = 'fas fa-volume-up';
            this.elements.voiceToggle.classList.remove('disabled');
        } else {
            icon.className = 'fas fa-volume-mute';
            this.elements.voiceToggle.classList.add('disabled');
        }
    }
    
    toggleMusic() {
        if (this.isMusicPlaying) {
            this.elements.backgroundMusic.pause();
            this.elements.musicToggle.querySelector('i').className = 'fas fa-music-slash';
        } else {
            this.elements.backgroundMusic.play();
            this.elements.musicToggle.querySelector('i').className = 'fas fa-music';
        }
        this.isMusicPlaying = !this.isMusicPlaying;
    }
    
    // ========================================
    // MODAL DE SELEÇÃO DE VOZ
    // ========================================
    
    openVoiceModal() {
        const voices = this.voice.getAllVoices();
        
        if (voices.length === 0) {
            alert('Aguarde um momento enquanto as vozes são carregadas...');
            setTimeout(() => this.openVoiceModal(), 500);
            return;
        }
        
        this.populateVoiceList(voices);
        this.elements.voiceModal.classList.add('active');
    }
    
    closeVoiceModal() {
        this.elements.voiceModal.classList.remove('active');
    }
    
    populateVoiceList(voices) {
        this.elements.voiceList.innerHTML = '';
        
        // Agrupar por idioma
        const voicesByLang = {};
        voices.forEach(voice => {
            const lang = voice.lang.split('-')[0]; // pt-BR -> pt
            if (!voicesByLang[lang]) {
                voicesByLang[lang] = [];
            }
            voicesByLang[lang].push(voice);
        });
        
        // Criar filtros
        const filterDiv = document.createElement('div');
        filterDiv.className = 'voice-filter';
        
        const allBtn = document.createElement('button');
        allBtn.className = 'filter-btn active';
        allBtn.textContent = 'Todas';
        allBtn.onclick = () => this.filterVoices('all');
        filterDiv.appendChild(allBtn);
        
        Object.keys(voicesByLang).sort().forEach(lang => {
            const btn = document.createElement('button');
            btn.className = 'filter-btn';
            btn.textContent = this.getLanguageName(lang);
            btn.onclick = () => this.filterVoices(lang);
            filterDiv.appendChild(btn);
        });
        
        this.elements.voiceList.appendChild(filterDiv);
        
        // Listar todas as vozes
        voices.forEach((voice, index) => {
            const voiceItem = this.createVoiceItem(voice, index);
            this.elements.voiceList.appendChild(voiceItem);
        });
    }
    
    createVoiceItem(voice, index) {
        const div = document.createElement('div');
        div.className = 'voice-item';
        div.dataset.lang = voice.lang.split('-')[0];
        
        if (this.voice.voice && this.voice.voice.name === voice.name) {
            div.classList.add('selected');
        }
        
        div.innerHTML = `
            <div class="voice-info">
                <div class="voice-name">${voice.name}</div>
                <div class="voice-details">
                    <span class="voice-lang">${voice.lang}</span>
                    <span>${voice.localService ? '💾 Local' : '☁️ Online'}</span>
                </div>
            </div>
            <div class="voice-actions">
                <button class="btn-test-voice" data-index="${index}">
                    <i class="fas fa-play"></i> Testar
                </button>
            </div>
        `;
        
        // Evento de clique para selecionar
        div.addEventListener('click', (e) => {
            if (!e.target.closest('.btn-test-voice')) {
                this.selectVoiceFromModal(voice);
            }
        });
        
        // Evento de teste
        const testBtn = div.querySelector('.btn-test-voice');
        testBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.voice.testVoice(voice);
        });
        
        return div;
    }
    
    selectVoiceFromModal(voice) {
        this.voice.setVoice(voice);
        
        // Atualizar seleção visual
        document.querySelectorAll('.voice-item').forEach(item => {
            item.classList.remove('selected');
        });
        
        event.currentTarget.classList.add('selected');
        
        // Fechar modal após breve delay
        setTimeout(() => {
            this.closeVoiceModal();
        }, 500);
    }
    
    filterVoices(lang) {
        // Atualizar botões de filtro
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        event.target.classList.add('active');
        
        // Filtrar vozes
        document.querySelectorAll('.voice-item').forEach(item => {
            if (lang === 'all' || item.dataset.lang === lang) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    }
    
    getLanguageName(code) {
        const names = {
            'pt': '🇧🇷 Português',
            'en': '🇺🇸 Inglês',
            'es': '🇪🇸 Espanhol',
            'fr': '🇫🇷 Francês',
            'de': '🇩🇪 Alemão',
            'it': '🇮🇹 Italiano',
            'ja': '🇯🇵 Japonês',
            'zh': '🇨🇳 Chinês',
            'ru': '🇷🇺 Russo',
            'ar': '🇸🇦 Árabe',
            'hi': '🇮🇳 Hindi',
            'ko': '🇰🇷 Coreano'
        };
        return names[code] || code.toUpperCase();
    }
}

// ========================================
// INICIALIZAÇÃO
// ========================================

let tarotSession;

window.addEventListener('DOMContentLoaded', () => {
    tarotSession = new TarotSession();
});

