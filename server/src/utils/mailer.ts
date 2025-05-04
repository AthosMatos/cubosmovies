import nodemailer from "nodemailer";

export async function sendMovieNotification(movie: {
  title: string;
  release_date: Date | string;
}) {
  // Create a test Ethereal account (only once in production you might cache these credentials)
  const testAccount = {
    user: "jake.hoppe30@ethereal.email",
    pass: "gZqmy7t28QXGrXgRnv",
  };

  // Create a transporter using Ethereal SMTP settings
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  // Configuração dos dados do email
  const info = await transporter.sendMail({
    from: '"Aplicativo de Filmes" <no-reply@movies.com>',
    to: "fake_user@example.com", // destinatário fake
    subject: "Novo filme em breve!",
    text: `Um novo filme "${movie.title}" está programado para lançamento em ${movie.release_date}.`,
    html: `<p>Um novo filme <strong>${movie.title}</strong> está programado para lançamento em ${movie.release_date}.</p>`,
  });

  console.log("Email sent. Preview URL:", nodemailer.getTestMessageUrl(info));
}
