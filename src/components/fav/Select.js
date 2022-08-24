import Form from "react-bootstrap/Form";

const Select = ({ changeSelected }) => {
  return (
    <div className="mb-4 ">
      <Form.Select onChange={(e) => changeSelected(e.target.value)}>
        <option value={""}>-----Select list----</option>
        <option value={"anime"}>Animes List</option>
        <option value={"manga"}>Mangas List</option>
        <option value={"character"}>Characters List</option>
        <option value={"person"}>Persons List</option>
      </Form.Select>
    </div>
  );
};

export default Select;
