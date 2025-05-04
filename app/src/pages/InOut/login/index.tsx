import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { InOut } from "..";
import { useAuth } from "../../../context/Auth";
import { pagePaths } from "../../../routes/paths";
import { Input } from "../../components/Input";
import { PageTransitionScale } from "../../components/PageTransitionWrapper";

interface FormData {
  nameEmail: string | null;
  password: string | null;
}

const LoginPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset: resetForm,
  } = useForm<FormData>({
    mode: "onChange",
    defaultValues: {
      nameEmail: null,
      password: null,
    },
  });
  const {
    login: { mutate, error, isPending, reset },
  } = useAuth();
  const navigate = useNavigate();
  const onSubmit = async (data: FormData) => {
    if (!data.nameEmail || !data.password) {
      return;
    }
    const success = await mutate(data.nameEmail, data.password);
    if (success) {
      navigate(pagePaths.library.path);
    }
  };

  return (
    <PageTransitionScale className="w-full h-full items-center justify-center flex">
      <InOut
        forgotPassword={() => {
          navigate(pagePaths.forgotPass.path);
        }}
        errorGoMessage="Fazer Cadastro"
        error={error}
        isLoading={isPending}
        reset={() => {
          resetForm();
          reset();
        }}
        title="Entrar"
        subtitle="Entre com seu nome ou email e senha"
        pageTitle="Entrar - CUBOS Movies"
        submitLabel="Entrar"
        submit={handleSubmit(onSubmit)}
        errorGoTo={() => {
          navigate(pagePaths.signIn.path);
        }}
      >
        <Input
          icon="user"
          label="Nome/E-mail"
          placeholder="Digite seu nome ou email"
          type="text"
          errors={errors.nameEmail?.message}
          {...register("nameEmail", {
            required: "Campo obrigatório",
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
            /* minLength: {
              value: 6,
              message: "Senha deve ter no mínimo 6 caracteres",
            }, */
          })}
        />
      </InOut>
    </PageTransitionScale>
  );
};

export default LoginPage;
