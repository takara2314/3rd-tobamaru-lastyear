import { Headline1 } from '../../components/headline';

const profile = [
  {
    label: '総トン数',
    value: '244トン'
  },
  {
    label: '全長',
    value: '40.00m'
  },
  {
    label: '垂線間長',
    value: '35.00m'
  },
  {
    label: '型幅',
    value: '8.00m'
  },
  {
    label: '深さ',
    value: '7.10m'
  },
  {
    label: '型深さ',
    value: '3.30m'
  },
  {
    label: '満載喫水',
    value: '2.80m'
  },
  {
    label: '機関方式',
    value: 'ヤンマー 4サイクル低速ディーゼル機関 MF29 UTD1 x1基'
  },
  {
    label: '最大出力',
    value: '13.80ノット(試運転状態、100 % 負荷)'
  },
  {
    label: '航続距離',
    value: '約2, 300マイル'
  },
  {
    label: '搭載人員',
    value: '56名'
  },
];

const Profile = () => {
  return (
    <section className="mt-20 text-xl w-full flex flex-col items-center">
      <Headline1
        label="PROFILE"
        id="profile"
      />

      <table>
        <tbody>
          {profile.map((item) => (
            <tr key={item.label}>
              <th className="py-1 w-40 text-left font-medium">
                {item.label}
              </th>
              <td className="text-left">
                {item.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Profile;
