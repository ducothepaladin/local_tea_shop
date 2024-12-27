import { Link } from "react-router-dom";
import deliveryPic from '../../assets/img/show/delivery.webp';
import serveFoodPic from '../../assets/img/show/serving-food.webp';

export const ContactForService = () => {
  return (
    <div className="lg:flex md:flex lg:container lg:mx-auto mb-4 w-full lg:h-[30rem] justify-center gap-x-8">
      <div className="w-1/2 hidden lg:flex md:flex justify-center">
      <img className="object-contain" src={serveFoodPic} alt="delivery-pic" />
      </div>
      <div className="mx-5 lg:w-1/2 md:w-1/2 lg:m-0 pb-8">
      <h2 className="text-3xl lg:text-5xl lg:mb-5 font-bold mb-2"><span className="text-color2-600">Contact Us</span><br></br> For More Service</h2>
      <p className="py-3 text-start lg:text-2xl">Planning a event or a party? Let us handle the breakfast serve! Whether it’s a corporate meeting, family gathering, or special celebration, we offer catering options to make your mornings stress-free and delicious.</p>
      <p className="text-2xl lg:text-3xl font-sans mb-5 lg:mb-9">Reach out at our chatbox for more detail.</p>
      <Link to='/chat/admin' className="px-4 py-3 mb-5 lg:text-2xl lg:px-6 lg:py-4 rounded-md text-white bg-color1-600">Chat with us</Link>
    </div>
    </div>
  );
};

export const DeliveryInfo = () => {
  return (
    <div className="lg:flex md:flex flex-row-reverse lg:md:container lg:mx-auto mb-4 w-full lg:h-[30rem] justify-center gap-x-8">
      <div className="w-1/2 hidden lg:flex md:flex justify-center">
      <img className="object-contain" src={deliveryPic} alt="delivery-pic" />
      </div>
      <div className="p-5 mx-5 lg:w-1/2 md:w-1/2 lg:m-0 mb-5 border md:border-0 lg:border-0 rounded-lg">
      <h2 className="text-3xl lg:text-5xl lg:mb-5 font-bold text-color2-600 mb-2">
        Free Delivery Service
      </h2>
      <p className="text-start lg:text-2xl">
        Craving a hearty breakfast without leaving your home? We've got you
        covered! Enjoy freshly prepared breakfast favorites delivered straight
        to your door.<br></br>
        <br></br>
        <span className="font-bold">Delivery Hours :</span> 6 AM - 9AM<br></br>
        <br></br>
        <span className="font-bold">Service Areas :</span> Zee Gone Quater
      </p>
    </div>
    </div>
  );
};

export const WelcomeMsg = () => {
  return (
    <div>
      <p className="text-3xl lg:text-8xl font-serif text-center px-10 font-bold">
        <span className="text-color2-600">Welcome</span> to our tea shop
      </p>
      <p className="p-2 px-10 mb-4 lg:text-2xl text-center">
        Let us serve you breakfast! Fresh and healthy food to start your day
        with comfort and energy.{" "}
      </p>
      <div className="flex justify-center">
        <Link
          to="/shop"
          className="px-4 py-3 lg:px-12 lg:py-5 lg:text-3xl hover:bg-color2-400 bg-color2-600 rounded-full text-white"
        >
          Make an order
        </Link>
      </div>
    </div>
  );
};

export default function TextHome() {
  return <div>TextHome</div>;
}
