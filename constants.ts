import { Question, ResultType, ResultContent } from './types';

export const QUESTIONS: Question[] = [
  {
    text: '當你想到要為自己的專業寫一篇文章時，你腦中第一個閃過的想法是？',
    options: [
      { text: '不知道要寫什麼，感覺自己的東西沒什麼特別。', type: ResultType.Explorer },
      { text: '如果被同事或老闆看到怎麼辦？還是低調點好。', type: ResultType.Thinker },
      { text: '寫了幾篇但沒人看，不知道問題出在哪。', type: ResultType.LoneRanger },
    ],
  },
  {
    text: '你對於「下班後經營個人品牌」的態度比較接近？',
    options: [
      { text: '很有興趣，但總覺得事情很多，不知從何開始。', type: ResultType.Explorer },
      { text: '這是個不錯的備案，但想到可能沒收入就不敢行動。', type: ResultType.Thinker },
      { text: '已經在做了，但感覺很零散，希望能更有系統。', type: ResultType.LoneRanger },
    ],
  },
  {
    text: '看到別人成功經營個人品牌，你的感覺比較偏向？',
    options: [
      { text: '很羨慕，但覺得自己沒那麼厲害，應該做不到。', type: ResultType.Explorer },
      { text: '擔心現在才開始太晚了，市場已經飽和。', type: 'Thinker' as ResultType },
      { text: '佩服他們的毅力，也好奇他們是怎麼規劃時間和內容的。', type: ResultType.LoneRanger },
    ],
  },
  {
    text: '如果有一個週末的空閒時間，你最可能拿來做什麼？',
    options: [
      { text: '看影集或打電動，先好好放鬆再說。', type: ResultType.Explorer },
      { text: '研究各種賺錢的方法或副業資訊，但還沒決定要做哪一個。', type: ResultType.Thinker },
      { text: '上線上課程或看書，為自己的專業增添更多技能。', type: ResultType.LoneRanger },
    ],
  },
  {
    text: '你認為建立個人品牌最大的障礙是什麼？',
    options: [
      { text: '找不到自己獨特的定位和價值。', type: ResultType.Explorer },
      { text: '害怕失敗或別人的評價，不敢踏出第一步。', type: ResultType.Thinker },
      { text: '缺乏一套有效率的內容產出和推廣流程。', type: ResultType.LoneRanger },
    ],
  },
];

export const RESULT_DETAILS: Record<ResultType, ResultContent> = {
  [ResultType.Explorer]: {
    title: '有專業但不知如何開始的人',
    whatYouNeed: "你想找一個清楚的起點，知道該如何開始建立個人品牌、如何驗證市場需求、如何賺到第一筆錢。",
    coursePitch: `這場講座就是專為像你一樣，想開始但不知從何開始的「潛力股探險家」所設計。在 【階段 1 | 上班時的準備，如何在不辭職的情況下開始】，朱騏將直接給你：

- 一套「間歇式日記法」：一套「學到什麼就寫什麼」的低壓力寫作法，讓你每天只花 30 分鐘，就能輕鬆踏出分享專業的第一步。
- 一個「讀書會 MVP 驗證」流程：直接告訴你為什麼讀書會是最適合新手的付費產品，並公開完整流程，讓你賺到第一筆「知識收入」，親身體驗「原來我的知識真的有人願意付費」。

你缺的不是能力，只是一張地圖。`,
    ctaButtonText: "點我報名，領取你的起點地圖"
  },
  [ResultType.Thinker]: {
    title: '想離職但還在猶豫的人',
    whatYouNeed: "你希望能做出更有信心的決定，而不是在恐懼和衝動之間擺盪。",
    coursePitch: `這場講座將幫助在十字路口猶豫的你，看清前方的路。在 【階段 2 | 離職前的準備，如何安全地過渡】，朱騏將分享他最真實的經驗，你會得到：

- 一份「FUD 清單模板」：一個強大的實用工具，教你系統化地整理你的恐懼 (Fear)、不確定 (Uncertainty)、懷疑 (Doubt)，並找到應對方法，從「我好害怕」變成「我知道最壞會怎樣」。
- 一套「離職說明書」的規劃方法：帶你計算最低生活成本、緊急預備金與停損點，並在離職前就「試跑」你的新生活，做好萬全準備。

你的未來，不該被恐懼定義。`,
    ctaButtonText: "點我報名，為自己畫出安全的離職路線"
  },
  [ResultType.LoneRanger]: {
    title: '已經開始但缺乏系統的人',
    whatYouNeed: "你渴望有一套系統化的方法，讓你的努力可以累積、可以複製、可以規模化。\n\n你想知道：那些成功的創作者，到底是怎麼做到的？",
    coursePitch: `這場講座將讓你從「求生存」邁向「系統化經營」。在 【階段 3 & 4 | 從建立工作系統到系統化經營】，你將學到朱騏親身實踐的營運心法：

- 一套「深度工作系統」：學會番茄鐘工作法與時間追蹤，讓你在沒有老闆監督的情況下，每天穩定完成 4 小時的高價值工作。
- 一個「一人公司 SOP 營運系統」：了解如何將重複性的工作轉化為可複製的流程，用 SOP 節省 40% 的工作時間，讓你的事業真正有效率地成長。

別再單打獨鬥，讓系統成為你最強的夥伴。`,
    ctaButtonText: "點我報名，打造你的個人品牌營運系統"
  },
};