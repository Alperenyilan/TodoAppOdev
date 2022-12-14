import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../redux/todos/services";
import Todo from "./Todo";
import TodoListError from "./TodoListError";
import TodoListLoading from "./TodoListLoading";

function Todos() {
  const statusGetTodos = useSelector((state) => state.todos.statusGetTodos);
  const todos = useSelector((state) => state.todos.todoItems);

  const dispatch = useDispatch();

  useEffect(() => {
    if (statusGetTodos === "idle") {
      dispatch(getTodos());
    }
  }, [dispatch, statusGetTodos]);

  const todosListEmpty = todos.length === 0 && statusGetTodos === "Başarılı";
  const todosListNotEmpty = todos.length !== 0 && statusGetTodos === "Başarılı";

  return (
    <div className="todosContainer">
      <h1 className="todosTitle">Todo List</h1>
      {statusGetTodos === "failed" && <TodoListError />}
      {statusGetTodos === "loading" && <TodoListLoading />}
      {todosListEmpty && (
        <div className="todoListEmpty">Lütfen yapılacakları ekleyin.</div>
      )}
      {todosListNotEmpty && (
        <div className="todoListContent">
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Todos;
