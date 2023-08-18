import React from "react";

import "./directories.styles.scss";
import DirectoryItem from "../directory-item/directory-item.component";

function Directories({ directories }) {
  return (
    <div className="directories-container">
      {directories.map((directory) => (
        <DirectoryItem key={directory.id} category={directory} />
      ))}
    </div>
  );
}

export default Directories;
