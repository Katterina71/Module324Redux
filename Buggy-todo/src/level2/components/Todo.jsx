//export function
export default function Todo({ item, completeTodo, deleteTodo }) {
  return (
    // class="input" not exist
    <li style={{ listStyle: "none" }} > 
      <input
        type="checkbox"
        checked={item.completed}
        //wrong function syntaxes
        onChange={() => completeTodo(item.id)}
      />
      {item.text}
      <button onClick={() => deleteTodo(item.id)}>x</button>
    </li>
  );
}



