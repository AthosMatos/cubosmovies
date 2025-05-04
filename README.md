## 🚀 Instruções de Uso

### ✅ Pré-requisitos

Certifique-se de que os seguintes programas estejam instalados em sua máquina:

- [pnpm](https://pnpm.io/installation)
- [PostgreSQL](https://www.postgresql.org/download/)

---

### 📦 Inicializar o Projeto

```bash
pnpm init-project
````

---

### ▶️ Rodar o Projeto

```bash
pnpm dev
```

---

### ⚙️ Configuração de Variáveis de Ambiente

As variáveis de ambiente estão disponíveis no seguinte link:

[📄 Arquivo `.env` - Google Drive](https://drive.google.com/file/d/1Fmx3UZB1UTh-5ZYjmDLzke4wv1lTcN8f/view?usp=sharing)

#### 🖥️ Servidor (Backend)

Altere as seguintes variáveis de acordo com o seu ambiente local:

* `DATABASE_URL` → string de conexão com o seu banco PostgreSQL
* `AWS_ACCESS_KEY_ID` → sua chave de acesso AWS
* `AWS_SECRET_ACCESS_KEY` → sua chave secreta AWS
* `AWS_BUCKET_URL` → URL do seu bucket S3

#### 🌐 Aplicação (Frontend)

* `VITE_API_KEY` → chave da API do TMDB
  Você pode:

  * Usar a que está no `.env` do Google Drive, **ou**
  * Criar sua própria conta no site [TMDB](https://www.themoviedb.org/) e gerar uma nova chave de API.

---

Pronto! Agora é só iniciar o projeto 🚀
