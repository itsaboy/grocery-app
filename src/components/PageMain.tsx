import { ListItem } from "./ListItem";

type Props = {
  items: any;
  handleDelete: (id: string) => void;
};

export const PageMain = ({ items, handleDelete }: Props) => {
  return (
    <main className="bg-gradient-to-b from-blue-100 to-blue-200">
      <div className="main-container">
        <h2 className="bg-blue-200 text-blue-950 text-4xl text-center font-semibold w-1/2 mx-auto p-4 border-b-2 border-blue-800 rounded-lg">
          Items
        </h2>
        <ul className="text-blue-900 text-2xl">
          <div className="items-container">
            {items.length === 0 && <h2 className="p-4">No Items</h2>}
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
