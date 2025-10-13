"use client"

import { useEffect } from 'react'

export function ErrorHandler() {
  useEffect(() => {
    // Обработка ошибок загрузки ресурсов
    const handleError = (event: ErrorEvent) => {
      if (event.message.includes('ERR_BLOCKED_BY_CLIENT')) {
        console.log('Resource blocked by client (likely ad blocker):', event.filename)
        return // Не показываем ошибку пользователю
      }
      
      if (event.message.includes('Vercel Web Analytics')) {
        console.log('Vercel Analytics blocked - using Yandex Metrika instead')
        return // Не показываем ошибку пользователю
      }
      
      if (event.message.includes('runtime.lastError')) {
        console.log('Browser extension error:', event.message)
        return // Не показываем ошибку пользователю
      }
      
      // Для других ошибок можно добавить логирование
      console.error('Unhandled error:', event)
    }

    // Обработка необработанных промисов
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      if (event.reason?.message?.includes('ERR_BLOCKED_BY_CLIENT')) {
        console.log('Promise rejected due to blocked resource')
        return
      }
      
      console.error('Unhandled promise rejection:', event.reason)
    }

    window.addEventListener('error', handleError)
    window.addEventListener('unhandledrejection', handleUnhandledRejection)

    return () => {
      window.removeEventListener('error', handleError)
      window.removeEventListener('unhandledrejection', handleUnhandledRejection)
    }
  }, [])

  return null
}
