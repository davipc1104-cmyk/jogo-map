'use strict';

/* =========================================================
   CÉREBRO EM FOCO — dados separados da lógica para facilitar
   a edição de perguntas, anúncios e situações.
   ========================================================= */

const perguntas = [
  { texto: 'Todos os nootrópicos aumentam comprovadamente a inteligência.', resposta: 'MITO', explicacao: 'Nem todos têm benefícios comprovados. Os efeitos variam conforme a substância e a pessoa.' },
  { texto: 'A cafeína atua sobre a adenosina, substância ligada ao sono e ao cansaço.', resposta: 'VERDADE', explicacao: 'Ao interferir na adenosina, a cafeína aumenta temporariamente o estado de alerta.' },
  { texto: 'O modafinil pode ser usado sem prescrição e sem acompanhamento médico.', resposta: 'MITO', explicacao: 'É um medicamento para condições ligadas ao sono, pode causar efeitos adversos e exige prescrição.' },
  { texto: 'Todo suplemento “natural” é automaticamente seguro.', resposta: 'MITO', explicacao: 'Natural não significa seguro: há efeitos adversos, interações e qualidade variável.' },
  { texto: 'A L-teanina é um aminoácido encontrado principalmente nas folhas do chá.', resposta: 'VERDADE', explicacao: 'Ela é estudada por sua relação com relaxamento, atenção e resposta ao estresse.' },
  { texto: 'Dormir mal prejudica a memória e a concentração.', resposta: 'VERDADE', explicacao: 'A falta de sono atrapalha justamente as funções que a pessoa quer melhorar.' },
  { texto: 'O Ginkgo biloba pode interagir com medicamentos.', resposta: 'VERDADE', explicacao: 'Os resultados sobre memória não são uniformes e a orientação profissional é importante.' },
  { texto: 'Uma substância pode aumentar a disposição sem melhorar a memória.', resposta: 'VERDADE', explicacao: 'Alerta, memória e aprendizagem são funções relacionadas, mas diferentes.' },
  { texto: 'Uma revisão de 2022 concluiu que a eficácia dessas substâncias em pessoas saudáveis está totalmente comprovada.', resposta: 'MITO', explicacao: 'A revisão destacou que a eficácia permanece incerta em pessoas saudáveis.' },
  { texto: 'O termo “nootrópico” foi criado por Corneliu Giurgea, na década de 1970.', resposta: 'VERDADE', explicacao: 'Giurgea era psicólogo e químico romeno e pesquisava substâncias que influenciam o cérebro.' },
  { texto: 'Todos os racetams, como o piracetam, melhoram a memória de pessoas saudáveis.', resposta: 'MITO', explicacao: 'Não há evidências suficientes para afirmar isso para todos os racetams.' },
  { texto: 'Nenhuma substância substitui o processo de aprendizagem.', resposta: 'VERDADE', explicacao: 'Sono, rotina, exercícios e métodos de estudo pesam mais do que qualquer atalho.' },
  { texto: 'A creatina participa do fornecimento de energia às células, inclusive às do cérebro.', resposta: 'VERDADE', explicacao: 'Ela é pesquisada em situações como privação de sono, mas os resultados ainda não provam que melhora a inteligência de todos.' },
  { texto: 'O consumo excessivo de cafeína pode causar ansiedade, tremores e dificuldade para dormir.', resposta: 'VERDADE', explicacao: 'Os exageros podem prejudicar o sono, que por sua vez prejudica a memória e a concentração.' }
];

const anuncios = [
  { nome: 'NeuroMax Turbo', selo: 'FOCO EXTREMO', frases: [
    { texto: 'Aumenta seu QI em 7 dias!', enganosa: true, motivo: 'Nenhuma substância garante aumento de inteligência.' },
    { texto: 'Contém cafeína, que aumenta o alerta por pouco tempo.', enganosa: false, motivo: 'Afirmação coerente: a cafeína aumenta temporariamente o alerta.' },
    { texto: '100% natural, portanto 100% seguro.', enganosa: true, motivo: 'Natural não significa seguro.' }
  ]},
  { nome: 'MemoriaPlus', selo: 'MEMÓRIA ILIMITADA', frases: [
    { texto: 'Memória extraordinária sem precisar estudar!', enganosa: true, motivo: 'Nada substitui o processo de aprendizagem.' },
    { texto: 'Pode interagir com medicamentos: consulte um profissional.', enganosa: false, motivo: 'Alerta responsável, como se recomenda para o Ginkgo biloba.' },
    { texto: 'Aprovado por vários influenciadores!', enganosa: true, motivo: 'Popularidade nas redes não é evidência científica.' }
  ]},
  { nome: 'FocoZen Chá', selo: 'CALMA + FOCO', frases: [
    { texto: 'Contém L-teanina, estudada por sua relação com relaxamento e atenção.', enganosa: false, motivo: 'Afirmação cuidadosa: fala em estudos, não em garantia.' },
    { texto: 'Cura qualquer falta de concentração!', enganosa: true, motivo: 'Promessa exagerada: a atenção depende de sono, rotina e saúde.' },
    { texto: 'Resultados garantidos para todo mundo!', enganosa: true, motivo: 'Os efeitos variam de pessoa para pessoa.' }
  ]},
  { nome: 'Modafinil Express', selo: 'APRENDIZAGEM TURBO', frases: [
    { texto: 'Compre sem receita e sem acompanhamento!', enganosa: true, motivo: 'Medicamento exige prescrição e acompanhamento médico.' },
    { texto: 'Aprendizagem instantânea em 1 comprimido!', enganosa: true, motivo: 'Não existe aprendizagem instantânea.' },
    { texto: 'Medicamento usado em condições do sono, sob indicação médica.', enganosa: false, motivo: 'Afirmação correta sobre o uso do modafinil.' }
  ]}
];

const diasRotina = [
  { titulo: 'Véspera de conteúdo difícil', contexto: 'Amanhã você terá uma aula importante e precisa decidir como fechar o dia.', opcoes: [
    { texto: 'Estudar até as 3h da manhã', efeitos: [-5, -10, -30, -15], explicacao: 'Pouco sono prejudica memória e concentração.' },
    { texto: 'Revisar 1h e dormir 8h', efeitos: [12, 8, 15, 5], explicacao: 'Boa noite de sono favorece a aprendizagem.' }
  ]},
  { titulo: 'Sonolência na aula', contexto: 'Você está com sono e quer manter a atenção durante as atividades.', opcoes: [
    { texto: 'Tomar 5 xícaras de café', efeitos: [-5, 3, -20, 8], explicacao: 'Excesso de cafeína causa ansiedade, palpitações e insônia.' },
    { texto: '1 café, água e um lanche', efeitos: [2, 8, 0, 8], explicacao: 'Consumo moderado pode aumentar o alerta; água e alimentação também ajudam. A sensibilidade à cafeína varia.' }
  ]},
  { titulo: 'Oferta de um colega', contexto: 'Um colega diz: “Tomei um remédio de concentração, quer um?”', opcoes: [
    { texto: 'Aceitar o comprimido', efeitos: [-8, 6, -25, -10], explicacao: 'Medicamento sem prescrição e acompanhamento é arriscado.' },
    { texto: 'Recusar e fazer pausas com exercício', efeitos: [6, 8, 5, 12], explicacao: 'Pausas e exercícios ajudam sem os riscos de tomar medicamento de outra pessoa.' }
  ]},
  { titulo: 'Anúncio nas redes', contexto: 'Um influenciador vende um suplemento que promete resultados milagrosos.', opcoes: [
    { texto: 'Comprar sem pesquisar', efeitos: [-3, -5, -10, 0], explicacao: 'Alegações sem comprovação e composição incerta merecem cautela.' },
    { texto: 'Perguntar a um profissional de saúde', efeitos: [5, 5, 5, 3], explicacao: 'Orientação profissional ajuda a avaliar riscos, evidências e possíveis interações.' }
  ]},
  { titulo: 'Último dia antes da prova', contexto: 'A prova é amanhã. É hora de escolher uma estratégia para revisar.', opcoes: [
    { texto: 'Tentar decorar tudo de última hora', efeitos: [-5, -10, -10, -8], explicacao: 'Sem organização, a aprendizagem fica frágil e o estresse pode atrapalhar.' },
    { texto: 'Fazer exercícios e revisar com pausas', efeitos: [15, 10, 5, 5], explicacao: 'Revisão regular, prática ativa e pausas favorecem a aprendizagem.' }
  ]}
];

const $ = (seletor, raiz = document) => raiz.querySelector(seletor);
const $$ = (seletor, raiz = document) => [...raiz.querySelectorAll(seletor)];
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const estado = {
  modo: null, pontos: 0, melhorSequencia: 0, sequencia: 0, vidas: 3,
  indice: 0, listaPerguntas: [], respondeu: false, melhorPontuacao: 0,
  anuncioIndice: 0, anuncioPontos: 0, anuncioRespondido: false, selecoes: [],
  dia: 0, atributos: { memoria: 60, atencao: 60, sono: 60, energia: 60 },
  rotinaEscolhida: false, rotinaPontos: 0, audio: true, efeitos: true, terminou: false
};

/* ---------- Som sintetizado com Web Audio API ---------- */
const Som = (() => {
  let contexto = null;
  function tocar(tipo) {
    if (!estado.audio) return;
    try {
      contexto ||= new (window.AudioContext || window.webkitAudioContext)();
      if (contexto.state === 'suspended') contexto.resume();
      const agora = contexto.currentTime;
      const oscilador = contexto.createOscillator();
      const ganho = contexto.createGain();
      const frequencias = { clique: [440, 560], acerto: [660, 880], erro: [240, 150], vitoria: [523, 659, 784, 1046] };
      const notas = frequencias[tipo] || frequencias.clique;
      oscilador.type = tipo === 'erro' ? 'triangle' : 'sine';
      oscilador.frequency.setValueAtTime(notas[0], agora);
      if (notas.length > 1) oscilador.frequency.exponentialRampToValueAtTime(notas[notas.length - 1], agora + (tipo === 'vitoria' ? .38 : .12));
      ganho.gain.setValueAtTime(.0001, agora);
      ganho.gain.exponentialRampToValueAtTime(tipo === 'vitoria' ? .11 : .07, agora + .018);
      ganho.gain.exponentialRampToValueAtTime(.0001, agora + (tipo === 'vitoria' ? .48 : .2));
      oscilador.connect(ganho); ganho.connect(contexto.destination);
      oscilador.start(agora); oscilador.stop(agora + (tipo === 'vitoria' ? .5 : .22));
      if (tipo === 'vitoria' && notas.length > 2) {
        notas.slice(1).forEach((nota, i) => {
          const o = contexto.createOscillator(), g = contexto.createGain(), t = agora + (i + 1) * .11;
          o.type = 'sine'; o.frequency.value = nota; g.gain.setValueAtTime(.0001, t);
          g.gain.exponentialRampToValueAtTime(.045, t + .02); g.gain.exponentialRampToValueAtTime(.0001, t + .18);
          o.connect(g); g.connect(contexto.destination); o.start(t); o.stop(t + .2);
        });
      }
    } catch (erro) { /* Áudio é opcional; falhas do navegador não interrompem o jogo. */ }
  }
  return { tocar };
})();

/* ---------- Luz, rastro e iluminação dos cartões ---------- */
const Luz = (() => {
  let alvoX = innerWidth / 2, alvoY = innerHeight / 3, atualX = alvoX, atualY = alvoY;
  let ultimoRastro = 0, raf = 0;
  const trilha = $('#particle-trail');
  function mover(x, y) { alvoX = x; alvoY = y; }
  function rastro(x, y) {
    if (!estado.efeitos || prefersReducedMotion || performance.now() - ultimoRastro < 24) return;
    ultimoRastro = performance.now();
    const ponto = document.createElement('i');
    ponto.className = 'trail-dot';
    ponto.style.left = `${x}px`; ponto.style.top = `${y}px`;
    ponto.style.opacity = String(.35 + Math.random() * .6);
    ponto.style.background = Math.random() > .5 ? 'var(--cyan)' : 'var(--purple)';
    trilha.appendChild(ponto);
    if (trilha.childElementCount > 32) trilha.firstElementChild?.remove();
    ponto.addEventListener('animationend', () => ponto.remove(), { once: true });
  }
  function animar() {
    const suavidade = prefersReducedMotion ? 1 : .12;
    atualX += (alvoX - atualX) * suavidade; atualY += (alvoY - atualY) * suavidade;
    document.documentElement.style.setProperty('--mx', `${atualX}px`);
    document.documentElement.style.setProperty('--my', `${atualY}px`);
    const glow = $('.cursor-glow');
    if (glow) { glow.style.left = `${atualX}px`; glow.style.top = `${atualY}px`; }
    if (estado.efeitos && !prefersReducedMotion) rastro(atualX, atualY);
    raf = requestAnimationFrame(animar);
  }
  function atualizarCartao(elemento, x, y) {
    const rect = elemento.getBoundingClientRect();
    const px = Math.max(0, Math.min(100, (x - rect.left) / rect.width * 100));
    const py = Math.max(0, Math.min(100, (y - rect.top) / rect.height * 100));
    elemento.style.setProperty('--spot-x', `${px}%`); elemento.style.setProperty('--spot-y', `${py}%`);
    if (elemento.classList.contains('mode-card') && estado.efeitos && !prefersReducedMotion) {
      const nx = (x - rect.left) / rect.width - .5, ny = (y - rect.top) / rect.height - .5;
      elemento.style.setProperty('--tilt-x', `${-ny * 5}deg`); elemento.style.setProperty('--tilt-y', `${nx * 5}deg`);
    }
  }
  function resetarCartao(elemento) { elemento.style.setProperty('--tilt-x', '0deg'); elemento.style.setProperty('--tilt-y', '0deg'); }
  function iniciar() {
    window.addEventListener('mousemove', e => mover(e.clientX, e.clientY), { passive: true });
    window.addEventListener('touchmove', e => { if (e.touches[0]) mover(e.touches[0].clientX, e.touches[0].clientY); }, { passive: true });
    document.addEventListener('pointermove', e => {
      const alvo = e.target.closest('.interactive-card,.question-panel,.ad-panel,.routine-panel,.claim-button,.choice-button,.answer-button,.primary-button,.secondary-button,.verify-button');
      if (alvo) atualizarCartao(alvo, e.clientX, e.clientY);
    }, { passive: true });
    document.addEventListener('pointerout', e => {
      const alvo = e.target.closest('.mode-card');
      if (alvo && !alvo.contains(e.relatedTarget)) resetarCartao(alvo);
    }, { passive: true });
    if (!prefersReducedMotion) raf = requestAnimationFrame(animar);
    else { document.documentElement.style.setProperty('--mx', '50vw'); document.documentElement.style.setProperty('--my', '35vh'); }
  }
  function limparRastro() { trilha.replaceChildren(); }
  return { iniciar, limparRastro };
})();

/* ---------- Rede de neurônios em canvas ---------- */
const Neuronios = (() => {
  const canvas = $('#neural-canvas'), ctx = canvas.getContext('2d');
  let largura = 0, altura = 0, pontos = [], raf = 0, cursor = { x: -9999, y: -9999 }, tick = 0;
  const maxPontos = 64;
  function redimensionar() {
    const dpr = Math.min(window.devicePixelRatio || 1, 1.7);
    largura = innerWidth; altura = innerHeight; canvas.width = largura * dpr; canvas.height = altura * dpr;
    canvas.style.width = `${largura}px`; canvas.style.height = `${altura}px`; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const total = Math.min(maxPontos, Math.max(24, Math.floor(largura * altura / 21000)));
    pontos = Array.from({ length: total }, () => ({ x: Math.random() * largura, y: Math.random() * altura, vx: (Math.random() - .5) * .24, vy: (Math.random() - .5) * .24, r: 1 + Math.random() * 1.5, fase: Math.random() * 10 }));
  }
  function desenhar() {
    ctx.clearRect(0, 0, largura, altura); tick += .008;
    if (!estado.efeitos) { raf = requestAnimationFrame(desenhar); return; }
    for (let i = 0; i < pontos.length; i++) {
      const p = pontos[i], dx = cursor.x - p.x, dy = cursor.y - p.y, distanciaCursor = Math.hypot(dx, dy);
      if (distanciaCursor < 150 && !prefersReducedMotion) { p.vx += dx / (distanciaCursor + 1) * .001; p.vy += dy / (distanciaCursor + 1) * .001; }
      p.x += p.vx; p.y += p.vy; p.vx *= .995; p.vy *= .995;
      if (p.x < -10 || p.x > largura + 10) p.vx *= -1;
      if (p.y < -10 || p.y > altura + 10) p.vy *= -1;
      for (let j = i + 1; j < pontos.length; j++) {
        const q = pontos[j], d = Math.hypot(p.x - q.x, p.y - q.y);
        if (d < 125) {
          const brilho = 1 - d / 125, pulso = .5 + .5 * Math.sin(tick * 2 + p.fase + i * .13);
          ctx.strokeStyle = `rgba(95,190,255,${brilho * (.09 + pulso * .13)})`; ctx.lineWidth = .6 + pulso * .35;
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
          if (brilho > .65 && pulso > .93) {
            const t = (tick * .45 + p.fase) % 1; ctx.fillStyle = `rgba(56,232,255,${brilho * .8})`;
            ctx.beginPath(); ctx.arc(p.x + (q.x - p.x) * t, p.y + (q.y - p.y) * t, 1.5, 0, Math.PI * 2); ctx.fill();
          }
        }
      }
      const perto = distanciaCursor < 160 ? 1 - distanciaCursor / 160 : 0;
      ctx.fillStyle = `rgba(${perto ? '56,232,255' : '155,130,255'},${.25 + perto * .7})`;
      ctx.shadowBlur = perto * 12; ctx.shadowColor = '#38e8ff'; ctx.beginPath(); ctx.arc(p.x, p.y, p.r + perto, 0, Math.PI * 2); ctx.fill(); ctx.shadowBlur = 0;
    }
    raf = requestAnimationFrame(desenhar);
  }
  function iniciar() {
    redimensionar(); window.addEventListener('resize', redimensionar, { passive: true });
    window.addEventListener('pointermove', e => { cursor.x = e.clientX; cursor.y = e.clientY; }, { passive: true });
    raf = requestAnimationFrame(desenhar);
  }
  return { iniciar };
})();

/* ---------- Confetes e feedback visual ---------- */
const Particulas = (() => {
  function confete() {
    if (!estado.efeitos || prefersReducedMotion) return;
    const limite = 42;
    for (let i = 0; i < limite; i++) {
      const p = document.createElement('i');
      p.className = 'trail-dot';
      p.style.left = `${innerWidth * (.2 + Math.random() * .6)}px`;
      p.style.top = `${innerHeight * (.25 + Math.random() * .4)}px`;
      p.style.width = `${3 + Math.random() * 5}px`; p.style.height = p.style.width;
      p.style.background = ['var(--green)', 'var(--cyan)', '#c8ff83'][i % 3];
      p.style.animationDuration = `${.65 + Math.random() * .65}s`;
      p.style.transform = `translate(${(Math.random() - .5) * 170}px, ${(Math.random() - .5) * 150}px)`;
      $('#particle-trail').appendChild(p);
      p.addEventListener('animationend', () => p.remove(), { once: true });
    }
    while ($('#particle-trail').childElementCount > 70) $('#particle-trail').firstElementChild?.remove();
  }
  function erro() {
    if (!estado.efeitos || prefersReducedMotion) return;
    document.body.classList.remove('screen-error'); void document.body.offsetWidth; document.body.classList.add('screen-error');
    const flash = $('#flash-layer'); flash.style.background = 'rgba(255,35,82,.18)'; flash.style.opacity = '1';
    setTimeout(() => { flash.style.opacity = '0'; }, 100);
  }
  function acerto(alvo) { if (estado.efeitos && alvo) { alvo.classList.remove('good-flash'); void alvo.offsetWidth; alvo.classList.add('good-flash'); } confete(); }
  return { confete, erro, acerto };
})();

/* ---------- Telas, recordes e utilitários ---------- */
function mostrarTela(id) {
  $$('.screen').forEach(tela => { tela.classList.remove('active'); tela.setAttribute('aria-hidden', 'true'); });
  const destino = $(`#${id}`); destino.classList.add('active'); destino.setAttribute('aria-hidden', 'false');
  destino.querySelector('button')?.focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
}
function salvarRecorde(modo, pontos) {
  try {
    const chave = `cef-recorde-${modo}`, anterior = Number(localStorage.getItem(chave) || 0);
    if (pontos > anterior) localStorage.setItem(chave, String(pontos));
    atualizarRecordes();
    return Math.max(anterior, pontos);
  } catch (erro) { return pontos; }
}
function lerRecorde(modo) { try { return Number(localStorage.getItem(`cef-recorde-${modo}`) || 0); } catch (erro) { return 0; } }
function atualizarRecordes() { $$('[data-best]').forEach(el => { el.textContent = `Recorde: ${lerRecorde(el.dataset.best)}`; }); }
function embaralhar(lista) {
  const copia = [...lista];
  for (let i = copia.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [copia[i], copia[j]] = [copia[j], copia[i]]; }
  return copia;
}
function atualizarTopo(rotulo, atual, total) {
  $('#progress-label').textContent = `${rotulo} ${String(atual).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
  $('#progress-fill').style.width = `${Math.min(100, atual / total * 100)}%`;
  $('#score-value').textContent = estado.pontos;
}
function criarBotaoRipple(evento) {
  const botao = evento.target.closest('button');
  if (!botao || !estado.efeitos || prefersReducedMotion) return;
  const rect = botao.getBoundingClientRect(), ripple = document.createElement('span'), diametro = Math.max(rect.width, rect.height);
  ripple.className = 'ripple'; ripple.style.width = ripple.style.height = `${diametro}px`;
  ripple.style.left = `${evento.clientX - rect.left - diametro / 2}px`; ripple.style.top = `${evento.clientY - rect.top - diametro / 2}px`;
  botao.appendChild(ripple); ripple.addEventListener('animationend', () => ripple.remove(), { once: true });
}
function digitar(elemento, texto) {
  if (prefersReducedMotion || !estado.efeitos) { elemento.textContent = texto; return; }
  elemento.textContent = ''; let i = 0;
  const proximo = () => { if (!elemento.isConnected) return; elemento.textContent = texto.slice(0, i += 2); if (i < texto.length) setTimeout(proximo, 13); };
  proximo();
}
function iniciarModo(modo) {
  estado.modo = modo; estado.pontos = 0; estado.melhorSequencia = 0; estado.sequencia = 0; estado.vidas = 3; estado.indice = 0;
  estado.respondeu = false; estado.terminou = false; estado.anuncioIndice = 0; estado.anuncioPontos = 0; estado.anuncioRespondido = false; estado.selecoes = [];
  estado.dia = 0; estado.atributos = { memoria: 60, atencao: 60, sono: 60, energia: 60 }; estado.rotinaEscolhida = false; estado.rotinaPontos = 0;
  $('#score-value').textContent = '0'; mostrarTela('game-screen');
  if (modo === 'myth') { estado.listaPerguntas = embaralhar(perguntas); renderizarPergunta(); }
  if (modo === 'detective') renderizarAnuncio();
  if (modo === 'routine') renderizarDia();
}

/* ---------- Modo 1: Mito ou verdade ---------- */
function renderizarPergunta() {
  const pergunta = estado.listaPerguntas[estado.indice];
  if (!pergunta) return finalizarMito();
  estado.respondeu = false;
  atualizarTopo('PERGUNTA', estado.indice + 1, estado.listaPerguntas.length);
  $('#game-content').innerHTML = `
    <div class="game-heading"><p class="eyebrow">ANÁLISE DE EVIDÊNCIAS</p><h2 id="game-title">Mito ou verdade?</h2><p>Leia com atenção. Pensar criticamente vale mais do que responder rápido.</p></div>
    <article class="question-panel interactive-card">
      <div class="question-meta"><span>AFIRMAÇÃO ${String(estado.indice + 1).padStart(2, '0')}</span><span class="lives" aria-label="${estado.vidas} vidas restantes">${'♥ '.repeat(estado.vidas)}${'♡ '.repeat(3 - estado.vidas)}</span></div>
      <p class="statement">${pergunta.texto}</p>
      <div class="answer-buttons"><button class="answer-button truth" data-answer="VERDADE" type="button">1 · VERDADE</button><button class="answer-button myth" data-answer="MITO" type="button">2 · MITO</button></div>
      <div id="answer-feedback"></div>
    </article>`;
  $('#game-content').querySelectorAll('[data-answer]').forEach(botao => botao.addEventListener('click', () => responderMito(botao.dataset.answer)));
}
function responderMito(resposta) {
  if (estado.respondeu) return;
  estado.respondeu = true;
  const pergunta = estado.listaPerguntas[estado.indice], acertou = resposta === pergunta.resposta;
  const bonus = acertou ? Math.min(10, estado.sequencia * 2) : 0;
  if (acertou) { estado.pontos += 10 + bonus; estado.sequencia++; estado.melhorSequencia = Math.max(estado.melhorSequencia, estado.sequencia); Som.tocar('acerto'); Particulas.acerto($('.question-panel')); }
  else { estado.vidas--; estado.sequencia = 0; Som.tocar('erro'); Particulas.erro(); }
  $('#score-value').textContent = estado.pontos;
  $$('[data-answer]').forEach(botao => { botao.disabled = true; if (botao.dataset.answer === pergunta.resposta) botao.style.boxShadow = '0 0 20px #3ddc9740'; });
  const feedback = $('#answer-feedback'); feedback.className = `feedback ${acertou ? 'good' : 'bad'}`;
  feedback.innerHTML = `<strong>${acertou ? `✓ Correto! +${10 + bonus} pontos` : `✕ Não foi dessa vez. Resposta: ${pergunta.resposta}`}</strong><p></p><button class="next-button" id="next-question" type="button">${estado.vidas <= 0 || estado.indice === estado.listaPerguntas.length - 1 ? 'Ver resultado →' : 'Próxima afirmação →'}</button>`;
  digitar($('p', feedback), pergunta.explicacao);
  $('#next-question').addEventListener('click', () => { estado.indice++; if (estado.vidas <= 0 || estado.indice >= estado.listaPerguntas.length) finalizarMito(); else renderizarPergunta(); });
}
function finalizarMito() {
  const total = estado.pontos, titulo = total >= 150 ? 'Cientista crítico' : total >= 90 ? 'Estudante atento' : 'Iniciante curioso';
  const descricao = estado.vidas <= 0 ? 'Suas vidas acabaram, mas cada explicação é uma oportunidade de aprender a questionar promessas.' : 'Você concluiu a investigação. Continue comparando afirmações com evidências e desconfie de certezas fáceis.';
  mostrarResultado('myth', titulo, descricao, [{ valor: total, legenda: 'PONTOS' }, { valor: estado.melhorSequencia, legenda: 'MELHOR SEQUÊNCIA' }, { valor: estado.vidas, legenda: 'VIDAS RESTANTES' }]);
}

/* ---------- Modo 2: Detetive de propagandas ---------- */
function renderizarAnuncio() {
  const anuncio = anuncios[estado.anuncioIndice];
  if (!anuncio) return finalizarDetetive();
  estado.anuncioRespondido = false; estado.selecoes = [];
  atualizarTopo('ANÚNCIO', estado.anuncioIndice + 1, anuncios.length);
  $('#game-content').innerHTML = `
    <div class="game-heading"><p class="eyebrow">UNIDADE DE VERIFICAÇÃO</p><h2 id="game-title">Detetive de propagandas</h2><p>Marque todas as frases enganosas. Você pode selecionar mais de uma e depois verificar.</p></div>
    <article class="ad-panel interactive-card">
      <div class="ad-branding"><div class="fake-pack"><div class="pack-symbol">✦</div><div><h3>${anuncio.nome}</h3><p>${anuncio.selo}</p></div></div><span class="ad-stamp">PROMESSA<br>EM ANÁLISE</span></div>
      <p class="ad-disclaimer">ANÚNCIO FICTÍCIO PARA FINS EDUCATIVOS · Não representa produto real.</p>
      <div class="ad-claims">${anuncio.frases.map((frase, i) => `<button class="claim-button" type="button" data-claim="${i}" aria-pressed="false"><span class="claim-check">✓</span><span>${frase.texto}<span class="claim-reason" hidden></span></span></button>`).join('')}</div>
      <div class="ad-controls"><span class="selection-hint" id="selection-hint">0 de 3 frases selecionadas</span><button class="verify-button" id="verify-ad" type="button">Verificar escolhas ↗</button></div>
      <div id="ad-feedback"></div>
    </article>`;
  $$('.claim-button').forEach(botao => botao.addEventListener('click', () => {
    if (estado.anuncioRespondido) return;
    const i = Number(botao.dataset.claim);
    if (estado.selecoes.includes(i)) estado.selecoes = estado.selecoes.filter(n => n !== i); else estado.selecoes.push(i);
    botao.classList.toggle('selected', estado.selecoes.includes(i)); botao.setAttribute('aria-pressed', String(estado.selecoes.includes(i)));
    $('#selection-hint').textContent = `${estado.selecoes.length} de 3 frases selecionadas`; Som.tocar('clique');
  }));
  $('#verify-ad').addEventListener('click', verificarAnuncio);
}
function verificarAnuncio() {
  if (estado.anuncioRespondido) return;
  estado.anuncioRespondido = true;
  const anuncio = anuncios[estado.anuncioIndice]; let acertos = 0;
  anuncio.frases.forEach((frase, i) => {
    const marcado = estado.selecoes.includes(i), acertou = marcado === frase.enganosa, botao = $(`[data-claim="${i}"]`);
    if (acertou) acertos++;
    botao.disabled = true; botao.classList.add(acertou ? 'correct' : 'wrong');
    const motivo = $('.claim-reason', botao); motivo.hidden = false;
    motivo.textContent = `${acertou ? '✓ Correto. ' : '✕ Revise. '}${frase.motivo}`;
  });
  estado.anuncioPontos += acertos; estado.pontos = estado.anuncioPontos; $('#score-value').textContent = estado.pontos;
  if (acertos === 3) { Som.tocar('acerto'); Particulas.acerto($('.ad-panel')); } else { Som.tocar('erro'); if (acertos === 0) Particulas.erro(); }
  $('#selection-hint').textContent = `${acertos}/3 classificações corretas`;
  $('#verify-ad').textContent = estado.anuncioIndice === anuncios.length - 1 ? 'Ver resultado →' : 'Próximo anúncio →';
  $('#verify-ad').addEventListener('click', () => { estado.anuncioIndice++; if (estado.anuncioIndice >= anuncios.length) finalizarDetetive(); else renderizarAnuncio(); }, { once: true });
}
function finalizarDetetive() {
  const pontos = estado.anuncioPontos, titulo = pontos >= 10 ? 'Detetive expert' : pontos >= 7 ? 'Bom olho' : 'Desconfie mais das promessas!';
  const descricao = 'Anúncios podem misturar informações verdadeiras com promessas exageradas. Procure evidências confiáveis, não apenas frases chamativas.';
  mostrarResultado('detective', titulo, descricao, [{ valor: pontos, legenda: 'DE 12 PONTOS' }, { valor: Math.round(pontos / 12 * 100) + '%', legenda: 'PRECISÃO' }, { valor: anuncios.length, legenda: 'ANÚNCIOS ANALISADOS' }]);
}

/* ---------- Modo 3: Rotina de estudante ---------- */
const atributosInfo = [
  { chave: 'memoria', nome: 'Memória', icone: '◈' }, { chave: 'atencao', nome: 'Atenção', icone: '◎' },
  { chave: 'sono', nome: 'Sono', icone: '☾' }, { chave: 'energia', nome: 'Energia', icone: 'ϟ' }
];
function mediaAtributos() { return Math.round(Object.values(estado.atributos).reduce((a, b) => a + b, 0) / 4); }
function renderizarBarras() {
  return `<div class="student-status">${atributosInfo.map(info => `<div class="stat-card"><div class="stat-top"><span>${info.icone} ${info.nome}</span><b>${estado.atributos[info.chave]}</b></div><div class="bar-track"><div class="bar-fill" style="width:${estado.atributos[info.chave]}%"></div></div></div>`).join('')}</div>`;
}
function ajustarAmbiente() {
  const media = mediaAtributos(), raiz = document.documentElement;
  const intensidade = Math.max(0, Math.min(1, (media - 30) / 60));
  raiz.style.setProperty('--routine-glow', intensidade);
  document.body.style.background = `radial-gradient(ellipse at 50% 0%, rgba(${media >= 60 ? '35,150,155' : '180,45,75'},${.04 + intensidade * .11}) 0%, #070914 65%)`;
}
function renderizarDia() {
  if (estado.dia >= diasRotina.length) return finalizarRotina();
  estado.rotinaEscolhida = false;
  const dia = diasRotina[estado.dia]; atualizarTopo('DIA', estado.dia + 1, diasRotina.length);
  $('#game-content').innerHTML = `
    <div class="game-heading"><p class="eyebrow">SIMULADOR DE HÁBITOS</p><h2 id="game-title">Rotina de estudante</h2><p>Suas escolhas mudam os atributos antes da prova.</p></div>
    <article class="routine-panel interactive-card">
      ${renderizarBarras()}
      <p class="day-label">DIA ${estado.dia + 1} / 5 · PREPARAÇÃO PARA A PROVA</p><h3 class="scenario-title">${dia.titulo}</h3><p class="scenario-text">${dia.contexto}</p>
      <div class="choice-list">${dia.opcoes.map((opcao, i) => `<button class="choice-button" type="button" data-choice="${i}"><span class="choice-key">${i + 1}</span><span class="choice-copy">${opcao.texto}</span></button>`).join('')}</div>
      <div id="routine-feedback"></div>
    </article>`;
  ajustarAmbiente();
  $$('.choice-button').forEach(botao => botao.addEventListener('click', () => escolherRotina(Number(botao.dataset.choice))));
}
function escolherRotina(indice) {
  if (estado.rotinaEscolhida) return;
  estado.rotinaEscolhida = true;
  const dia = diasRotina[estado.dia], opcao = dia.opcoes[indice];
  opcao.efeitos.forEach((delta, i) => {
    const chave = atributosInfo[i].chave;
    estado.atributos[chave] = Math.max(0, Math.min(100, estado.atributos[chave] + delta));
  });
  estado.rotinaPontos = mediaAtributos(); estado.pontos = estado.rotinaPontos; $('#score-value').textContent = estado.pontos;
  const resumo = opcao.efeitos.map((delta, i) => `${atributosInfo[i].nome} ${delta > 0 ? '+' : ''}${delta}`).join(' · ');
  $$('.choice-button').forEach((botao, i) => { botao.disabled = true; if (i === indice) botao.classList.add('chosen'); });
  const feedback = $('#routine-feedback'); feedback.className = 'feedback routine-feedback good';
  feedback.innerHTML = `<strong>Impacto da escolha: ${resumo}</strong><p></p><button class="next-button" id="next-day" type="button">${estado.dia === diasRotina.length - 1 ? 'Dia da prova →' : 'Avançar para o próximo dia →'}</button>`;
  digitar($('p', feedback), opcao.explicacao);
  // Atualiza as barras com a nova situação, mantendo as escolhas e a explicação visíveis.
  $('.student-status', $('.routine-panel')).outerHTML = renderizarBarras();
  ajustarAmbiente(); Som.tocar('clique');
  $('#next-day').addEventListener('click', () => { estado.dia++; if (estado.dia >= diasRotina.length) finalizarRotina(); else renderizarDia(); });
}
function finalizarRotina() {
  const nota = mediaAtributos(), titulo = nota >= 80 ? 'Aprovado com louvor' : nota >= 60 ? 'Aprovado' : 'Reprovado desta vez';
  const descricao = `Sua média final foi ${nota}/100. O resultado mostra como escolhas diárias se acumulam: sono, rotina, exercícios e bons métodos de estudo pesam mais do que qualquer atalho.`;
  mostrarResultado('routine', titulo, descricao, [{ valor: `${nota}/100`, legenda: 'NOTA FINAL' }, { valor: estado.atributos.sono, legenda: 'SONO' }, { valor: estado.atributos.memoria, legenda: 'MEMÓRIA' }, { valor: estado.atributos.atencao, legenda: 'ATENÇÃO' }]);
}

/* ---------- Tela final compartilhada ---------- */
function mostrarResultado(modo, titulo, descricao, estatisticas) {
  estado.terminou = true; const recorde = salvarRecorde(modo, estado.pontos);
  $('#result-title').textContent = titulo; $('#result-description').textContent = descricao;
  $('#result-symbol').textContent = modo === 'routine' && mediaAtributos() < 60 ? '⌁' : '✦';
  $('#result-stats').innerHTML = estatisticas.map(item => `<div class="result-stat"><strong>${item.valor}</strong><span>${item.legenda}</span></div>`).join('');
  const extra = document.createElement('p'); extra.className = 'health-note'; extra.textContent = `Seu recorde neste modo: ${recorde} pontos.`;
  $('#result-stats').appendChild(extra);
  mostrarTela('result-screen'); Som.tocar('vitoria'); if (estado.efeitos) Particulas.confete();
}

/* ---------- Controles globais e acessibilidade por teclado ---------- */
document.addEventListener('click', criarBotaoRipple);
$$('[data-mode]').forEach(botao => botao.addEventListener('click', () => { Som.tocar('clique'); iniciarModo(botao.dataset.mode); }));
$('#brand-home').addEventListener('click', evento => { evento.preventDefault(); mostrarTela('home-screen'); });
$('#back-home').addEventListener('click', () => { Som.tocar('clique'); mostrarTela('home-screen'); });
$('#choose-mode').addEventListener('click', () => mostrarTela('home-screen'));
$('#play-again').addEventListener('click', () => { Som.tocar('clique'); iniciarModo(estado.modo); });
$('#sound-toggle').addEventListener('click', () => {
  estado.audio = !estado.audio; const botao = $('#sound-toggle');
  botao.setAttribute('aria-pressed', String(estado.audio)); botao.innerHTML = `${estado.audio ? '🔊' : '🔇'} <span>Som ${estado.audio ? 'ligado' : 'desligado'}</span>`;
  if (estado.audio) Som.tocar('clique');
});
$('#effects-toggle').addEventListener('click', () => {
  estado.efeitos = !estado.efeitos; const botao = $('#effects-toggle');
  botao.setAttribute('aria-pressed', String(estado.efeitos)); botao.innerHTML = `${estado.efeitos ? '✦' : '○'} <span>Efeitos ${estado.efeitos ? 'ligados' : 'desligados'}</span>`;
  if (!estado.efeitos) { Luz.limparRastro(); $('#neural-canvas').style.opacity = '.08'; }
  else $('#neural-canvas').style.opacity = '.66';
  Som.tocar('clique');
});
document.addEventListener('keydown', evento => {
  if (evento.altKey || evento.ctrlKey || evento.metaKey) return;
  if (evento.key === 'Escape') { mostrarTela('home-screen'); return; }
  if (!$('#game-screen').classList.contains('active')) return;
  if (estado.modo === 'myth' && !estado.respondeu) {
    if (evento.key === '1') responderMito('VERDADE');
    if (evento.key === '2') responderMito('MITO');
  } else if (estado.modo === 'detective' && !estado.anuncioRespondido) {
    if (['1', '2', '3'].includes(evento.key)) $(`[data-claim="${Number(evento.key) - 1}"]`)?.click();
    if (evento.key === 'Enter') $('#verify-ad')?.click();
  } else if (estado.modo === 'routine' && !estado.rotinaEscolhida && ['1', '2'].includes(evento.key)) {
    $(`[data-choice="${Number(evento.key) - 1}"]`)?.click();
  } else if (evento.key === 'Enter') {
    $('#next-question')?.click(); $('#next-day')?.click();
  }
});
atualizarRecordes(); Luz.iniciar(); Neuronios.iniciar();
