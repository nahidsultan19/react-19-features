import { useState } from "react";
import "./App.css";
import Posts from "./components/action/Posts";
import Theme from "./components/use-hook-context/Theme";
import FetchData from "./components/use-hook-data-fetching/FetchData";
import PromiseData from "./components/use-hook-promise/PromiseData";

function App() {
  const [example, setExample] = useState("");

  const handleChange = (e) => {
    setExample(e.target.value);
  };

  let content;

  if (example === "example-1") {
    content = <FetchData />;
  }
  if (example === "example-2") {
    content = <PromiseData />;
  }
  if (example === "example-3") {
    content = <Theme />;
  }
  if (example === "action") {
    content = <Posts />;
  }
  return (
    <div className="p-12">
      <h1 className="font-bold text-3xl">What&apos;s coming in React 19</h1>

      <div className="mt-5">
        I have created some examples to explore the new features. You can
        explore the examples below:
      </div>

      <div className="mt-10">
        <select onChange={handleChange}>
          <option value="">Select example</option>
          <option value="example-1">&quot;use&quot; Hook to fetch data</option>
          <option value="example-2">&quot;use&quot; Hook with promise</option>
          <option value="example-3">&quot;use&quot; Hook with context</option>
          <option value="action">&quot;Form Action&quot;</option>
          <option value="useFormStatus">&quot;useFormStatus&quot;</option>
          <option value="useFormState">&quot;useFormState&quot;</option>
          <option value="useOptimistic">&quot;useOptimistic&quot;</option>
          <option value="automemo">&quot;Auto Memoization&quot;</option>
          <option value="forwardRef">&quot;forwardRef&quot;</option>
        </select>
      </div>

      <div className="mt-10">{content}</div>
    </div>
  );
}

export default App;
