(() => {
  const copy = {
    ru: {
      pageTitle: 'Perception Simulator — проверь интерфейс другими глазами',
      pageDescription: 'Perception Simulator — локальный Chrome-симулятор восприятия для проверки доступности, контраста, текста и интерактивных целей в интерфейсах.',
      brandAria: 'Perception Simulator — главная', navAria: 'Навигация', languageAria: 'Язык', themeAria: 'Переключить тему',
      navCases: 'Сценарии', navModes: 'Режимы', navPrivacy: 'Privacy', install: 'Установить в Chrome', viewModes: 'Посмотреть режимы',
      heroEyebrow: '▲ ЛОКАЛЬНЫЙ СИМУЛЯТОР ДОСТУПНОСТИ', heroTitleFirst: 'Как ваш интерфейс', heroTitleAccent: 'видится другим?',
      heroLead: 'Расширение для Chrome помогает увидеть сайт через разные сценарии восприятия — и найти места, где цвет, контраст, текст или точность курсора становятся барьером.',
      factsAria: 'Свойства расширения', factLocal: 'Локальная обработка', factThemes: 'Светлая и тёмная темы',
      previewAria: 'Интерфейс расширения', previewTitle: 'Как это видится?', previewNote: 'Нажмите на режим — эффект применится к этой странице.',
      diagnosisEyebrow: '▲ ДИАГНОЗ ИНТЕРФЕЙСА',
      modeNormal: 'Обычное зрение', modeTremor: 'Тремор', modeCrt: 'CRT монитор', modeColorblind: 'Дальтонизм', modeTunnel: 'Туннельное зрение', modeDrunk: 'Выпивший', modeDyslexia: 'Дислексия', modeCataract: 'Катаракта',
      casesEyebrow: '▲ ОСНОВНЫЕ СЦЕНАРИИ', casesTitle: 'Быстрая проверка до разработки и релиза.', casesLead: 'Переключите режим на открытой вкладке, проверьте реальный контент и сразу получите подсказку, что улучшить в UI.',
      case1Title: 'Аудит доступности', case1Copy: 'Проверьте, не несёт ли цвет единственный смысл и не теряются ли важные элементы при слабом контрасте.',
      case2Title: 'Дизайн QA', case2Copy: 'Тестируйте карточки, формы, статусы и CTA на настоящей странице, а не на абстрактном макете.',
      case3Title: 'Обсуждение с командой', case3Copy: 'Покажите проблему наглядно: почему мелкая цель, длинный текст или разбросанные статусы мешают действию.',
      case4Title: 'Обучение UX', case4Copy: 'Используйте симулятор на воркшопах, ревью и лекциях как практический инструмент разговора о доступности.',
      modesEyebrow: '▲ РЕЖИМЫ СИМУЛЯЦИИ', modesTitle: 'Найди то, что не видно при обычном зрении.', modeListNote: 'Каждая карточка интерактивна: нажмите, чтобы посмотреть эффект прямо на лендинге.',
      modeColorblindCopy: 'Ахроматопсия, дейтеранопия и тританопия с регулировкой силы эффекта.',
      modeCataractCopy: 'Пелена и настраиваемое размытие, которое съедает мелкие детали и слабый контраст.',
      modeTunnelCopy: 'Подвижная маска показывает, как периферия перестаёт быть доступной.',
      modeDyslexiaCopy: 'Движение букв и слов помогает заметить перегруженный, плотный или сложный текст.',
      modeTremorCopy: 'Интерактивные цели уклоняются — проверка попадания в действие.',
      modeDrunkCopy: 'Плавающий фокус, размытие и смена слов усложняют удержание контекста.',
      modeCrtCopy: 'Сканлайны, мерцание, цветовое свечение и искривление стеклянной поверхности.',
      privacyTitle: 'Контент страницы не уходит с устройства.', privacyCopy: 'Эффекты и настройки обрабатываются локально в браузере. Расширение не использует рекламу, аналитику, удалённый код или передачу персональных данных.', privacyLink: 'Политика конфиденциальности',
      finalEyebrow: '▲ ПРОВЕРЬТЕ СВОЙ ИНТЕРФЕЙС', finalTitle: 'То, что видно вам, видно не всем.', footerCopy: 'Учебный симулятор интерфейсного восприятия. Не является медицинской моделью.', authorsAria: 'Авторы', ideaAuthor: 'Автор идеи:', extensionAuthor: 'Создатель расширения:', disableFilter: 'Выключить фильтр',
      privacyPageTitle: 'Политика конфиденциальности — Perception Simulator', privacyPageDescription: 'Политика конфиденциальности Perception Simulator.', home: 'На главную', privacyUpdate: 'Последнее обновление: 18 июля 2026 года.',
      privacyShortTitle: 'Коротко', privacyShortCopy: 'Perception Simulator не продаёт, не передаёт и не использует для рекламы персональные данные, историю просмотров, содержимое страниц, данные форм или аналитику.',
      privacyDoesTitle: 'Что делает расширение', privacyDoesCopy: 'Расширение накладывает выбранные визуальные эффекты на текущую вкладку: симулирует разные сценарии восприятия и помогает проверять доступность интерфейсов. Это учебный инструмент, а не медицинская модель и не средство диагностики.',
      privacyLocalTitle: 'Локальная обработка', privacyLocalCopy: 'Обработка эффектов происходит в браузере на устройстве пользователя. Настройки — язык, тема, выбранный режим и параметры фильтров — могут храниться в локальном хранилище Chrome, чтобы восстанавливаться между запусками.',
      privacyTabsTitle: 'Содержимое вкладок', privacyTabsCopy: 'Расширение применяет визуальные слои к страницам, на которых пользователь включает эффект. Оно не отправляет содержимое страниц, учётные данные, формы или историю просмотров на внешний сервер.',
      privacyCrtTitle: 'CRT и WebGL', privacyCrtCopy: 'Для GPU-обработки CRT-эффекта может использоваться локальный кадр активной вкладки. Он остаётся в памяти браузера, не сохраняется в файл и не передаётся разработчику или третьим лицам.',
      privacyRemoteTitle: 'Удалённый код и сторонние сервисы', privacyRemoteCopy: 'В расширении нет удалённого кода, рекламы, аналитики или трекеров. Для работы визуальных эффектов не выполняются сетевые запросы к сервисам разработчика.',
      privacyChoiceTitle: 'Ваш выбор', privacyChoiceCopy: 'Вы можете отключить активный фильтр в popup или удалить расширение вместе с его локальными настройками через страницу управления расширениями Chrome.', privacyContactTitle: 'Контакт', privacyContactPrefix: 'По вопросам приватности и работы расширения:',
      diagnosis: {
        normal: ['Всё работает ✓', 'Важная информация заметна, кнопки понятны, визуальная иерархия читается.'],
        colorblind: ['Цвет перестал нести смысл', 'Цвета интерфейса сливаются — добавьте подписи, иконки и другие признаки, кроме цвета.'],
        cataract: ['Контраст растворился', 'Пелена и размытие съедают слабый контраст, мелкие подписи и тонкие детали.'],
        tunnel: ['Периферия пропала', 'Виден только центр: важная информация в углах и далеко от действия легко теряется.'],
        dyslexia: ['Текст не стоит на месте', 'Движение текста делает длинные и плотные строки заметно сложнее для чтения.'],
        tremor: ['В цель трудно попасть', 'Небольшая цель рядом с другими действиями превращается в испытание.'],
        drunk: ['Фокус ускользает', 'Резкость и положение страницы плавают, поэтому удерживать контекст становится сложнее.'],
        crt: ['Экран из прошлого', 'Сканлайны, мерцание и искривление напоминают, как на экраны смотрели в девяностых и нулевых.']
      }
    },
    en: {
      pageTitle: 'Perception Simulator — see your interface through different eyes',
      pageDescription: 'Perception Simulator is a local Chrome accessibility simulator for checking contrast, text and interactive targets in interfaces.',
      brandAria: 'Perception Simulator — home', navAria: 'Navigation', languageAria: 'Language', themeAria: 'Change theme',
      navCases: 'Use cases', navModes: 'Modes', navPrivacy: 'Privacy', install: 'Install in Chrome', viewModes: 'Explore modes',
      heroEyebrow: '▲ LOCAL ACCESSIBILITY SIMULATOR', heroTitleFirst: 'How does your interface', heroTitleAccent: 'look to others?',
      heroLead: 'This Chrome extension helps you experience a site through different perception scenarios and find where colour, contrast, text or pointer precision become barriers.',
      factsAria: 'Extension features', factLocal: 'Local processing', factThemes: 'Light and dark themes',
      previewAria: 'Extension interface', previewTitle: 'How does it look?', previewNote: 'Choose a mode to apply its effect to this page.',
      diagnosisEyebrow: '▲ INTERFACE DIAGNOSIS',
      modeNormal: 'Normal vision', modeTremor: 'Tremor', modeCrt: 'CRT monitor', modeColorblind: 'Colour blindness', modeTunnel: 'Tunnel vision', modeDrunk: 'Intoxicated', modeDyslexia: 'Dyslexia', modeCataract: 'Cataract',
      casesEyebrow: '▲ KEY USE CASES', casesTitle: 'A quick check before development and release.', casesLead: 'Switch a mode on the active tab, test real content and immediately get a prompt for what to improve in the UI.',
      case1Title: 'Accessibility audit', case1Copy: 'Check that colour is not the only carrier of meaning and that important elements survive low contrast.',
      case2Title: 'Design QA', case2Copy: 'Test cards, forms, statuses and CTAs on a real page rather than an abstract mock-up.',
      case3Title: 'Team alignment', case3Copy: 'Make the issue tangible: see why a tiny target, dense text or scattered statuses make action harder.',
      case4Title: 'UX education', case4Copy: 'Use the simulator in workshops, reviews and lectures as a practical way to discuss accessibility.',
      modesEyebrow: '▲ SIMULATION MODES', modesTitle: 'Find what normal vision does not reveal.', modeListNote: 'Each card is interactive: select it to preview the effect on this landing page.',
      modeColorblindCopy: 'Achromatopsia, deuteranopia and tritanopia with adjustable intensity.',
      modeCataractCopy: 'A veil and adjustable blur that consume small details and weak contrast.',
      modeTunnelCopy: 'A moving mask demonstrates how peripheral information becomes unavailable.',
      modeDyslexiaCopy: 'Moving letters and words reveal dense, overloaded or difficult text.',
      modeTremorCopy: 'Interactive targets move away — a quick check of how hard an action is to hit.',
      modeDrunkCopy: 'Floating focus, blur and changing words make it harder to retain context.',
      modeCrtCopy: 'Scanlines, flicker, colour glow and curved glass distortion.',
      privacyTitle: 'Page content never leaves the device.', privacyCopy: 'Effects and settings are processed locally in the browser. The extension has no ads, analytics, remote code or personal-data transfer.', privacyLink: 'Privacy policy',
      finalEyebrow: '▲ CHECK YOUR INTERFACE', finalTitle: 'What is visible to you is not visible to everyone.', footerCopy: 'An educational simulator of interface perception. Not a medical model.', authorsAria: 'Authors', ideaAuthor: 'Idea author:', extensionAuthor: 'Extension creator:', disableFilter: 'Disable filter',
      privacyPageTitle: 'Privacy policy — Perception Simulator', privacyPageDescription: 'Perception Simulator privacy policy.', home: 'Back to home', privacyUpdate: 'Last updated: 18 July 2026.',
      privacyShortTitle: 'In short', privacyShortCopy: 'Perception Simulator does not sell, transfer or use personal data, browsing history, page content, form data or analytics for advertising.',
      privacyDoesTitle: 'What the extension does', privacyDoesCopy: 'The extension applies selected visual effects to the current tab: it simulates different perception scenarios and helps test interface accessibility. It is an educational tool, not a medical model or diagnostic device.',
      privacyLocalTitle: 'Local processing', privacyLocalCopy: 'Effects are processed in the browser on the user’s device. Language, theme, selected mode and filter settings may be stored in Chrome local storage so they can be restored between sessions.',
      privacyTabsTitle: 'Tab content', privacyTabsCopy: 'The extension applies visual layers only to pages where the user enables an effect. It does not send page content, credentials, forms or browsing history to an external server.',
      privacyCrtTitle: 'CRT and WebGL', privacyCrtCopy: 'GPU processing for the CRT effect may use a local frame of the active tab. It remains in browser memory, is not saved to a file and is not sent to the developer or third parties.',
      privacyRemoteTitle: 'Remote code and third-party services', privacyRemoteCopy: 'The extension contains no remote code, ads, analytics or trackers. Visual effects do not make network requests to developer services.',
      privacyChoiceTitle: 'Your choice', privacyChoiceCopy: 'You can disable the active filter in the popup or remove the extension with its local settings through Chrome’s extensions-management page.', privacyContactTitle: 'Contact', privacyContactPrefix: 'For privacy or extension questions:',
      diagnosis: {
        normal: ['Everything works ✓', 'Important information is visible, buttons are clear and the visual hierarchy is easy to read.'],
        colorblind: ['Colour stopped carrying meaning', 'Interface colours merge together — add labels, icons and other cues besides colour.'],
        cataract: ['Contrast dissolved', 'A veil and blur consume weak contrast, small captions and fine details.'],
        tunnel: ['The periphery disappeared', 'Only the centre remains visible: important information in corners or far from the action is easily lost.'],
        dyslexia: ['Text will not stay still', 'Moving text makes long, dense lines noticeably harder to read.'],
        tremor: ['The target is hard to hit', 'A small target next to other actions turns into a challenge.'],
        drunk: ['Focus keeps slipping away', 'Sharpness and position drift, making it harder to keep context.'],
        crt: ['A screen from the past', 'Scanlines, flicker and curved glass recall how screens looked in the 1990s and 2000s.']
      }
    }
  };

  const content = document.querySelector('.site-content');
  const overlay = document.querySelector('#site-effect-overlay');
  const resetButton = document.querySelector('#site-filter-reset');
  const themeToggle = document.querySelector('#theme-toggle');
  const themeKey = 'perception-site-theme';
  const languageKey = 'perception-site-language';
  const storedLanguage = localStorage.getItem(languageKey);
  const state = {
    theme: localStorage.getItem(themeKey) === 'light' ? 'light' : 'dark',
    language: storedLanguage === 'en' || storedLanguage === 'ru' ? storedLanguage : (navigator.language.toLowerCase().startsWith('ru') ? 'ru' : 'en'),
    mode: 'normal'
  };
  const tremorTimers = new WeakMap();

  function t(key) {
    return copy[state.language][key] ?? copy.ru[key] ?? key;
  }

  function renderDiagnosis() {
    const diagnosis = t('diagnosis')[state.mode] || t('diagnosis').normal;
    const title = document.querySelector('[data-site-diagnosis-title]');
    const description = document.querySelector('[data-site-diagnosis-copy]');
    if (title) title.textContent = diagnosis[0];
    if (description) description.textContent = diagnosis[1];
  }

  function render() {
    document.documentElement.lang = state.language;
    document.body.dataset.theme = state.theme;
    const isPrivacyPage = document.body.dataset.page === 'privacy';
    document.title = t(isPrivacyPage ? 'privacyPageTitle' : 'pageTitle');
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = t(isPrivacyPage ? 'privacyPageDescription' : 'pageDescription');
    document.querySelectorAll('[data-i18n]').forEach((element) => { element.textContent = t(element.dataset.i18n); });
    document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => { element.setAttribute('aria-label', t(element.dataset.i18nAriaLabel)); });
    document.querySelectorAll('[data-i18n-title]').forEach((element) => { element.title = t(element.dataset.i18nTitle); });
    document.querySelectorAll('[data-language-choice]').forEach((button) => {
      const selected = button.dataset.languageChoice === state.language;
      button.classList.toggle('is-selected', selected);
      button.setAttribute('aria-pressed', String(selected));
    });
    if (themeToggle) {
      const isDark = state.theme === 'dark';
      themeToggle.textContent = isDark ? '☾' : '☀';
      themeToggle.setAttribute('aria-label', isDark ? (state.language === 'ru' ? 'Включить светлую тему' : 'Enable light theme') : (state.language === 'ru' ? 'Включить тёмную тему' : 'Enable dark theme'));
    }
    renderDiagnosis();
  }

  function resetTremorTargets() {
    document.querySelectorAll('[data-tremor-jolt]').forEach((target) => {
      window.clearTimeout(tremorTimers.get(target));
      target.removeAttribute('data-tremor-jolt');
      target.style.removeProperty('--site-tremor-x');
      target.style.removeProperty('--site-tremor-y');
    });
  }

  function applyMode(mode) {
    if (!content || !copy.ru.diagnosis[mode]) return;
    state.mode = mode;
    content.dataset.siteMode = mode;
    overlay.dataset.mode = ['tunnel', 'drunk', 'crt'].includes(mode) ? mode : '';
    resetButton.hidden = mode === 'normal';
    document.querySelectorAll('[data-filter-control]').forEach((control) => {
      const active = control.dataset.mode === mode;
      control.classList.toggle('is-active', active);
      control.setAttribute('aria-pressed', String(active));
    });
    if (mode !== 'tremor') resetTremorTargets();
    renderDiagnosis();
  }

  document.querySelectorAll('[data-language-choice]').forEach((button) => {
    button.addEventListener('click', () => {
      state.language = button.dataset.languageChoice;
      localStorage.setItem(languageKey, state.language);
      render();
    });
  });

  themeToggle?.addEventListener('click', () => {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem(themeKey, state.theme);
    render();
  });

  document.querySelectorAll('[data-filter-control]').forEach((control) => {
    control.addEventListener('click', () => applyMode(control.dataset.mode));
    control.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        applyMode(control.dataset.mode);
      }
    });
  });

  resetButton?.addEventListener('click', () => applyMode('normal'));

  window.addEventListener('pointermove', (event) => {
    overlay?.style.setProperty('--site-pointer-x', `${event.clientX}px`);
    overlay?.style.setProperty('--site-pointer-y', `${event.clientY}px`);
  }, { passive: true });

  document.addEventListener('pointerover', (event) => {
    if (state.mode !== 'tremor' || !content) return;
    const target = event.target.closest('a, button, [role="button"]');
    if (!target || !content.contains(target)) return;
    const rect = target.getBoundingClientRect();
    let dx = rect.left + rect.width / 2 - event.clientX;
    let dy = rect.top + rect.height / 2 - event.clientY;
    const distance = Math.hypot(dx, dy) || 1;
    const shift = 25 + Math.random() * 25;
    dx = Math.round((dx / distance) * shift);
    dy = Math.round((dy / distance) * shift);
    target.setAttribute('data-tremor-jolt', '');
    target.style.setProperty('--site-tremor-x', `${dx}px`);
    target.style.setProperty('--site-tremor-y', `${dy}px`);
    window.clearTimeout(tremorTimers.get(target));
    tremorTimers.set(target, window.setTimeout(() => {
      target.removeAttribute('data-tremor-jolt');
      target.style.removeProperty('--site-tremor-x');
      target.style.removeProperty('--site-tremor-y');
    }, 650));
  });

  render();
  applyMode('normal');
})();
