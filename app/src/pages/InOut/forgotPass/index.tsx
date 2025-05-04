import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { pagePaths } from "../../../routes/paths";
import { useTRPC } from "../../../trpc/utils";
import { Input } from "../../components/Input";
import { PageTransitionScale } from "../../components/PageTransitionWrapper";
import { InOutWrapper } from "../components";

interface FormData {
  email: string | null;
  password: string | null;
  confirmPassword: string | null;
}

const ForgotPassPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset: resetForm,
  } = useForm<FormData>({
    mode: "onChange",
    defaultValues: {
      email: null,
      password: null,
      confirmPassword: null,
    },
  });
  const trpc = useTRPC(); // use `import { trpc } from './utils/trpc'` if you're using the singleton pattern
  const {
    mutateAsync: updateUser,
    isPending,
    error,
    reset: resetMutation,
  } = useMutation(trpc.users.updatePassWithEmail.mutationOptions());
  const navigate = useNavigate();
  const onSubmit = (data: FormData) => {
    const { email, password } = data;
    if (!email || !password) {
      return;
    }
    updateUser({
      email: email,
      password: password,
    }).then(() => {
      navigate(pagePaths.logIn.path);
    });
  };

  const resetAll = () => {
    resetMutation();
    resetForm({
      email: null,
      password: null,
      confirmPassword: null,
    });
  };

  return (
    <PageTransitionScale className="w-full h-full items-center justify-center flex">
      <InOutWrapper
        errorGoMessage="Fazer Login"
        error={error?.message}
        isLoading={isPending}
        title="Redefinir Senha"
        subtitle="Digite seu email e nova senha"
        pageTitle="Redefinir Senha - CUBOS Movies"
        submitLabel="Redefinir Senha"
        submit={handleSubmit(onSubmit)}
        reset={resetAll}
        errorGoTo={() => {
          navigate(pagePaths.logIn.path);
        }}
      >
        <Input
          icon="email"
          label="Email"
          placeholder="Digite seu email"
          type="email"
          errors={errors.email?.message}
          {...register("email", {
            required: "Campo obrigatório",
            validate: (value) => {
              if (value?.includes("@") && value?.includes(".")) {
                return true;
              }
              return "Email inválido";
            },
          })}
        />

        <Input
          icon="password"
          label="Senha"
          placeholder="Digite sua senha"
          type="password"
          errors={errors.password?.message}
          {...register("password", {
            required: "Campo obrigatório",
            minLength: {
              value: 6,
              message: "Senha deve ter no mínimo 6 caracteres",
            },
          })}
        />
        <Input
          icon="password"
          label="Confirmar Senha"
          placeholder="Digite sua senha novamente"
          type="password"
          errors={errors.confirmPassword?.message}
          {...register("confirmPassword", {
            required: "Campo obrigatório",

            validate: (value) => {
              const password = document.querySelector(
                'input[name="password"]'
              ) as HTMLInputElement;
              if (password && password.value !== value) {
                return "As senhas não coincidem";
              }
              return true;
            },
          })}
        />
      </InOutWrapper>
    </PageTransitionScale>
  );
};

export default ForgotPassPage;
