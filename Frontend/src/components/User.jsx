const User = (p) => {
  return (
    <div className=" flex gap-x-3">
      <p>{p.name}</p>
      <p> {p.id}</p>
      <p>{p.done}</p>
      <button
        onClick={() => {
          p.deleteShit(p.id);
        }}
      >
        x
      </button>
      <button onClick={}>done</button>
    </div>
  );
};

export default User;
