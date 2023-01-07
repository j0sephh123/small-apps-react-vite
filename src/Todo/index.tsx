// Inspiration https://js-beginners.github.io/todo-list-project-2/#
import { useState } from "react";
import "../todo.css";
import Create from "./Create";
import Item from "./Item";

type ItemType = {
  id: number;
  title: string;
};

export default function Todo() {
  const [items, setItems] = useState<ItemType[]>([]);
  const handleCreate = (title: string) => {
    const item: ItemType = {
      id: new Date().getTime(),
      title,
    };
    setItems((prevItems) => [item, ...prevItems]);
  };

  console.log(new Date().getTime());

  return (
    <div className="todo">
      <Create onCreate={handleCreate} />
      {items.map((item) => (
        <Item key={item.id} />
      ))}
    </div>
  );
}
