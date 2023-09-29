type Props = {
  newItem: string;
  handleNewItem: (event: any) => void;
  handleSubmit: () => void;
};

export const PageHeader = ({ newItem, handleNewItem, handleSubmit }: Props) => {
  return (
    <header className="bg-gradient-to-b from-blue-600 to-blue-400 border-b-4 border-blue-950">
      <div className="header-container">
        <h1 id="title" className="text-6xl text-blue-200 font-semibold">
          Grocery List
        </h1>
        <div id="input" className="input-container">
          <input
            id="new-input"
            className="bg-blue-100 text-xl p-2 border-2 border-blue-800 hover:border-blue-200"
            placeholder="New Item..."
            value={newItem}
            onChange={handleNewItem}
          />
          <button
            id="new-button"
            className="bg-blue-800 text-blue-100 text-xl w-32 py-2 border-2 border-blue-100 rounded-lg hover:bg-blue-300 hover:text-blue-950 hover:border-blue-950 group"
            onClick={handleSubmit}
          >
            <div className="btn1-container">
              <p className="place-self-end">Add</p>
              <svg
                className="stroke-blue-200 fill-blue-200 group-hover:stroke-blue-950 group-hover:fill-blue-950"
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};
