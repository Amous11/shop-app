import { useEffect, useState } from "react";
import {
  Col,
  Row,
  Button,
  Form,
  InputGroup,
  FloatingLabel,
} from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";

export function Store() {
  const [articles, setArticles] = useState([]);
  const apiString = "https://fakestoreapi.com/products";
  // const categoryFilter = "/category";

  useEffect(() => {
    fetch(apiString)
      .then((res) => res.json())
      .then((json) => {
        setArticles(json);
        localStorage.setItem("articles", JSON.stringify(json));
      });
  }, []);

  const handleInput = (event) => {
    let input = event.target.value.replace(/\s+/g, " ").trim();

    if (!input) {
      const savedArticles = localStorage.getItem("articles");
      if (savedArticles) {
        setArticles(JSON.parse(savedArticles));
      }
    } else {
      const filteredArticles = articles.filter((e) =>
        e.title.toLowerCase().includes(input.toLowerCase())
      );

      setArticles(filteredArticles);
    }
  };

  return (
    <>
      <h1>Store</h1>
      <FloatingLabel controlId="searchInput" label="Search" className="mb-3">
        <Form.Control type="text" placeholder="Search" onChange={handleInput} />
      </FloatingLabel>

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
// search bar (real time), filter, insert. stepper
