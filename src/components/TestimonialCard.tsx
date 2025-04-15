import * as React from "react"

import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"

type TestimonialProps = {
  name: string
  position: string
  quote: string
}

export function TestimonialCard({ name, position, quote }: TestimonialProps) {
  return (
    <Card className="w-[350px] flex flex-col justify-between h-full">
      <CardContent className="pt-6 pb-4">
        <p className="text-sm font-medium leading-relaxed text-muted-foreground">
          “{quote}”
        </p>
      </CardContent>
      <CardFooter className="flex flex-col items-end text-right gap-0 pt-0">
        <CardTitle className="text-base font-semibold">{name}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          {position}
        </CardDescription>
      </CardFooter>
    </Card>
  )
}
