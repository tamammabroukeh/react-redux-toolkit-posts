import { Fragment } from "react";
import Posts from "./components/Posts/Posts";
import AddFormPost from "./components/Posts/AddFormPost";

function App() {
  return (
    <Fragment>
      <AddFormPost />
      <Posts />
    </Fragment>
  );
}

export default App;
