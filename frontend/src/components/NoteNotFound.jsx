import {  NotebookIcon } from "lucide-react";
import {Link} from "react-router"
import React from "react";

const NoteNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
       <div className="bg-primary/10 rounded-full p-8"> <NotebookIcon className="size-10 text-primary"  /></div>
      <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-2">
        No Notes Yet 
      </h2>
      <p className="text-gray-500 dark:text-gray-400">
        Go ahead and make your first note!
      </p>
      <Link to="/create" className="btn btn-primary mt-3 text-bold  transform transition-transform duration-200  hover:scale-110">
        Create Your First Note
      </Link>
    </div>
  );
};

export default NoteNotFound;
