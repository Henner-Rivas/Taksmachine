import React from "react";

function TodoHeader({ children, loading }) {
  return (
    <header>
  {/*     {React.Children
      .toArray(children)
      .map((child) =>
        React.cloneElement(children, { loading }))} */}

        { React.cloneElement(children, { loading })  }
    </header>
  );
}

export default TodoHeader;
