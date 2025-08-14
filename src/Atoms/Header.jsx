const Header = () => {
  return (
    <>
      <header className="fixed left-0 top-0 w-full z-gnb">
        <section className="flex justify-between items-center px-[5vw] pt-[1vw]">
          <a href="/" data-discover="true">
            <img
              src="https://i.namu.wiki/i/bjqv7QBraHZeyDVQmsIBKAOq7AngBuFZFWJJmi13oT2ky_vlYt6BsIfOGqv0J4gAWWFheUgJJ04WTmN42FxpPv822f9uA0ICuVZfaU4y0PMFDFnVIEJzAZxiJQXlIkMcaO9fF99JNWBc4GqWcHYpiw.svg"
              alt=""
              className="object-cover w-[4vw]"
            />
          </a>
          <button type="button">
            <img
              src="https://www.socar.kr/static/media/menu.acbe7c0abc9d04c318f29f7f597aebc1.svg"
              alt=""
              className="w-[2vw]"
            />
          </button>
        </section>
      </header>
    </>
  );
};

export default Header;
