import { ListItem } from "./ListItem";

type Props = {
  items: any;
  handleDelete: (id: string) => void;
};


export const PageMain = ({ items, handleDelete }: Props) => {
  return (
    <main className="bg-gradient-to-b from-blue-100 to-blue-200">
      <div className="main-container">
        <h2 className="text-blue-950 text-4xl font-semibold">Items</h2>
        <ul className="text-blue-900 text-2xl">
          <div className="items-container">
            {items.length === 0 && "No items yet"}
            {items.map((items: any) => {
              return (
                <ListItem
                  key={items.id}
                  items={items}
                  handleDelete={handleDelete}
                />
              );
            })}
          </div>
        </ul>
      </div>
    </main>
  );
};
