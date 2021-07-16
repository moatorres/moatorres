import React, { Fragment, useRef } from 'react'

import Overlay from './overlay'
import DialogBase from './dialog-base'
import DialogHeader from './dialog-header'

import { useDialog } from './use-dialog'

const Dialog = ({
  children,
  onDismiss = () => null,
  isOpen,
  initialFocusRef,
  ...props
}) => {
  const overlayRef = useRef(null)
  const closeButtonRef = useRef(null)

  useDialog({
    onDismiss,
    isOpen,
    initialFocusRef,
    closeButtonRef,
    overlayRef,
  })

  return isOpen ? (
    <Fragment>
      <Overlay ref={overlayRef} />
      <DialogBase {...props}>
        {children}
        <button
          className="button-close"
          ref={closeButtonRef}
          onClick={onDismiss}>
          x
        </button>
      </DialogBase>
      <style jsx>{`
        .button-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          border: none;
          cursor: pointer;
          background: transparent;
        }
      `}</style>
    </Fragment>
  ) : null
}

Dialog.displayName = 'Dialog'

Dialog.Header = DialogHeader

export default Dialog
