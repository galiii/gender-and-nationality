import React from "react";

const AddNameForm = ({ addTodos }: { addTodos: (text: string) => void }) => {
  const [todo, setTodo] = React.useState<string>("");

  const submit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (!todo) {
      alert("Please enter a todo");
    } else {
      addTodos(todo);
      setTodo("");
    }
  };

  return (
    <div className="AddTodo">
      <form>
        <input
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button
          onClick={(e) => {
            console.log(e);
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddNameForm;
