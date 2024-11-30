<script>
    import MetaTags from "../../../components/MetaTags.svelte";
    import H2 from "../../../components/headers/H2.svelte";
    import PrimaryBtn from "../../../components/buttons/PrimaryBtn.svelte";
  </script>
  
  <MetaTags
    title="第59回鳥羽商船海学祭に出展します！"
    description="操船体験やコンテストの結果発表、おたのしみなどなど"
    href="/news/2024-photo-contest"
  />
  
  <main>
    <article>
      <H2 newsDatetime="2024-10-08 00:00">
        第59回鳥羽商船海学祭に出展します！
      </H2>
      <div>
        今年の海学祭では
        <div class="list">
          <li>四代目鳥羽丸パネル展</li>
          <li>鳥羽丸写真コンテスト表彰作品展示</li>
          <li>操船体験会</li>
        </div>
        を行います。
        <br>
        場所は2号館3階航法教室です。
      </div>
    </article>

    <br>
    <br>

    <article>
      <H2>操船体験会</H2>
      以下の2種類の体験を用意しております。
      <div class="list">
        <li>5～10分程度のプチ操船体験会</li>
        <li><span class="notice">【予約必須】</span>1時間程度の実践的な操船体験</li>
      </div>
      場所は2号館3階航法教室及び操船シュミレーター室です。
      <br>
      <br>
      <p>以下は体験可能時間です。</p>
      <div class="list">
        プチ操船体験会【予約不要】
        <br>
        11/30 14:00～16:00 
        <br>
        12/1 13:00～15:00
      </div>
      <br>
      <div class="list">
        実践的な操船体験会<span class="notice">【予約必須】</span>
        11/30 12:50～14:00  
        <br>
        12/1  09:00～10:15
        <br>
        12/1  10:20～11:30
      </div>
    </article>

    <br>
    <br>

    <article>
      <H2>操船体験会の予約<br><span class="notice">予約は終了しました。</span></H2>
      <div class="regist">
        実践的な操船体験を行うには予約が必要です。以下から予約できます。パスワードは"<strong>1080</strong>"(とばまる)です。
        <br>
        人数制限がある為、ご希望に添えない場合がございます。
        <br>
        <span class="notice">予約にはYahooIDが必要です。</span>
        <br>
        <br>
        <div class="disable">
          <PrimaryBtn
            href=""
            label="予約ページ"
          />
        </div>
      </div>
    </article>



  </main>
  
  <style>
    .list {
      list-style-type: circle;
      text-align: left;
      margin-left: calc(50vw - 200px);
      margin-right: calc(50vw - 200px);
      color: var(--text-color);
      padding: 0.5rem 2.5rem;
      border-radius: 1rem;
      background-color: var(--secondary-btn-bg-color);
      box-shadow: 0 0.25rem 0.1rem var(--secondary-btn-shadow-color);
    }

    .notice {
      color: red;
    }

    strong {
      color: rgb(145, 90, 90);
    }

    .regist {
      opacity: 50%;
      margin-left: calc(50vw - 500px);
      margin-right: calc(50vw - 500px);
      background: repeating-linear-gradient(45deg, #ccc, #ccc 20px, #fff 0, #fff 40px);
      border-radius: 1rem;
      padding-bottom: 1em;
    }

    .disable {
      filter: grayscale(1);
    }
  </style>
  