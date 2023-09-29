type Props = {
  items: any;
  handleDelete: (id: string) => void;
};

export const ListItem = ({ items, handleDelete }: Props) => {
  return (
    <li className="p-4">
      <div className="item-container">
        <p className="py-2 px-4">{items.text}</p>
        <button
          className="bg-red-300 text-red-950 text-lg border-2 border-red-950 rounded-full w-32 py-2 hover:bg-red-600 hover:text-red-200 hover:border-gray-950 peer"
          onClick={() => handleDelete(items.id)}
        >
          <div className="btn2-container">
            <p className="place-self-end">Delete</p>
            <svg
              className="place-self-start stroke-red-800 fill-red-800 group-hover:stroke-red-200 group-hover:fill-red-200"
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
            >
              <path
                fill="#30d8ce"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"
              ></path>
            </svg>
          </div>
        </button>
      </div>
    </li>
  );
};
