const User = (p) => {
  return (
    <div className="flex gap-x-2">
      <p
        style={
          p.done ? { backgroundColor: "green" } : { backgroundColor: "inherit" }
        }
      >
        {p.name}
      </p>
      <p> {p.id}</p>
      <p>{p.done.toString()} </p>
      <button
        onClick={() => {
          p.deleteTask(p.id);
        }}
      >
        x
      </button>
      <button
        onClick={() => {
          p.completeTask(p.id);
        }}
      >
        done
      </button>
    </div>
  );
};

export default User;
