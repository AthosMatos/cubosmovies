import { AnimatePresence, motion } from "motion/react";
import { MdError } from "react-icons/md";
import { useDimensionsHelperContext } from "../../context/DimensionsHelperContext";
import { Button } from "../components/Button";
import { PageTransitionScale } from "../components/PageTransitionWrapper";
interface InOutWrapperProps {
  pageTitle: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
  submitLabel: string;
  submit: React.FormEventHandler<HTMLFormElement>;
  isLoading?: boolean;
  error?: string | null;
  reset?: () => void;
  errorGoMessage: string;
  errorGoTo?: () => void;
  forgotPassword?: () => void;
}

const animProps = {
  initial: { x: -window.innerWidth },
  animate: { x: 0 },
  exit: { x: window.innerWidth },
  transition: { duration: 0.4, ease: "anticipate" },
};

export const InOutWrapper = ({
  children,
  submitLabel,
  submit,
  pageTitle,
  subtitle,
  title,
  isLoading,
  error,
  reset,
  errorGoMessage,
  errorGoTo,
  forgotPassword,
}: InOutWrapperProps) => {
  const { headerHeight } = useDimensionsHelperContext();

  return (
    <PageTransitionScale className="w-full h-full items-center justify-center flex">
      <title>{pageTitle}</title>
      <div
        style={{
          marginBottom: headerHeight /* Compensar o header e manter centrado */,
        }}
        className="overflow-hidden flex items-center w-full md:w-[32rem] p-6 md:p-10 rounded-2xl md:rounded-3xl bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xs border-purple-500 border-[0.1rem]"
      >
        <AnimatePresence initial={false} mode="wait">
          {error ? (
            <motion.div
              key={"error"}
              {...animProps}
              className="flex flex-col items-center gap-10 w-full"
            >
              <div className="flex flex-col items-center gap-3">
                <MdError className="text-red-500 text-5xl" />
                <p className="text-red-500 text-sm font-medium">{error}</p>
              </div>
              <div className="flex gap-2 w-full justify-center">
                <Button secondary onClick={reset} className="w-fit px-7">
                  Tentar Novamente
                </Button>
                <Button onClick={errorGoTo} className="w-fit px-7">
                  {errorGoMessage}
                </Button>
              </div>
            </motion.div>
          ) : (
            <motion.form
              key={"form"}
              {...animProps}
              onSubmit={submit}
              className="flex items-end flex-col gap-5 w-full"
            >
              <p className="flex flex-col gap-1 w-full">
                <span className="text-3xl font-bold text-black dark:text-white">
                  {title}
                </span>
                <span className="dark:text-zinc-500 text-zinc-600 text-sm font-medium">
                  {subtitle}
                </span>
              </p>
              <div className="flex flex-col gap-2 w-full">{children}</div>
              <div
                className={`flex w-full ${
                  forgotPassword ? "justify-between " : "justify-end"
                } items-center`}
              >
                {forgotPassword && (
                  <label
                    className="text-sm font-medium transition-colors text-purple-500 hover:text-purple-400 hover:dark:text-purple-600 cursor-pointer"
                    onClick={forgotPassword}
                  >
                    Esqueci minha senha
                  </label>
                )}

                <Button loading={isLoading}>{submitLabel}</Button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </PageTransitionScale>
  );
};
