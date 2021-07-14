// attempts to fulfill those: https://www.w3.org/TR/wai-aria-practices-1.1/#dialog_modal
// great talk about accessible dialogs: https://www.twitch.tv/videos/1085511007

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
    if (initialFocusRef?.current) initialFocusRef.current.focus()
  }, [isOpen, initialFocusRef, closeButtonRef])
}
