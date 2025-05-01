import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useTRPC } from "../../../trpc/utils";
import { Input } from "../../components/Input";
import { PageTransitionFade } from "../../components/PageTransitionWrapper";
import { InOutWrapper } from "../components";

interface FormData {
  name: string | null;
  email: string | null;
  password: string | null;
  confirmPassword: string | null;
}

const SignInPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset: resetForm,
  } = useForm<FormData>({
    mode: "onChange",
    defaultValues: {
      name: null,
      email: null,
      password: null,
      confirmPassword: null,
    },
  });
  const trpc = useTRPC(); // use `import { trpc } from './utils/trpc'` if you're using the singleton pattern
  const {
    mutateAsync: createUser,
    isPending,
    error,
    reset: resetMutation,
  } = useMutation(trpc.users.create.mutationOptions());

  const onSubmit = (data: FormData) => {
    const { name, email, password } = data;
    if (!name || !email || !password) {
      return;
    }
    createUser({
      name: name,
      email: email,
      password: password,
    });
  };

  const resetAll = () => {
    resetMutation();
    resetForm({
      name: null,
      email: null,
      password: null,
      confirmPassword: null,
    });
  };

  return (
    <PageTransitionFade className="w-full h-full items-center justify-center flex">
      <InOutWrapper
        error={error?.message}
        isLoading={isPending}
        title="Criar Conta"
        subtitle="Crie sua conta para acessar o CUBOS Movies"
        pageTitle="Criar Conta - CUBOS Movies"
        submitLabel="Cadastrar"
        submit={handleSubmit(onSubmit)}
        reset={resetAll}
      >
        <Input
          icon="user"
          label="Nome"
          placeholder="Digite seu nome ou email"
          type="text"
          errors={errors.name?.message}
          {...register("name", {
            required: "Campo obrigatório",
          })}
        />

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
    </PageTransitionFade>
  );
};

export default SignInPage;
