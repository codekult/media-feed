interface MediaProps {
  src: string;
  shouldRevokeObjectURL?: boolean;
}

export default function Media({ src, shouldRevokeObjectURL }: MediaProps) {
  return (
    <img
      src={src}
      alt="Media"
      onLoad={() => {
        !!shouldRevokeObjectURL && URL.revokeObjectURL(src);
      }}
      style={{ maxWidth: "100%", filter: "grayscale(1)" }}
    />
  );
}
