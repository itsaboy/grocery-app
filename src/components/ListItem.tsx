type Props = {
  items: any;
  handleDelete: (id: string) => void;
};

export const ListItem = ({ items, handleDelete }: Props) => {
  return (
    <li>
      <div className="item-container">
        {items.text}
        <button
          className="bg-red-600 text-red-200 text-lg border-2 border-red-950 rounded-md w-24 mx-2 py-1 px-4 hover:bg-red-400 hover:text-red-950 hover:border-8"
          onClick={() => handleDelete(items.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};
