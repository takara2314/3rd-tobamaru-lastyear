interface HeadlineProps {
  label: string;
  id?: string;
}

export const Headline1 = ({ label, id }: HeadlineProps) => {
  return (
    <h1
      className="my-5 w-full text-4xl text-blue-900 font-bold flex flex-row justify-center"
      id={id}
    >
      {label}
    </h1>
  );
};
