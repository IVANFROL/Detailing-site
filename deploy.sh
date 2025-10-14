#!/bin/bash

# Скрипт для деплоя на сервер SLS Detailing
# Использование: ./deploy.sh

echo "🚀 Начинаем деплой на сервер..."

# Параметры подключения
SERVER="45.95.234.84"
USER="root"
PASSWORD="h7-SfjHCN+9_nb"
PROJECT_DIR="/var/www/sls-detailing"

echo "📦 Подключаемся к серверу и обновляем код..."

# Используем expect для автоматического ввода пароля
expect << EOF
spawn ssh -p 2222 -o StrictHostKeyChecking=no $USER@$SERVER
expect "password:"
send "$PASSWORD\r"
expect "#"

# Переходим в директорию проекта
send "cd $PROJECT_DIR\r"
expect "#"

# Обновляем код из Git
send "git pull origin main\r"
expect "#"

# Устанавливаем зависимости
send "pnpm install\r"
expect "#"

# Пересобираем проект
send "pnpm build\r"
expect "#"

# Перезапускаем PM2
send "pm2 restart sls-detailing\r"
expect "#"

# Проверяем статус
send "pm2 status\r"
expect "#"

# Проверяем nginx
send "nginx -t\r"
expect "#"

send "systemctl reload nginx\r"
expect "#"

send "exit\r"
expect eof
EOF

echo "✅ Деплой завершен!"
echo "🌐 Сайт доступен по адресам:"
echo "   - https://sls-detailing.ru"
echo "   - https://слс-дэтаилинг.рф"