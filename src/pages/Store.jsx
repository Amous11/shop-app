import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";

export function Store() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=25")
      .then((res) => res.json())
      .then((json) => {
        setArticles(json);
        localStorage.setItem("articles", JSON.stringify(json));
      });
  }, []);

  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {articles.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
