import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
// import { Shoes } from "../Shoes/Shoes";

const ab = [0, 1, 2, 3, 4];
console.log(ab[1]);

export const Home = () => {
  const images = [
    {
      url:
        "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/33201b0e-8971-45eb-b91b-edac41535f5a/air-zoom-pegasus-37-running-shoe-Z7QV8F.jpg",
    },
    {
      url:
        "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/kcjjenjhdfbpm8on4rqs/revolution-5-flyease-running-shoe-Jdfmdm.jpg",
    },
    {
      url:
        "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/tkb1v3fchkv5l4nqrt2m/todos-rn-running-shoe-FzZPPJ.jpg",
    },
    {
      url:
        "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f21ce99a-a0f1-410f-a2ff-c93b27f457b2/react-phantom-run-flyknit-2-running-shoe-Djlst6.jpg",
    },
    {
      url:
        "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/05c38a6c-3059-487f-8143-1b73344fdfbb/react-infinity-run-flyknit-running-shoe-WMtrNz.jpg",
    },
    {
      url:
        "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-be913c2b-6a14-44a1-95e9-043ba3a55b23/air-zoom-structure-22-running-shoe-1XVRql.jpg",
    },
    {
      url:
        "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/71d73792-f98d-4461-9700-32381e1002d7/downshifter-10-running-shoe-QL0NBl.jpg",
    },
    {
      url:
        "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/cf42fe30-7c78-45b5-87bb-8ed11429faec/pegasus-trail-2-trail-running-shoe-ZCfbql.jpg",
    },
  ];
  return (
    <div className="home">
      <div className="imageSlider">
        <div className="text">Our mission is what drives us to do everything possible to expand human potential. We do that by creating groundbreaking sport innovations, by making our products more sustainably, by building a creative and diverse global team and by making a positive impact in communities where we live and work.</div>
        <SimpleImageSlider
          className="imageSliderActual"
          width={400}
          height={500}
          images={images}
        />
      </div>
    </div>
  );
};
