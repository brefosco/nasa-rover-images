import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Pagination from "react-bootstrap/Pagination";

interface IProps {
  handleSearch: any;
  page: number;
}

function Filters(props: IProps) {
  const { handleSearch, page } = props;
  const cameras = [
    "",
    "FHAZ",
    "RHAZ",
    "MAST",
    "CHEMCAM",
    "MAHLI",
    "MARDI",
    "NAVCAM",
    "PANCAM",
    "MINITES",
  ];
  const [cameraToSearch, setCameraToSearch] = useState<string | undefined>();
  const [searchBy, setSearchBy] = useState<string>("earth_date");
  const [dateToSearch, setDateToSearch] = useState<string | undefined>(
    new Date().toISOString().split("T")[0]
  );

  const searchTypes = ["earth_date", "sol"];

  return (
    <div className="m-3">
      <Form>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Date</Form.Label>
              <select
                onChange={(e) => {
                  setSearchBy(e.target.value);
                }}
                className="form-select form-control mb-3"
              >
                {searchTypes.map((searchType: string, key: number) => (
                  <option key={key} value={searchType}>
                    {searchType}
                  </option>
                ))}
              </select>
              {searchBy === "earth_date" ? (
                <input
                  style={{ width: "100%" }}
                  onChange={(date) => {
                    setDateToSearch(date.target.value);
                  }}
                  className="p-1"
                  required
                  value={dateToSearch}
                  type="date"
                />
              ) : (
                <>
                  <Form.Control
                    type="number"
                    value={dateToSearch}
                    required
                    onChange={(e) => {
                      setDateToSearch(e.target.value);
                    }}
                    placeholder="Sol"
                  />
                </>
              )}
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Camera</Form.Label>
              <select
                onChange={(e) => {
                  setCameraToSearch(e.target.value);
                }}
                className="form-select form-control"
              >
                {cameras.map((camera, key) => (
                  <option key={key} value={camera}>
                    {camera}
                  </option>
                ))}
              </select>
            </Form.Group>
            <Button
              className="mt-3"
              onClick={() => {
                handleSearch(searchBy, dateToSearch, cameraToSearch);
              }}
              // size="lg"
              style={{ width: "100%" }}
            >
              Search
            </Button>
          </Col>
        </Row>
      </Form>
      <br />
      <Row>
        <Col>
          <Pagination>
            <Pagination.Prev
              onClick={() => {
                page > 1 &&
                  handleSearch(
                    searchBy,
                    dateToSearch,
                    cameraToSearch,
                    page - 1
                  );
              }}
            />
            <Pagination.Item>{page}</Pagination.Item>
            <Pagination.Next
              onClick={() => {
                handleSearch(searchBy, dateToSearch, cameraToSearch, page + 1);
              }}
            />
          </Pagination>
        </Col>
      </Row>
    </div>
  );
}

export default Filters;
