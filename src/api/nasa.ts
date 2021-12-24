import axios from "axios";

const API_KEY = process.env.REACT_APP_NASA_KEY || "DEMO_KEY";

export const getPhotos = async (
  dateType: string,
  date: string,
  camera?: string,
  page = 1
) => {
  const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?${
    dateType === "earth_date" ? `earth_date=${date}` : `sol=${date}`
  }&page=${page}${camera ? `&camera=${camera}` : ""}&api_key=${
    API_KEY
  }`;
  const response = await axios.get(url);
  return { photos: response.data.photos, page: page };
};
