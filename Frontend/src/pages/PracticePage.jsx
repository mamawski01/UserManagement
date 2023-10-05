import { PropTypes } from "prop-types";
const PracticePage = () => {
  return (
    <div className="text-white grid justify-center h-screen items-center bg-slate-700">
      <h1>
        {users.map((user, key) => {
          return <User name={user.name} age={user.age} key={key}></User>;
        })}
      </h1>
    </div>
  );
};
const users = [
  { name: "bukNoylol", age: 69 },
  { name: "mirAng", age: 25 },
  { name: "Filthy", age: 20 },
];

const User = (props) => {
  return (
    <div>
      {props.name} {props.age}
    </div>
  );
};
User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
};

export default PracticePage;
