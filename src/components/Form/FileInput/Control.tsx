'use client';

import { ChangeEvent, ComponentProps } from 'react';
import { useFileInput } from './Root';

type ControlProps = ComponentProps<'input'>;

export function Control({ multiple = false, ...props }: ControlProps) {
  const { id, onFilesSelected } = useFileInput();

  function handleFilesSelected(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files?.length) {
      return;
    }

    const files = Array.from(e.target.files); // Transforma a FileList em Array

    onFilesSelected(files, multiple);
  }

  return (
    <input
      id={id}
      type="file"
      className="sr-only"
      onChange={handleFilesSelected}
      multiple={multiple}
      {...props}
    />
  );
}
