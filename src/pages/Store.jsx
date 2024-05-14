import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import Search from "../components/Search";

export function Store() {
  const [articles, setArticles] = useState([]);
  const apiString = "https://fakestoreapi.com/products";
  // const categoryFilter = "/category";

  useEffect(() => {
    fetch(apiString)
      .then((res) => res.json())
      .then((json) => {
        setArticles(json);
        sessionStorage.setItem("articles", JSON.stringify(json));
      });
  }, []);

  return (
    <>
      <h1>Store</h1>
      <Search setArticles={setArticles} />

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
