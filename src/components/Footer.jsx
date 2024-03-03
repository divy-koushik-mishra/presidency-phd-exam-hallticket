const Footer = () => {
  return (
    <footer className="bg-[#003239] flex flex-col justify-center items-center font-semibold py-2 text-center">
      <p>
        © 2024 @{" "}
        <a
          href="https://presidencyuniversity.in"
          className="underline cursor-pointer"
        >
          {" "}
          Presidency University{" "}
        </a>{" "}
        and
        <a href="https://vikasana.tech/" className="underline cursor-pointer">
          {" "}
          Team Vikasana
        </a>
      </p>
      <p>
        Developed and designed by :{" "}
        <a
          className="underline cursor-pointer"
          href="https://www.divykoushikmishra.me"
        >
          Divy Koushik Mishra{" "}
        </a>
        and
        <a
          className="underline cursor-pointer"
          href="https://assassinumz.github.io/"
        >
          {" "}
          Umraz Khan
        </a>
      </p>
    </footer>
  );
};

export default Footer;
