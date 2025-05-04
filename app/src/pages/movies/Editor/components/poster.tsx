import { Img } from "react-image";
import { useDimensionsHelperContext } from "../../../../context/DimensionsHelperContext";
import { Spinner } from "../../../suportPages/loading";
import { useMovieEditorPageContext } from "../context";
export const Poster = () => {
  const { movie, setValue } = useMovieEditorPageContext();
  const { spaceBetweenHeaderAndFooter } = useDimensionsHelperContext();

  return (
    <>
      <label
        htmlFor="posterinput"
        style={{
          height: `calc(${spaceBetweenHeaderAndFooter}px - 14rem)`,
        }}
        className="aspect-[12/16] rounded-2xl flex cursor-pointer items-center justify-center dark:bg-zinc-800/50 border dark:border-zinc-700 border-zinc-400 bg-zinc-50/50"
      >
        {movie?.poster ? (
          <Img
            loader={
              <div
                style={{
                  height: `calc(${spaceBetweenHeaderAndFooter}px - 14rem)`,
                }}
                className="aspect-[12/16] rounded-2xl flex cursor-pointer items-center justify-center dark:bg-zinc-800/50 border dark:border-zinc-700 border-zinc-400 bg-zinc-50/50"
              >
                <Spinner />
              </div>
            }
            style={{
              objectFit: "cover",
              height: `calc(${spaceBetweenHeaderAndFooter}px - 14rem)`,
            }}
            className="rounded-2xl aspect-[12/16]"
            src={movie?.poster}
            alt={movie?.title}
          />
        ) : (
          <p className="text-2xl font-bold text-zinc-800 dark:text-zinc-200">
            Adicionar imagem
          </p>
        )}
      </label>

      <input
        id="posterinput"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            setValue("posterFile", file);
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

                  setValue("poster", base64Image);
                }
              };
            };
            reader.readAsDataURL(file);
          }
        }}
      />
    </>
  );
};
