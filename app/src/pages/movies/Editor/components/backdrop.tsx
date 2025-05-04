import { Button } from "../../../components/Button";
import { useMovieEditorPageContext } from "../context";

export const BackDropButton = () => {
  const { setValue } = useMovieEditorPageContext();
  return (
    <label htmlFor="backdropinput">
      <Button terciary notButton>
        Backdrop
      </Button>
      <input
        id="backdropinput"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            setValue("backdropFile", file);
            const reader = new FileReader();
            reader.onload = (event) => {
              const img = document.createElement("img");
              img.src = event.target?.result as string;
              img.onload = () => {
                const canvas = document.createElement("canvas");
                const ctx = canvas.getContext("2d");
                if (ctx) {
                  canvas.width = img.width;
                  canvas.height = img.height;
                  ctx.drawImage(img, 0, 0);
                  const base64Image = canvas.toDataURL("image/jpeg", 0.8);
                  setValue("backdrop", base64Image);
                }
              };
            };
            reader.readAsDataURL(file);
          }
        }}
      />
    </label>
  );
};
