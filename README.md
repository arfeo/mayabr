# Маябрь

Демонстрационное приложение. Позволяет создавать и управлять набором виджетов с информацией о погоде в российских городах, а также фильтровать отображаемые виджеты по температуре воздуха.

Источник метеоданных: https://www.accuweather.com

Протестировано в `Chrome`, `FireFox`, `Safari`, `Opera`, `Edge`.

![Mayabr](http://static.arfeo.net/mayabr/mayabr.gif "Интерфейс приложения")

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

### Упаковка исполняемого файла (Electron)

Приложение подготовлено для упаковки в следующих средах: `macOS`, `Windows` и `Linux`.

В зависимости от целевой платформы выполните соответствующую команду:

```
$ npm run package-mac
```

или

```
$ npm run package-win
```

или

```
$ npm run package-linux
```

## Powered by

* [axios](https://github.com/axios/axios) (MIT)
* [React Autosuggest](https://github.com/moroshko/react-autosuggest) (MIT)
* [React Rangeslider](https://github.com/whoisandy/react-rangeslider) (MIT)
* [Redux Thunk](https://github.com/gaearon/redux-thunk) (MIT)
