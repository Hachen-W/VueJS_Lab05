# VueJS_Lab05

## Toolkit, Postman

Данная часть выполнялась в директории part01

Инициализация проекта:
```bash
npm init -y
```

Установка утилит:
```bash
npm install pixi.js
npm install axios
```

### Задание 1

Запуск:
1. переходим в task01
2. открываем index.html

### Задания 2 и 3

Запуск программы:
```bash
cd task02+03
node requests.js
```

Результаты:
```bash
GeoIP: Успех, IP - 85.143.112.108
VK: Успех!
```

Оба запроса выполнились успешно, так как они не были ограничины политиками браузера.

Запуск программы:
1. открываем task02+03/index.html,
2. смотрим консоль разработчика.

Результаты:
```bash
79.127.160.81
Network Error
Failed to load resource: net::ERR_FAILED
```

Запрос к https://vk.com упал с ошибкой CORS. Браузеры в целях безопасности блокируют AJAX-запросы к другим доменам, если сервер явно не разрешил это с помощью заголовка Access-Control-Allow-Origin. ВКонтакте такой заголовок для сторонних сайтов не отдает.

Запрос к https://json.geoiplookup.io/ прошёл успешно. Этот API специально создан для публичного использования из браузеров, поэтому их сервер отправляет заголовок Access-Control-Allow-Origin: *, разрешая доступ.

### Задание 5

При отправке запроса через Postman на https://vk.com нет заголовков, связанных с CORS

При отправке запроса через Postman на https://json.geoiplookup.io/ есть заголовки, связанные с CORS (Access-Control-Allow-Origin: *)

## Vue Introduction

Данная часть выполнялась в директории part02

Создание проекта:
```bash
npm init vue@latest
```

Установка зависимостей и запуск сервера:
```bash
cd task03-09
npm install
npm run dev
```

## Advanced Vue

Данная часть выполнялась в директории part03

Создание проекта:
```bash
npm init vue@latest
```

Установка зависимостей и запуск сервера:
```bash
cd task03-09
npm install
npm run dev
```
