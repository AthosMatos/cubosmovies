import { useMovieEditorPageContext } from "../context";
import { MovieDetailsProps } from "../interfaces";

//values from MovieDetailsProps as string
type MovieDetailsKeys = Exclude<keyof MovieDetailsProps, "id">;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
  className?: string;
  name?: MovieDetailsKeys;
}

export const EditorInput = (props: InputProps) => {
  const { register } = useMovieEditorPageContext();
  const reg = props.name ? register(props.name) : null;
  return (
    <input {...props} {...reg} className={`outline-none ${props.className}`} />
  );
};
