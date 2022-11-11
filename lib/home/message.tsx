import { Headline1 } from '../../components/headline';

const messages = [
  {
    name: '本名　次郎',
    nameEn: 'Jiro Honmyo',
    classLabel: '商船学科 2年',
    role: '副リーダー',
    message: 'ありがとう！本当にありがとう！またね！',
  },
  {
    name: '本名　次郎',
    nameEn: 'Jiro Honmyo',
    classLabel: '商船学科 2年',
    role: '副リーダー',
    message: 'ありがとう！本当にありがとう！またね！',
  },
  {
    name: '本名　次郎',
    nameEn: 'Jiro Honmyo',
    classLabel: '商船学科 2年',
    role: '副リーダー',
    message: 'ありがとう！本当にありがとう！またね！',
  },
  {
    name: '本名　次郎',
    nameEn: 'Jiro Honmyo',
    classLabel: '商船学科 2年',
    role: '副リーダー',
    message: 'ありがとう！本当にありがとう！またね！',
  },
  {
    name: '本名　次郎',
    nameEn: 'Jiro Honmyo',
    classLabel: '商船学科 2年',
    role: '副リーダー',
    message: 'ありがとう！本当にありがとう！またね！',
  }
];

const Message = () => {
  return (
    <section className="mt-20 text-xl w-full flex flex-col items-center">
      <Headline1
        label="MESSAGE"
        id="message"
      />

      <div className="w-full md:w-3/4 flex flex-col md:grid md:grid-cols-3 md:gap-8">
        <div className="w-full h-72 bg-yellow-500 rounded-xl col-span-1" />
        <div className="p-4 text-left col-span-2">
          <div className="mb-2 text-base">
            商船学科 2年 ／ リーダー
          </div>
          <h3 className="mb-5 text-2xl font-medium border-b-4 border-tobamaru-500">
            本名　太郎
            <small className="ml-10 text-gray-500">
              Taro Honmyo
            </small>
          </h3>
          <p>
            こんにちは！
          </p>
          <p>
            ここに文章が入ります！
          </p>
        </div>
      </div>

      <div className="mt-20 w-full md:w-3/4 h-[25rem] overflow-x-auto">
        <div
          className="h-full flex flex-row justify-between"
          style={{ width: `${16 * messages.length + 2 * (messages.length - 1)}rem` }}
        >
          {messages.map((message) => (
            <figure
              className="w-64 h-full rounded-xl border-2 border-gray-300 bg-gray-50 overflow-hidden"
              key={message.name}
            >
              <div className="w-64 h-48 bg-yellow-300" />
              <figcaption className="p-4 text-base text-left">
                <div className="mb-2 text-sm">
                  {message.classLabel} ／ {message.role}
                </div>
                <h3 className="mb-5 text-xl font-medium border-b-4 border-tobamaru-500">
                  {message.name}
                  <br />
                  <small className="text-gray-500">
                    {message.nameEn}
                  </small>
                </h3>
                {message.message}
              </figcaption>
            </figure>
          ))}
        </div>

        {/* <div className="w-full h-72 bg-yellow-500 rounded-xl col-span-1" />
        <div className="p-4 text-left col-span-2">
          <div className="mb-2 text-base">
            商船学科 2年 ／ リーダー
          </div>
          <h3 className="mb-5 text-2xl font-medium border-b-4 border-tobamaru-500">
            本名　太郎
            <small className="ml-10 text-gray-500">
              Taro Honmyo
            </small>
          </h3>
          <p>
            こんにちは！
          </p>
          <p>
            ここに文章が入ります！
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default Message;
