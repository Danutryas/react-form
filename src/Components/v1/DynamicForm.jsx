import { useState } from "react";


const DynamicForm = () => {
  const [inputField, setInputField] = useState([
    // how many default inputField will display
    { firstName: "", lastName: "" }, //1, index = 0
    { firstName: "", lastName: "" }, //2, index = 1
    { firstName: "", lastName: "" }, //3, index = 2
  ]);

  //   const submitButtonHandler = (e) => {
  // };
  const inputHandler = (i, e) => {
    // add input value to state
    const values = [...inputField];
    values[i][e.target.name] = e.target.value;
    setInputField(values);
  };
  const addButtonHandler = (e) => {
    // add more input field
    e.preventDefault();
    setInputField([
      ...inputField,
      {
        firstName: "",
        lastName: "",
      },
    ]);
  };
  const [names, setNames] = useState([]);
  const removeButtonHandler = (index, e) => {
    //remove specific input inputField index
    e.preventDefault();
    const value = [...inputField];
    const valueLength = value.length;
    if (valueLength > 3) {
      value.splice(index, 1);
      setInputField(value);
    }
  };
  const submitButtonHandler = (e) => {
    e.preventDefault();
    // submit is unnecessary because state value already been stored
    // this function can be used if you need to store that input field state to another state
    // or you can add functionallity after the button clicked
    setNames([...names, ...inputField]);

    setInputField([
      {
        firstName: "",
        lastName: "",
      },
      {
        firstName: "",
        lastName: "",
      },
      {
        firstName: "",
        lastName: "",
      },
    ]);
  };
  return (
    <div className="form">
      <h1 className="title">Dynamic Form</h1>
      <div className="form-card">
        {inputField.map((input, i) => {
          return (
            <div key={i}>
              <input
                type="text"
                name="firstName"
                value={input.firstName}
                onChange={(e) => inputHandler(i, e)}
              />
              <input
                type="text"
                name="lastName"
                value={input.lastName}
                onChange={(e) => inputHandler(i, e)}
              />
              <button onClick={addButtonHandler}>+</button>
              <button onClick={(e) => removeButtonHandler(i, e)}>-</button>
            </div>
          );
        })}
        <button onClick={submitButtonHandler}>Submit</button>
      </div>
      <div className="form-list">
        {typeof names === "undifined"
          ? ""
          : names.map((name, i) => (
              <div className="names" key={i}>
                <p className="fn">{name.firstName}</p>
                <p className="ln">{name.lastName}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default DynamicForm;
