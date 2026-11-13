import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center gap-2 rounded-full border font-sans font-semibold whitespace-nowrap select-none outline-none transition-[background-color,border-color,color,box-shadow,translate] duration-200 ease-out-quart focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand motion-safe:hover:-translate-y-px motion-safe:active:translate-y-px disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-brand text-on-ink shadow-sm hover:bg-brand-strong hover:shadow-md",
        whatsapp:
          "border-transparent bg-whatsapp text-white shadow-sm hover:bg-whatsapp-strong hover:shadow-md",
        outline:
          "border-brand/35 bg-surface text-brand-strong hover:border-brand hover:bg-brand-soft",
        "outline-inverse":
          "border-on-ink/35 bg-transparent text-on-ink hover:border-on-ink hover:bg-on-ink/10",
        secondary: "border-transparent bg-brand-soft text-brand-strong hover:bg-[color-mix(in_oklab,var(--color-brand-soft),var(--color-brand)_10%)]",
        ghost: "border-transparent text-ink hover:bg-brand-soft hover:text-brand-strong",
        link: "border-transparent rounded-none px-0 text-brand underline-offset-4 hover:underline motion-safe:hover:translate-y-0",
      },
      size: {
        default: "h-12 px-6 text-small",
        sm: "h-11 px-4 text-label",
        lg: "h-14 px-7 text-body",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
