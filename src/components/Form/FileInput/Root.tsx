'use client';

import {
  ComponentProps,
  createContext,
  useContext,
  useId,
  useState,
} from 'react';

export type RootProps = ComponentProps<'div'>;

type fileInputContextType = {
  id: string;
  files: File[];
  onFilesSetected: (files: File[], multiple: boolean) => void;
};

const FileInputContext = createContext({} as fileInputContextType);

export function Root(props: RootProps) {
  const id = useId();
  const [files, setFiles] = useState<File[]>([]);

  function onFilesSetected(files: File[], multiple: boolean) {
    if (multiple) {
      setFiles((state) => [...state, ...files]);
    } else {
      setFiles(files);
    }
  }

  return (
    <FileInputContext.Provider value={{ id, files, onFilesSetected }}>
      <div {...props} />
    </FileInputContext.Provider>
  );
}

export const useFileInput = () => useContext(FileInputContext);
