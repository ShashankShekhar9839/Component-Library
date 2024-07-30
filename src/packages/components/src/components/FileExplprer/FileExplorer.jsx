import React, { useEffect, useState } from "react";
import "shashank-monoatomic-css/dist/styles.css";
import { explorer } from "./data/data";
const FileExplorer = () => {
  const [openFolders, setOpenFolders] = useState({});
  
  useEffect(() => {
    console.log('###', openFolders)
  })
  const toggleFolder = (path) => {
    setOpenFolders((prevFolders) => ({
      ...prevFolders,
      [path]: !prevFolders[path],
    }));
  };

  let renderSubFiles = (items, parentPath = "") => {
    return items.map((item, index) => {
      const currentPath = `${parentPath}/${item.name}`;

      return (
        <div key={currentPath}>
          <div
            className={`${item.isFolder ? "bg-gold" : "bg-blue"} m-2 p-3`}
            onClick={() => item.isFolder && toggleFolder(currentPath)}
          >
            {item.name}
          </div>
          {item.isFolder && openFolders[currentPath] && (
            <div className="ml-4">
              {renderSubFiles(item.items, currentPath)}
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <>
      <div
        className="h-auto bg-teal p-3"
        onClick={() => toggleFolder(explorer.name)}
      >
        {explorer.name}
      </div>
      {openFolders[explorer.name] && (
        <div className="ml-4">
          {renderSubFiles(explorer.items, explorer.name)}
        </div>
      )}
    </>
  );
};

export default FileExplorer;
