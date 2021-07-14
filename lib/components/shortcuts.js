import { useMemo, useEffect } from 'react'
import { useRouter } from 'next/router'
import keybindings from '@utils/tinykeys'

function createShortcuts() {
  const router = useRouter()

  const keymap = useMemo(() => {
    return {
      a: () => router.push('/about'),
      b: () => router.push('/blog'),
      p: () => router.push('/projects'),
      s: () => router.push('/snippets'),
      h: () => router.push('/'),
    }
  }, [router])

  useEffect(() => {
    const unsubs = [keybindings(window, keymap, { ignoreFocus: true })]
    return () => {
      unsubs.forEach((unsub) => unsub())
    }
  }, [keymap])
}

export const useShortcuts = () => createShortcuts()
