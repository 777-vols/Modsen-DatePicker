# Tестовое задание библиотека Modsen DatePicker

## Содержание

- [Техническое задание](#Техническое-задание)
- [Используемые технологии](#Используемые-технологии)
- [Структура проекта](#Структура-проекта)
- [Тестирование](#Тестирование)
- [Как начать](#Как-начать)
- [Полезные ссылки](#Полезные-ссылки)

## Техническое задание

Необходимо реализовать библиотеку Javascript - **_DatePicker_**, для работы с различными видами календаря.
Цель состоит в том, чтобы создать базовую библиотеку, которую можно настраивать и расширять.

#### Необходимый функционал:

- Просмотр календаря;
- Выбор диапазона для календаря;
- Дефолтный календарь с заранее установленным диапазоном;
- Возможность выбора начала недели(с понедельника или воскресенья);
- Выбор вида календаря (по неделям, месяцам и т.д.);
- Реализовать возможность при клике на определенный день добавлять список задач и
  сохранять их в localStorage;
- Возможность переключения на предыдущий(ую)/следующий(ую) неделю/месяц/год;
- Возможность выбора максимальной даты календаря;
- Возможность выбора минимальной даты для календаря;
- Возможность скрывать/показывать выходные дни и выделять праздничные дни другим цветом;
- Возможность перейти в календаре на введенную пользователем дату;
- Стилизация календаря.

#### Дополнительный функционал:

- Развернуть приложение на хостинге (heroku, vercel);
- Настроить CI/CD, используя [GitHub Actions](https://github.com/features/actions);
- Собрать проект с нуля(с настройками всех конфигов: rollup, eslint, prettier, husky).

#### Пример графического представления:

Ссылка на макет: [Макет "DatePicker"](https://www.figma.com/file/PGg4P38QaPjUzasxC2GSkv/Modsen-Datepicker?node-id=0%3A1&t=dWZj8oM41qBje0bv-0).

#### Также проект предполагает:

- Придерживаться требований по написанию и организации кода react приложения. Ссылка на требования: [Требования к тестовому заданию](https://github.com/annaprystavka/requirements);

- Разделить библиотеку на два основных компонента: представления и логики. Для реализации логики приложения необходимо использовать порождающий паттерн программирования **_"Декоратор"_**, который позволяет динамически добавлять объектам новую функциональность, оборачивая их в полезные «обёртки» (см. подробнее [паттерн Декоратор](https://refactoring.guru/ru/design-patterns/decorator)). При помощи паттерна создать сервисный класс, в котором вы будете задавать конфигурацию и создавать календарь;

- Настроить конфигурации **_babel_**, **_eslint_**, **_prettier_**;

- Подключить и настроить бандлер **_Rollup_** для сборки проекта в библиотеку;

- Подключить и настроить **_Storybook_** для проверки работоспособности вашей библиотеки;

- Добавить обработку ошибок через паттерн **_Error Boundaries_**;

- Добавить проверку типов в React компонентах, передаваемых параметров и подобных объектов;

- Использовать алиасы для импортирования файлов;

- В приложении допускается использование языка typescript;

- Нельзя использовать какие-либо сторонние библиотеки.

## Используемые технологии

### Для react

- **_node.js_** - программная платформа, основанная на движке V8 (транслирующем JavaScript в машинный код);
- **_babel_** - транспайлер, преобразующий код из одного стандарта в другой;
- **_eslint_** - линтер для JavaScript кода;
- **_yarn_** - менеджер пакетов;
- **_rollup_** - сборщик ES-модулей;
- **_storybook_** - инструмент, используемый для разработки компонентов пользовательского интерфейса в изоляции;
- **_react_** - JavaScript-библиотека для создания пользовательских интерфейсов;
- **_prop-types_** - набор валидаторов, которые могут быть использованы для проверки получаемых данных;
- **_styled-components_** - система стилизации react компонентов;
- **_jest_** — интеграционное тестирование (rtl) + unit-тестирование.

### Для react native

Will be soon...

## Краткое описание проекта

### В каталоге проекта вы можете запустить:

#### 1. yarn storybook

Запускает приложение в storybook.

Страница перезагрузится, когда вы внесете изменения.Вы также можете увидеть любые ошибки в консоли.

#### 2. yarn storybook:build

Собирает приложение для strybook в папке storybook-static.

#### 3. yarn build

Собирает приложение для production в папке сборки.

Он правильно объединяет React в production режиме и оптимизирует сборку для достижения наилучшей производительности.
Сборка минимизирована, а имена файлов включают хеши.Ваше приложение готово к развертыванию!

Дополнительные сведения см. в разделе о [развертывании](https://create-react-app.dev/docs/deployment/).

#### 4. yarn test

Запускает тест-раннер для unit-тестирования веб-приложения.

## Структура проекта

[Структура проекта](https://github.com/mkrivel/structure)

## Тестирование

Реализовать e2e тестирование c полным покрытием функционала приложения:

- Сервис для конфигурации DatePicker-компонента;
- Графическое (компонент модуля и т.д.).

## Полезные ссылки

[React](https://reactjs.org/docs/getting-started.html)

[Rollup](https://rollupjs.org/guide/en/)

[Storybook](https://storybook.js.org/docs/basics/introduction/)

[Eslint](https://eslint.org/docs/user-guide/configuring)

[Babel](https://babeljs.io/docs/en/configuration)

[Тестирование Jest](https://jestjs.io/ru/docs/getting-started)

[Styled-components](https://www.styled-components.com/docs)

[Husky](https://dev.to/ivadyhabimana/setup-eslint-prettier-and-husky-in-a-node-project-a-step-by-step-guide-946)
