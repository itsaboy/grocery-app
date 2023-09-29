type Props = {
  items: any;
  handleDelete: (id: string) => void;
};

export const ListItem = ({ items, handleDelete }: Props) => {
  return (
    <li>
      <button
        className="bg-red-600 text-red-200 text-lg border-2 border-red-950 rounded-md mx-2 py-1 px-4"
        onClick={() => handleDelete(items.id)}
      >
        Delete
      </button>{" "}
      {items.text}
    </li>
  );
};
