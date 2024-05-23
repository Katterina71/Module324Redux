import Todo from "./Todo";

function TodoList({ todos, listType, completeTodo, deleteTodo }) {
  // misspelling todos.filter
  let filteredTodos = todos.filter((item) => {
    if (listType === "all") {
      return true;
    } else if (listType === "complete") {
      // if (item.completed === true) {
        return item.completed =true;
      // }
    } else {
      // if (item.completed === false) {
        return item.completed = false; // return wrong
      }
    })
    // return false;
  // });

  return (
    <ul>
      {filteredTodos.map((item) => (
        <Todo
        // miss item id
          key = {item.id}
          item={item}
          completeTodo={completeTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
