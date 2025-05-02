function Footer() {
  return (
    <footer
      style={{
        width: "-webkit-fill-available",
      }}
      className="bottom-0  text-center z-10 fixed rounded-xl font-light dark:border-zinc-800 border-zinc-300 border m-2 h-16  bg-zinc-200 dark:bg-zinc-900 text-black dark:text-white text-base p-4"
    >
      {`2025 © Todos os direitos reservados a `}
      <b className="font-semibold text-black/80 dark:text-white/80">{`Cubos Movies`}</b>
    </footer>
  );
}

export default Footer;
