# Маябрь

Демонстрационное приложение. Позволяет создавать и управлять набором виджетов с информацией о погоде в российских городах, а также фильтровать отображаемые виджеты по температуре воздуха.

Источник метеоданных: https://www.accuweather.com

Протестировано в `Chrome`, `FireFox`, `Safari`, `Opera`, `Edge`.

![Mayabr](http://arfeo.net/static/mayabr/mayabr.gif "Интерфейс приложения")

## Установка

Склонируйте проект:

```
$ git clone https://github.com/arfeo/mayabr.git && cd mayabr
```

Установите зависимости:

```
$ npm install
```

Соберите приложение:

```
$ npm run build
```

Результат сборки: http://arfeo.net/tests/mayabr/

### Упаковка исполняемого файла (Electron)

Приложение подготовлено для упаковки в следующих средах: `macOS`, `Windows` и `Linux`.

В зависимости от целевой платформы выполните соответствующую команду:

```
npm run package-mac
```

или

```
npm run package-win
```

или

```
npm run package-linux
```

Скачать дистрибутивы можно [здесь](https://github.com/arfeo/Mayabr/releases/latest).
