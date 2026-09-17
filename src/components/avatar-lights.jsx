import { cn } from "@/lib/utils"

/**
 * The headshot with responsive sizing for mobile and desktop.
 */
export function AvatarLights({ lightsOn = false, className }) {
  return (
    <div
      className={cn(
        "pointer-events-none relative size-20 min-[22rem]:size-24 sm:size-36 md:size-40 rounded-full",
        className
      )}
    >
      <div
        className={cn(
          "absolute -inset-3 -z-1 rounded-full blur-lg transition-opacity duration-[1200ms] ease-[cubic-bezier(0.42,0,0.58,1)]",
          "bg-[radial-gradient(circle_at_50%_38%,oklch(0.86_0.12_85_/_0.55),transparent_66%)]",
          lightsOn ? "opacity-100" : "opacity-0"
        )}
        aria-hidden
      />

      <div className="absolute inset-0 overflow-hidden rounded-full bg-muted/40">
        <img
          src="/images/omar.png"
          alt="Mohammad Omar"
          fetchPriority="high"
          className={cn(
            "size-full rounded-full object-cover object-center transition-[filter,transform] duration-[1200ms] ease-[cubic-bezier(0.42,0,0.58,1)]",
            lightsOn
              ? "scale-100 grayscale-0 contrast-100"
              : "scale-[1.01] grayscale-[0.85] contrast-[0.95]"
          )}
        />
      </div>

      <div
        className={cn(
          "absolute inset-0 rounded-full bg-foreground/10 mix-blend-multiply transition-opacity duration-[1200ms] ease-[cubic-bezier(0.42,0,0.58,1)]",
          lightsOn ? "opacity-0" : "opacity-100"
        )}
        aria-hidden
      />

      <div
        className="absolute inset-0 rounded-full border border-foreground/10"
        aria-hidden
      />
    </div>
  )
}
