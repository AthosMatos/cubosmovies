import { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import { useMovieEditorPageContext } from "../context";
import { EditorInput } from "./Input";

export const Genre = () => {
  const {
    fieldArray: { append, fields, remove },
  } = useMovieEditorPageContext();
  const [typedGenre, setTypedGenre] = useState("");

  const handleAddGenre = () => {
    const trimmed = typedGenre.trim();
    if (
      trimmed &&
      !fields.some((g) => g.name.toLowerCase() === trimmed.toLowerCase())
    ) {
      append({ id: Date.now(), name: trimmed });
    }
    setTypedGenre("");
  };

  return (
    <div>
      <div className="flex gap-2 items-center border w-fit dark:border-zinc-700 border-zinc-400 bg-zinc-50/50 dark:bg-zinc-800/50 rounded-xl p-1 pl-3 text-zinc-600 dark:text-zinc-500">
        <EditorInput
          type="text"
          placeholder="Gênero"
          value={typedGenre}
          onChange={(e) => setTypedGenre(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleAddGenre();
            }
          }}
        />
        <div
          onClick={handleAddGenre}
          className="dark:border-zinc-700 cursor-pointer active:scale-95 transition-transform border-zinc-400 bg-zinc-50/50 dark:bg-zinc-700/50 rounded-xl p-2"
        >
          <FaPlus />
        </div>
      </div>

      <ul className="flex flex-wrap gap-2 mt-2">
        {fields.map((g, index) => (
          <li
            key={g.id}
            className="flex items-center gap-2 p-2 text-purple-50 dark:text-purple-200 px-3 uppercase font-bold text-sm border dark:border-purple-950 border-purple-700 bg-purple-600 dark:bg-purple-800/30 rounded-full"
          >
            {g.name}
            <FaTrash
              className="text-black dark:text-white cursor-pointer"
              onClick={() => remove(index)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
