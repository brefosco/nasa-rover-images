import React from "react";
import PictureList from "./PictureList";
// import { shallow } from 'enzyme';

const mockData = {
  pictures: [
    {
      id: 1,
      earth_date: "2019-01-01",
      img_src: "https://localhost/image.jpg",
      camera: {
        id: 1,
        name: "FHAZ",
        rover_id: 1,
        full_name: "Front Hazard Avoidance Camera",
      },
      rover: {
        id: 1,
        name: "Curiosity",
        status: "active",
        landing_date: "2012-08-06",
        launch_date: "2011-11-26",
      },
    },
  ],
};

describe("Testing PictureList Component", () => {});
