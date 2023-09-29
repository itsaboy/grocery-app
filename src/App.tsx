import { useState, useEffect } from "react";
import { PageHeader } from "./components/PageHeader";
import { PageMain } from "./components/PageMain";

type Props = {
  newItem: string;
  handleNewInput: (event: any) => void;
  handleSubmit: () => void;
  handleDelete: (id: string) => void;
};

type Items = string[];

type Item = {
  id: string;
  text: string;
};

const App = () => {
  const [items, setItems] = useState(() => {
    const savedData = localStorage.getItem("GROCERY_ITEMS");
    if (savedData == null) {
      return [];
    } else {
      return JSON.parse(savedData);
    }
  });

  const [newItem, setNewItem] = useState("");

  useEffect(() => {
    localStorage.setItem("GROCERY_ITEMS", JSON.stringify(items as Items));
  }, [items as Items]);

  const handleNewItem = (event: any) => {
    setNewItem(event.target.value);
  };

  const handleSubmit = () => {
    setItems((currentItems: Item[]) => {
      return [
        ...currentItems,
        { id: crypto.randomUUID().toString(), text: newItem },
      ];
    });
    setNewItem("");
  };

  const handleDelete = (id: string) => {
    setItems((currentItems: Item[]) => {
      return currentItems.filter((item) => item.id !== id);
    });
  };

  return (
    <>
      <div className="body-container">
        <PageHeader
          newItem={newItem}
          handleNewItem={handleNewItem}
          handleSubmit={handleSubmit}
        />
        <PageMain items={items} handleDelete={handleDelete} />
      </div>
    </>
  );
};

export default App;
