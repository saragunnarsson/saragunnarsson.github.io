import type { ImgHTMLAttributes } from "react";

export type ResponsivePictureData = {
  sources: Record<string, string>;
  img: {
    src: string;
    w: number;
    h: number;
  };
};

type ResponsiveImageProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  "src" | "srcSet" | "width" | "height"
> & {
  image: ResponsivePictureData;
  sizes: string;
  width?: number;
  height?: number;
};

const SOURCE_ORDER = ["avif", "webp", "png", "jpeg", "jpg"];

export function isResponsivePictureData(
  value: string | ResponsivePictureData,
): value is ResponsivePictureData {
  return typeof value !== "string";
}

export function getResponsiveImageSrc(
  value: string | ResponsivePictureData,
): string {
  return isResponsivePictureData(value) ? value.img.src : value;
}

function getPreferredSourceEntry(image: ResponsivePictureData) {
  const entries = Object.entries(image.sources).sort(([left], [right]) => {
    const leftIndex = SOURCE_ORDER.indexOf(left);
    const rightIndex = SOURCE_ORDER.indexOf(right);

    return (
      (leftIndex === -1 ? SOURCE_ORDER.length : leftIndex) -
      (rightIndex === -1 ? SOURCE_ORDER.length : rightIndex)
    );
  });

  return entries[0];
}

export function getPreferredResponsiveImageSource(
  value: string | ResponsivePictureData,
): { href: string; type?: string } {
  if (!isResponsivePictureData(value)) {
    return { href: value };
  }

  const preferredEntry = getPreferredSourceEntry(value);
  if (!preferredEntry) {
    return { href: value.img.src };
  }

  const [format, srcSet] = preferredEntry;
  const firstCandidate = srcSet
    .split(",")
    .map((candidate) => candidate.trim().split(/\s+/)[0])
    .find(Boolean);

  return {
    href: firstCandidate ?? value.img.src,
    type: `image/${format}`,
  };
}

export function ResponsiveImage({
  image,
  sizes,
  alt,
  width,
  height,
  decoding = "async",
  ...imgProps
}: ResponsiveImageProps) {
  const sources = Object.entries(image.sources).sort(([left], [right]) => {
    const leftIndex = SOURCE_ORDER.indexOf(left);
    const rightIndex = SOURCE_ORDER.indexOf(right);

    return (
      (leftIndex === -1 ? SOURCE_ORDER.length : leftIndex) -
      (rightIndex === -1 ? SOURCE_ORDER.length : rightIndex)
    );
  });

  return (
    <picture>
      {sources.map(([format, srcSet]) => (
        <source
          key={format}
          srcSet={srcSet}
          sizes={sizes}
          type={`image/${format}`}
        />
      ))}
      <img
        src={image.img.src}
        alt={alt}
        width={width ?? image.img.w}
        height={height ?? image.img.h}
        decoding={decoding}
        {...imgProps}
      />
    </picture>
  );
}
