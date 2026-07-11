# Как опубликовать лендинг на GitHub Pages

Сайт статический: ничего собирать или устанавливать не нужно. Важно загрузить **содержимое этой папки в корень репозитория**, чтобы `index.html` находился в корне.

## Вариант 1 — через интерфейс GitHub

1. Войдите в [GitHub](https://github.com) и нажмите **New repository**.
2. Назовите репозиторий, например `perception-simulator`.
3. Выберите **Public** и создайте репозиторий.
4. Нажмите **uploading an existing file**.
5. Загрузите всё содержимое папки `perception-simulator-site`, включая скрытые `.nojekyll` и `.github`.
6. Сохраните изменения в ветку `main` кнопкой **Commit changes**.
7. Откройте **Settings → Pages**.
8. В блоке **Build and deployment → Source** выберите **GitHub Actions**.
9. Откройте вкладку **Actions** и дождитесь завершения процесса **Deploy landing to GitHub Pages**.
10. Ссылка на опубликованный сайт появится в завершённом процессе и в **Settings → Pages**. Обычно она выглядит так:

   `https://USERNAME.github.io/perception-simulator/`

Публичная ссылка на privacy policy будет:

`https://USERNAME.github.io/perception-simulator/privacy.html`

Именно её можно указать в поле Privacy Policy URL в Chrome Web Store.

## Вариант 2 — через Git

Создайте пустой репозиторий на GitHub, затем выполните команды внутри папки сайта:

```bash
git init
git add .
git commit -m "Add Perception Simulator landing"
git branch -M main
git remote add origin https://github.com/USERNAME/perception-simulator.git
git push -u origin main
```

После загрузки откройте **Settings → Pages** и выберите **GitHub Actions** как источник публикации.

## Подключение кнопки Chrome Web Store

Сейчас все кнопки «Установить в Chrome» намеренно ведут на главную страницу лендинга через `href="./"`.

Когда расширение появится в Chrome Web Store:

1. Откройте `index.html` и `privacy.html`.
2. Найдите ссылки с текстом «Установить в Chrome».
3. Замените `href="./"` на публичный адрес расширения в Chrome Web Store.
4. Сохраните и отправьте изменения в ветку `main`. GitHub Pages обновится автоматически.

## Собственный домен — необязательно

Если появится домен, откройте **Settings → Pages → Custom domain**, укажите домен и настройте DNS по подсказкам GitHub. Для стандартного адреса `github.io` это не требуется.
