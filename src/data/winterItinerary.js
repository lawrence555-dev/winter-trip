import { 
  Plane, 
  ShoppingBag, 
  Camera, 
  Utensils, 
  Hotel, 
  MapPin, 
  Coffee, 
  Car, 
  Flame, 
  Sparkles, 
  Activity, 
  Compass, 
  Heart, 
  Waves, 
  Smile, 
  ShieldCheck, 
  Sun,
  Footprints,
  Baby
} from 'lucide-react';

export const winterItinerary = [
  {
    day: 1,
    date: '12/19 (週五)',
    title: '啟程九州 ➔ 別府海地獄 ➔ 奢華 Glamping BBQ',
    summary: '11:15 抵達福岡機場，辦理國際線取車與 KEP，一路開往別府快閃海地獄，夜宿 GRAND VERDE RESORT 享受極致露營 BBQ。',
    region: '福岡 ➜ 大分別府',
    driveTime: '約 2 小時 (高速公路)',
    stay: 'GRAND VERDE RESORT (奢華露營 / Glamping)',
    activities: [
      {
        time: '11:15',
        title: '抵達福岡機場 ＆ 國際線航廈取車',
        desc: '班機抵達福岡機場 (FUK)。出關後至租車櫃檯辦理取車手續，妥善安裝兒童安全座椅，並務必加購「KEP 九州高速公路護照 (Kyushu Expressway Pass)」。',
        icon: Plane,
        type: 'transit',
        highlight: true,
        map: 'Fukuoka Airport International Terminal',
        camera: {
          mode: '超廣角 / 1x 廣角 (大師模式)',
          desc: '九州自駕啟程紀念',
          settings: 'EV +0.3，捕捉家庭出發的興奮神情與租車自駕合照'
        }
      },
      {
        time: '12:30–14:30',
        title: '國道自駕長征 ➔ 奔向別府溫泉鄉',
        desc: '由福岡直奔別府（車程約 2 小時）。沿途欣賞九州冬日山景，中途於高速公路大型服務區 (SA) 稍作休息並享用在地輕食便當。',
        icon: Car,
        type: 'transit',
        map: 'Kusu Service Area'
      },
      {
        time: '14:30–16:00',
        title: '快閃別府海地獄 ＆ 溫泉蛋體驗',
        desc: '造訪別府最著名的「海地獄」，欣賞如湛藍海面般沸騰的98度高溫地熱溫泉，白煙裊裊，現場品嚐利用地熱蒸熟的溫泉蛋與極品布丁。',
        icon: Flame,
        type: 'activity',
        map: 'Umi Jigoku Beppu',
        camera: {
          mode: 'XPAN 電影寬幅 / 1x 廣角',
          desc: '沸騰湛藍溫泉池與白霧裊裊',
          settings: 'EV -0.3 壓低高光保留蒸氣立體層次，XPAN 寬幅呈現地熱震撼全景'
        }
      },
      {
        time: '16:30～',
        title: '入住 GRAND VERDE RESORT ＆ 極致露營 BBQ',
        desc: '提早抵達高原度假勝地辦理 Check-in。享受頂級豪華露營設施與大自然星空，晚餐於獨立圓頂營帳或露台享用頂級和牛海陸 BBQ 盛宴。',
        icon: Hotel,
        type: 'stay',
        highlight: true,
        map: 'GRAND VERDE RESORT',
        camera: {
          mode: '哈蘇夜景模式 / 3x 潛望長焦微距',
          desc: '露營帳篷暖光與炭火和牛燒肉特寫',
          settings: '3x 長焦避開頂光陰影，對焦肉質油花紋理；大師夜景捕捉冬夜營火氛圍'
        }
      }
    ],
    notes: [
      { text: '【KEP 護照提醒】九州自駕收費站過路費高昂，取車時務必確認已啟用 ETC 卡並綁定 KEP 吃到飽方案。' },
      { text: '【冬日保暖】別府高原日落後氣溫驟降（約 3-8°C），露營 BBQ 建議備妥保暖防風外套。' }
    ]
  },
  {
    day: 2,
    date: '12/20 (週六)',
    title: '九州自然動物園 叢林巴士 ➔ 由布院私人溫泉別墅',
    summary: '退房後開車 25 分鐘衝九州自然動物園餵猛獸，下午入住 Rakuten STAY VILLA 由布院溫泉，漫步湯之坪與童話村。',
    region: '別府 ➜ 由布院',
    driveTime: '約 50 分鐘 (分段 25m + 25m)',
    stay: 'Rakuten STAY VILLA 由布院溫泉 (獨棟私人風呂別墅)',
    activities: [
      {
        time: '09:00',
        title: '退房出發 ➔ 奔向野生動物園',
        desc: '享用度假村晨光早餐後退房，自駕約 25 分鐘抵達九州自然動物園。',
        icon: Car,
        type: 'transit',
        map: 'African Safari Kyushu'
      },
      {
        time: '09:30–13:30',
        title: '九州自然動物園 (African Safari)：叢林巴士親手餵食',
        desc: '搭乘特製「叢林巴士 (Jungle Bus)」進入野生動物放養區，用長夾親手餵食獅子、大象與黑熊！隨後前往親親小動物區撫摸袋鼠、小天竺鼠與迷你馬。',
        icon: Heart,
        type: 'activity',
        highlight: true,
        map: 'African Safari Kyushu',
        camera: {
          mode: '哈蘇大師高速抓拍 / 3x 潛望長焦',
          desc: '孩子親手餵食獅子震撼瞬間',
          settings: '快門 1/500s 以上，連拍模式鎖定孩子驚喜表情與猛獸迫近特寫'
        }
      },
      {
        time: '13:30–14:00',
        title: '自駕前往溫泉名湯「由布院」',
        desc: '沿著風景優美的由布岳山麓公路行駛，車程約 25 分鐘直達由布院。',
        icon: Car,
        type: 'transit',
        map: 'Yufuin'
      },
      {
        time: '14:30～',
        title: '入住 Rakuten STAY VILLA 由布院溫泉 ＆ 漫步湯之坪',
        desc: '入住獨棟高隱私溫泉別墅。下午漫步湯之坪街道、造訪由布院童話村 (Yufuin Floral Village) 品嚐金賞可樂餅與人氣蛋糕卷，傍晚回房享受私人天然溫泉風呂。',
        icon: Hotel,
        type: 'stay',
        highlight: true,
        map: 'Rakuten STAY VILLA Yufuin Onsen',
        camera: {
          mode: '哈蘇經典人像 (3x / 85mm)',
          desc: '湯之坪街景與童話村歐洲街角漫步',
          settings: 'EV +0.5，光圈模擬 f/2.8，背景溫泉街雜亂遊客虛化，氛圍感極佳'
        }
      }
    ],
    notes: [
      { text: '【叢林巴士預約】入園時若現場人多，請先至櫃檯劃位叢林巴士班次，等待期間可先至小動物區互動。' },
      { text: '【Rakuten STAY VILLA 優勢】獨棟附帶獨立專屬車位，進出免上下搬運大件行李，私人溫泉風呂全天隨時泡。' }
    ]
  },
  {
    day: 3,
    date: '12/21 (週日)',
    title: '金鱗湖冬晨霧 ➔ 鳥栖 Outlet 大採購 ➔ LaLaport 鋼彈 ➔ 天神',
    summary: '清晨拍攝金鱗湖夢幻霧氣，開車前往鳥栖 Outlet 開啟第一波運動潮流血拚，午後福岡 LaLaport 朝聖實物大鋼彈，夜宿天神。',
    region: '由布院 ➜ 鳥栖 ➜ 福岡天神',
    driveTime: '約 2 小時 15 分鐘 (分段 1h15m + 45m)',
    stay: '福岡天神商圈優質飯店 (市區自駕基地)',
    activities: [
      {
        time: '08:30–09:30',
        title: '金鱗湖清晨漫步 ＆ 水中鳥居晨霧',
        desc: '冬日清晨湖底溫泉水與冰冷空氣交匯，湖面升起如仙境般的晨霧。漫步至天祖神社水中鳥居，欣賞湖畔紅葉與霧氣交織。',
        icon: Waves,
        type: 'nature',
        map: 'Lake Kinrin Yufuin',
        camera: {
          mode: '哈蘇大師 6x 望遠長焦 (135mm)',
          desc: '晨霧中的水中鳥居與倒影壓縮感',
          settings: 'EV -0.3，白平衡 5400K 帶出清晨金黃微光與薄霧仙氣'
        }
      },
      {
        time: '10:30–11:45',
        title: '退房出發 ➔ 自駕前往鳥栖 Outlet',
        desc: '退房後上高速公路直奔佐賀鳥栖（車程約 1 小時 15 分鐘）。',
        icon: Car,
        type: 'transit',
        map: 'Tosu Premium Outlets'
      },
      {
        time: '11:45–14:30',
        title: '第一間 Outlet：鳥栖 Premium Outlets 運動潮流大採購',
        desc: '美式加州風格大型露天購物村！匯集 Nike、Adidas、Under Armour、New Balance、The North Face 等頂級運動與戶外品牌。午餐於美食廣場享用，戰利品直接整箱丟進後車廂！',
        icon: ShoppingBag,
        type: 'shopping',
        highlight: true,
        map: 'Tosu Premium Outlets'
      },
      {
        time: '14:30–15:15',
        title: '開車返回福岡市區 ➔ 抵達 LaLaport 福岡',
        desc: '自駕約 40-45 分鐘進入福岡博多南區的 LaLaport 大型商場。',
        icon: Car,
        type: 'transit',
        map: 'Mitsui Shopping Park LaLaport FUKUOKA'
      },
      {
        time: '15:15–18:30',
        title: 'LaLaport 福岡：1:1 實物大 RX-93ff ν 鋼彈 ＆ 晚餐',
        desc: '朝聖全日本最壯觀的 24.8 公尺實物大福岡限定鋼彈！觀賞定時聲光動態展演，進館內 GUNDAM SIDE-F 買限定模型，並於商場美食街享用豐盛晚餐。',
        icon: Sparkles,
        type: 'activity',
        map: 'RX-93ff Gundam LaLaport Fukuoka',
        camera: {
          mode: '1x 超廣角仰拍 / 3x 長焦頭部特寫',
          desc: '1:1 鋼彈雄偉全景與胸甲細節',
          settings: '仰角 0.6x 超廣角貼近地面拍出頂天立地氣勢；3x 鎖定頭部與發光眼神'
        }
      },
      {
        time: '19:00',
        title: '天神飯店 Check-in ＆ 行李輕量化上樓',
        desc: '開車抵達天神飯店停車場。戰利品與大部分行李直接安全鎖在車內後車廂，全家僅攜帶隨身「輕便過夜包」進房，徹底解放雙手！',
        icon: Hotel,
        type: 'stay',
        map: 'Tenjin Fukuoka'
      }
    ],
    notes: [
      { text: '【自駕免搬行李心法】車子停進飯店特約或室內停車場後，免去搬運大行李箱的疲勞，只需拎過夜包上樓。' },
      { text: '【鳥栖 Outlet 特點】主打強大運動與戶外服飾（Nike/NB/Patagonia/Arc\'teryx折扣極深）。' }
    ]
  },
  {
    day: 4,
    date: '12/22 (週一)',
    title: '大濠公園 Zone 2 晨跑 ＋ 湖畔星巴克親子悠閒早餐',
    summary: '清晨自駕直達大濠公園專屬停車場，開啟 2km 環湖頂級 Zone 2 晨跑；家人在絕美星巴克享用早餐，午後天神悠閒漫步。',
    region: '福岡市區 (大濠 / 天神)',
    driveTime: '約 15 分鐘 (市區短程)',
    stay: '福岡天神商圈優質飯店',
    activities: [
      {
        time: '07:30–09:00',
        title: '大濠公園 Zone 2 晨跑 ＋ 湖畔星巴克親子早餐',
        desc: '晨起開車約 10 分鐘直達大濠公園收費停車場（清晨空位極多）。換上跑鞋於日本著名 2 公里專業橡膠跑道享受絕佳 Zone 2 晨跑；老婆與 4-5 歲孩子則在隈研吾操刀之「大濠公園星巴克」臨湖玻璃屋享用熱咖啡、麵包與親子晨光。',
        icon: Activity,
        type: 'sport',
        highlight: true,
        map: 'Starbucks Coffee - Ohori Park',
        camera: {
          mode: 'XPAN 電影寬幅 / 大師運動抓拍',
          desc: '大濠公園晨跑動態與湖畔晨光星巴克',
          settings: '早晨柔和側光，XPAN 寬幅呈現跑道延伸感；3x 人像拍窗邊老婆小孩笑臉'
        }
      },
      {
        time: '09:00–10:30',
        title: '公園野鴨餵食 ＆ 湖中島漫步 ➔ 回飯店盥洗',
        desc: '跑步結束後與家人在湖心島「觀月橋」會合，全家在公園草地放電散步、看水鳥，隨後自駕回天神飯店盥洗換裝。',
        icon: Sun,
        type: 'nature',
        map: 'Ohori Park Fukuoka'
      },
      {
        time: '11:30–14:30',
        title: '天神商圈市區散策 ＆ 在地美食午餐',
        desc: '漫步天神地下街與周邊特色巷弄，午餐品嚐福岡著名的博多牛腸鍋（もつ鍋）、一雙拉麵或海鮮丼飯。',
        icon: Utensils,
        type: 'dining',
        map: 'Tenjin Underground Shopping Mall'
      },
      {
        time: '下午–晚上',
        title: '天神百貨群逛街 ＆ 親子悠閒時光',
        desc: '逛福岡 PARCO、三越百貨，隨心探索市區選物店，度過節奏寬鬆的一天。',
        icon: ShoppingBag,
        type: 'shopping',
        map: 'Fukuoka PARCO'
      }
    ],
    notes: [
      { text: '【💡 大濠公園晨跑車位秘訣】公園設有南北兩大停車場，早上 07:30-08:00 停車位非常空曠，車停好即是跑道入口，跑步與家庭早餐無縫接軌！' },
      { text: '【跑道特色】大濠公園環湖一圈整整 2 公里，路面鋪設專業緩震PU跑道，並設有精準里程標示與跑步專用道。' }
    ]
  },
  {
    day: 5,
    date: '12/23 (週二)',
    title: '帶小孩極限放電！福岡麵包超人兒童博物館 ➔ 天神百貨',
    summary: '全日室內溫暖防風行程：博多 Riverain 麵包超人博物館全方位遊樂與限定現烤麵包，下午天神岩田屋/大丸購物，夜嚐正宗博多拉麵。',
    region: '福岡市區 (中洲川端 / 天神)',
    driveTime: '約 10 分鐘 (市區短程或步行地鐵皆宜)',
    stay: '福岡天神商圈優質飯店',
    activities: [
      {
        time: '10:00–14:30',
        title: '福岡麵包超人兒童博物館 (Fukuoka Anpanman Children’s Museum)',
        desc: '位於博多 Riverain 5-6樓的全室內冷暖空調夢幻樂園！欣賞麵包超人現場歌舞秀、玩彩虹溜滑梯與沙坑，更要排隊購買果醬爺爺麵包房「現烤角色造型麵包」，4-5歲孩子的最愛！',
        icon: Baby,
        type: 'activity',
        highlight: true,
        map: 'Fukuoka Anpanman Children’s Museum in Mall',
        camera: {
          mode: '哈蘇大師人像 (3x 潛望鏡) / 1x 抓拍',
          desc: '孩子手拿麵包超人造型麵包與角色擁抱',
          settings: '室內暖色光源，EV +0.7 提亮膚色，快門 1/250s 抓拍孩子興奮瞬間'
        }
      },
      {
        time: '15:00–18:30',
        title: '天神商圈百貨巡禮：岩田屋 (IWATAYA) ＆ 大丸 (DAIMARU)',
        desc: '專攻精品、童裝、日本質感生活選品。避開擁擠的運河城，享受天神頂級百貨的精緻購物與免稅退稅服務。',
        icon: ShoppingBag,
        type: 'shopping',
        map: 'Iwataya Main Store'
      },
      {
        time: '19:00',
        title: '晚餐：道地博多豚骨拉麵巡禮',
        desc: '品嚐博多一幸舍、Shin-Shin 拉麵或暖暮，搭配一口煎餃與明太子白飯。',
        icon: Utensils,
        type: 'dining',
        map: 'Hakata Issou Fukuoka'
      }
    ],
    notes: [
      { text: '【全天候友善】麵包超人博物館完全不受冬日天候影響，館內設有專屬推車停放處與母嬰哺乳室。' },
      { text: '【造型麵包小貼士】果醬爺爺麵包工房中午前品項最齊全，建議入園後先前往選購拍照。' }
    ]
  },
  {
    day: 6,
    date: '12/24 (週三)',
    title: '太宰府星巴克「朝聖早餐」 ➔ 天神 Human Made 潮流巡禮',
    summary: '清晨避開人潮直奔隈研吾太宰府星巴克早餐與天滿宮祈福，午前回天神大名朝聖 HUMAN MADE 旗艦店與潮流街區。',
    region: '太宰府 ➜ 福岡天神大名',
    driveTime: '約 30 分鐘 (早晨順暢車流)',
    stay: '福岡天神商圈優質飯店',
    activities: [
      {
        time: '08:00–08:30',
        title: '自駕直奔太宰府天滿宮',
        desc: '清晨 08:00 出發避開上下班尖峰與後續各國遊覽車團客潮，約 30 分鐘抵達太宰府周邊停車場。',
        icon: Car,
        type: 'transit',
        map: 'Dazaifu Tenmangu Parking'
      },
      {
        time: '08:30–10:30',
        title: '太宰府天滿宮表參道星巴克 ＆ 天滿宮梅枝餅',
        desc: '在隈研吾大師運用 2000 根杉木卡榫交錯設計的絕美星巴克享用熱咖啡與早餐！隨後漫步參拜天滿宮（求學業與家庭平安），品嚐現烤酥脆的「梅枝餅 (Umegae Mochi)」。',
        icon: Coffee,
        type: 'dining',
        highlight: true,
        map: 'Starbucks Coffee - Dazaifu Tenmangu Omotesando',
        camera: {
          mode: '1x 主鏡頭大師模式 (建築縱深)',
          desc: '隈研吾木構幾何線條與表參道晨曦',
          settings: 'EV +0.3 凸顯原木暖調質感，中央對稱構圖展現空間縱深'
        }
      },
      {
        time: '11:30–13:30',
        title: '朝聖 HUMAN MADE 福岡 Flagship Shop！',
        desc: '開車返回天神大名（Daimyo）潮流心臟地帶！朝聖 NIGO 主理的 HUMAN MADE 旗艦店，入手福岡限定款白虎/野鴨上衣、生活潮流配件或親子裝。',
        icon: ShoppingBag,
        type: 'shopping',
        highlight: true,
        map: 'HUMAN MADE FUKUOKA',
        camera: {
          mode: '3x 哈蘇人像 (等效 85mm)',
          desc: '天神大名潮流街拍與戰利品合影',
          settings: '大光圈散景模糊大名街頭背景，呈現日系 Clean Fit 潮流雜誌感'
        }
      },
      {
        time: '下午–傍晚',
        title: '天神大名潮流街區漫步 (Supreme / Stussy / NBHD)',
        desc: '漫步大名街區探索 Supreme、Stussy、Neighborhood、BEAMS 及各式精品古著店與獨立咖啡館。',
        icon: Footprints,
        type: 'shopping',
        map: 'Daimyo Fukuoka'
      }
    ],
    notes: [
      { text: '【太宰府黃金時段】08:30 抵達是最佳時間點，店內人少好拍照，天滿宮表參道空靈幽靜。' },
      { text: '【大名停車建議】天神大名巷弄較窄，建議將車輛停在國體道路或天神地下大型停車場再步行逛街。' }
    ]
  },
  {
    day: 7,
    date: '12/25 (週四)',
    title: '北九州長征：唐戶市場海鮮 ➔ 門司港 ➔ THE OUTLETS KITAKYUSHU',
    summary: '跨越關門海峽大橋品嚐唐戶市場生魚片，漫步門司港懷舊鐵道館，下午衝九州最大新世代 Outlet「THE OUTLETS KITAKYUSHU」與極致和牛燒肉。',
    region: '福岡 ➜ 山口下關 ➔ 門司港 ➔ 北九州八幡',
    driveTime: '約 2 小時 40 分鐘 (全天分段環狀自駕)',
    stay: '福岡天神商圈優質飯店',
    activities: [
      {
        time: '08:30–09:45',
        title: '北九州自駕遠征 ➔ 跨越關門海峽大橋',
        desc: '一路向北行駛高速公路，跨越連接本州與九州的關門海峽大橋，抵達山口縣下關市（車程約 1 小時 15 分鐘）。',
        icon: Car,
        type: 'transit',
        map: 'Kanmon Bridge'
      },
      {
        time: '09:45–12:00',
        title: '下關唐戶市場：頂級海鮮與現捏生魚握壽司盛宴',
        desc: '下關最大海鮮市場！挑選平日現切極鮮鮪魚大腹、虎河豚生魚片、海膽鮭魚卵丼，端至海邊木棧道吹海風大快朵頤。',
        icon: Utensils,
        type: 'dining',
        highlight: true,
        map: 'Karato Sea Market',
        camera: {
          mode: '3x 長焦微距美食模式',
          desc: '晶瑩剔透的海膽壽司與海鮮丼特寫',
          settings: '距離 25cm，3x 潛望鏡頭避開光線陰影，呈現生魚片油脂透亮光澤'
        }
      },
      {
        time: '12:00–14:00',
        title: '門司港懷舊區 ＆ 九州鐵道紀念館開迷你小火車',
        desc: '開車過橋抵達門司港懷舊街區，欣賞大正浪漫西洋建築；帶小孩進入「九州鐵道紀念館」親自駕駛迷你電力小火車，寓教於樂！',
        icon: Camera,
        type: 'activity',
        map: 'Kyushu Railway History Museum',
        camera: {
          mode: 'XPAN 復古黑白 / 經典彩色',
          desc: '門司港紅磚西洋建築與舊車廂',
          settings: 'XPAN 65:24 比例拍出濃郁復古膠卷歷史感'
        }
      },
      {
        time: '14:00–14:30',
        title: '前往北九州八幡東區',
        desc: '自駕約 30 分鐘前往 2022 年全新開幕的北九州巨型暢貨中心。',
        icon: Car,
        type: 'transit',
        map: 'THE OUTLETS KITAKYUSHU'
      },
      {
        time: '14:30–19:00',
        title: '第二間 Outlet：THE OUTLETS KITAKYUSHU ＆ 和牛燒肉晚餐',
        desc: '全九州最新世代超大型購物中心！品牌與鳥栖互補，相連 AEON MALL，並設有「ASOBI PARK」等大型室內親子互動遊樂設施。老婆血拚時小孩瘋玩，晚餐直接於館內享用頂級和牛燒肉，隨後自駕回天神。',
        icon: ShoppingBag,
        type: 'shopping',
        highlight: true,
        map: 'THE OUTLETS KITAKYUSHU'
      }
    ],
    notes: [
      { text: '【💡 雙 Outlet 完美區隔】鳥栖主攻歐美運動戶外品牌折扣；北九州 Outlets 則匯聚日本在地潮流服飾、日用雜貨、大型室內親子遊樂園與頂級和牛餐飲，兩者互補不重複！' },
      { text: '【自駕回程】晚餐後由八幡東 IC 上高速公路返回天神約 1 小時車程，夜間車流順暢。' }
    ]
  },
  {
    day: 8,
    date: '12/26 (週五)',
    title: '糸島絕景渡假一日遊：夫婦岩 ➔ 烤牡蠣 のぶりん 肥美午餐',
    summary: '自駕 45 分鐘前往福岡後花園糸島，造訪二見之浦純白鳥居夫婦岩，冬季必吃岐志漁港炭火現烤肥美生蠔海鮮，傍晚海岸兜風。',
    region: '福岡市區 ➜ 糸島海岸',
    driveTime: '約 45 分鐘 (單程西向自駕)',
    stay: '福岡天神商圈優質飯店',
    activities: [
      {
        time: '09:30–10:15',
        title: '開車向西 ➔ 抵達渡假勝地「糸島 (Itoshima)」',
        desc: '沿著福岡西海岸線公路自駕（車程約 45 分鐘），欣賞冬日蔚藍海景。',
        icon: Car,
        type: 'transit',
        map: 'Itoshima'
      },
      {
        time: '10:15–11:30',
        title: '櫻井二見ヶ浦 夫婦岩 ＆ 純白海上鳥居',
        desc: '糸島最具代表性的打卡聖地！屹立於湛藍海中的兩座巨大夫婦岩與神聖純白鳥居，在冬日晴空下格外純淨。',
        icon: Waves,
        type: 'nature',
        highlight: true,
        map: 'Sakurai Futamigaura of Meotoiwa',
        camera: {
          mode: 'XPAN 寬幅 / 1x 大師模式',
          desc: '純白鳥居與夫婦岩的海天一色',
          settings: 'EV -0.3 壓低天空高光，突顯海水湛藍與純白鳥居的聖潔感'
        }
      },
      {
        time: '11:45–13:30',
        title: '岐志漁港牡蠣小屋「のぶりん (Noburin)」炭火現烤牡蠣午餐',
        desc: '冬季正是糸島牡蠣最肥美的季節！全家穿上專屬圍裙，於炭火烤爐上現烤飽滿爆汁的當季生蠔、扇貝、活蝦與海鮮釜飯，親子友善且香氣四溢！',
        icon: Utensils,
        type: 'dining',
        highlight: true,
        map: 'Oyster hut Noburin Itoshima',
        camera: {
          mode: '3x 潛望長焦微距',
          desc: '炭火上滋滋作響的肥美牡蠣特寫',
          settings: '3x 長焦特寫滴下汁液的生蠔肉質，避免炭灰油煙濺到鏡頭'
        }
      },
      {
        time: '下午',
        title: '糸島海岸兜風：倫敦巴士咖啡廳 ＆ 椰子樹鞦韆',
        desc: '沿海岸公路悠閒行駛，停靠人氣「黃色倫敦雙層巴士咖啡廳」買手工義式冰淇淋，順遊沙灘椰子樹鞦韆拍下家庭溫馨紀念。',
        icon: Coffee,
        type: 'activity',
        map: 'London Bus Cafe Itoshima'
      }
    ],
    notes: [
      { text: '【冬日限定牡蠣小屋】每年 11 月至隔年 3 月是糸島牡蠣季，のぶりん 空間寬敞且設有兒童安全防護，非常適合家庭用餐。' },
      { text: '【防風提醒】糸島海邊冬日海風較強，下車拍照記得為孩子戴上防風毛帽。' }
    ]
  },
  {
    day: 9,
    date: '12/27 (週六)',
    title: '海之中道海濱公園：海洋世界水族館 ＋ 巨型戶外遊具放電',
    summary: '自駕前往海之中道，看海洋世界海豚與海獅表演，下午衝海濱公園超大型彈跳床與滾輪溜滑梯，車輛隨時作為午睡後勤站。',
    region: '福岡市區 ➜ 海之中道',
    driveTime: '約 40 分鐘 (單程跨海公路)',
    stay: '福岡天神商圈優質飯店',
    activities: [
      {
        time: '09:30–10:15',
        title: '自駕前往海之中道海濱公園',
        desc: '開車跨越志賀島聯外公路，約 40 分鐘抵達海之中道專屬停車場。',
        icon: Car,
        type: 'transit',
        map: 'Uminonakamichi Seaside Park'
      },
      {
        time: '10:15–13:00',
        title: '海洋世界海之中道水族館 (Marine World)：海豚海獅大秀',
        desc: '以博多灣為背景的壯闊全景表演池！觀賞海豚高空飛躍與海獅逗趣互動，並穿梭於巨型全景水族箱觀賞近萬條沙丁魚群風暴。',
        icon: Waves,
        type: 'activity',
        highlight: true,
        map: 'Marine World Uminonakamichi',
        camera: {
          mode: '哈蘇 3x / 6x 長焦高速抓拍',
          desc: '海豚躍出水面與水花飛濺瞬間',
          settings: '快門 1/1000s，AI 追焦鎖定跳躍海豚'
        }
      },
      {
        time: '13:00–16:00',
        title: '國營海之中道海濱公園：巨型戶外遊具 ＆ 巨蛋彈跳床',
        desc: '日本頂級國營公園！擁有超長滾輪溜滑梯、充氣雲朵巨蛋彈跳床（鯨魚雲）與森林遊具。孩子極限放電，玩累了隨時能回後座車上舒適午睡！',
        icon: Smile,
        type: 'activity',
        highlight: true,
        map: 'Uminonakamichi Seaside Park'
      },
      {
        time: '傍晚',
        title: '返回福岡市區 ＆ 最後戰利品大整理',
        desc: '開車回飯店，悠閒享用福岡最後一晚的豐盛晚餐，並在房內將這十天的雙 Outlet 戰利品分門別類裝箱。',
        icon: Hotel,
        type: 'stay',
        map: 'Tenjin Fukuoka'
      }
    ],
    notes: [
      { text: '【自駕後勤優勢】海之中道腹地廣大，開車前往可備妥野餐墊與備用衣物，孩子玩累直接在車上安全座椅熟睡，家長輕鬆無壓力。' }
    ]
  },
  {
    day: 10,
    date: '12/28 (週日/一)',
    title: '最後巡禮 ➔ 福岡機場還車 ➔ 12:15 BR105 滿載返台',
    summary: '退房後清點所有戰利品，開車至機場租車營業所快速還車，搭乘接駁車至國際線航廈辦理長榮 BR105 登機手續，平安返台。',
    region: '福岡市區 ➔ 福岡機場 ➔ 台灣桃園 (TPE)',
    driveTime: '約 25 分鐘 (市區至機場)',
    stay: '溫暖的家',
    activities: [
      {
        time: '08:30–09:00',
        title: '飯店辦理退房 ＆ 行李上車',
        desc: '辦理飯店退房，所有行李箱與戰利品確認收妥於後車廂，清點護照、隨身貴重物品與車載充電器。',
        icon: Hotel,
        type: 'stay',
        map: 'Tenjin Fukuoka'
      },
      {
        time: '09:00–09:30',
        title: '自駕前往福岡機場租車門市辦理還車',
        desc: '於機場前最後一家加油站加滿油（Regular汽油），前往租車門市交車，結算 KEP 通行費與車況檢查。',
        icon: Car,
        type: 'transit',
        highlight: true,
        map: 'Fukuoka Airport Car Rental Return'
      },
      {
        time: '09:30～',
        title: '國際線航廈登機手續 ＆ 購買福岡名產',
        desc: '搭乘租車公司免費接駁專車直達國際線航廈。辦理長榮航空 BR105 托運登機，於免稅店採購博多通布利、明太子仙貝與手信。',
        icon: ShoppingBag,
        type: 'shopping',
        map: 'Fukuoka Airport International Terminal'
      },
      {
        time: '12:15',
        title: '長榮航空 BR105 起飛 ➔ 抵達台北桃園',
        desc: '搭乘長榮航空 BR105 班機（12:15 起飛），預計 14:10 抵達台北桃園國際機場 (TPE)，為十天精彩自駕之旅劃下完美句點！',
        icon: Plane,
        type: 'transit',
        highlight: true,
        map: 'Taoyuan International Airport'
      }
    ],
    notes: [
      { text: '【還車前加滿油】日本租車合約皆為滿油還車，請保留加油發票供租車公司人員查驗。' },
      { text: '【機場免稅店】入關後可於免稅店採買知名伴手禮（如「博多通里門」、福砂屋長崎蛋糕、一蘭拉麵盒裝）。' }
    ]
  }
];

export const drivingHighlights = [
  {
    title: '大濠公園 Zone 2 晨跑專用車位',
    summary: '清晨 7:30 停車位極為空曠，車停好即是跑道起點',
    desc: '大濠公園本身附設大型付費停車場，清晨 7:30 左右的位置非常空，開車過去直接停好，即可無縫開啟您的 Zone 2 晨跑。老婆和孩子可在湖畔星巴克悠閒享用早餐。',
    tag: '運動 & 車位',
    icon: Activity
  },
  {
    title: '雙 Outlet 深度區隔解析',
    summary: '鳥栖美式運動 ✕ 北九州新世代親子潮流',
    desc: '鳥栖偏向傳統美式露天 Outlets，運動服飾（Nike/NB/The North Face）極強；北九州 Outlets 則是 2022 年才開幕的新商場，與當地的 AEON 購物中心相連，有更多日本在地潮流設計品牌與大型室內親子娛樂設施（ASOBI PARK），兩者都去完全不會重複。',
    tag: '雙 Outlet',
    icon: ShoppingBag
  },
  {
    title: 'KEP (Kyushu Expressway Pass) 必辦',
    summary: '外國人專屬高速公路 ETC 吃到飽護照',
    desc: '本次行程橫跨福岡、別府、由布院、鳥栖、北九州與門司港，路程超過 600 公里。於福岡機場取車時加購 KEP 方案，可節省高達 40% 以上過路費且無需逐站付現。',
    tag: '自駕省錢',
    icon: ShieldCheck
  },
  {
    title: '免搬行李「過夜包」極簡心法',
    summary: '戰利品鎖後車廂，天神連住僅拎隨身包',
    desc: '在由布院與天神飯店住宿時，大部分行李箱與 Outlet 大件戰利品直接鎖在車內後車廂，進飯店只帶輕便過夜包（換洗衣物與盥洗包），省去每日上下搬運沉重行李的負擔。',
    tag: '家庭後勤',
    icon: Hotel
  }
];

export const packingChecklist = [
  { category: '證件與自駕', items: ['台灣駕照正本', '日文譯本駕照', '全家護照 (效期6個月以上)', 'KEP / ETC 預約確認單', '租車預約單與保險證明'] },
  { category: '運動與跑步裝備', items: ['Zone 2 跑鞋 (如 Nike / Hoka / Asics)', '透氣排汗防風跑步風衣', '跑步運動短褲 / 壓力褲', '運動手錶 (Garmin / Apple Watch) 及心率監測', '跑步專用運動水壺與止汗帶'] },
  { category: '攝影與科技器材', items: ['OPPO Find 9 Ultra 旗艦手機', '哈蘇專業鏡頭清潔布', '車充雙孔快充頭 & 磁吸車架', '高容量行動電源 (20000mAh)', '降噪耳機 / 兒童防噪耳機'] },
  { category: '家庭與兒童必備', items: ['4-5 歲兒童保暖發熱衣 & 羽絨外套', '毛帽 / 手套 / 保暖圍巾', '常備藥品 (退燒、止咳、腸胃、暈車藥)', '輕便折疊傘 / 濕紙巾 / 酒精擦', '便攜保溫水壺'] }
];
