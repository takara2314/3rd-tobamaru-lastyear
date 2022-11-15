import { Headline1 } from '../../components/headline';
import MyMessage, { GroupMessage } from '../../models/messages';

const messages: GroupMessage = {
  poster: [
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
      role: 'ポスター制作',
      message: 'ありがとう！本当にありがとう！またね！',
    },
    {
      name: '本名　次郎',
      nameEn: 'Jiro Honmyo',
      classLabel: '商船学科 1年',
      role: 'ポスター制作',
      message: 'ありがとう！本当にありがとう！またね！',
    }
  ],
  homepage: [
    {
      name: '本名　次郎',
      nameEn: 'Jiro Honmyo',
      classLabel: '情報機械システム工学科 4年',
      role: 'ホームページ制作',
      message: 'ありがとう！本当にありがとう！またね！',
    },
    {
      name: '本名　次郎',
      nameEn: 'Jiro Honmyo',
      classLabel: '情報機械システム工学科 4年',
      role: 'ホームページ制作',
      message: 'ありがとう！本当にありがとう！またね！',
    },
    {
      name: '本名　次郎',
      nameEn: 'Jiro Honmyo',
      classLabel: '商船学科 2年',
      role: 'ホームページ制作',
      message: 'ありがとう！本当にありがとう！またね！',
    }
  ],
  photo: [
    {
      name: '本名　次郎',
      nameEn: 'Jiro Honmyo',
      classLabel: '情報機械システム工学科 3年',
      role: '写真コンテスト運営',
      message: 'ありがとう！本当にありがとう！またね！',
    },
    {
      name: '本名　次郎',
      nameEn: 'Jiro Honmyo',
      classLabel: '商船学科 2年',
      role: '写真コンテスト運営',
      message: 'ありがとう！本当にありがとう！またね！',
    },
    {
      name: '本名　次郎',
      nameEn: 'Jiro Honmyo',
      classLabel: '商船学科 2年',
      role: '写真コンテスト運営',
      message: 'ありがとう！本当にありがとう！またね！',
    },
    {
      name: '本名　次郎',
      nameEn: 'Jiro Honmyo',
      classLabel: '商船学科 2年',
      role: '写真コンテスト運営',
      message: 'ありがとう！本当にありがとう！またね！',
    }
  ],
  video: [
    {
      name: '本名　次郎',
      nameEn: 'Jiro Honmyo',
      classLabel: '海事システム学専攻 2年',
      role: '動画制作',
      message: 'ありがとう！本当にありがとう！またね！',
    },
    {
      name: '本名　次郎',
      nameEn: 'Jiro Honmyo',
      classLabel: '電子機械工学科 5年',
      role: '動画制作',
      message: 'ありがとう！本当にありがとう！またね！',
    }
  ]
};

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

      <div className="mt-20 w-full md:w-3/4 justify-between overflow-x-auto">
        <MessageArea
          group1={messages.poster}
          group2={messages.homepage}
          top
        />
        <MessageArea
          group1={messages.photo}
          group2={messages.video}
        />
      </div>
    </section>
  );
};

const MessageArea = ({ group1, group2, top }: { group1: MyMessage[], group2: MyMessage[], top?: boolean }) => {
  return (
    <div
      className={
        top === true
          ? 'mb-8 flex flex-row justify-between'
          : 'flex flex-row justify-between'
      }
      style={{
        width: `${16 * (group1.length + group2.length) + 2 * ((group1.length + group2.length) - 1)}rem`
      }}
    >
      <MessageAreaItem messages={group1} />
      <MessageAreaItem messages={group2} />
    </div>
  );
};

const MessageAreaItem = ({ messages }: { messages: MyMessage[] }) => {
  return (
    <>
      {messages.map((message) => (
        <figure
          className="w-64 h-full rounded-xl border-2 border-gray-300 bg-gray-50 overflow-hidden"
          key={message.name}
        >
          <div className="w-64 h-48 bg-yellow-300" />
          <figcaption className="p-4 text-base text-left">
            <div className="mb-2 h-10 text-sm flex flex-col justify-center">
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
    </>
  );
};

export default Message;
