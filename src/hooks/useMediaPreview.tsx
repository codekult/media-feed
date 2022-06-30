import { PropsWithChildren, createContext, useState, useContext } from "react";

export type MediaPreviewContextType = {
  mediaPreview: File | null;
  setMediaPreview: React.Dispatch<React.SetStateAction<File | null>>;
};

export const MediaPreviewContext = createContext<MediaPreviewContextType>(
  null!
);

export function MediaPreviewProvider(props: PropsWithChildren<{}>) {
  const [mediaPreview, setMediaPreview] = useState<File | null>(null);

  return (
    <MediaPreviewContext.Provider value={{ mediaPreview, setMediaPreview }}>
      {props.children}
    </MediaPreviewContext.Provider>
  );
}

export function useMediaPreview() {
  return useContext(MediaPreviewContext);
}
