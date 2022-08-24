import Form from "react-bootstrap/Form";
import "./home/homestyle.css";

const SearchInput = ({ search, handleChange, type, searched, isLoading }) => {
  return (
    <>
      <Form className="container-home p-4 mb-4 negative-margin">
        <Form.Group>
          <Form.Label>
            <h2 className="display-5">
              {window.location.hash.slice(2).toUpperCase()} Browser
            </h2>
          </Form.Label>
          <Form.Control
            placeholder={`Enter a ${type}`}
            value={search}
            onChange={handleChange}
            className="input"
          />
          <Form.Text
            className={
              search !== "" && searched.length === 0
                ? " ms-2 text-danger fw-bolder"
                : searched.length > 0
                ? "text-success ms-2 fw-bolder"
                : "text-muted ms-2 fw-bolder"
            }
          >
            {search === ""
              ? `Search ${
                  type === "anime" ? "an " + type : "a " + type
                } with a word
              in his ${type === "anime" || type === "manga" ? "title" : "name"}`
              : search.length < 4
              ? "3 letters or more are needed"
              : isLoading === true
              ? "I searching..."
              : searched.length > 0
              ? "Current results"
              : "Try with another search..."}
          </Form.Text>
        </Form.Group>
      </Form>
    </>
  );
};

export default SearchInput;
