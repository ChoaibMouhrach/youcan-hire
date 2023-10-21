import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import Nav from "@/components/shared/nav";
import Footer from "@/components/shared/footer";
import Work from "@/components/home/work";
import Hero from "@/components/home/hero";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <main className={cn(inter.className, "")}>
      <Nav />
      <div className="flex flex-col gap-16">
        <Hero />
        <Work />
        <Footer />
      </div>
    </main>
  );
}
