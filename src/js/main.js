// Configurações iniciais
const colors = [
  '#667eea', '#764ba2', '#e74c3c', '#3498db', '#2ecc71', 
  '#f39c12', '#9b59b6', '#1abc9c', '#e67e22', '#34495e'
];

const messages = [
  "Olá! Como você está?",
  "Bem-vindo ao nosso site!",
  "Espero que esteja gostando da experiência",
  "JavaScript torna a web mais interativa",
  "Que tal explorar mais funcionalidades?",
  "A web é um lugar incrível para criar",
  "Obrigado por visitar nosso site!",
  "Continue explorando e aprendendo",
  "Cada clique conta uma história",
  "A tecnologia conecta pessoas"
];

// Elementos DOM
const mainTitle = document.querySelector('.main-title');
const changeColorBtn = document.getElementById('changeColorBtn');
const addMessageBtn = document.getElementById('addMessageBtn');
const animateBtn = document.getElementById('animateBtn');
const messagesList = document.getElementById('messagesList');

// Função para mudar a cor do título
function changeTitleColor() {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  mainTitle.style.color = randomColor;
  
  // Adicionar efeito visual
  mainTitle.style.transition = 'color 0.5s ease';
  
  // Feedback visual no botão
  changeColorBtn.innerHTML = '<i class="fas fa-check"></i> Cor Alterada!';
  changeColorBtn.style.background = `linear-gradient(135deg, ${randomColor} 0%, ${randomColor}99 100%)`;
  
  setTimeout(() => {
    changeColorBtn.innerHTML = '<i class="fas fa-paint-brush"></i> Mudar Cor';
    changeColorBtn.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
  }, 1000);
}

// Função para adicionar uma nova mensagem
function addNewMessage() {
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
  const messageItem = document.createElement('div');
  messageItem.className = 'message-item';
  messageItem.innerHTML = `
    <i class="fas fa-comment-dots"></i>
    <div class="message-content">
      <span class="message-text">${randomMessage}</span>
      <span class="message-time">${timestamp}</span>
    </div>
  `;
  
  messagesList.prepend(messageItem);
  
  // Limitar a 10 mensagens
  if (messagesList.children.length > 10) {
    messagesList.removeChild(messagesList.lastChild);
  }
  
  // Feedback visual no botão
  addMessageBtn.innerHTML = '<i class="fas fa-check"></i> Mensagem Adicionada!';
  addMessageBtn.style.background = 'linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)';
  
  setTimeout(() => {
    addMessageBtn.innerHTML = '<i class="fas fa-plus"></i> Adicionar Mensagem';
    addMessageBtn.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
  }, 1000);
}

// Função para animar o título
function animateTitle() {
  // Adicionar animação de bounce
  mainTitle.style.animation = 'bounce 0.8s ease 3';
  
  // Feedback visual no botão
  animateBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Animando...';
  animateBtn.disabled = true;
  
  // Restaurar após a animação
  setTimeout(() => {
    mainTitle.style.animation = '';
    animateBtn.innerHTML = '<i class="fas fa-play"></i> Animar Título';
    animateBtn.disabled = false;
  }, 2400);
}

// Inicializar