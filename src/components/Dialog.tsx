import { useRef } from 'react'
import Button from './Button';

function useDialog() {
  const ref = useRef<HTMLDialogElement>(null);

  function open() {
    if (!ref) return;
    ref.current?.showModal();
  }

  function close() {
    if (!ref) return;
    ref.current?.close();
  }

  return { ref, open, close };
}

function Dialog() {

  const dialog = useDialog();

  return (
    <>
    <dialog
        className="m-auto p-2 w-4/5 rounded"
        ref={dialog.ref}
      >
        <p>Hello</p>
        <button onClick={dialog.close}>x</button>
      </dialog>

      <Button onClick={dialog.open}>popup</Button>
    </>
  )
}

export default Dialog