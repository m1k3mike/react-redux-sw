import cn from "classnames";
import styles from "./App.module.css";
import { getApiResource } from "../utils/network";

const App = () => {
  getApiResource();
  return (
    <div>
      <h1>Работает!</h1>
    </div>
  );
};

export default App;
