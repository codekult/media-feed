export default function Media({ src }: Pick<HTMLImageElement, "src">) {
  function onLoad() {
    // URL.revokeObjectURL(src);
  }

  return (
    <img
      src={src}
      alt="Media"
      onLoad={onLoad}
      style={{ maxWidth: "100%", filter: "grayscale(1)" }}
    />
  );
}
