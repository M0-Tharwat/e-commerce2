

import Slider from "./_components/MainSlider";
import Brslider from "./brands/_components/Brslider";
import Catslider from "./categories/_components/Catslider";
import FeaturedProducts from "./products/_components/FeaturedProducts";



export default function Home() {
  return (
   <>
   <Slider/>
   <Catslider/>
   <Brslider/>
   
   <FeaturedProducts/>
   </>
  );
}
