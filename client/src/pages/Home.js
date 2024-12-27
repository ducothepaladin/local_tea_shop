import FoodDisplaySlideHome from "../components/slide/FoodDisplaySlideHome";
import { WelcomeMsg, DeliveryInfo, ContactForService } from "../components/text/TextHome";
import MenuFilterCardHome from "../components/cards/MenuFilterCardHome";

export default function Home() {
  return (
    <>
      <FoodDisplaySlideHome />
      <WelcomeMsg />
      <MenuFilterCardHome />
      <DeliveryInfo />
      <ContactForService />
    </>
  )
}
