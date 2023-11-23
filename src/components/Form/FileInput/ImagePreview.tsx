'use client';

import { User } from 'lucide-react';
import { useMemo } from 'react';
import { useFileInput } from './Root';

export function ImagePreview() {
  const { files } = useFileInput();

  const previewURl = useMemo(() => {
    if (files.length === 0) {
      return null;
    }

    return URL.createObjectURL(files[0]);
  }, [files]);

  if (previewURl === null) {
    return (
      <div className="bg-violet-50 h-16 w-16 flex items-center justify-center rounded-full">
        <User className="w-8 h-8 text-violet-500" />
      </div>
    );
  } else {
    return (
      <img
        src={previewURl}
        alt=""
        className="h-16 w-16 rounded-full object-cover"
      />
    );
  }
}
