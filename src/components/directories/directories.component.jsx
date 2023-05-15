import React from "react";
import Category from "../category/category-item.component";
import "./directories.styles.scss";

function Directories({ directories }) {
  return (
    <div className="directories-container">
      {directories.map((directory) => (
        <Category key={directory.id} category={directory} />
      ))}
    </div>
  );
}

export default Directories;
