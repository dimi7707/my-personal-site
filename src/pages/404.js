import * as React from "react";
import mainImage from '../images/image-404.jpg';

const NotFoundPage = () => {

  console.log(mainImage);

  return (
    <div className="container mx-auto">
      <img src={mainImage} alt="404" />
      <div className="text-center p-8">
        <a href="/" className="rounded-lg rounded-xl border-4 border-indigo-800 py-4 px-6 hover:text-white hover:bg-indigo-800">
          Back to home
        </a>
      </div>
    </div>
  )
}

export default NotFoundPage;
