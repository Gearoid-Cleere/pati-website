export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary py-24 sm:py-32">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-secondary">
            About Us
          </p>
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
            About the Parenting & Technology Institute
          </h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-primary-foreground/80 sm:text-xl">
            Supporting families, schools, and organisations to navigate childhood in a digital world.
          </p>
        </div>
      </div>
    </section>
  )
}
