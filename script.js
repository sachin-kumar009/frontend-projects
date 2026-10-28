/* ===== Greeting & date ===== */
(function greeting() {
  const now = new Date();
  const h = now.getHours();
  const part = h < 12 ? 'Morning' : h < 17 ? 'Afternoon' : 'Evening';
  document.getElementById('greetTitle').textContent = `Good ${part}, Sachin!`;
  const fmt = now.toLocaleDateString('en-GB', {
    weekday: 'short', day: '2-digit', month: 'short', year: 'numeric'
  }).replace(/,/g, '').replace(/^(\w+)\s/, '$1, ');
  document.getElementById('todayDate').textContent = fmt;
})();

/* ===== Animated progress bars ===== */
window.addEventListener('load', () => {
  requestAnimationFrame(() => {
    document.querySelectorAll('[data-w]').forEach(el => {
      el.style.width = el.dataset.w + '%';
    });
  });
});

/* ===== Weekly chart ===== */
(function weeklyChart() {
  const data = [
    { d: 'Mon', v: 2.7 }, { d: 'Tue', v: 3.7 }, { d: 'Wed', v: 5.5 },
    { d: 'Thu', v: 2.7 }, { d: 'Fri', v: 2.7 }, { d: 'Sat', v: 3.7 },
    { d: 'Sun', v: 2.7, light: true }
  ];
  const max = 6;
  const plot = document.getElementById('plot');
  data.forEach(({ d, v, light }) => {
    const col = document.createElement('div');
    col.className = 'col' + (light ? ' light' : '');
    const pct = (v / max) * 100;
    col.style.setProperty('--h', pct + '%');
    col.innerHTML = `<span class="tip">${v}h</span><div class="b" data-h="${pct}"></div><span class="lbl">${d}</span>`;
    plot.appendChild(col);
  });
  window.addEventListener('load', () => {
    requestAnimationFrame(() => {
      plot.querySelectorAll('.b').forEach(b => (b.style.height = b.dataset.h + '%'));
    });
  });
})();

/* ===== Recent tasks toggle ===== */
document.getElementById('taskList').addEventListener('click', e => {
  const tick = e.target.closest('.tick');
  if (!tick) return;
  tick.closest('li').classList.toggle('done');
});

/* ===== Navigation active state ===== */
function bindNav(containerId, itemSel) {
  const box = document.getElementById(containerId);
  box.addEventListener('click', e => {
    const item = e.target.closest(itemSel);
    if (!item) return;
    e.preventDefault();
    box.querySelectorAll(itemSel).forEach(i => i.classList.remove('active'));
    item.classList.add('active');
  });
}
bindNav('sideNav', '.nav-item');
bindNav('bottomNav', '.bn-item');

/* ===== Pomodoro timer ===== */
(function pomodoro() {
  const presets = [
    { focus: 25, brk: 5, rounds: 4 },
    { focus: 50, brk: 10, rounds: 3 },
    { focus: 15, brk: 3, rounds: 4 }
  ];
  let presetIdx = 0;
  let mode = 'focus';          // 'focus' | 'break'
  let remaining = presets[0].focus * 60;
  let total = remaining;
  let timer = null;
  let round = 1;

  const $time = document.getElementById('pomoTime');
  const $mode = document.getElementById('pomoMode');
  const $ring = document.getElementById('ringProg');
  const $start = document.getElementById('pomoStart');
  const $startLbl = $start.querySelector('span');
  const $startIcon = $start.querySelector('use');

  const R = 100;
  const C = 2 * Math.PI * R;
  const VISUAL_MAX = 0.93; // matches the design: ring shows a small gap at rest
  $ring.style.strokeDasharray = C;

  function render() {
    const m = String(Math.floor(remaining / 60)).padStart(2, '0');
    const s = String(remaining % 60).padStart(2, '0');
    $time.textContent = `${m}:${s}`;
    $mode.textContent = mode === 'focus' ? 'Focus Time' : 'Break Time';
    const frac = (remaining / total) * VISUAL_MAX;
    $ring.style.strokeDashoffset = C * (1 - frac);
    document.title = timer ? `${m}:${s} · Focus` : 'Student Productivity & Goal Tracker';
  }

  function setBtn(running) {
    $startLbl.textContent = running ? 'Pause' : 'Start';
    $startIcon.setAttribute('href', running ? '#i-pause' : '#i-play');
  }

  function switchMode() {
    const p = presets[presetIdx];
    if (mode === 'focus') {
      mode = 'break';
      total = remaining = p.brk * 60;
    } else {
      mode = 'focus';
      round = round >= p.rounds ? 1 : round + 1;
      total = remaining = p.focus * 60;
    }
  }

  function tick() {
    remaining -= 1;
    if (remaining <= 0) {
      switchMode();
    }
    render();
  }

  function start() {
    if (timer) return;
    timer = setInterval(tick, 1000);
    setBtn(true);
  }
  function pause() {
    clearInterval(timer);
    timer = null;
    setBtn(false);
    render();
  }

  $start.addEventListener('click', () => (timer ? pause() : start()));

  document.getElementById('pomoReset').addEventListener('click', resetAll);
  function resetAll() {
    pause();
    mode = 'focus';
    round = 1;
    total = remaining = presets[presetIdx].focus * 60;
    render();
  }

  document.getElementById('pomoSettings').addEventListener('click', () => {
    presetIdx = (presetIdx + 1) % presets.length;
    const p = presets[presetIdx];
    document.getElementById('metaFocus').textContent = p.focus + ' min';
    document.getElementById('metaBreak').textContent = p.brk + ' min';
    document.getElementById('metaRounds').textContent = p.rounds;
    resetAll();
  });

  render();
})();
