"use client"

import Image from "next/image"
import { useState } from "react"

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  fill?: boolean
  sizes?: string
  quality?: number
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  fill = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  quality = 85,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        fill={fill}
        sizes={fill ? sizes : undefined}
        quality={quality}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        className={`duration-700 ease-in-out ${
          isLoading ? "scale-105 blur-md grayscale" : "scale-100 blur-0 grayscale-0"
        } ${fill ? "object-cover" : ""}`}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  )
}
