import { useCallback, useEffect, useState } from 'react'

interface MessageData {
  type: string
  content?: string
}

function useMessage () {
  const [message, setMessage] = useState<MessageData | null>(null)

  const postMessage = useCallback((type: string, content?: string) => {
    const message: MessageData = {
      type,
      content
    }
    parent.postMessage({ pluginMessage: message }, '*')
  }, [])

  const receiveMessage = useCallback((event: MessageEvent) => {
    if (event.data.pluginMessage) {
      setMessage(event.data.pluginMessage)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('message', receiveMessage)
    return () => {
      window.removeEventListener('message', receiveMessage)
    }
  }, [receiveMessage])

  return {
    postMessage,
    message
  }
}

export default useMessage
