const User = (props) => {
  return (
    <div className="flex gap-x-3">
      <p>{props.name}</p>
      <p>{props.id}</p>
      <p
        style={
          props.done
            ? { backgroundColor: "green" }
            : { backgroundColor: "inherit" }
        }
      >
        {props.done.toString()}
      </p>
      <button
        onClick={() => {
          props.deleteTask(props.id);
        }}
      >
        x
      </button>
      <button
        onClick={() => {
          props.taskDone(props.id);
        }}
      >
        done
      </button>
    </div>
  );
};

User.propTypes;

export default User;
