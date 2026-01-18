// app/page.tsx
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen w-screen bg-background text-foreground overflow-hidden">
      <div className="grid h-full w-full grid-cols-1 lg:grid-cols-2">
        <div className="flex h-full items-center justify-center lg:justify-start lg:px-12 xl:px-16 bg-linear-to-br from-background to-muted/30">
          <h1
            className="
              font-monoton
              tracking-tight leading-none
              text-center lg:text-left
              bg-clip-text text-transparent
              bg-[linear-gradient(to_right,var(--color-golden-orange),var(--color-gold),var(--color-lipstick-red),var(--color-gold),var(--color-golden-orange))]
              bg-size-[300%_300%]
              animate-gradient-shift
            "
          >
            <span className="block sm:text-4xl xl:text-9xl">Celsius</span>
            <span className="whitespace-nowrap">
              <small className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-6xl">
                is
              </small>
              <span className="pl-2 xl:pl-4 sm:text-3xl xl:text-7xl">
                awesome
              </span>
            </span>
          </h1>
        </div>

        <div className="grid h-full grid-rows-[1fr_1fr] gap-0 lg:gap-0">
          <div
            className="flex h-full items-center bg-linear-to-r from-golden-orange via-gold to-lipstick-red
                hover:from-golden-orange hover:via-gold hover:to-lipstick-red/90
                text-black font-medium
                transition-all duration-300 justify-center border-b border-border lg:border-r lg:border-b-0"
          >
            <Button
              size="sm"
              className="text-sm p-3 rounded-none bg-black text-white"
              asChild
            >
              <Link href="/subscriptions">
                <Rocket className="mr-0 h-6 w-6 text-white" />
                Get Started
              </Link>
            </Button>
          </div>

          <div className="flex h-full items-center justify-center bg-muted/30 p-8 text-center relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(
                    315deg,
                    #e6e6e6ff 0px,
                    #ffffffff 1px,
                    transparent 1px,
                    transparent 10px
                  )
                `,
                backgroundSize: "10px 10px",
              }}
            />

            <div className="max-w-md space-y-6 relative z-10">
              <h3 className="text-xl text-foreground/90">
                Why{" "}
                <span className="text-4xl text-golden-orange font-monoton">
                  Celsius
                </span>{" "}
                Stands Out
              </h3>
              <p className="text-sm sm:text-sm text-muted-foreground leading-relaxed">
                Lightning-fast performance • Stunning design • Unmatched
                developer experience • Built for the modern web in 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
