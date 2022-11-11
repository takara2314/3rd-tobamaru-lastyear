const Information = () => {
  return (
    <section className="w-screen h-16 bg-blue-900 flex flex-row justify-center relative -left-[2.5rem] -top-[2.5rem]">
      <h2 className="pr-10 text-xl text-white leading-[4rem]">
        INFORMATION
      </h2>
      <div className="w-[80%] flex flex-col justify-center">
        <div className="px-10 w-full h-10 leading-10 text-left bg-white rounded-xl">
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
