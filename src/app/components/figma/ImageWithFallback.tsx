import React, { useState } from 'react'
import {
  getResponsiveImageSrc,
  isResponsivePictureData,
  type ResponsivePictureData,
} from '@/app/components/ResponsiveImage'

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

type ImageWithFallbackProps = Omit<
  React.ImgHTMLAttributes<HTMLImageElement>,
  'src'
> & {
  src: string | ResponsivePictureData
}

const SOURCE_ORDER = ['avif', 'webp', 'png', 'jpeg', 'jpg']

export function ImageWithFallback(props: ImageWithFallbackProps) {
  const [didError, setDidError] = useState(false)

  const handleError = () => {
    setDidError(true)
  }

  const { src, alt, style, className, ...rest } = props

  const resolvedSrc = getResponsiveImageSrc(src)

  return didError ? (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
      style={style}
    >
      <div className="flex items-center justify-center w-full h-full">
        <img src={ERROR_IMG_SRC} alt="Error loading image" {...rest} data-original-url={resolvedSrc} />
      </div>
    </div>
  ) : isResponsivePictureData(src) ? (
    <picture>
      {Object.entries(src.sources)
        .sort(([left], [right]) => {
          const leftIndex = SOURCE_ORDER.indexOf(left)
          const rightIndex = SOURCE_ORDER.indexOf(right)

          return (
            (leftIndex === -1 ? SOURCE_ORDER.length : leftIndex) -
            (rightIndex === -1 ? SOURCE_ORDER.length : rightIndex)
          )
        })
        .map(([format, srcSet]) => (
          <source key={format} srcSet={srcSet} sizes={rest.sizes} type={`image/${format}`} />
        ))}
      <img
        src={src.img.src}
        alt={alt}
        className={className}
        style={style}
        {...rest}
        width={rest.width ?? src.img.w}
        height={rest.height ?? src.img.h}
        onError={handleError}
      />
    </picture>
  ) : (
    <img src={src} alt={alt} className={className} style={style} {...rest} onError={handleError} />
  )
}
