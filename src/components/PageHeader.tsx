type Props = {
  newItem: string;
  handleNewItem: (event: any) => void;
  handleSubmit: () => void;
};

export const PageHeader = ({ newItem, handleNewItem, handleSubmit }: Props) => {
  return (
    <header className="bg-gradient-to-b from-blue-600 to-blue-500 border-b-4 border-blue-950">
      <div className="header-container">
        <h1 id="title" className="text-6xl text-blue-200">
          Grocery List
        </h1>
        <div id="input" className="input-container">
          <input
            id="new-input"
            className="bg-blue-100 text-xl p-2 border-2 border-blue-800"
            placeholder="New Item..."
            value={newItem}
            onChange={handleNewItem}
          />
          <button
            id="new-button"
            className="bg-blue-800 text-blue-100 text-xl py-2 px-8 border-2 border-blue-100 rounded-lg hover:bg-blue-400 hover:text-blue-950 hover:border-8"
            onClick={handleSubmit}
          >
            Add
          </button>
        </div>
      </div>
    </header>
  );
};
