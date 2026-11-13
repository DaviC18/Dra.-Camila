import type { SiteImage } from "@/data/content";
import { cn } from "@/lib/utils";

type Props = {
  image: SiteImage;
  sizes: string;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
};

/** Foto em moldura arredondada; a imagem cobre a moldura. */
export function Photo({ image, sizes, priority = false, className, imgClassName }: Props) {
  return (
    <div className={cn("overflow-hidden rounded-xl bg-brand-soft", className)}>
      <img
        src={image.src}
        srcSet={image.srcSet}
        sizes={sizes}
        width={image.width}
        height={image.height}
        alt={image.alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        className={cn("size-full object-cover", imgClassName)}
      />
    </div>
  );
}
