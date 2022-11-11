const Information = () => {
  return (
    <section className="w-screen h-32 md:h-16 bg-blue-900 flex flex-col md:flex-row items-center justify-center relative -left-[2.5rem] -top-[2.5rem]">
      <h2 className="mb-3 md:mb-0 md:pr-10 text-xl text-white md:leading-[4rem]">
        INFORMATION
      </h2>
      <div className="w-[90%] md:w-[80%] flex flex-col justify-center">
        <div className="px-5 md:px-10 w-full h-10 leading-10 text-left bg-white rounded-xl">
          <span className="mr-5 text-gray-500">
            2022.11.18
          </span>
          サイトを公開しました！
        </div>
      </div>
    </section>
  );
};

export default Information;
