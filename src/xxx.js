import * as React from "react";
import { createRoot } from "react-dom/client";

function FunctionComponent() {
  const [numbers, setNumbers] = React.useState(new Array(10).fill("A"));
  const divRef = React.useRef();
  React.useEffect(() => {
    setTimeout(() => {
      divRef.current.click();
    }, 10);
    setNumbers((numbers) => numbers.map((item) => item + "B"));
  }, []);
  return (
    <div
      ref={divRef}
      onClick={() => {
        setNumbers((numbers) => numbers.map((item) => item + "C"));
      }}
    >
      {numbers.map((number, index) => (
        <span key={index}>{number}</span>
      ))}
    </div>
  );
}
const element = <FunctionComponent />;
const container = document.getElementById("root");
const root = createRoot(container);
// const root = createRoot(container, { unstable_concurrentUpdatesByDefault: true });
root.render(element);
