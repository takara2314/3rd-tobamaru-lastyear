import AnimationTrigger from '../../components/animationTrigger';
import { Headline1 } from '../../components/headline';
import MyMessage from '../../models/messages';

const messages: MyMessage[] = [
  {
    role: '機関長',
    message: 'こんにちは！\nここに文章が入ります！'
  },
  {
    role: '鳥羽丸乗組員',
    message: 'こんにちは！\nここに文章が入ります！'
  },
  {
    role: '鳥羽丸乗組員',
    message: 'こんにちは！\nここに文章が入ります！'
  },
  {
    role: '検討会長',
    message: 'こんにちは！\nここに文章が入ります！'
  },
  {
    role: '商船学科生',
    message: 'こんにちは！\nここに文章が入ります！'
  },
  {
    role: '商船学科生',
    message: 'こんにちは！\nここに文章が入ります！'
  },
  {
    role: '海事システム学専攻生',
    message: 'こんにちは！\nここに文章が入ります！'
  },
  {
    role: 'OB',
    message: 'こんにちは！\nここに文章が入ります！'
  },
  {
    role: 'OB',
    message: 'こんにちは！\nここに文章が入ります！'
  },
  {
    role: 'OB',
    message: 'こんにちは！\nここに文章が入ります！'
  }
];

const Message = () => {
  return (
    <section className="mt-20 text-xl w-full flex flex-col items-center">
      <Headline1
        label="MESSAGE"
        id="message"
      />

      <AnimationTrigger
        animation="fadeIn flex flex-col md:grid md:grid-cols-3 md:gap-8"
        rootMargin="100px"
        className="w-full md:w-3/4"
        triggerOnce
      >
        <div className="w-full h-72 bg-yellow-500 rounded-xl col-span-1" />
        <div className="p-4 text-left col-span-2">
          <h3 className="mb-2 text-xl text-tobamaru-600 font-medium">
            船長
          </h3>
          <div className="font-message">
            <p>
              こんにちは！
            </p>
            <p>
              ここに文章が入ります！
            </p>
          </div>
        </div>
      </AnimationTrigger>

      <div className="mt-20 w-full md:w-3/4 justify-between overflow-x-auto">
        <MessageArea
          group={messages.slice(0, (messages.length + 1) / 2)}
          top
        />
        <MessageArea
          group={messages.slice((messages.length + 1) / 2, messages.length)}
        />
      </div>
    </section>
  );
};

const MessageArea = ({ group, top }: { group: MyMessage[], top?: boolean }) => {
  return (
    <div
      className={
        top === true
          ? 'mb-8 flex flex-row justify-between'
          : 'flex flex-row justify-between'
      }
      style={{
        width: `${16 * group.length + 2 * (group.length - 1)}rem`
      }}
    >
      <MessageAreaItem messages={group} />
    </div>
  );
};

const MessageAreaItem = ({ messages }: { messages: MyMessage[] }) => {
  return (
    <>
      {messages.map((message, index) => (
        <figure
          className="w-64 h-full rounded-xl border-2 border-gray-300 bg-gray-50 overflow-hidden"
          key={index}
        >
          <div className="w-64 h-48 bg-yellow-300" />
          <figcaption className="p-4 text-base text-left">
            <h3 className="mb-2 h-10 text-lg text-tobamaru-600 font-medium flex flex-col justify-center">
              {message.role}
            </h3>
            <div className="font-message">
              {message.message}
            </div>
          </figcaption>
        </figure>
      ))}
    </>
  );
};

export default Message;
