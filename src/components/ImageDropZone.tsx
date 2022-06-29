import { PropsWithChildren } from "react";
import { useDropzone, DropzoneOptions } from "react-dropzone";

export default function ImageDropZone({
  children,
  onDrop,
}: PropsWithChildren<Pick<DropzoneOptions, "onDrop">>) {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      "image/*": [],
    },
  });

  return (
    <div {...getRootProps()}>
      <input type="file" style={{ display: "none" }} {...getInputProps()} />
      {children}
    </div>
  );
}
