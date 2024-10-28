import Featured from "@/components/Featured"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import Recent from "@/components/Recent"

export default function Home(){
  return(<div>
    <Navbar />
    <Hero />
    <Recent />
    <Featured />
    <Footer />
    </div>
  )
}