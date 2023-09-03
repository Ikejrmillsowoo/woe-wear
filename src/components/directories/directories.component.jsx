import React from "react";

import { DirectoriesContainer } from "./directories.styles.jsx";
import DirectoryItem from "../directory-item/directory-item.component";

function Directories({ directories }) {
  return (
    <DirectoriesContainer>
      {directories.map((directory) => (
        <DirectoryItem key={directory.id} category={directory} />
      ))}
    </DirectoriesContainer>
  );
}

export default Directories;
