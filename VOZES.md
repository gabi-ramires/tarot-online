# 🎙️ Guia de Vozes do Tarot Místico

## 📢 Novo Recurso: Seletor de Vozes

Agora você pode **escolher a voz da vidente** entre todas as vozes disponíveis no seu navegador!

---

## 🎯 Como Usar

### 1. **Acessar o Seletor**
   - Na tela inicial, clique no ícone de **microfone** (🎤) nos controles
   - Um modal aparecerá com todas as vozes disponíveis

### 2. **Filtrar por Idioma**
   - Use os botões no topo para filtrar por idioma
   - Idiomas disponíveis dependem do seu sistema operacional

### 3. **Testar Vozes**
   - Clique no botão **"Testar"** em qualquer voz
   - Ouvirá: "Olá, eu sou a vidente. Esta é minha voz."

### 4. **Selecionar Voz**
   - Clique em qualquer voz para selecioná-la
   - A voz escolhida será usada em toda a sessão
   - O modal fecha automaticamente

---

## 🌍 Vozes por Sistema Operacional

### **Windows**
As vozes variam por versão:

#### Windows 10/11 (Português)
- **Microsoft Maria** - Português (Brasil) - Feminina ✅
- **Microsoft Daniel** - Português (Brasil) - Masculino
- **Microsoft Helena** - Português (Portugal) - Feminina ✅

#### Outras Vozes Comuns
- **Microsoft Zira** - Inglês (EUA) - Feminina
- **Microsoft David** - Inglês (EUA) - Masculino
- **Microsoft Haruka** - Japonês - Feminina
- **Microsoft Sabina** - Espanhol (México) - Feminina

### **macOS**
Vozes de alta qualidade:

#### Português
- **Luciana** - Português (Brasil) - Feminina ✅ (Recomendada)
- **Joana** - Português (Portugal) - Feminina ✅
- **Francisca** - Português (Portugal) - Feminina ✅

#### Outras
- **Samantha** - Inglês (EUA) - Feminina
- **Alex** - Inglês (EUA) - Masculino
- **Paulina** - Espanhol (México) - Feminina
- **Thomas** - Francês - Masculino

### **Linux**
Depende do sistema TTS instalado:

#### eSpeak-NG
- Vozes sintéticas em vários idiomas
- Qualidade básica mas funcionais

#### Festival
- Vozes masculinas e femininas
- Qualidade média

### **Android (Chrome Mobile)**
- **Google português do Brasil** - Feminina ✅
- **Google português de Portugal** - Feminina ✅
- Vozes do Google em outros idiomas

### **iOS (Safari Mobile)**
- Mesmas vozes do macOS
- Qualidade excelente
- **Luciana** é a padrão em português

---

## 🔍 Informações no Console

Quando você inicia a aplicação, o console mostra:

```javascript
📢 Vozes disponíveis: Array(XX)
✅ Voz selecionada: Microsoft Maria Desktop
📋 Idioma: pt-BR
🎭 Local: Local
```

### O que cada informação significa:

- **📢 Vozes disponíveis**: Quantas vozes seu sistema tem
- **✅ Voz selecionada**: Qual voz foi escolhida automaticamente
- **📋 Idioma**: Código do idioma (pt-BR, en-US, etc)
- **🎭 Local**: 
  - `Local` = Voz instalada no sistema (offline)
  - `Online` = Voz da nuvem (requer internet)

---

## ⚙️ Seleção Automática

A aplicação **escolhe automaticamente** a melhor voz assim:

### Prioridade 1: Voz Feminina em Português
Procura por:
- Nome contém "female", "Female", "Luciana" ou "Francisca"
- Idioma: pt-BR ou pt-PT

### Prioridade 2: Qualquer Voz em Português
- Qualquer voz com idioma português

### Prioridade 3: Primeira Voz Disponível
- Se não há português, usa a primeira do sistema

---

## 🎨 Características das Vozes

### **Vozes Locais** (💾)
- **Vantagens**:
  - Funcionam offline
  - Resposta instantânea
  - Sem uso de dados
- **Desvantagens**:
  - Qualidade pode variar
  - Menos expressivas

### **Vozes Online** (☁️)
- **Vantagens**:
  - Alta qualidade
  - Mais naturais
  - Melhor entonação
- **Desvantagens**:
  - Requerem internet
  - Pequeno delay
  - Usam dados

---

## 🛠️ Adicionando Mais Vozes

### Windows
1. **Configurações** → **Hora e Idioma** → **Fala**
2. Adicionar vozes de outros idiomas
3. Baixar pacotes de idiomas

### macOS
1. **Preferências do Sistema** → **Acessibilidade** → **Conteúdo Falado**
2. Clicar em **Voz do Sistema**
3. Baixar mais vozes (botão "Personalizar...")

### Linux
```bash
# Ubuntu/Debian - eSpeak
sudo apt-get install espeak espeak-data

# Instalar vozes Festival
sudo apt-get install festival festvox-kallpc16k
```

### Android
1. **Configurações** → **Idioma e Entrada** → **Conversão texto em voz**
2. Baixar dados de voz adicionais

---

## 📊 Comparação de Qualidade

| Sistema | Qualidade | Naturalidade | Vozes PT |
|---------|-----------|--------------|----------|
| macOS   | ⭐⭐⭐⭐⭐ | Excelente   | 3+       |
| Windows 11 | ⭐⭐⭐⭐ | Boa      | 3+       |
| Windows 10 | ⭐⭐⭐ | Média      | 2+       |
| Android | ⭐⭐⭐⭐ | Boa       | 2+       |
| iOS     | ⭐⭐⭐⭐⭐ | Excelente   | 3+       |
| Linux   | ⭐⭐ | Básica       | 1+       |

---

## 🎯 Vozes Recomendadas para o Tarot

### 🥇 Primeira Escolha
- **Luciana** (macOS/iOS) - Voz suave e misteriosa
- **Microsoft Maria** (Windows) - Tom adequado

### 🥈 Segunda Escolha
- **Francisca** (macOS/iOS) - Voz mais grave
- **Google português do Brasil** (Android) - Natural

### 🥉 Terceira Escolha
- **Joana** (macOS/iOS - Portugal)
- **Microsoft Helena** (Windows - Portugal)

---

## 🎛️ Ajustes de Voz no Código

O código já está otimizado para a vidente:

```javascript
utterance.rate = 0.85;  // Velocidade: 85% (mais lenta)
utterance.pitch = 1.1;  // Tom: 110% (levemente agudo)
utterance.volume = 0.9; // Volume: 90%
```

### O que significa:
- **Rate < 1.0**: Mais lenta, mais misteriosa
- **Pitch > 1.0**: Tom mais agudo, mais feminino
- **Volume < 1.0**: Permite ouvir a música de fundo

---

## 🐛 Problemas Comuns

### "Não ouço nenhuma voz"
1. Verifique se o volume do sistema está ligado
2. Clique no ícone de volume (🔊) para ativar a voz
3. Teste uma voz no seletor de vozes

### "Só aparece 1 ou 2 vozes"
- Seu sistema tem poucas vozes instaladas
- Siga o guia "Adicionando Mais Vozes" acima

### "A voz é muito robótica"
- Troque para uma voz online (☁️) se disponível
- Em Windows, instale vozes premium
- Em macOS, baixe vozes "Aprimoradas"

### "Modal não abre"
- Aguarde 1-2 segundos após o carregamento
- As vozes demoram para carregar
- Tente clicar novamente

---

## 💡 Dicas

1. **Teste várias vozes** antes de começar a sessão
2. **Vozes femininas** tendem a soar melhor para a vidente
3. **Vozes online** são mais naturais mas requerem internet
4. **Volume baixo** cria mais atmosfera misteriosa
5. **Vozes lentas** (rate baixo) são mais dramáticas

---

## 🔮 Personalização Futura

Em desenvolvimento:
- [ ] Salvar voz preferida no localStorage
- [ ] Ajustar rate/pitch no seletor
- [ ] Prévia da voz com frase do tarot
- [ ] Modo "voz masculina" para O Mago
- [ ] Múltiplas vozes por arcano

---

## 📱 Compatibilidade

| Navegador | Desktop | Mobile | Qualidade |
|-----------|---------|--------|-----------|
| Chrome    | ✅ Sim  | ✅ Sim | ⭐⭐⭐⭐ |
| Firefox   | ✅ Sim  | ✅ Sim | ⭐⭐⭐ |
| Safari    | ✅ Sim  | ✅ Sim | ⭐⭐⭐⭐⭐ |
| Edge      | ✅ Sim  | ✅ Sim | ⭐⭐⭐⭐ |
| Opera     | ✅ Sim  | ✅ Sim | ⭐⭐⭐ |

---

## 🎤 Exemplo de Uso

```javascript
// 1. Abrir seletor de vozes
tarotSession.openVoiceModal();

// 2. Testar uma voz específica
const voices = tarotSession.voice.getAllVoices();
tarotSession.voice.testVoice(voices[0]);

// 3. Selecionar voz
tarotSession.voice.setVoice(voices[5]);
```

---

## 📞 Suporte

Se tiver problemas com vozes:
1. Verifique o console (F12) para mensagens de erro
2. Teste em outro navegador
3. Verifique se tem vozes em português instaladas

---

✨ **Aproveite a experiência personalizada com a voz perfeita para sua leitura de tarot!**

