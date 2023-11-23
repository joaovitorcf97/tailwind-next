'use client';

import { ChangeEvent, ComponentProps } from 'react';
import { useFileInput } from './Root';

export type controlProps = ComponentProps<'input'>;

export function Control({ multiple = false, ...props }: controlProps) {
  const { id, onFilesSetected } = useFileInput();

  function handleFilesSelected(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) {
      return;
    }

    const files = Array.from(event.target.files);

    onFilesSetected(files, multiple);
  }

  return (
    <input
      type="file"
      className="sr-only"
      id={id}
      onChange={handleFilesSelected}
      multiple={multiple}
      {...props}
    />
  );
}
