import PropTypes from "prop-types";
import { useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";

export default function Search({ setArticles }) {
  const [input, setInput] = useState("");

  const handleInput = (event) => {
    let input = event.target.value.replace(/\s+/g, " ").trim();
    setInput(input);

    const articles = JSON.parse(sessionStorage.getItem("articles"));
    const filteredArticles = articles.filter((e) =>
      e.title.toLowerCase().includes(input.toLowerCase())
    );

    setArticles(filteredArticles);
  };

  return (
    <FloatingLabel controlId="searchInput" label="Search" className="mb-3">
      <Form.Control type="text" placeholder="Search" onChange={handleInput} />
    </FloatingLabel>
  );
}

Search.propTypes = {
  setArticles: PropTypes.func,
};
