'use client';

import {
  ComponentProps,
  createContext,
  useContext,
  useId,
  useState,
} from 'react';

type RootProps = ComponentProps<'div'>;

type FileInputContextType = {
  id: string;
  files: File[];
  onFilesSelected: (files: File[], multiple: boolean) => void;
};

const FileInputContext = createContext({} as FileInputContextType);

export function Root({ ...props }: RootProps) {
  const id = useId(); // Cria um id único e persiste esse id entre as renderizações do componente
  const [files, setFiles] = useState<File[]>([]);

  function handleSelectedFiles(files: File[], multiple: boolean) {
    if (multiple) {
      setFiles((prev) => [...prev, ...files]);
    } else {
      setFiles(files);
    }
  }

  return (
    <FileInputContext.Provider
      value={{ id, files, onFilesSelected: handleSelectedFiles }}
    >
      <div {...props} />
    </FileInputContext.Provider>
  );
}

export const useFileInput = () => useContext(FileInputContext);
