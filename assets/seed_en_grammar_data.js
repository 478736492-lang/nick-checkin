/* R24-5：英语小知识 —— 整个英语语法体系（汇总整理版）
 * 结构：window.EN_GRAMMAR = { sections:[ { key, icon, title, tag, intro, blocks:[{h,p,li:[]}] } ], rhymes:[{n,t,body:[]}] }
 * 覆盖：十大词类 / 名词 / 冠词 / 形容词 / 代词 / 动词与系动词 / 数词 / 介词 / 连词 / 副词
 *      八种句子成分 / 四种句子种类 / 八种句子结构 / 五种从句 / 五种特殊句式 / 八种时态 / 51 条语法顺口溜
 */
(function(){
  var sections = [
    /* ============ 1. 十大词类 ============ */
    { key:'cilei', icon:'🔤', title:'十大词类', tag:'词法基础',
      intro:'英语单词按语法作用分成十大类。认清词类，才能判断一个词在句子里能干什么。',
      blocks:[
        { h:'① 名词 n.（noun）', p:'表示人、事物、地点、抽象概念的名称。', li:['boy 男孩 / school 学校 / water 水 / love 爱'] },
        { h:'② 代词 pron.（pronoun）', p:'代替名词，避免重复。', li:['I 我 / you 你 / he 他 / this 这个 / who 谁'] },
        { h:'③ 动词 v.（verb）', p:'表示动作或状态，是句子的核心。', li:['run 跑 / eat 吃 / be 是 / have 有'] },
        { h:'④ 形容词 adj.（adjective）', p:'修饰名词，说明人或事物的特征。', li:['big 大的 / happy 快乐的 / red 红色的'] },
        { h:'⑤ 副词 adv.（adverb）', p:'修饰动词、形容词或整句，说明程度、方式、时间、地点。', li:['quickly 迅速地 / very 非常 / here 这里 / often 经常'] },
        { h:'⑥ 数词 num.（numeral）', p:'表示数目和顺序。', li:['one 一（基数词）/ first 第一（序数词）'] },
        { h:'⑦ 冠词 art.（article）', p:'放在名词前，帮助确定名词的泛指或特指。', li:['a / an（不定冠词）、the（定冠词）'] },
        { h:'⑧ 介词 prep.（preposition）', p:'表示名词与其他词的关系，后面接名词或代词宾格。', li:['in 在…里 / on 在…上 / at 在 / with 和…一起'] },
        { h:'⑨ 连词 conj.（conjunction）', p:'连接词、短语或句子。', li:['and 和 / but 但是 / or 或者 / because 因为'] },
        { h:'⑩ 感叹词 interj.（interjection）', p:'表示强烈情感，独立于句子结构。', li:['Oh! 哦！/ Wow! 哇！/ Hi! 嗨！'] }
      ] },

    /* ============ 2. 名词 ============ */
    { key:'noun', icon:'📦', title:'名词（3 大要点）', tag:'词法',
      intro:'名词考三件事：分几类、复数怎么变、所有格怎么写。',
      blocks:[
        { h:'要点一：名词的种类', p:'按能否数分为可数名词与不可数名词。', li:[
          '可数名词：有单数和复数 —— a book / two books',
          '不可数名词：没有复数形式 —— water, milk, rice, bread, money, news',
          '不可数名词要计量，用「量词 + of」—— a glass of water 一杯水；two pieces of bread 两片面包'
        ] },
        { h:'要点二：可数名词变复数', p:'规则变化 4 条 + 不规则变化。', li:[
          '一般加 -s：book → books；pen → pens',
          '以 s, x, sh, ch 结尾加 -es：bus → buses；box → boxes；watch → watches',
          '辅音字母 + y 结尾：变 y 为 i 再加 -es：baby → babies；city → cities',
          '以 f, fe 结尾：变 f/fe 为 v 再加 -es：leaf → leaves；knife → knives',
          '不规则：man → men；woman → women；child → children；foot → feet；tooth → teeth；mouse → mice',
          '单复数同形：sheep, fish, deer, Chinese, Japanese'
        ] },
        { h:'要点三：名词所有格（表示「谁的」）', p:'有 -s 所有格与 of 所有格两种。', li:[
          '单数名词加 \u2019s：Tom\u2019s bag 汤姆的书包',
          '复数以 s 结尾只加 \u2019：the students\u2019 books 学生们的书',
          '复数不以 s 结尾加 \u2019s：the children\u2019s room 孩子们的房间',
          '无生命名词多用 of：the door of the room 房间的门',
          '共同拥有只在最后一个名词加 \u2019s：Tom and Jerry\u2019s room（两人共用一间）'
        ] }
      ] },

    /* ============ 3. 冠词 ============ */
    { key:'article', icon:'🅰️', title:'冠词（4 大用法）', tag:'词法',
      intro:'冠词只有三个：a / an / the，但用错就是最常见的错误。',
      blocks:[
        { h:'用法一：不定冠词 a / an', p:'表示「一个」，用于第一次提到的单数可数名词。', li:[
          'a 用在辅音音素前：a book / a dog / a university（读 /ju/，用 a）',
          'an 用在元音音素前：an apple / an egg / an hour（h 不发音，用 an）',
          '看的是读音，不是字母'
        ] },
        { h:'用法二：定冠词 the', p:'表示特指「这个/那个」，双方都知道的人或物。', li:[
          '再次提到上文出现的事物：I have a cat. The cat is white.',
          '世界上独一无二：the sun 太阳 / the moon 月亮 / the earth 地球',
          '序数词、最高级前：the first 第一 / the tallest 最高的',
          '乐器前：play the piano 弹钢琴',
          '方位、河流、山脉前：in the east 在东方'
        ] },
        { h:'用法三：零冠词（不用冠词）', p:'以下情况前面不加冠词。', li:[
          '不可数名词与复数泛指：Water is important. / Dogs are friendly.',
          '专有名词：China, Nick, Monday, May',
          '球类、棋类运动前：play football 踢足球 / play chess 下棋',
          '三餐、节日前：have breakfast 吃早饭',
          '交通方式：by bus 乘公交 / on foot 步行',
          'go to school / go to bed 等习惯搭配'
        ] },
        { h:'用法四：易错对比', p:'牢记成对短语的差别。', li:[
          'in front of（在外部前面）↔ in the front of（在内部前面）',
          'go to school（去上学）↔ go to the school（去那所学校，如家长去）',
          'a few（几个，肯定）↔ few（几乎没有，否定）'
        ] }
      ] },

    /* ============ 4. 形容词 ============ */
    { key:'adj', icon:'🌈', title:'形容词（2 大要点）', tag:'词法',
      intro:'形容词管「什么样」，重点是位置和三个等级。',
      blocks:[
        { h:'要点一：作用与位置', p:'修饰名词，或放在系动词后作表语。', li:[
          '放在名词前作定语：a red apple 一个红苹果',
          '放在系动词后作表语：The apple is red. 苹果是红的。',
          '修饰不定代词时后置：something new 新东西',
          '多个形容词排序：数量 → 大小 → 形状 → 颜色 → 国籍 → 材料 —— two big round red Chinese paper lanterns'
        ] },
        { h:'要点二：比较级与最高级', p:'比较级表示「更…」，最高级表示「最…」。', li:[
          '单音节加 -er / -est：tall → taller → tallest',
          '以 e 结尾去 e 加 -r / -st：nice → nicer → nicest',
          '辅音 + y：变 y 为 i：happy → happier → happiest',
          '重读闭音节双写末尾辅音：big → bigger → biggest',
          '多音节前加 more / most：beautiful → more beautiful → most beautiful',
          '不规则：good → better → best；bad → worse → worst；many/much → more → most；little → less → least',
          '比较级句型：A is + 比较级 + than B. —— Tom is taller than Jim.',
          '最高级句型：A is the + 最高级 + in/of… —— Tom is the tallest in his class.',
          '同级比较：as + 原级 + as —— She is as tall as me.'
        ] }
      ] },

    /* ============ 5. 代词 ============ */
    { key:'pron', icon:'🙋', title:'代词（5 大类）', tag:'词法',
      intro:'代词替代名词，五类分工明确，主格宾格千万别混。',
      blocks:[
        { h:'① 人称代词', p:'主格作主语，宾格作宾语。', li:[
          '主格：I, you, he, she, it, we, you, they',
          '宾格：me, you, him, her, it, us, you, them',
          '例：He helps me. 他帮我。（He 主格在前，me 宾格在动词后）'
        ] },
        { h:'② 物主代词', p:'表示「谁的」，分形容词性与名词性。', li:[
          '形容词性（后面必须跟名词）：my, your, his, her, its, our, their —— This is my book.',
          '名词性（后面不跟名词）：mine, yours, his, hers, its, ours, theirs —— This book is mine.'
        ] },
        { h:'③ 反身代词', p:'表示「自己」。', li:[
          'myself, yourself, himself, herself, itself, ourselves, yourselves, themselves',
          '常用搭配：by oneself 独自；enjoy oneself 玩得开心；help oneself to 请随便吃'
        ] },
        { h:'④ 指示代词', p:'指出具体的人或物。', li:[
          '近处：this（单数）/ these（复数）',
          '远处：that（单数）/ those（复数）',
          '例：This is a pen. These are pens.'
        ] },
        { h:'⑤ 疑问代词与不定代词', p:'提问与泛指。', li:[
          '疑问代词：who 谁 / whom 谁（宾格）/ whose 谁的 / what 什么 / which 哪一个',
          '不定代词：some, any, no, every 与 -body / -one / -thing 组合 —— somebody, anyone, nothing, everything',
          'some 用于肯定句，any 用于否定句和疑问句（表示请求时疑问句也用 some）'
        ] }
      ] },

    /* ============ 6. 动词与系动词 ============ */
    { key:'verb', icon:'🏃', title:'动词（3 类）+ 系动词（6 个）', tag:'词法核心',
      intro:'动词是句子的心脏。先分清三大类，再记牢六个系动词。',
      blocks:[
        { h:'① 实义动词', p:'有实在意思，能独立作谓语，又分及物与不及物。', li:[
          '及物动词（vt.）后面必须带宾语：I like apples.',
          '不及物动词（vi.）后面不带宾语：Birds fly.',
          '有些动词两用：run（跑；经营）'
        ] },
        { h:'② 助动词', p:'本身无意义，帮助构成时态、否定、疑问。', li:[
          'do / does / did：构成一般现在时、一般过去时的否定与疑问',
          'be（am/is/are/was/were）：构成进行时、被动语态',
          'have / has / had：构成完成时',
          'will / shall：构成将来时'
        ] },
        { h:'③ 情态动词', p:'表示能力、可能、义务，后面接动词原形。', li:[
          'can 能够 / could 能够（过去、更客气）',
          'may 可以、可能 / might 也许',
          'must 必须 / have to 不得不',
          'should 应该 / would 将会、愿意',
          '情态动词没有人称和数的变化：He can swim.（不是 cans）'
        ] },
        { h:'六大系动词（连接主语和表语）', p:'系动词后面接形容词或名词，不接副词。', li:[
          'be（am / is / are）：是 —— She is happy.',
          'look：看起来 —— You look tired.',
          'sound：听起来 —— It sounds good.',
          'smell：闻起来 —— The flower smells sweet.',
          'taste：尝起来 —— The cake tastes nice.',
          'feel：感觉 —— I feel cold.',
          '另有 become / get / turn（变得）、seem（似乎）、keep（保持）也作系动词'
        ] },
        { h:'be 动词口诀', p:'一般现在时的 be 动词三变化。', li:['我（I）用 am，你（you）用 are，is 连着他（he）她（she）它（it）；单数用 is，复数全用 are。'] }
      ] },

    /* ============ 7. 数词 ============ */
    { key:'num', icon:'🔢', title:'数词（4 大要点）', tag:'词法',
      intro:'数词管数目与顺序，重点是序数词的变化和日期时间的读法。',
      blocks:[
        { h:'要点一：基数词', p:'表示数目多少。', li:[
          '1-12 各自独立：one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve',
          '13-19 以 -teen 结尾：thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen',
          '20-90 整十以 -ty 结尾：twenty, thirty, forty, fifty, sixty, seventy, eighty, ninety',
          '几十几中间加连字符：21 → twenty-one；99 → ninety-nine',
          '百位后加 and：365 → three hundred and sixty-five',
          'hundred / thousand / million 前有具体数字时不加 -s：two hundred students'
        ] },
        { h:'要点二：序数词', p:'表示顺序，前面常加 the。', li:[
          '前三个特殊：first(1st), second(2nd), third(3rd)',
          '一般加 -th：four → fourth；six → sixth；ten → tenth',
          '特殊变化：five → fifth；nine → ninth；twelve → twelfth；eight → eighth',
          '以 -ty 结尾变 y 为 ie 加 th：twenty → twentieth',
          '几十几只把末位变序数词：twenty-first(21st)'
        ] },
        { h:'要点三：时间表达', p:'读钟点的两种方法。', li:[
          '整点：直接读数字 + o\u2019clock —— 7:00 → seven o\u2019clock',
          '顺读法：小时 + 分钟 —— 7:15 → seven fifteen',
          '逆读法：分钟 + past/to + 小时 —— 7:15 → a quarter past seven；7:45 → a quarter to eight',
          '半点用 half past：7:30 → half past seven'
        ] },
        { h:'要点四：日期与年份', p:'英式与美式写法。', li:[
          '日期用序数词：June 1st 读作 June the first',
          '年份两位两位读：1998 → nineteen ninety-eight；2026 → twenty twenty-six',
          '编号用基数词：Lesson One 第一课；Page 5 第 5 页'
        ] }
      ] },

    /* ============ 8. 介词 ============ */
    { key:'prep', icon:'📍', title:'介词（2 大类）', tag:'词法',
      intro:'介词是「小词大坑」，重点掌握时间介词和地点介词。',
      blocks:[
        { h:'① 时间介词', p:'in / on / at 三兄弟分工明确。', li:[
          'at + 具体时刻、节点：at 6 o\u2019clock, at noon, at night',
          'on + 具体某一天：on Monday, on June 1st, on Sunday morning',
          'in + 较长时间段：in 2026, in May, in the morning, in spring',
          '其他：before 在…之前 / after 在…之后 / from…to… 从…到… / during 在…期间 / for + 一段时间'
        ] },
        { h:'② 地点与方位介词', p:'描述位置和方向。', li:[
          'in 在…里面 / on 在…上面（有接触）/ over 在…上方（无接触）/ under 在…下面',
          'above 高于 / below 低于 / behind 在…后面 / in front of 在…前面',
          'between 在两者之间 / among 在三者以上之间',
          'near 在附近 / beside = next to 在旁边 / around 在周围',
          '方向：to 到 / into 进入 / out of 从…出来 / across 横过 / through 穿过 / along 沿着 / up 向上 / down 向下'
        ] }
      ] },

    /* ============ 9. 连词 ============ */
    { key:'conj', icon:'🔗', title:'连词（2 大类）', tag:'词法',
      intro:'连词是句子的胶水，分并列连词与从属连词。',
      blocks:[
        { h:'① 并列连词', p:'连接地位平等的词、短语或句子。', li:[
          '表并列：and 和 / both…and… 既…又… / not only…but also… 不但…而且…',
          '表选择：or 或者 / either…or… 要么…要么…',
          '表转折：but 但是 / while 而（对比）/ yet 然而',
          '表因果：so 因此 / for 因为',
          '注意：中文说「虽然…但是…」，英文不能同时用 though 和 but'
        ] },
        { h:'② 从属连词', p:'引导从句，从句不能独立成句。', li:[
          '时间：when 当…时 / while 当…时（持续）/ before 之前 / after 之后 / until 直到 / as soon as 一…就…',
          '原因：because 因为 / since 既然 / as 由于',
          '条件：if 如果 / unless 除非',
          '让步：though = although 虽然 / even if 即使',
          '目的与结果：so that 以便 / so…that… 如此…以至于…',
          '宾语从句：that（可省略）/ whether, if 是否'
        ] }
      ] },

    /* ============ 10. 副词 ============ */
    { key:'adv', icon:'⚡', title:'副词（2 大要点）', tag:'词法',
      intro:'副词修饰动词、形容词和整句，管「怎么样、多久、多常、在哪」。',
      blocks:[
        { h:'要点一：副词的种类', p:'按意义分五类。', li:[
          '方式副词：quickly 快速地 / carefully 仔细地 / well 好',
          '时间副词：now 现在 / today 今天 / soon 很快 / already 已经',
          '频度副词：always 总是 > usually 通常 > often 经常 > sometimes 有时 > seldom 很少 > never 从不',
          '地点副词：here 这里 / there 那里 / everywhere 到处',
          '程度副词：very 非常 / too 太 / quite 相当 / a little 有点'
        ] },
        { h:'要点二：位置与变化', p:'放对位置，副词才不出错。', li:[
          '形容词变副词一般加 -ly：quick → quickly；careful → carefully',
          '以 y 结尾变 y 为 i 加 -ly：happy → happily',
          '形副同形：fast, hard, early, late, high',
          '特殊：good（形）→ well（副）',
          '频度副词放在 be 动词后、实义动词前：He is always late. / He often goes there.',
          '副词比较级也用 more / most 或 -er / -est：fast → faster → fastest'
        ] }
      ] },

    /* ============ 11. 八种句子成分 ============ */
    { key:'chengfen', icon:'🧩', title:'八种句子成分', tag:'句法',
      intro:'一句话拆开看，每个部分都有名字。认成分是分析长句的钥匙。',
      blocks:[
        { h:'① 主语（Subject）', p:'动作的执行者，句子说的是「谁」。', li:['Tom likes English.（Tom 是主语）'] },
        { h:'② 谓语（Predicate）', p:'说明主语做什么、是什么，由动词充当。', li:['Tom likes English.（likes 是谓语）'] },
        { h:'③ 宾语（Object）', p:'动作的承受者，分直接宾语和间接宾语。', li:[
          'He gave me a book.（me 间接宾语，a book 直接宾语）'
        ] },
        { h:'④ 表语（Predicative）', p:'放在系动词后，说明主语的身份或特征。', li:['She is a teacher.（a teacher 是表语）'] },
        { h:'⑤ 定语（Attribute）', p:'修饰名词或代词，说明「什么样的」。', li:['a red apple（red 是定语）', 'the book on the desk（on the desk 后置定语）'] },
        { h:'⑥ 状语（Adverbial）', p:'修饰动词、形容词或整句，说明时间、地点、方式、原因等。', li:['He runs fast.（fast 是状语）', 'I study at school.（at school 是状语）'] },
        { h:'⑦ 宾语补足语（Object Complement）', p:'补充说明宾语的状态。', li:['We call him Tom.（Tom 补充说明 him）'] },
        { h:'⑧ 同位语（Appositive）', p:'与前面的名词地位相同，进一步说明。', li:['My friend Tom is here.（Tom 是 My friend 的同位语）'] }
      ] },

    /* ============ 12. 四种句子种类 ============ */
    { key:'zhonglei', icon:'❓', title:'四种句子种类', tag:'句法',
      intro:'按说话目的，英语句子分陈述句、疑问句、祈使句、感叹句。',
      blocks:[
        { h:'① 陈述句', p:'陈述事实，分肯定与否定，句末用句号。', li:[
          '肯定：I like apples.',
          '否定：I don\u2019t like apples. / He isn\u2019t a student.'
        ] },
        { h:'② 疑问句（4 种）', p:'提出问题，句末用问号。', li:[
          '一般疑问句：be 动词或助动词提前，答 Yes/No —— Are you a student? Yes, I am.',
          '特殊疑问句：疑问词开头，不能用 Yes/No 回答 —— What is your name?',
          '选择疑问句：用 or 提供选择 —— Do you like tea or coffee?',
          '反意疑问句：前肯后否、前否后肯 —— You are a student, aren\u2019t you?'
        ] },
        { h:'③ 祈使句', p:'表示命令、请求、建议，主语 you 省略，动词用原形。', li:[
          '肯定：Open the door, please.',
          '否定：Don\u2019t run in the classroom.',
          'Let 型：Let\u2019s go! / Let him do it.'
        ] },
        { h:'④ 感叹句', p:'表示强烈情感，句末用感叹号。', li:[
          'What + a/an + 形容词 + 单数名词！—— What a nice day!',
          'What + 形容词 + 复数/不可数名词！—— What beautiful flowers!',
          'How + 形容词/副词 + 主语 + 谓语！—— How clever he is!'
        ] }
      ] },

    /* ============ 13. 八种句子结构 ============ */
    { key:'jiegou', icon:'🏗️', title:'八种句子结构', tag:'句法核心',
      intro:'再长的句子也是由基本结构搭起来的。掌握八种结构，读写都不慌。',
      blocks:[
        { h:'① 主 + 谓（S + V）', p:'不及物动词，后面不带宾语。', li:['Birds fly. 鸟飞。', 'The baby is crying. 婴儿在哭。'] },
        { h:'② 主 + 谓 + 宾（S + V + O）', p:'及物动词带一个宾语，最常用。', li:['I love China. 我爱中国。', 'She reads books. 她读书。'] },
        { h:'③ 主 + 系 + 表（S + V + P）', p:'系动词后接形容词或名词作表语。', li:['He is a doctor. 他是医生。', 'The soup tastes good. 汤很好喝。'] },
        { h:'④ 主 + 谓 + 双宾（S + V + IO + DO）', p:'带间接宾语（人）和直接宾语（物）。', li:[
          'He gave me a pen. = He gave a pen to me.',
          'She bought him a book. = She bought a book for him.'
        ] },
        { h:'⑤ 主 + 谓 + 宾 + 宾补（S + V + O + C）', p:'宾语后补充说明宾语。', li:['We call him Tom.', 'They made the room clean.'] },
        { h:'⑥ There be 结构', p:'表示「某处有某物」，be 与后面第一个名词一致。', li:[
          'There is a book on the desk.',
          'There are two books on the desk.',
          '就近原则：There is a pen and two books.'
        ] },
        { h:'⑦ 主 + 谓 + 状（S + V + Adv）', p:'谓语后跟状语说明时间、地点、方式。', li:['He works hard.', 'They live in Shanghai.'] },
        { h:'⑧ 复合句结构（主句 + 从句）', p:'一个句子里含从句，用连词连接。', li:[
          'I know that he is right.（宾语从句）',
          'When it rains, we stay at home.（时间状语从句）'
        ] }
      ] },

    /* ============ 14. 五种从句 ============ */
    { key:'congju', icon:'🧱', title:'五种从句', tag:'句法进阶',
      intro:'从句就是「句中句」。按它在主句里当什么成分来分类。',
      blocks:[
        { h:'① 主语从句', p:'整个从句在主句里作主语。', li:[
          'What he said is true. 他说的话是真的。',
          'That he passed the exam surprised us.',
          '常用 It 作形式主语：It is important that we study hard.'
        ] },
        { h:'② 宾语从句', p:'在主句里作宾语，注意「三要素」。', li:[
          '引导词：that（陈述）/ whether, if（是否）/ 疑问词（特殊疑问）',
          '语序：从句一律用陈述语序 —— I don\u2019t know where he lives.（不是 where does he live）',
          '时态：主句过去时，从句用相应过去时 —— He said (that) he was busy.',
          '客观真理不受影响：The teacher told us that the earth moves around the sun.'
        ] },
        { h:'③ 表语从句', p:'放在系动词后作表语。', li:['The problem is that we have no money.', 'My idea is that we should start now.'] },
        { h:'④ 定语从句', p:'修饰前面的名词（先行词），由关系词引导。', li:[
          '先行词指人用 who / whom / that：The boy who is running is Tom.',
          '先行词指物用 which / that：The book which I bought is new.',
          '表所属用 whose：I know the girl whose father is a doctor.',
          '表时间地点原因用 when / where / why：This is the school where I study.'
        ] },
        { h:'⑤ 状语从句', p:'修饰主句谓语，说明时间、原因、条件等。', li:[
          '时间：When I got home, my mother was cooking.',
          '原因：He didn\u2019t come because he was ill.',
          '条件：If it rains tomorrow, we won\u2019t go.（主将从现）',
          '让步：Although he is young, he knows a lot.',
          '目的与结果：He got up early so that he could catch the bus.',
          '比较：She sings better than I do.'
        ] }
      ] },

    /* ============ 15. 五种特殊句式 ============ */
    { key:'teshu', icon:'✨', title:'五种特殊句式', tag:'句法进阶',
      intro:'这五种句式不按常规语序走，是拉分点也是亮点。',
      blocks:[
        { h:'① 被动语态', p:'强调动作的承受者，构成：be + 过去分词。', li:[
          '一般现在：The room is cleaned every day.',
          '一般过去：The window was broken by Tom.',
          '含情态动词：The work must be finished today.',
          '主动变被动：宾语提前作主语，主语变 by 短语'
        ] },
        { h:'② 倒装句', p:'把谓语或助动词提到主语前，用于强调。', li:[
          '完全倒装：Here comes the bus! / There goes the bell!',
          '否定词开头部分倒装：Never have I seen such a thing.',
          'only + 状语开头：Only then did I understand.',
          'so / neither 开头表示「也」：So do I. / Neither do I.'
        ] },
        { h:'③ 强调句', p:'用 It is/was … that … 突出被强调部分。', li:[
          'It was Tom that broke the window.（强调 Tom）',
          'It was yesterday that I met him.（强调时间）',
          '强调谓语用 do / does / did：I do like English.'
        ] },
        { h:'④ 虚拟语气', p:'表示与事实相反的假设或愿望。', li:[
          '与现在相反：If I were you, I would go.',
          '与过去相反：If I had known, I would have told you.',
          '愿望：I wish I were a bird.'
        ] },
        { h:'⑤ 省略句与感叹句式', p:'省去重复成分，句子更简洁。', li:[
          '省略：Come if (it is) possible.',
          '不定式省略：I want to go, but I don\u2019t have time to (go).',
          '感叹句省略主谓：What a pity! / How nice!'
        ] }
      ] },

    /* ============ 16. 八种时态 ============ */
    { key:'shitai', icon:'⏰', title:'八种时态', tag:'时态核心',
      intro:'时态 = 时间 + 状态。记住结构、标志词和一句例句，时态就通了。',
      blocks:[
        { h:'① 一般现在时', p:'结构：主 + do/does（be: am/is/are）。表示习惯、经常发生的动作、客观真理。', li:[
          '标志词：always, usually, often, sometimes, every day, on Sundays',
          '肯定：He goes to school by bike.',
          '否定：He doesn\u2019t go to school by bike.',
          '疑问：Does he go to school by bike?',
          '三单变化：一般加 s；s/x/sh/ch/o 结尾加 es（goes, watches）；辅音+y 变 y 为 i 加 es（studies）；have → has'
        ] },
        { h:'② 一般过去时', p:'结构：主 + did（be: was/were）。表示过去某时发生的动作。', li:[
          '标志词：yesterday, last week, in 2020, two days ago, just now',
          '肯定：I watched TV last night.',
          '否定：I didn\u2019t watch TV last night.',
          '疑问：Did you watch TV last night?',
          '规则动词加 -ed；不规则要背：go→went, see→saw, do→did, have→had, is→was, are→were'
        ] },
        { h:'③ 一般将来时', p:'结构：will + 动词原形 / be going to + 动词原形。表示将要发生。', li:[
          '标志词：tomorrow, next week, soon, in the future',
          'will：I will call you tomorrow. 否定 won\u2019t',
          'be going to：强调计划或迹象 —— It is going to rain.',
          '疑问：Will you come? / Are you going to come?'
        ] },
        { h:'④ 现在进行时', p:'结构：am/is/are + doing。表示此刻正在进行。', li:[
          '标志词：now, at the moment, Look!, Listen!',
          '肯定：She is reading a book now.',
          '否定：She isn\u2019t reading a book.',
          '疑问：Is she reading a book?',
          '现在分词：一般加 ing；去 e 加 ing（write→writing）；双写末辅音（run→running, swim→swimming）'
        ] },
        { h:'⑤ 过去进行时', p:'结构：was/were + doing。表示过去某一时刻正在进行。', li:[
          '标志词：at that time, at 8 o\u2019clock last night, when 从句',
          '例：I was doing my homework when he came in.',
          '常与 when / while 连用：主句进行时 + when + 一般过去时'
        ] },
        { h:'⑥ 将来进行时', p:'结构：will be + doing。表示将来某时刻正在进行。', li:[
          '标志词：at this time tomorrow, at 8 tomorrow morning',
          '例：I will be flying to Beijing at this time tomorrow.',
          '否定：I won\u2019t be working then.'
        ] },
        { h:'⑦ 现在完成时', p:'结构：have/has + 过去分词。表示过去动作对现在的影响或持续到现在。', li:[
          '标志词：already, yet, just, ever, never, before, since, for',
          '肯定：I have finished my homework.',
          '否定：I haven\u2019t finished my homework yet.',
          '疑问：Have you finished your homework?',
          'have been to（去过）↔ have gone to（去了还没回）'
        ] },
        { h:'⑧ 过去完成时', p:'结构：had + 过去分词。表示过去某时之前已完成（过去的过去）。', li:[
          '标志词：by the time, before, after, by the end of last year',
          '例：When I got to the station, the train had left.',
          '常与一般过去时对比使用，突出先后顺序'
        ] }
      ] }
  ];

  /* ============ 17. 51 条英语语法顺口溜 ============ */
  var rhymes = [
    { n:1,  t:'be 的用法口诀', body:['我用 am，你用 are，is 连着他她它；','单数用 is，复数 are，变疑问，往前提；','否定 not 加在 be 后面，句首句尾莫忘记。'] },
    { n:2,  t:'疑问词的用法', body:['what 什么 who 是谁，which 哪个 whose 谁的；','when 时间 where 地点，why 原因莫记错；','how 方式 how many 多少数，how much 价钱不可数。'] },
    { n:3,  t:'肯定句变否定句', body:['有 be 加 not 最简单，有情态 not 跟其后；','实义动词没帮手，请来 do/does/did；','助动词后动原形，时态人称它承担。'] },
    { n:4,  t:'独立主格结构', body:['名词代词作主语，后接分词或形容；','不与主句共主语，逗号隔开表伴随；','Weather permitting 天气好，我们一起去郊游。'] },
    { n:5,  t:'名词变复数', body:['一般情况直接加 s，清辅后面读 /s/；','s、x、sh、ch 加 es，辅音加 y 变 ies；','f、fe 结尾变 ves，特殊单词要牢记。'] },
    { n:6,  t:'不可数名词', body:['水、奶、茶、米加面包，钱和新闻信息类；','没有复数不加 s，量词计量用 of；','a piece of，a glass of，前面数词随你写。'] },
    { n:7,  t:'a 和 an 的选择', body:['元音音素前用 an，辅音音素前用 a；','看的是音不是形，hour 用 an，university 用 a。'] },
    { n:8,  t:'the 的用法', body:['再次提到用 the，独一无二也用 the；','序数最高级前站，乐器方位不能落；','三餐球类节假日，专有名词都不加。'] },
    { n:9,  t:'第三人称单数', body:['主语他她它单数，动词后面加 s；','o、s、x、sh、ch 加 es，辅音加 y 变 ies；','have 变 has 要记牢，一般现在时用得多。'] },
    { n:10, t:'名词所有格', body:['有生命的加 \u2019s，复数 s 后只加 \u2019；','无生命的用 of，前后顺序要颠倒；','共同所有加最后，各自所有都要加。'] },
    { n:11, t:'人称代词主宾格', body:['主格作主语在句首，宾格动介后面跟；','I 变 me，he 变 him，she 变 her，they 变 them；','we 变 us，you 不变，it 也一直不变身。'] },
    { n:12, t:'物主代词两兄弟', body:['形容词性带名词，my book、your pen 记清楚；','名词性的独自站，mine、yours、hers 不带伴。'] },
    { n:13, t:'反身代词', body:['单数 self 复数 selves，my、your 加 self 最常见；','him、her、it 加 self，our、your、them 加 selves。'] },
    { n:14, t:'this、that、these、those', body:['近的用 this 和 these，远的用 that 和 those；','单数 this、that，复数 these、those。'] },
    { n:15, t:'some 和 any', body:['some 用于肯定句，any 疑问和否定；','请求邀请要例外，疑问句中也用 some。'] },
    { n:16, t:'形容词比较级', body:['单音节加 er，多音节前加 more；','y 结尾变 i 加 er，重读闭音双写辅；','than 后面接对象，两者相比它最强。'] },
    { n:17, t:'形容词最高级', body:['三者以上比一比，最高级前加 the；','单音节加 est，多音节 most 站前面；','范围用 in 或 of，班级第一记心间。'] },
    { n:18, t:'不规则比较等级', body:['good、well 变 better、best，bad、badly 变 worse、worst；','many、much 变 more、most，little 变 less、least；','far 变 farther 也 further，两个都对别害怕。'] },
    { n:19, t:'as…as 同级比较', body:['两者相同 as…as，中间形容词用原级；','否定 not as/so…as，前者不如后者强。'] },
    { n:20, t:'形容词变副词', body:['一般直接加 ly，y 结尾变 i 加 ly；','le 结尾去 e 加 y，good 变 well 要记牢。'] },
    { n:21, t:'频度副词的位置', body:['always、usually、often，sometimes、seldom 和 never；','放在 be 后实义前，问频率用 how often。'] },
    { n:22, t:'基数词', body:['1 到 12 各不同，13 到 19 teen 结尾；','20 到 90 整十 ty，几十几中间加短横；','百位后面 and 连，hundred 不加 s。'] },
    { n:23, t:'序数词', body:['一二三特殊记：first、second、third；','八去 t，九去 e，ve 要用 f 替；','ty 变 tie 加 th，其余加 th 就可以。'] },
    { n:24, t:'时间的表达', body:['整点直接 o\u2019clock，半点用 half past；','一刻 a quarter，超半用 to 不用 past；','顺读法最简单，小时分钟连着念。'] },
    { n:25, t:'介词 in、on、at 表时间', body:['年月季节前用 in，具体某天要用 on；','几点几分钟用 at，中午夜晚也用 at。'] },
    { n:26, t:'介词 in、on、at 表地点', body:['大地方用 in，小地方用 at；','表面接触用 on，内部空间用 in。'] },
    { n:27, t:'交通方式的表达', body:['by 加交通工具原形，by bus、by bike 不加 the；','take a bus 也可以，步行只说 on foot。'] },
    { n:28, t:'一般现在时', body:['经常习惯真理句，一般现在时来管；','主语三单动词变，其余动词用原形；','否定疑问请帮手，do 和 does 来值班。'] },
    { n:29, t:'一般过去时', body:['过去时间已发生，动词一律变过去；','规则动词加 ed，不规则的要死记；','否定疑问用 did，后面动词还原形。'] },
    { n:30, t:'动词过去式变化', body:['一般直接加 ed，e 结尾只加 d；','辅音加 y 变 i 加 ed，重读闭音双写辅。'] },
    { n:31, t:'一般将来时', body:['将来时态两兄弟，will 和 be going to；','will 后面动原形，be going to 表打算；','否定 won\u2019t 最简单，疑问 will 提句前。'] },
    { n:32, t:'现在进行时', body:['现在正在做什么，be 加 doing 别弄错；','Look、Listen、now 出现，进行时态跑不了。'] },
    { n:33, t:'现在分词变化', body:['一般直接加 ing，e 结尾去 e 加 ing；','重读闭音双写辅，running、swimming 记心间。'] },
    { n:34, t:'过去进行时', body:['过去某时正在做，was、were 加 doing；','when 后面用过去，while 后面多进行。'] },
    { n:35, t:'现在完成时', body:['have、has 加过去分词，已经完成看现在；','just、already、yet 常见，since、for 表持续；','been to 去过已回来，gone to 去了还没归。'] },
    { n:36, t:'过去完成时', body:['过去的过去用 had，had 加上过去分词；','by the time、before、after，先后顺序看得清。'] },
    { n:37, t:'将来进行时', body:['将来某时正在做，will be 加 doing；','at this time tomorrow，最爱和它做朋友。'] },
    { n:38, t:'被动语态', body:['被动语态 be 加分词，动作承受当主语；','by 后面跟执行者，时态变化看 be 动词。'] },
    { n:39, t:'There be 句型', body:['某处有物 there be，就近原则记心里；','第一名词单数 is，复数名词就用 are；','否定 not 加 be 后，疑问 be 要提句首。'] },
    { n:40, t:'祈使句', body:['祈使句无主语，动词原形打头阵；','否定前面加 Don\u2019t，客气句末加 please。'] },
    { n:41, t:'感叹句', body:['What 修饰名词句，How 修饰形和副；','What a 加单可数，复数不可数不加 a。'] },
    { n:42, t:'反意疑问句', body:['前肯后否前否肯，助动情态往前提；','时态人称保一致，主语一律用代词。'] },
    { n:43, t:'宾语从句三要素', body:['引导词看句子类，陈述用 that 可省略；','是否用 whether、if，疑问句用疑问词；','语序一律用陈述，主过从过要一致。'] },
    { n:44, t:'定语从句关系词', body:['指人 who、whom、that，指物 which 和 that；','所属关系用 whose，时间 when 地点 where。'] },
    { n:45, t:'状语从句主将从现', body:['if、when 引条件时间，主句将来从句现；','主句祈使也一样，从句千万别用 will。'] },
    { n:46, t:'情态动词', body:['can 能够 may 可以，must 必须 should 应该；','情态后面动原形，人称数变全不管；','否定 not 紧跟后，疑问情态提句前。'] },
    { n:47, t:'动词不定式', body:['to 加动词原形站，作宾目的都不难；','want、hope、would like 后，一律接 to 别忘掉。'] },
    { n:48, t:'动名词的搭配', body:['enjoy、finish、like doing，介词后面也用 ing；','be good at、thanks for，后面动词加 ing。'] },
    { n:49, t:'so 与 neither 的倒装', body:['前肯后也 So 开头，前否后也 Neither 顶；','助动 be 提主语前，肯定否定看前句。'] },
    { n:50, t:'一般疑问句的答语', body:['Yes 后面全肯定，No 后面用否定；','问你答我别搞错，问 your 要答 my。'] },
    { n:51, t:'句子成分总口诀', body:['主谓宾是骨架，定状补是枝叶；','系动词后接表语，同位语来作解释；','成分认清结构明，长句难句都不惧。'] }
  ];

  window.EN_GRAMMAR = { sections: sections, rhymes: rhymes };
})();
