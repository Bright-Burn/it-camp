# Getting Started 
Запуск локальный:
1. скачать и установить ноду - https://nodejs.org/en/
2. перейти в корень набрать команду npm install - долждаться установки пакетов
3. набрать команду npm start для запуска проекта 
4. открыть приложение [http://localhost:3000](http://localhost:3000)


#Docker
1. сбилдить \
docker build -t my-front .
2. собрать контейнер с переменной окружения BACKEND_HOST \
docker run --env BACKEND_HOST='хост:порт' 3002:8080 ид_контейнера
3. проверить по [http://localhost:3002](http://localhost:3002)

