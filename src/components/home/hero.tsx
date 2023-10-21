import Image from "next/image"
import { Button } from "../ui/button"
import heroImage from "@/../public/heroImage.png";

const Hero = () => {
  return (
    <div className="min-h-[500px] py-16 bg-primary/10">
      <div className="container h-full grid lg:grid-cols-2 gap-16 lg:items-center">
        <div className="flex flex-col items-center lg:items-start gap-6">
          <div className="flex flex-col gap-4 items-center text-center lg:items-start lg:text-start">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl">
              <p className="inline text-primary">Discover</p> Your Future at
              YouCan
            </h1>
            <p className="max-w-sm text-muted-foreground">
              Your Gateway to Career Excellence - Ignite Your Ambitions and
              Achieve Success.
            </p>
          </div>
          <div>
            <Button size="lg">Join Us</Button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <Image src={heroImage} alt="hero image" />
        </div>
      </div>
    </div>
  )
}

export default Hero
