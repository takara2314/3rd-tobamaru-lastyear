import { Headline1 } from '../../components/headline';

const About = () => {
  return (
    <section className="text-xl w-full leading-10 tracking-wide flex flex-col items-center">
      <Headline1
        label="ABOUT"
        id="about"
      />

      <div>
        <p>
          鳥羽丸（とばまる）は、鳥羽商船高等専門学校が保有する練習船です。
        </p>
        <p>
          現在は1994年に建造された3代目が運用されており、主に商船学科の学生の航海実習に使用されています。
        </p>
        <p>
          これまで、多くの方の記憶に刻まれていた
        </p>
        <p>
          3代目鳥羽丸は2025年3月に引退予定です。
        </p>
      </div>

      <div className="w-3/4 bg-sky-300 rounded-xl" />

      <div className="mt-10">
        <p>
          鳥羽丸Last Year Project検討会は、代船入替えに向けて記念行事、
        </p>
        <p>
          在校生や卒業生の鳥羽商船に対する愛着や地域の人々の親しみを
        </p>
        <p>
          より深めるための企画を検討する学校公認の学生団体です。
        </p>
      </div>
    </section>
  );
};

export default About;
