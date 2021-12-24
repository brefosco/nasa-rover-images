import React, { useState, useEffect } from "react";
import { getPhotos } from "./api";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import Filters from "./components/Filters";
import PictureList from "./components/PictureList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [shownPictures, setShownPictures] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [page, setPage] = useState(1);

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    const fetchData = async () => {
      setIsLoading(true);
      const photosFromToday = await getPhotos("earth_date", today);
      setShownPictures(photosFromToday.photos);
    };

    fetchData()
      .then(() => {
        setIsLoading(false);
      })
      .catch(console.error);
  }, []);

  const handleSearch = async (
    dateType: string,
    date: string,
    camera?: string,
    page?: number
  ) => {
    setIsLoading(true);
    const newData = await getPhotos(dateType, date, camera, page);
    setShownPictures(newData.photos);
    setPage(newData.page);
    setIsLoading(false);
  };

  return (
    <Container fluid="md" className="App">
      <div>
        <Filters handleSearch={handleSearch} page={page} />
        {isLoading ? (
          <Spinner animation="grow" />
        ) : (
          <PictureList pictures={shownPictures} />
        )}
      </div>
    </Container>
  );
}

export default App;
