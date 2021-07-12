// adapted from https://github.com/primer/components/blob/main/src/hooks/useDialog.ts

import { useCallback, useEffect } from 'react'

export function useDialog({
  overlayRef,
  isOpen,
  onDismiss = () => null,
  initialFocusRef,
  closeButtonRef,
}) {
  const onKeyDown = useCallback(
    (e) => e.key === 'Escape' && onDismiss() && e.stopPropagation(),
    [onDismiss]
  )

  const onClickOutside = useCallback(
    (e) => overlayRef.current?.contains(e.target) && onDismiss(),
    [onDismiss, overlayRef]
  )

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', onClickOutside)
      document.addEventListener('keydown', onKeyDown)

      return () => {
        document.removeEventListener('click', onClickOutside)
        document.removeEventListener('keydown', onKeyDown)
      }
    }
  }, [isOpen, onClickOutside, onKeyDown])

  useEffect(() => {
    if (!isOpen) return
    // prevent auto-focus on mobile
    if (window.innerWidth <= 650) return
    if (initialFocusRef?.current) initialFocusRef.current.focus()
  }, [isOpen, initialFocusRef, closeButtonRef])
}
