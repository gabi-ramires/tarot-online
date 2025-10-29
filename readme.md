# Tarot Místico - Experiência Imersiva

Uma experiência totalmente imersiva de tarot online com vidente virtual, efeitos visuais avançados e narração por voz.

## 📁 Estrutura do Projeto

```
tarot-online/
├── index.html      # Estrutura HTML
├── styles.css      # Estilos e animações
├── script.js       # Lógica JavaScript e classes
└── readme.md       # Documentação
```

## 🌟 Recursos Implementados

### 1. **Vidente Virtual com Web Speech API**
- Narração por voz em português
- Voz feminina suave e misteriosa
- Fala contextual em cada etapa da sessão
- Indicador visual de quando a vidente está falando

### 2. **Sistema de Estados da Sessão**
- **Boas-vindas**: A vidente recebe o usuário
- **Instruções**: Explicação do processo
- **Seleção**: Usuário escolhe 3 cartas
- **Revelação**: Cada carta é revelada com narração
- **Interpretação**: Conexão das 3 cartas
- **Encerramento**: Mensagem final e leitura completa

### 3. **Efeitos Visuais Avançados (Canvas)**
- **Partículas Flutuantes**: 250 partículas douradas e roxas com movimento suave
- **Velas Animadas**: 4 velas nos cantos com chamas realistas e oscilantes
- **Brilho Dinâmico**: Efeitos de luz ao redor das velas
- **Performance Otimizada**: Redução automática de efeitos em mobile

### 4. **Cenário Místico**
- Sala escura com iluminação suave
- Mesa de madeira com perspectiva
- Bola de cristal animada
- Fumaça de incenso flutuante
- Paleta de cores: roxos profundos, dourados e magenta

### 5. **Animações das Cartas**
- **Pulsação sutil** quando selecionáveis
- **Levitação** ao ser selecionada
- **Revelação dramática** com rotação 3D
- **Spotlight effect** com foco individual em cada carta
- **Brilho mágico** ao passar o mouse

### 6. **Interface Imersiva**
- Design minimalista que surge gradualmente
- Botões contextuais em cada estado
- Transições suaves entre telas
- Controles de voz e música
- Totalmente responsivo (desktop e mobile)

### 7. **Sistema de Áudio**
- Música ambiente misteriosa
- Efeitos sonoros para cartas
- Controles independentes para voz e música
- Volume balanceado

## 🎮 Como Usar

1. Abra o arquivo `index.html` em um navegador moderno
2. Clique em "Iniciar Sessão"
3. A vidente dará as boas-vindas (com voz!)
4. Siga as instruções e escolha 3 cartas
5. Aguarde a revelação e interpretação
6. Veja sua leitura completa ao final

## 🎛️ Controles

- **🔊 Ícone de Volume**: Liga/Desliga a voz da vidente
- **🎵 Ícone de Música**: Liga/Desliga música ambiente
- **Nova Consulta**: Reinicia toda a experiência

## 💻 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Animações, gradientes e efeitos 3D
- **JavaScript ES6+**: Classes modulares e async/await
- **Canvas API**: Partículas e velas animadas
- **Web Speech API**: Síntese de voz em português
- **Font Awesome**: Ícones
- **Google Fonts**: Tipografia Cinzel e Cormorant Garamond

## 📂 Arquivos do Projeto

### `index.html`
Estrutura HTML da aplicação com:
- Cenário místico (canvas, backgrounds)
- Telas de sessão
- Elementos de controle
- Áudio

### `styles.css`
Estilos completos incluindo:
- Layout e posicionamento
- Animações e transições
- Efeitos visuais
- Responsividade
- Tema escuro místico

### `script.js`
Lógica da aplicação com 4 classes principais:
- **`TarotVoice`**: Sistema de voz (Web Speech API)
- **`TarotCanvas`**: Animações canvas (partículas e velas)
- **`TarotAnimations`**: Efeitos de transição e foco
- **`TarotSession`**: Gerenciador principal e máquina de estados

## 📱 Compatibilidade

- ✅ Chrome/Edge (recomendado para melhor suporte de voz)
- ✅ Firefox
- ✅ Safari
- ✅ Dispositivos móveis (com efeitos otimizados)

## 🎨 Estrutura do Código JavaScript

### Classes Principais

```javascript
// Sistema de Voz
class TarotVoice {
    speak(text, callback)
    stop()
    toggle()
}

// Sistema Canvas
class TarotCanvas {
    initParticles()
    initCandles()
    animate()
}

// Animações
class TarotAnimations {
    fadeIn(element)
    fadeOut(element)
    focusCard(card)
}

// Gerenciador Principal
class TarotSession {
    startSession()
    changeState(state)
    selectCard(card)
    revealCardsSequence()
}
```

### Estados da Sessão

```
INITIAL → WELCOME → INSTRUCTIONS → SELECTING → REVEALING → INTERPRETING → COMPLETE
```

## 🌙 Experiência Imersiva

O objetivo é fazer o usuário esquecer que está em um site e sentir-se em uma sessão real de tarot com uma vidente. Cada detalhe foi pensado para criar essa atmosfera mística e envolvente.

## 📝 Notas Técnicas

- **Arquitetura Modular**: Código organizado em classes separadas para facilitar manutenção
- **Separação de Responsabilidades**: HTML, CSS e JavaScript em arquivos distintos
- **Performance**: requestAnimationFrame para animações suaves
- **Acessibilidade**: Controles para desabilitar voz e música
- **Responsividade**: Adaptação automática para dispositivos móveis

## 🔧 Desenvolvimento

Para modificar o projeto:

1. **HTML** (`index.html`): Estrutura e elementos
2. **CSS** (`styles.css`): Estilos e animações
3. **JavaScript** (`script.js`): Lógica e interações

## 🚀 Deploy

Basta hospedar os 3 arquivos (HTML, CSS, JS) em qualquer servidor web. Não há dependências de backend ou banco de dados.

## 📄 Licença

Este projeto foi desenvolvido como uma demonstração de experiência interativa imersiva.

---

Desenvolvido com 🔮 para uma experiência verdadeiramente mística.
