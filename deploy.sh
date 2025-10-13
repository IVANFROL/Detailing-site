#!/bin/bash

# Переменные
SERVER="root@45.95.234.84"
DEPLOY_DIR="/var/www/sls-detailing"
PM2_NAME="sls-detailing"

# Создаем production build
echo "Creating production build..."
pnpm build

# Создаем директорию на сервере
echo "Creating directory on server..."
ssh $SERVER "mkdir -p $DEPLOY_DIR"

# Копируем файлы
echo "Copying files to server..."
rsync -avz --delete \
    --exclude 'node_modules' \
    --exclude '.git' \
    --exclude '.env.local' \
    ./ $SERVER:$DEPLOY_DIR/

# Устанавливаем зависимости на сервере
echo "Installing dependencies on server..."
ssh $SERVER "cd $DEPLOY_DIR && pnpm install"

# Настраиваем PM2
echo "Setting up PM2..."
ssh $SERVER "cd $DEPLOY_DIR && pm2 delete $PM2_NAME || true && pm2 start npm --name $PM2_NAME -- start"

echo "Deployment completed!"

