import Image from "next/image"

export default function Hero() {
  return (
    <div className="min-h-screen bg-white container mx-auto px-4 py-12 md:py-20">
      <div className="container mx-auto px-4 py-12 md:py-20">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Intelligent Homes for an Intelligent Future
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Experience ultimate in home comfort, convenience, and control with our smart home solutions.
          </p>

        </div>

        {/* App Screenshots */}
        <div className="relative w-full max-w-6xl mx-auto aspect-[16/9]">
          <Image
            src="/hero.png"
            alt="Smart home app interface showing multiple screens with features like energy monitoring, device control, and automation"
            fill
            priority
            className="object-contain"
          />
        </div>
      </div>
    </div>
  )
}

