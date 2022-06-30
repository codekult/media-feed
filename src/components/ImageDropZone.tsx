import { PropsWithChildren } from "react";
import { useDropzone, DropzoneOptions } from "react-dropzone";
import { Box, BoxProps } from "@mui/material";

export default function ImageDropZone({
  children,
  onDrop,
  ...BoxProps
}: PropsWithChildren<Pick<DropzoneOptions, "onDrop"> & BoxProps>) {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      "image/*": [],
    },
  });

  return (
    <Box {...BoxProps} {...getRootProps()}>
      <input type="file" style={{ display: "none" }} {...getInputProps()} />
      {children}
    </Box>
  );
}
