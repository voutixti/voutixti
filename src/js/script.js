// Scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Modal WhatsApp
const modal = document.getElementById('whatsappModal');
const btns = document.querySelectorAll('.whatsapp');
const span = document.querySelector('.close');
const form = document.getElementById('whatsappForm');

btns.forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    modal.style.display = "block";
  });
});

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Formulário WhatsApp
form.addEventListener('submit', function(e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const duvida = document.getElementById('duvida').value.trim();

  if(!nome) {
    alert("Por favor, digite seu nome!");
    return;
  }

  let mensagem = `Olá, meu nome é ${nome}`;
  if(duvida) {
    mensagem += `, ${duvida}`;
  }

  const numeroWhatsApp = "5511969771933"; // substitua pelo seu número
  const url = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagem)}`;

  window.open(url, '_blank');
  modal.style.display = "none";
  form.reset();
});
