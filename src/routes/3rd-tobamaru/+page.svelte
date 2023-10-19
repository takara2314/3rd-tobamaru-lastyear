<script>
  import MetaTags from "../../components/MetaTags.svelte";
    import PrimaryBtn from "../../components/buttons/PrimaryBtn.svelte";
  import H2 from "../../components/headers/H2.svelte";

  const profiles = [
    {
      label: "総トン数",
      value: "244トン"
    },
    {
      label: "全長",
      value: "40.00m"
    },
    {
      label: "垂線間長",
      value: "35.00m"
    },
    {
      label: "型幅",
      value: "8.00m"
    },
    {
      label: "深さ",
      value: "7.10m"
    },
    {
      label: "型深さ",
      value: "3.30m"
    },
    {
      label: "満載喫水",
      value: "2.80m"
    },
    {
      label: "機関方式",
      value: "ヤンマー 4サイクル低速ディーゼル機関 MF29 UTD1 x1基"
    },
    {
      label: "最大出力",
      value: "13.80ノット(試運転状態、100 % 負荷)"
    },
    {
      label: "航続距離",
      value: "約2,300マイル"
    },
    {
      label: "搭載人員",
      value: "56名"
    }
  ];
</script>

<MetaTags
  title="3代目鳥羽丸"
  description="3代目鳥羽丸について詳しく説明します。"
  href="/3rd-tobamaru"
/>

<main>
  <article>
    <H2>
      3代目鳥羽丸
    </H2>
    <div>
      鳥羽丸（とばまる）とは、鳥羽商船高等専門学校が保有する練習船です。
    </div>

    <table>
      <tbody>
        {#each profiles as profile}
          <tr>
            <th>
              {profile.label}
            </th>
            <td class="text-left">
              {profile.value}
            </td>
          </tr>
        {/each}
      </tbody>
    </table>

    <PrimaryBtn
      label="商船学科のページで詳しく見る！"
      href="https://www.maritime.toba-cmt.ac.jp/tobamaru/"
    />
  </article>
</main>

<style>
  article {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  table {
    width: 90%;
    margin-top: 3rem;
    margin-bottom: 3rem;
    text-align: left;
  }

  tr {
    line-height: 3rem;
    border-bottom: solid 0.1rem rgb(226, 226, 226);
  }

  th {
    width: 50%;
  }

  td {
    width: 50%;
  }

  @media (min-width: 1024px) {
    table {
      width: 60%;
      margin-top: 3rem;
      text-align: left;
    }

    th {
      width: 20%;
    }

    td {
      width: 80%;
    }
  }
</style>
