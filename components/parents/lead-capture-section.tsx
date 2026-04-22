<div className="grid gap-6 lg:grid-cols-2">
  
  {/* School Route */}
  <div className="flex flex-col justify-between rounded-2xl border border-border bg-secondary/40 p-6 sm:p-8">
    <div>
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
        <School className="h-6 w-6 text-primary" />
      </div>

      <h3 className="text-xl font-semibold text-foreground">
        Bring PATI to Your School
      </h3>

      <p className="mt-3 text-muted-foreground">
        If you’d like your school to offer the programme, we can help you express interest and start that conversation.
      </p>

      <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
        <li>• Lower parent pricing through your school</li>
        <li>• Shared experience with your parent community</li>
        <li>• Helps drive adoption from parents upwards</li>
      </ul>
    </div>

    <Button asChild size="lg" className="mt-6 w-full">
      <Link href="/contact">
        Bring PATI to Your School
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </Button>
  </div>

  {/* Independent Route */}
  <div className="flex flex-col justify-between rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
    <div>
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
        <User className="h-6 w-6 text-primary" />
      </div>

      <h3 className="text-xl font-semibold text-foreground">
        Join Independently
      </h3>

      <p className="mt-3 text-muted-foreground">
        If your school is not yet participating, you can still access the PATI programme independently.
      </p>

      <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
        <li>• Full access to the parent programme</li>
        <li>• Live sessions plus recordings</li>
        <li>• Independent parent price: €79.95</li>
      </ul>
    </div>

    <Button asChild size="lg" variant="outline" className="mt-6 w-full border-primary/30 hover:bg-primary/10">
      <Link href="/contact">
        Join Independently
      </Link>
    </Button>
  </div>

</div>
