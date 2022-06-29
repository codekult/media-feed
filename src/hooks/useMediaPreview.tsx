import { PropsWithChildren, createContext, useState, useContext } from "react";

export type MediaPreviewType = {
  mediaPreview: string | null;
  setMediaPreview: React.Dispatch<React.SetStateAction<string | null>>;
};

export const MediaPreviewContext = createContext<MediaPreviewType>(null!);

export function MediaPreviewProvider(props: PropsWithChildren<{}>) {
  const [mediaPreview, setMediaPreview] = useState<string | null>(null);

  return (
    <MediaPreviewContext.Provider value={{ mediaPreview, setMediaPreview }}>
      {props.children}
    </MediaPreviewContext.Provider>
  );
}

export function useMediaPreview() {
  return useContext(MediaPreviewContext);
}
