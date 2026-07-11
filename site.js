const demoCopy = {
  ru: {
    simulator: 'СИМУЛЯТОР ВОСПРИЯТИЯ', question: 'Как это видится?', intro: 'Выберите режим — он применится только к текущей вкладке.',
    diagnosis: 'ДИАГНОЗ ИНТЕРФЕЙСА', collapse: 'Свернуть', expand: 'Развернуть',
    modes: {
      normal: { icon: '👁', title: 'Обычное зрение', desc: 'как видишь ты', diag: 'Всё работает', text: 'Кнопки заметны, важная информация ясна, визуал считывается.', advice: 'Переключи состояние и посмотри, какие элементы интерфейса останутся понятными.' },
      colorblind: { icon: '◐', title: 'Дальтонизм', desc: 'чёрно-белый или коричневый Color', diag: 'Цвет перестал нести смысл', text: 'Статусы и варианты, обозначенные только цветом, становятся неразличимыми.', advice: 'Добавляй второй признак: подпись, иконку, форму или состояние выбора.' },
      cataract: { icon: '◫', title: 'Катаракта', desc: 'размытие от 1px до 7px', diag: 'Контраст растворился', text: 'Слабый контраст, тонкий текст и вторичные подписи начинают исчезать.', advice: 'Подними контраст текста минимум до 4.5:1 и не полагайся на тонкие начертания.' },
      tunnel: { icon: '🔦', title: 'Туннельное зрение', desc: 'виден только центр', diag: 'Периферия пропала', text: 'Статусы и действия, разнесённые по углам, выпадают из поля зрения.', advice: 'Группируй цену, статус и действие в одной зрительной зоне.' },
      dyslexia: { icon: 'abc', title: 'Дислексия', desc: 'заголовки или весь текст', diag: 'Текст не стоит на месте', text: 'Случайные буквы двигаются, а слова периодически меняются местами.', advice: 'Дай тексту воздух, избегай длинных строк, капса и сложных формулировок.' },
      tremor: { icon: '↗', title: 'Тремор', desc: 'кнопки или курсор', diag: 'В кнопку трудно попасть', text: 'Маленькая интерактивная цель становится испытанием.', advice: 'Делай цели минимум 44×44px и оставляй достаточно пространства вокруг.' },
      drunk: { icon: '◉', title: 'Пьяное восприятие', desc: 'динамический фокус и размытие', diag: 'Фокус постоянно ускользает', text: 'Центр движется, резкость меняется, а периферия остаётся размытой.', advice: 'Сохраняй интерфейс предсказуемым, устойчивым и не перегружай память пользователя.' }
    }
  },
  en: {
    simulator: 'PERCEPTION SIMULATOR', question: 'How does it look?', intro: 'Choose a mode — it affects only the current tab.',
    diagnosis: 'INTERFACE CHECK', collapse: 'Collapse', expand: 'Expand',
    modes: {
      normal: { icon: '👁', title: 'Normal vision', desc: 'the interface as you see it', diag: 'Everything works', text: 'Buttons stand out, important information is clear, and the hierarchy reads well.', advice: 'Switch a condition and see which interface elements remain understandable.' },
      colorblind: { icon: '◐', title: 'Color blindness', desc: 'B&W or brown Color blend', diag: 'Color stopped carrying meaning', text: 'States and choices represented only through color become indistinguishable.', advice: 'Add a second cue: a label, icon, shape, or explicit selected state.' },
      cataract: { icon: '◫', title: 'Cataract', desc: '1px to 7px blur', diag: 'Contrast dissolved', text: 'Low contrast, thin type, and secondary labels begin to disappear.', advice: 'Keep text contrast at 4.5:1 or higher and avoid thin weights for important content.' },
      tunnel: { icon: '🔦', title: 'Tunnel vision', desc: 'only the center remains clear', diag: 'The periphery disappeared', text: 'Statuses and actions scattered across corners leave the field of view.', advice: 'Keep related price, status, and action content in one visual zone.' },
      dyslexia: { icon: 'abc', title: 'Dyslexia', desc: 'headings or all text', diag: 'The text will not stay still', text: 'Random letters move while words periodically exchange places.', advice: 'Give text room, avoid long lines and all caps, and prefer familiar wording.' },
      tremor: { icon: '↗', title: 'Tremor', desc: 'buttons or cursor', diag: 'The button is hard to hit', text: 'A small interactive target becomes a challenge.', advice: 'Use targets at least 44×44px and leave enough space around them.' },
      drunk: { icon: '◉', title: 'Intoxicated perception', desc: 'dynamic focus and blur', diag: 'Focus keeps slipping away', text: 'The center moves, sharpness changes, and the periphery remains blurred.', advice: 'Keep the interface stable and predictable, and reduce memory demands.' }
    }
  }
};

const demoState = { language: 'ru', theme: 'dark', mode: 'normal', adviceOpen: true, cataractBlur: 1 };
const demo = document.querySelector('#extension-demo');
const modesContainer = document.querySelector('#demo-modes');
const settingContainer = document.querySelector('#demo-setting');

function renderDemoSetting(copy) {
  settingContainer.replaceChildren();
  settingContainer.hidden = false;
  const label = document.createElement('label');
  const controlId = `demo-${demoState.mode}-control`;
  label.htmlFor = controlId;

  if (demoState.mode === 'colorblind') {
    label.textContent = demoState.language === 'ru' ? 'Вариант цвета' : 'Color mode';
    const select = document.createElement('select');
    select.id = controlId;
    select.innerHTML = demoState.language === 'ru'
      ? '<option>Чёрно-белый</option><option>#4E3D33 · Color</option>'
      : '<option>Black and white</option><option>#4E3D33 · Color</option>';
    settingContainer.append(label, select);
  } else if (demoState.mode === 'cataract') {
    label.innerHTML = `<span>${demoState.language === 'ru' ? 'Сила размытия' : 'Blur strength'}</span><b>${demoState.cataractBlur}px</b>`;
    const range = document.createElement('input');
    range.id = controlId; range.type = 'range'; range.min = '1'; range.max = '7'; range.step = '1'; range.value = String(demoState.cataractBlur);
    range.addEventListener('input', () => { demoState.cataractBlur = Number(range.value); label.querySelector('b').textContent = `${range.value}px`; });
    settingContainer.append(label, range);
  } else if (demoState.mode === 'dyslexia') {
    label.textContent = demoState.language === 'ru' ? 'Охват текста' : 'Text coverage';
    const select = document.createElement('select');
    select.id = controlId;
    select.innerHTML = demoState.language === 'ru'
      ? '<option>Только заголовки</option><option>Весь текст</option>'
      : '<option>Headings only</option><option>All text</option>';
    settingContainer.append(label, select);
  } else if (demoState.mode === 'tremor') {
    label.textContent = demoState.language === 'ru' ? 'Поведение' : 'Behavior';
    const select = document.createElement('select');
    select.id = controlId;
    select.innerHTML = demoState.language === 'ru'
      ? '<option>Кнопки убегают</option><option>Курсор дрожит</option>'
      : '<option>Buttons evade</option><option>Cursor jitters</option>';
    settingContainer.append(label, select);
  } else {
    settingContainer.hidden = true;
  }
}

function renderDemo() {
  const copy = demoCopy[demoState.language];
  demo.dataset.demoTheme = demoState.theme;
  document.querySelectorAll('[data-copy]').forEach((element) => { element.textContent = copy[element.dataset.copy]; });
  document.querySelector('#demo-theme').textContent = demoState.theme === 'dark' ? '☾' : '☀';
  modesContainer.replaceChildren();

  Object.entries(copy.modes).forEach(([id, mode]) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `demo-mode${demoState.mode === id ? ' is-selected' : ''}`;
    button.setAttribute('aria-pressed', String(demoState.mode === id));
    button.innerHTML = `<span class="demo-mode-icon">${mode.icon}</span><span class="demo-mode-copy"><b>${mode.title}</b><small>${mode.desc}</small></span>`;
    button.addEventListener('click', () => { demoState.mode = id; demoState.adviceOpen = true; renderDemo(); });
    modesContainer.appendChild(button);
  });

  const mode = copy.modes[demoState.mode];
  document.querySelector('#demo-label').textContent = `▲ ${mode.title} · ${copy.diagnosis}`;
  document.querySelector('#demo-title').textContent = mode.diag;
  document.querySelector('#demo-text').textContent = mode.text;
  document.querySelector('#demo-advice').textContent = mode.advice;
  document.querySelector('#demo-advice').hidden = !demoState.adviceOpen;
  const adviceToggle = document.querySelector('#demo-advice-toggle');
  adviceToggle.textContent = demoState.adviceOpen ? copy.collapse : copy.expand;
  adviceToggle.setAttribute('aria-expanded', String(demoState.adviceOpen));
  renderDemoSetting(copy);
}

document.querySelector('#demo-language').addEventListener('change', (event) => { demoState.language = event.target.value; renderDemo(); });
document.querySelector('#demo-theme').addEventListener('click', () => { demoState.theme = demoState.theme === 'dark' ? 'light' : 'dark'; renderDemo(); });
document.querySelector('#demo-advice-toggle').addEventListener('click', () => { demoState.adviceOpen = !demoState.adviceOpen; renderDemo(); });

renderDemo();
