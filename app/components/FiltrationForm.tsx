export function FiltrationForm() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <div className="flex flex-col">
          <label className="text-sm">Name</label>
          <input className="border-2 border-black rounded-md" />
        </div>
        <div className="flex flex-col">
          <label className="text-sm">Category</label>
          <input className="border-2 border-black rounded-md" />
        </div>
        <div className="flex flex-col">
          <label className="text-sm">Ingredients</label>
          <input className="border-2 border-black rounded-md" />
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <label className="text-sm">Preparation Time</label>
          <input className="border-2 border-black rounded-md" />
        </div>
        <div className="flex flex-col">
          <label className="text-sm">Cooking Time</label>
          <input className="border-2 border-black rounded-md" />
        </div>
      </div>
    </div>
  );
}
