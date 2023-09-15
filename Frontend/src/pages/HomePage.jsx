import UserTopNav from "../components/userComponents/UserTopNav";

export default function HomePage() {
  const name = `BukNoy`;
  if (name) {
    return (
      <div>
        <UserTopNav></UserTopNav>
        <div className="gap-1 flex m-2 text-blue-900 container">
          <h1>hello {name} </h1>
          <input type="text" name="input1" />
          +
          <input type="text" name="input2" />
          =
          <input type="text" name="output" readOnly />
        </div>
        <input type="text" className="bg-red-400" id="grid" />
      </div>
    );
  } else {
    return <h1 className="gap-1 flex m-2 text-blue-900">Filthy</h1>;
  }
}
