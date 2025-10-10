import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, phone, email, message, source, service } = body

    // Замените на ваши данные бота
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || 'YOUR_BOT_TOKEN'
    const TELEGRAM_CHAT_IDS = process.env.TELEGRAM_CHAT_ID || 'YOUR_CHAT_ID'

    // Разбиваем Chat IDs на массив (поддержка нескольких получателей)
    const chatIds = TELEGRAM_CHAT_IDS.split(',').map(id => id.trim())

    // Получаем IP адрес
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'Не определен'

    // Формируем текст сообщения
    const telegramMessage = `
🎯 Новая заявка с сайта SLS DETAILING STUDIO

👤 Имя: ${name || 'Не указано'}
📞 Телефон: ${phone || 'Не указан'}
📧 Email: ${email || 'Не указан'}

${service ? `🎯 Выбранная услуга: ${service}` : ''}
📋 Тип заявки: ${source || 'Общая заявка'}
${message ? `💬 Сообщение: ${message}` : ''}

🕐 Время: ${new Date().toLocaleString('ru-RU')}
🌐 Источник: Сайт SLS Detailing Studio
🔒 IP: ${ip}
    `.trim()

    // Отправляем в Telegram всем получателям
    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`
    
    const sendPromises = chatIds.map(chatId => 
      fetch(telegramUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegramMessage,
          parse_mode: 'HTML',
        }),
      })
    )

    const responses = await Promise.all(sendPromises)
    
    // Проверяем, что хотя бы одна отправка прошла успешно
    const hasSuccess = responses.some(response => response.ok)
    
    if (!hasSuccess) {
      throw new Error('Ошибка отправки в Telegram')
    }

    return NextResponse.json({ success: true, message: 'Заявка успешно отправлена!' })
  } catch (error) {
    console.error('Ошибка:', error)
    return NextResponse.json(
      { success: false, message: 'Ошибка при отправке заявки' },
      { status: 500 }
    )
  }
}

