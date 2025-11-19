export interface Myth {
  id: string;
  name: {
    en: string;
    fa: string;
  };
  category: 'hero' | 'god' | 'creature';
  image: string;
  shortDescription: {
    en: string;
    fa: string;
  };
  fullStory: {
    en: string;
    fa: string;
  };
  keyFacts: {
    en: string[];
    fa: string[];
  };
}

// Import the full list of Shahnameh characters
import shahnamehCharactersJson from './shahnameh-characters.json';

// Helper function to transliterate Persian names to English IDs
const transliterate = (persianName: string): string => {
  return persianName
    .replace(/\s+/g, '-')
    .toLowerCase()
    .replace(/[^\u0600-\u06FF\s-]/g, '');
};

export const myths: Myth[] = [
  {
    id: 'rostam',
    name: {
      en: 'Rostam',
      fa: 'رستم',
    },
    category: 'hero',
    image: '/hero-rostam.jpg',
    shortDescription: {
      en: 'The greatest hero of the Shahnameh, world champion known as Tahmotan, symbol of courage and loyalty',
      fa: 'بزرگترین قهرمان شاهنامه، جهان‌پهلوان با لقب تهمتن، نماد شجاعت و وفاداری',
    },
    fullStory: {
      en: `Rostam, known as Tahmotan (possessing immense physical strength), is the most celebrated hero in Persian mythology and the central figure of Ferdowsi's Shahnameh. Born through extraordinary circumstances to the warrior Zal and princess Rudaba with the help of Simorgh, Rostam possessed supernatural strength from birth.

His legendary horse Rakhsh, with its distinctive red and white coloring, became his spiritual companion and symbol of power. Rostam wore the iconic Babr-e Bayan, a garment made from tiger skin that granted him invulnerability. He wielded the famous club of Sam and fought countless battles throughout his long life.

Rostam's Seven Labors (Haft Khan) represent some of the most famous tales in Persian literature. He defeated demons of Mazandaran, slew the White Demon, and protected Persia from invasion for centuries. His battles established him as invincible among warriors.

The most tragic episode was his unknowing battle with his son Sohrab. Not recognizing each other, Rostam mortally wounded Sohrab, discovering his identity only when too late. This represents one of the most heart-wrenching moments in world literature.

Rostam served seven Persian kings throughout his exceptionally long life, maintaining independence while showing unwavering loyalty to his homeland. His wisdom matched his strength, embodying Persian values: courage, loyalty, honor, and justice. He represents the archetype of the self-actualized hero in psychological models, reaching the highest levels of personal development.`,
      fa: `رستم، با لقب تهمتن (دارای اندامی بسیار نیرومند)، برجسته‌ترین قهرمان در اساطیر ایرانی و شخصیت اصلی شاهنامه فردوسی است. تولد او به شیوه‌ای خارق‌العاده از زال پهلوان و رودابه شاهدخت با یاری سیمرغ انجام شد و او از بدو تولد دارای قدرتی ماوراء طبیعی بود.

اسب افسانه‌ای او، رخش، با رنگ سرخ و سپید، همزاد روحی و نماد قدرت اوست. رستم ببربیان می‌پوشید، جامه‌ای از پوست ببر که نوعی آسیب‌ناپذیری به او می‌بخشد. او گرز سام را حمل می‌کرد و در نبردهای بی‌شماری در طول زندگی طولانی خود شرکت داشت.

هفت خوان رستم از معروف‌ترین داستان‌های ادبیات فارسی است. او دیوان مازندران را شکست داد، دیو سپید را کشت و قرن‌ها از ایران در برابر تهاجم محافظت کرد. نبردهای او او را شکست‌ناپذیر ساختند.

غم‌انگیزترین بخش زندگی رستم، نبرد ناخواسته‌اش با پسرش سهراب بود. آن‌ها که یکدیگر را نمی‌شناختند، رستم سهراب را به طور کشنده زخمی کرد و تنها زمانی هویت واقعی او را کشف کرد که دیگر دیر شده بود. این تراژدی یکی از دلخراش‌ترین لحظات در ادبیات جهان است.

رستم در طول زندگی طولانی خود به هفت پادشاه ایران خدمت کرد و همیشه به میهن خود وفادار بود. خرد او با قدرتش برابری می‌کرد و او نماد ارزش‌های ایرانی است: شجاعت، وفاداری، شرافت و عدالت. رستم در مدل‌های روان‌شناسی، نمونه انسان خودشکوفا است که به بالاترین مراتب رشد شخصیتی می‌رسد.`,
    },
    keyFacts: {
      en: [
        'Known as Tahmotan - possessing immense strength',
        'Wore Babr-e Bayan (tiger skin garment)',
        'Served seven Persian kings',
        'Completed the legendary Seven Labors (Haft Khan)',
        'Rode Rakhsh, the legendary red and white horse',
        'Defeated the White Demon of Mazandaran',
        'Tragically killed his son Sohrab in battle',
      ],
      fa: [
        'با لقب تهمتن - دارای قدرتی عظیم',
        'ببربیان (جامه پوست ببر) می‌پوشید',
        'به هفت پادشاه ایران خدمت کرد',
        'هفت خوان افسانه‌ای را تکمیل کرد',
        'سوار بر رخش، اسب افسانه‌ای سرخ و سپید',
        'دیو سپید مازندران را شکست داد',
        'به طور تراژیک پسرش سهراب را در نبرد کشت',
      ],
    },
  },
  {
    id: 'simorgh',
    name: {
      en: 'Simorgh',
      fa: 'سیمرغ',
    },
    category: 'creature',
    image: '/simorgh.jpg',
    shortDescription: {
      en: 'The benevolent, mythical bird with healing powers and ancient wisdom',
      fa: 'پرنده اسطوره‌ای نیکوکار با قدرت شفابخشی و حکمت باستانی',
    },
    fullStory: {
      en: `The Simorgh is one of the most important creatures in Persian mythology, a magnificent bird of immense size and wisdom. With iridescent feathers that shimmer with all colors, the Simorgh is said to have lived for thousands of years, witnessing the rise and fall of countless civilizations.

In the Shahnameh, the Simorgh plays a crucial role in the story of Zal, Rostam's father. When Zal was born with white hair and abandoned on a mountain, the Simorgh found and raised him as her own. She taught him wisdom and the ways of the world, and when it was time for Zal to return to human society, she gave him one of her feathers. This magical feather could summon her in times of need.

The Simorgh later helped with the difficult birth of Rostam, using her healing powers to save both mother and child. Her wisdom and healing abilities made her a symbol of protection, knowledge, and divine intervention.

The Simorgh represents the connection between earth and sky, mortality and immortality. She embodies the Persian ideals of wisdom, compassion, and the protective force of nature. Her nest sits atop the Tree of Life, from which all seeds fall and spread across the world.`,
      fa: `سیمرغ یکی از مهم‌ترین موجودات در اساطیر ایرانی است، پرنده‌ای باشکوه با اندازه و خرد عظیم. با پرهای رنگارنگی که با تمام رنگ‌ها می‌درخشند، گفته می‌شود سیمرغ هزاران سال زیسته و شاهد ظهور و سقوط تمدن‌های بی‌شماری بوده است.

در شاهنامه، سیمرغ نقش حیاتی در داستان زال، پدر رستم، ایفا می‌کند. زمانی که زال با موهای سفید به دنیا آمد و در کوهی رها شد، سیمرغ او را پیدا کرد و مانند فرزند خود بزرگ نمود. او به زال خرد و راه‌های دنیا را آموخت، و هنگامی که زمان بازگشت زال به جامعه انسانی فرا رسید، یکی از پرهای خود را به او داد. این پر جادویی می‌توانست او را در مواقع نیاز احضار کند.

سیمرغ بعداً در زایمان دشوار رستم کمک کرد و با استفاده از قدرت شفابخشی خود، مادر و کودک را نجات داد. خرد و توانایی‌های شفابخش او، او را به نمادی از حمایت، دانش و مداخله الهی تبدیل کرد.

سیمرغ نماد ارتباط بین زمین و آسمان، فانی و جاودان است. او ایده‌آل‌های ایرانی خرد، شفقت و نیروی محافظ طبیعت را تجسم می‌بخشد. آشیانه او بر بالای درخت زندگی قرار دارد که از آن همه دانه‌ها می‌ریزند و در سراسر جهان پخش می‌شوند.`,
    },
    keyFacts: {
      en: [
        'Raised Zal, father of Rostam',
        'Lives for thousands of years',
        'Possesses healing powers',
        'Nest sits atop the Tree of Life',
        'Symbol of wisdom and protection',
      ],
      fa: [
        'زال، پدر رستم را بزرگ کرد',
        'هزاران سال زندگی می‌کند',
        'دارای قدرت‌های شفابخش است',
        'آشیانه‌اش بر بالای درخت زندگی است',
        'نماد خرد و حمایت',
      ],
    },
  },
  {
    id: 'zahhak',
    name: {
      en: 'Zahhak (Azhi Dahaka)',
      fa: 'ضحاک (اژی‌دهاک)',
    },
    category: 'hero',
    image: '/zahhak.jpg',
    shortDescription: {
      en: 'The tyrannical king corrupted by Ahriman, with two serpents growing from his shoulders',
      fa: 'پادشاه ستمگر فاسد شده توسط اهریمن، با دو مار روی شانه‌هایش',
    },
    fullStory: {
      en: `Zahhak, also known as Azhi Dahaka, represents one of the darkest figures in Persian mythology. In the Avesta, he is described as a three-headed, three-mouthed, six-eyed dragon. In Shahnameh, he was originally a virtuous prince, son of Mardas from Arab lineage, who was corrupted by the demon Ahriman disguised as a cook.

Ahriman tricked Zahhak into committing patricide to seize the throne. As a reward for his evil deed, Ahriman kissed his shoulders, causing two serpents to grow from them. These serpents symbolize insatiable desire for power and endless cruelty - a demonic force that could only be calmed by feeding on the brains of young people.

Zahhak's thousand-year reign of terror brought darkness over Persia. He ruled with cruelty and oppression, forcing the daily sacrifice of two youths whose brains fed his shoulder serpents. Families hid their children in fear, and the land suffered under his tyranny.

According to prophecy, a hero named Fereydun would eventually overthrow him. When this hero emerged, he led a rebellion against the tyrant. Rather than killing Zahhak, Fereydun imprisoned him in Mount Damavand with chains, where according to legend he remains to this day. At the end of time, Zahhak will break free and bring chaos to the world until Garshasp destroys him.

Zahhak symbolizes the corrupting nature of power and evil - how a good person can be transformed into a monster through temptation and sin. In Zoroastrian texts, he represents Druj (lies and corruption) and was created by Ahriman to destroy Asha (truth). His story serves as a cautionary tale about greed, lust for power, and moral decay.`,
      fa: `ضحاک، که به عنوان اژی‌دهاک نیز شناخته می‌شود، یکی از تاریک‌ترین چهره‌های اساطیر ایرانی است. در اوستا، او به صورت اژدهایی سه‌سر، سه‌پوزه و شش‌چشم توصیف شده است. در شاهنامه، او پسر مرداس و از تبار اعراب بود که توسط دیو اهریمن که در لباس آشپز ظاهر شده بود، فاسد شد.

اهریمن ضحاک را فریب داد تا با پدرکشی به پادشاهی برسد. به عنوان پاداش برای عمل شیطانی او، اهریمن شانه‌هایش را بوسید که باعث رویش دو مار از آن‌ها شد. این مارها نماد میل به قدرت و ظلم بی‌پایان هستند - نیرویی اهریمنی که تنها با تغذیه از مغز جوانان آرام می‌گرفت.

سلطنت هزار ساله ترور ضحاک، تاریکی بر ایران آورد. او با ظلم و ستم حکومت می‌کرد و هر روز دو جوان را قربانی می‌کرد تا مغزشان را به مارهای شانه‌هایش بخوراند. خانواده‌ها از ترس فرزندان خود را پنهان می‌کردند و سرزمین تحت ستم او رنج می‌برد.

طبق پیشگویی، قهرمانی به نام فریدون سرانجام او را سرنگون کرد. فریدون به جای کشتن ضحاک، او را با زنجیر در کوه دماوند زندانی کرد، جایی که طبق افسانه تا امروز باقی مانده است. در پایان زمان، ضحاک از بند می‌گریزد و جهان را به آشوب می‌کشد تا گرشاسپ او را نابود کند.

ضحاک نماد فاسدکننده قدرت و شر است - اینکه چگونه یک فرد خوب می‌تواند از طریق وسوسه و گناه به هیولا تبدیل شود. در متون زرتشتی، او نماینده دروج (دروغ و تباهی) است و توسط اهریمن برای نابودی اشه (راستی) آفریده شد. داستان او هشداری است درباره حرص، طمع و سقوط اخلاقی.`,
    },
    keyFacts: {
      en: [
        'In Avesta: three-headed, six-eyed dragon',
        'Son of Mardas, corrupted by Ahriman',
        'Two serpents grew from his shoulders',
        'Ruled Persia for 1000 years of terror',
        'Fed serpents with brains of two youths daily',
        'Overthrown by hero Fereydun',
        'Imprisoned in Mount Damavand with chains',
      ],
      fa: [
        'در اوستا: اژدهای سه‌سر و شش‌چشم',
        'پسر مرداس، فاسد شده توسط اهریمن',
        'دو مار از شانه‌هایش رشد کرد',
        'هزار سال با ترور بر ایران حکومت کرد',
        'هر روز مغز دو جوان به مارها می‌خوراند',
        'توسط قهرمان فریدون سرنگون شد',
        'با زنجیر در کوه دماوند زندانی شد',
      ],
    },
  },
  {
    id: 'siavash',
    name: {
      en: 'Siavash',
      fa: 'سیاوش',
    },
    category: 'hero',
    image: '/siavash.jpg',
    shortDescription: {
      en: 'The pure-hearted prince who passed through fire, symbol of innocence and martyrdom',
      fa: 'شاهزاده پاک‌سرشت که از آتش گذشت، نماد پاکی و شهادت',
    },
    fullStory: {
      en: `Siavash, son of Kay Kavus and father of Kay Khosrow, is one of the most tragic and pure figures in Persian mythology. His story in Shahnameh represents innocence confronted by evil, and his martyrdom symbolizes the sacrifice of purity.

When falsely accused by Sudabeh (his stepmother) of improper conduct, Siavash proved his innocence by riding through fire on his black horse Shabrang-e Behzad. Dressed in white garments treated with camphor, he emerged unscathed, demonstrating his purity. This trial by fire became one of the most iconic scenes in Persian literature and art.

After the ordeal, Siavash went to Turan where he married Farangis, daughter of Afrasiab, and built the city of Gang-e Dezh. Despite his nobility and wisdom, the jealousy of Garsivaz and his slander led Afrasiab to order Siavash's execution. His innocent blood spilled on the ground, and according to legend, the tulip flower that grows inverted in Lorestan and Paveh is called "Siavash's Tears."

Siavash represents purity, innocence, wisdom, and rejection of violence. In comparative mythology, he parallels Tammuz of Mesopotamia and Balder of Norse mythology. The mourning ritual for Siavash persists in Iranian culture as a symbol of martyred innocence.

His martyrdom became the catalyst for his son Kay Khosrow's eventual revenge and the restoration of justice. Siavash embodies the Iranian ideals of loyalty, chastity, and steadfast adherence to truth even in the face of death.`,
      fa: `سیاوش، فرزند کی‌کاووس و پدر کیخسرو، یکی از تراژیک‌ترین و پاک‌ترین چهره‌های اساطیر ایرانی است. داستان او در شاهنامه نماینده پاکی در برابر شرارت و شهادتش نماد قربانی شدن پاکی است.

هنگامی که به دروغ توسط سودابه (نامادری‌اش) متهم به رفتار نامناسب شد، سیاوش با عبور از آتش سوار بر اسب سیاه خود شبرنگ بهزاد، بی‌گناهی خود را ثابت کرد. او با جامه‌های سپید و کافور زده از آتش گذشت و سالم بیرون آمد و پاکی خود را نشان داد. این آزمون آتش یکی از نمادین‌ترین صحنه‌های ادبیات و هنر ایران شد.

پس از این آزمون، سیاوش به توران رفت و با فرنگیس، دختر افراسیاب، ازدواج کرد و شهری به نام گنگ دژ ساخت. با وجود شرافت و خردش، حسادت گرسیوز و بدگویی‌های او باعث شد افراسیاب دستور قتل سیاوش را بدهد. خون بی‌گناه او بر زمین ریخت و طبق افسانه، گل لاله واژگون در لرستان و پاوه به نام "اشک سیاوش" شناخته می‌شود.

سیاوش نماد پاکی، بی‌گناهی، خرد و دوری از خشونت است. در اسطوره‌شناسی تطبیقی، او با تموز بین‌النهرینی و بالدر اسکاندیناوی مقایسه شده است. آیین سوگ سیاوش در فرهنگ ایرانی به عنوان نماد پاکی شهید شده باقی مانده است.

شهادت او محرک انتقام‌جویی پسرش کیخسرو و بازگشت عدالت شد. سیاوش تجسم ایده‌آل‌های ایرانی وفاداری، پاکدامنی و پایبندی به حقیقت حتی در برابر مرگ است.`,
    },
    keyFacts: {
      en: [
        'Son of Kay Kavus, father of Kay Khosrow',
        'Passed through fire to prove innocence',
        'Rode black horse Shabrang-e Behzad',
        'Built city of Gang-e Dezh in Turan',
        'Married Farangis, daughter of Afrasiab',
        'Martyred due to Garsivaz\'s jealousy',
        'Tulip called "Siavash\'s Tears" commemorates him',
      ],
      fa: [
        'فرزند کی‌کاووس، پدر کیخسرو',
        'برای اثبات بی‌گناهی از آتش گذشت',
        'سوار بر اسب سیاه شبرنگ بهزاد',
        'شهر گنگ دژ را در توران ساخت',
        'با فرنگیس، دختر افراسیاب، ازدواج کرد',
        'به خاطر حسادت گرسیوز شهید شد',
        'گل لاله به نام "اشک سیاوش" یادبود اوست',
      ],
    },
  },
  {
    id: 'esfandiar',
    name: {
      en: 'Esfandiar',
      fa: 'اسفندیار',
    },
    category: 'hero',
    image: '/esfandiar.jpg',
    shortDescription: {
      en: 'The invincible prince with bronze body, champion of Zoroastrian faith',
      fa: 'شاهزاده شکست‌ناپذیر با بدن رویین، قهرمان آیین زرتشتی',
    },
    fullStory: {
      en: `Esfandiar, son of King Goshtasb and Katayun, was a Kayanian prince and champion of the Zoroastrian faith's holy wars. In the Avesta he appears as "taxma" (mighty, brave), and in Pahlavi texts, Shahnameh, and other sources, he is remembered as the bronze-bodied commander who fought against Arjasp.

Esfandiar's most distinctive feature was his invulnerable bronze body (Rooyin-tan). According to Zardosht-Nameh, when Zoroaster bathed him in sacred water as an infant, his entire body became impervious to weapons - except his eyes, which remained vulnerable. This made him nearly invincible in battle.

He completed his own Seven Labors, demonstrating extraordinary courage and strength. In battle, Esfandiar appeared with a golden saddle and royal helmet, riding a black horse that symbolized royal power and majesty. His bronze armor gleamed in battle, making him a fearsome sight to enemies.

The tragedy of Esfandiar lies in his conflict between duty to his father and truth. Though he knew his fate, he obeyed his father Goshtasb's command to bring Rostam in chains to prove his worthiness for the throne. This led to his fatal confrontation with Rostam, who reluctantly killed him with an arrow made from a tamarisk branch and guided by Simorgh, striking his vulnerable eyes.

Esfandiar represents the devoted warrior-prince, embodying religious devotion, courage, pride, and filial obedience. He was among the first converts to Zoroastrianism, and the Avesta praises his sacred spirit. However, his character also reveals the tragic consequences of blind obedience and the conflict between ambition and righteousness. His death symbolizes the clash between royal authority and warrior independence, between obligation and truth.`,
      fa: `اسفندیار، پسر گشتاسب پادشاه و کتایون، شاهزاده کیانی و قهرمان جنگ‌های مقدس آیین زرتشتی بود. در اوستا با نام "taxma" (نیرومند، دلیر) آمده و در متون پهلوی، شاهنامه و منابع دیگر، به عنوان فرمانده رویین‌تن که با ارجاسپ جنگید، به یاد مانده است.

ویژگی برجسته اسفندیار، بدن رویین (مانند برنز) اوست که آسیب‌ناپذیر بود. طبق زراتشت‌نامه، زمانی که زرتشت او را در کودکی در آب مقدس شست، تمام بدنش در برابر سلاح‌ها مصون شد - به جز چشمانش که آسیب‌پذیر باقی ماند. این ویژگی او را در نبرد تقریباً شکست‌ناپذیر می‌کرد.

او هفت خوان خود را تکمیل کرد و شجاعت و قدرت خارق‌العاده‌ای نشان داد. اسفندیار با زین زرین و کلاه خسروانی سوار بر اسب سیاه خود وارد میدان جنگ می‌شد. رنگ سیاه اسبش نماد قدرت و شکوه شاهانه بود. زره رویین او در نبرد می‌درخشید و دشمنان را می‌ترساند.

تراژدی اسفندیار در تعارض میان وظیفه به پدر و حقیقت نهفته است. اگرچه از سرنوشت خود آگاه بود، اما به فرمان پدرش گشتاسب تن داد تا رستم را زنجیر کرده به دربار ببرد و شایستگی تاج را ثابت کند. این منجر به رویارویی مرگبار او با رستم شد که با اکراه با تیری از چوب گز و راهنمایی سیمرغ، او را از چشمان آسیب‌پذیرش زد و کشت.

اسفندیار نماد پهلوان دین‌مدار است که دینداری، شجاعت، غرور و فرمانبرداری از پدر را تجسم می‌بخشد. او از نخستین گرویدگان به زرتشت بود و اوستا روان مقدس او را می‌ستاید. اما شخصیت او پیامدهای تراژیک فرمانبرداری کورکورانه و تعارض میان جاه‌طلبی و درستکاری را نیز نشان می‌دهد. مرگ او نماد تقابل میان قدرت شاهانه و استقلال پهلوانی، میان وظیفه و حقیقت است.`,
    },
    keyFacts: {
      en: [
        'Son of Goshtasb, Kayanian prince',
        'Bronze body (Rooyin-tan) - invulnerable except eyes',
        'Bathed in sacred water by Zoroaster',
        'Champion of Zoroastrian holy wars',
        'Completed Seven Labors like Rostam',
        'Rode black horse with golden saddle',
        'Killed by Rostam with arrow to the eye',
      ],
      fa: [
        'پسر گشتاسب، شاهزاده کیانی',
        'بدن رویین - آسیب‌ناپذیر به جز چشمان',
        'توسط زرتشت در آب مقدس شسته شد',
        'قهرمان جنگ‌های مقدس زرتشتی',
        'هفت خوان مانند رستم را تکمیل کرد',
        'سوار بر اسب سیاه با زین زرین',
        'توسط رستم با تیر به چشم کشته شد',
      ],
    },
  },
  {
    id: 'ahura-mazda',
    name: {
      en: 'Ahura Mazda',
      fa: 'اهورامزدا',
    },
    category: 'god',
    image: '/ahura-mazda.jpg',
    shortDescription: {
      en: 'The supreme god and wise creator in Zoroastrianism, lord of wisdom and light',
      fa: 'خدای یگانه و آفریننده دانا در زرتشتی، سرور خرد و روشنایی',
    },
    fullStory: {
      en: `Ahura Mazda, meaning "Wise Lord," is the supreme and singular god in Zoroastrianism. In the Avesta, Bundahishn, and Denkard, he is introduced as the creator of the world, humanity, animals, and sacred elements. Ahura Mazda symbolizes wisdom, light, goodness, and cosmic order.

In Persian art and rock reliefs at Naqsh-e Rostam and Taq-e Bostan, Ahura Mazda is depicted as a wise elder with symbols of light and fire, wearing a crown, white garments, and sometimes shown with the Faravahar symbol. In Sasanian stone carvings, he is seen bestowing the ring of kingship upon Persian monarchs, legitimizing their divine right to rule.

The Faravahar symbol, which some archaeologists associate with Ahura Mazda, features spread wings and a ring in hand, signifying divine power and wisdom. This has become one of the most recognizable symbols of ancient Persian civilization.

Ahura Mazda represents wisdom, goodness, creation, and cosmic order. He is the source of all goodness, light, joy, and health. His eternal enemy is Ahriman (Angra Mainyu), the embodiment of evil and darkness. In Zoroastrian cosmology, the battle between good (Ahura Mazda) and evil (Ahriman) forms the central axis of mythology.

His attributes manifest through the Amesha Spentas (Holy Immortals): Vohu Manah (Good Mind), Asha Vahishta (Truth), Khshathra Vairya (Divine Kingdom), Spenta Armaiti (Devotion), Haurvatat (Wholeness), and Ameretat (Immortality). In the Gathas and Avesta, Ahura Mazda transcends all other yazatas (divine beings) and represents absolute purity.

In Zurvanite tradition, both Ahura Mazda and Ahriman are children of Zurvan (god of time), but in orthodox Zoroastrian texts, Ahura Mazda is the uncreated creator, eternal and supreme. He embodies the Persian ideals of wisdom, justice, and the eternal struggle between light and darkness.`,
      fa: `اهورامزدا، به معنای "سرور دانا"، خدای یگانه و برترین در دین زرتشتی است. در اوستا، بندهشن و دینکرد به عنوان آفریننده جهان، انسان‌ها، حیوانات و عناصر مقدس معرفی شده است. اهورامزدا نماد خرد، روشنایی، نیکی و نظم کیهانی است.

در هنر ایرانی و سنگ‌نگاره‌های نقش رستم و طاق بستان، اهورامزدا به صورت پیرمردی خردمند با نمادهای نور و آتش، تاج، لباس سفید و گاه با نماد فروهر تصویر شده است. در نقش برجسته‌های ساسانی، او در حال اعطای حلقه پادشاهی به شاهان دیده می‌شود که حق الهی سلطنت را مشروعیت می‌بخشد.

نماد فروهر، که برخی باستان‌شناسان آن را با اهورامزدا مرتبط می‌دانند، با بال‌های گشوده و حلقه‌ای در دست، نشانه قدرت و خرد الهی است. این نماد یکی از شناخته‌شده‌ترین نمادهای تمدن ایران باستان شده است.

اهورامزدا نماد خرد، نیکی، آفرینش و نظم کیهانی است. او سرچشمه تمام نیکی‌ها، روشنایی، شادی و تندرستی است. دشمن ازلی او اهریمن (آنگره‌ماینیو) است که تجسم شر و تاریکی است. در کیهان‌شناسی زرتشتی، نبرد میان خیر (اهورامزدا) و شر (اهریمن) محور اصلی اسطوره‌هاست.

صفات او از طریق امشاسپندان (امشه سپنته) تجلی می‌یابد: بهمن (اندیشه نیک)، اردیبهشت (راستی)، شهریور (فرمانروایی الهی)، سپندارمذ (اخلاص)، خرداد (رسایی)، و امرداد (جاودانگی). در گاتاها و اوستا، اهورامزدا فراتر از همه ایزدان است و نماد پاکی مطلق است.

در سنت زروانی، اهورامزدا و اهریمن هر دو فرزندان زروان (ایزد زمان) هستند، اما در متون زرتشتی اصیل، اهورامزدا آفریننده نیافریده، ازلی و برتر است. او ایده‌آل‌های ایرانی خرد، عدالت و نبرد ازلی میان نور و تاریکی را تجسم می‌بخشد.`,
    },
    keyFacts: {
      en: [
        'Supreme creator god in Zoroastrianism',
        'Name means "Wise Lord"',
        'Depicted with crown, white garments, Faravahar symbol',
        'Bestows ring of kingship in Sasanian art',
        'Source of wisdom, light, and all goodness',
        'Eternal enemy of Ahriman (evil)',
        'Manifests through six Amesha Spentas',
      ],
      fa: [
        'خدای آفریننده برتر در زرتشتی',
        'نام به معنای "سرور دانا"',
        'با تاج، لباس سفید و فروهر تصویر شده',
        'در هنر ساسانی حلقه پادشاهی اعطا می‌کند',
        'سرچشمه خرد، نور و همه نیکی‌ها',
        'دشمن ازلی اهریمن (شر)',
        'از طریق شش امشاسپند تجلی می‌یابد',
      ],
    },
  },
  {
    id: 'anahita',
    name: {
      en: 'Anahita',
      fa: 'آناهیتا',
    },
    category: 'god',
    image: '/anahita.jpg',
    shortDescription: {
      en: 'The goddess of waters, fertility, and wisdom, protector of warriors and women',
      fa: 'ایزدبانوی آب‌ها، باروری و خرد، حامی پهلوانان و زنان',
    },
    fullStory: {
      en: `Anahita (Aredvi Sura Anahita), the goddess of waters, purity, fertility, wisdom, and beauty, is one of the most important female deities in Persian mythology. In the Avesta, particularly in Aban Yasht, she is praised as the guardian of rivers, lakes, and seas of the world. She is the Iranian counterpart to Ishtar of Mesopotamia and Aphrodite of Greece.

In Aban Yasht, Anahita is described as a young, beautiful, well-formed woman of noble character. She wears a tight belt around her waist, golden shining shoes, a tiger-skin coat, an eight-pointed golden crown decorated with a hundred stars, four-cornered golden earrings, a golden necklace, and magnificent gleaming garments. 

In traditional Persian art and stone reliefs at Taq-e Bostan, Anahita appears with a pearl-studded crown, pearl-strung robes, and holding a jug from which water flows. She stands beside Sasanian kings alongside Ahura Mazda, demonstrating her high status in the pantheon.

Anahita symbolizes purity, chastity, power, protection of women and warriors, fertility, and childbirth. She purifies the seed of men and the wombs of women, makes childbirth easy, and increases flocks and herds. In mythology, heroes like Jamshid, Fereydun, and Vishtaspa sought her aid before great endeavors.

Anahita represents the noble, pure, and powerful woman who stands against demons and forces of evil. Statues of her have been found in Susa, and she appears in reliefs at Taq-e Bostan and on Sasanian coins. The festival of Abangan and numerous temples in Iran and Armenia were dedicated to her worship.

Though compared to Ishtar, Aphrodite, and Artemis, Anahita possesses unique characteristics that distinguish her from these goddesses. She embodies the Persian ideals of purity, strength, wisdom, and the nurturing power of water - the source of all life and fertility in ancient Persian cosmology.`,
      fa: `آناهیتا (اَرِدْوی سورَ آناهیتا)، ایزدبانوی آب‌ها، پاکی، باروری، خرد و زیبایی، یکی از مهم‌ترین ایزدبانوان در اساطیر ایرانی است. در اوستا، به‌ویژه در آبان‌یشت، او به عنوان نگهبان رودها، دریاچه‌ها و دریاهای جهان ستایش شده است. او همتای ایرانی ایشتار بین‌النهرینی و آفرودیت یونانی است.

در آبان‌یشت، آناهیتا به صورت زنی جوان، خوش‌اندام، زیبا و نیکوسرشت توصیف شده است. او کمربندی تنگ بر میان بسته، کفش‌هایی زرین و درخشان دارد، جبه‌ای از پوست ببر بر تن دارد، تاجی زرین هشت‌پر با صد ستاره بر سر، گوشواره‌های چهارگوش زرین، گردنبند طلایی و جامه‌ای پرچین و درخشان بر تن دارد.

در هنر سنتی ایرانی و نقش برجسته‌های طاق بستان، آناهیتا با تاج مرواریدنشان، لباس با رشته‌های مرواریدی و کوزه‌ای در دست که از آن آب جاری است، تصویر شده است. او در کنار شاهان ساسانی و اهورامزدا قرار دارد که جایگاه رفیع او را نشان می‌دهد.

آناهیتا نماد پاکی، عفت، توانمندی، حمایت از زنان و پهلوانان، باروری و زایش است. او نطفه مردان و زهدان زنان را پاک می‌کند، زایش را آسان می‌سازد و بر گله و رمه می‌افزاید. در اساطیر، پهلوانانی چون جمشید، فریدون و ویسته‌اورو از او یاری می‌طلبند.

آناهیتا نماد زن شریف، پاکیزه و نیرومند است که در برابر دیوان و نیروهای شر می‌ایستد. مجسمه‌هایی از او در شوش یافت شده و او در نقش برجسته‌های طاق بستان و سکه‌های ساسانی ظاهر می‌شود. جشن آبانگان و معابد متعدد در ایران و ارمنستان به نام او ساخته شده است.

اگرچه او با ایشتار، آفرودیت و آرتمیس مقایسه می‌شود، اما ویژگی‌های منحصر به‌فردی دارد که او را متمایز می‌سازد. او ایده‌آل‌های ایرانی پاکی، قدرت، خرد و نیروی پرورش‌دهنده آب را تجسم می‌بخشد - منبع تمام زندگی و باروری در کیهان‌شناسی ایران باستان.`,
    },
    keyFacts: {
      en: [
        'Goddess of waters, fertility, and wisdom',
        'Wears eight-pointed golden crown with 100 stars',
        'Dressed in tiger-skin coat and golden jewelry',
        'Holds jug with flowing water',
        'Purifies seed and wombs, aids childbirth',
        'Heroes like Jamshid and Fereydun sought her aid',
        'Temples and festival of Abangan dedicated to her',
      ],
      fa: [
        'ایزدبانوی آب‌ها، باروری و خرد',
        'تاج زرین هشت‌پر با ۱۰۰ ستاره',
        'جبه پوست ببر و زیورآلات زرین',
        'کوزه با آب جاری در دست',
        'نطفه و زهدان را پاک می‌کند، زایش را آسان می‌سازد',
        'پهلوانانی چون جمشید و فریدون یاری او را طلبیدند',
        'معابد و جشن آبانگان به او اختصاص دارد',
      ],
    },
  },
  {
    id: 'white-demon',
    name: {
      en: 'White Demon (Div-e Sepid)',
      fa: 'دیو سپید',
    },
    category: 'creature',
    image: '/white-demon.jpg',
    shortDescription: {
      en: 'The fearsome ruler of Mazandaran demons, defeated by Rostam in his Seven Labors',
      fa: 'فرمانروای ترسناک دیوان مازندران، شکست‌خورده از رستم در هفت‌خان',
    },
    fullStory: {
      en: `The White Demon (Div-e Sepid) is one of the most fearsome antagonists in Shahnameh and Persian mythology. He is the ruler of the demons of Mazandaran and represents the forces of evil, darkness, and ignorance that oppose Iranian civilization and wisdom.

When Kay Kavus and the nobles of Iran ventured into Mazandaran, they were captured and blinded by the White Demon's magic. Only the blood from the demon's heart and liver could restore their sight, making his defeat essential for their salvation.

The White Demon possessed a terrifying appearance: an enormous white body, huge teeth, red eyes with magical powers, and immense strength. In Persian miniature paintings, he is depicted with his distinctive white face, large fangs, and gigantic form. The scenes of Rostam's battle with the White Demon are among the most popular subjects in Shahnameh illustration.

In the climactic Seventh Labor of Rostam, the hero confronted the White Demon in his lair. After a tremendous battle that shook the mountains, Rostam tore out the demon's heart and liver. With the demon's blood, he restored the sight of Kay Kavus and his companions, symbolizing the triumph of light over darkness and wisdom over ignorance.

The White Demon represents evil, darkness, and enmity toward wisdom and freedom. His magical ability to blind his victims symbolizes ignorance and the loss of enlightenment. In mythological psychology, he represents the Shadow archetype - the ultimate test the hero must overcome to reach a higher level of individuation and spiritual development.

The defeat of the White Demon by Rostam is more than a physical victory; it symbolizes the triumph of courage, wisdom, and perseverance over the forces of chaos and darkness. This story embodies the eternal Persian value of the struggle between light (representing knowledge, justice, and civilization) and darkness (representing ignorance, tyranny, and chaos).`,
      fa: `دیو سپید یکی از ترسناک‌ترین دشمنان در شاهنامه و اساطیر ایرانی است. او فرمانروای دیوان مازندران است و نماد نیروهای شر، تاریکی و جهلی است که در برابر تمدن و خرد ایرانی قرار می‌گیرند.

زمانی که کیکاووس و بزرگان ایران به مازندران رفتند، توسط جادوی دیو سپید اسیر و نابینا شدند. تنها خون دل و جگر این دیو می‌توانست بینایی آنان را بازگرداند، بنابراین شکست او برای نجات آنان ضروری بود.

دیو سپید ظاهری ترسناک داشت: تن عظیم سفید، دندان‌های بزرگ، چشمان سرخ با قدرت جادویی، و قدرتی فراوان. در نگارگری‌های ایرانی، او با چهره سفید مشخص، دندان‌های بزرگ و اندام غول‌آسا تصویر شده است. صحنه‌های نبرد رستم و دیو سپید از محبوب‌ترین موضوعات تصویرگری شاهنامه هستند.

در هفتمین خوان رستم، قهرمان با دیو سپید در لانه‌اش روبه‌رو شد. پس از نبردی عظیم که کوه‌ها را لرزاند، رستم دل و جگر دیو را از تنش بیرون کشید. با خون دیو، او بینایی کیکاووس و همراهانش را بازگرداند، که نماد پیروزی نور بر تاریکی و خرد بر جهل است.

دیو سپید نماد شرارت، تاریکی و دشمنی با خرد و آزادی است. قدرت جادویی او در نابینا کردن قربانیان، نماد جهل و از دست رفتن روشنایی است. در روان‌شناسی اسطوره‌ای، او نماد کهن‌الگوی سایه است - آزمون نهایی که قهرمان باید برای رسیدن به مرحله بالاتری از فردیت و رشد معنوی از آن عبور کند.

شکست دیو سپید توسط رستم فراتر از یک پیروزی فیزیکی است؛ نماد پیروزی شجاعت، خرد و پشتکار بر نیروهای هرج و مرج و تاریکی است. این داستان ارزش ازلی ایرانی نبرد میان نور (نماد دانش، عدالت و تمدن) و تاریکی (نماد جهل، استبداد و هرج و مرج) را تجسم می‌بخشد.`,
    },
    keyFacts: {
      en: [
        'Ruler of Mazandaran demons',
        'Blinded Kay Kavus and Iranian nobles with magic',
        'Enormous white body with red eyes',
        'His heart\'s blood restored sight to victims',
        'Defeated by Rostam in the Seventh Labor',
        'Symbolizes darkness, ignorance, and evil',
        'Represents the Shadow archetype in psychology',
      ],
      fa: [
        'فرمانروای دیوان مازندران',
        'کیکاووس و بزرگان ایران را با جادو نابینا کرد',
        'تن عظیم سفید با چشمان سرخ',
        'خون دلش بینایی قربانیان را بازگرداند',
        'در خوان هفتم توسط رستم شکست خورد',
        'نماد تاریکی، جهل و شرارت',
        'نماد کهن‌الگوی سایه در روان‌شناسی',
      ],
    },
  },
];

// Character name mappings from Persian to English
const characterNameMap: Record<string, string> = {
  'کیومرث': 'Kayumars',
  'هوشنگ': 'Hushang',
  'تهمورث': 'Tahmorath',
  'جمشید': 'Jamshid',
  'ضحاک': 'Zahhak',
  'کاوه آهنگر': 'Kaveh',
  'فریدون': 'Fereydun',
  'ایرج': 'Iraj',
  'سلم': 'Salm',
  'تور': 'Tur',
  'منوچهر': 'Manuchehr',
  'نوذر': 'Nowzar',
  'زو': 'Zav',
  'گرشاسب': 'Garshasp',
  'سام': 'Sam',
  'نریمان': 'Nariman',
  'زال': 'Zal',
  'رستم': 'Rostam',
  'سهراب': 'Sohrab',
  'فرامرز': 'Faramarz',
  'زواره': 'Zavvareh',
  'بانوگشسب': 'Banu Goshasp',
  'رودابه': 'Rudaba',
  'تهمینه': 'Tahmineh',
  'گردآفرید': 'Gordafarid',
  'فرانک': 'Farank',
  'کتایون': 'Katayun',
  'فرنگیس': 'Farangis',
  'جریره': 'Jarireh',
  'منیژه': 'Manijeh',
  'سودابه': 'Sudabeh',
  'آرش': 'Arash',
  'سیامک': 'Siamak',
  'آبتین': 'Abtin',
  'تهمورث دیوبند': 'Tahmorath Divband',
  'جم': 'Jam',
  'اَرجاسپ': 'Arjasp',
  'پشوتن': 'Pashotan',
  'بهمن': 'Bahman',
  'هماي چهرزاد': 'Homay',
  'داراب': 'Darab',
  'دارا': 'Dara',
  'کی‌قباد': 'Kay Qobad',
  'کی‌کاووس': 'Kay Kavus',
  'کی‌خسرو': 'Kay Khosrow',
  'لهراسپ': 'Lohrasp',
  'گشتاسپ': 'Goshtasp',
  'اسفندیار': 'Esfandiar',
  'بیژن': 'Bijan',
  'گیو': 'Giv',
  'گودرز': 'Gudarz',
  'رهام': 'Raham',
  'گرگین': 'Gorgin',
  'هژیر': 'Hajir',
  'توس': 'Tus',
  'فریبرز': 'Fariborz',
  'گرازه': 'Gorazeh',
  'بهرام': 'Bahram',
  'کشواد': 'Keshvad',
  'شیدوش': 'Shidush',
  'سالار': 'Salar',
  'فرود': 'Forud',
  'فرشیدورد': 'Farshidvard',
  'پیران ویسه': 'Piran Viseh',
  'ویسه': 'Viseh',
  'گرسیوز': 'Garsivaz',
  'افراسیاب': 'Afrasiab',
  'پشنگ': 'Pashang',
  'اغریرث': 'Aghrirath',
  'هومان': 'Human',
  'بارمان': 'Barman',
  'شیده': 'Shideh',
  'جهن': 'Jahn',
  'کاموس': 'Kamus',
  'اولاد': 'Ulad',
  'گل‌زاد': 'Golzad',
  'ارژنگ دیو': 'Arzhang Div',
  'دیو سفید': 'White Demon',
  'اکوان دیو': 'Akvan Div',
  'سیمرغ': 'Simorgh',
  'اژدهای خوان': 'Dragon',
  'سیاوش': 'Siavash',
  'کی‌ارز': 'Kay Arz',
  'اهورامزدا': 'Ahura Mazda',
  'اهریمن': 'Ahriman',
  'سروش': 'Sorush',
  'ایزدبانو ناهید': 'Anahita',
  'ایزد تیر': 'Tir',
};

// Automatically add all characters from JSON that aren't already in the detailed list
const existingIds = new Set(myths.map(m => m.id));
const additionalCharacters: Myth[] = shahnamehCharactersJson.shahnameh_characters_real_only
  .filter((name: string) => {
    const id = transliterate(name);
    return !existingIds.has(id) && !existingIds.has(name.toLowerCase());
  })
  .map((persianName: string) => {
    const englishName = characterNameMap[persianName] || persianName;
    const id = englishName.toLowerCase().replace(/\s+/g, '-');
    
    // Determine category based on name patterns
    let category: 'hero' | 'god' | 'creature' = 'hero';
    if (persianName.includes('دیو') || persianName.includes('اژدها')) {
      category = 'creature';
    } else if (persianName.includes('ایزد') || persianName === 'اهورامزدا' || persianName === 'اهریمن') {
      category = 'god';
    }
    
    return {
      id,
      name: {
        en: englishName,
        fa: persianName,
      },
      category,
      image: '/persian-pattern.jpg', // Default image
      shortDescription: {
        en: `A character from the Shahnameh, the epic Persian Book of Kings`,
        fa: `شخصیتی از شاهنامه، حماسه بزرگ ایرانی`,
      },
      fullStory: {
        en: `${englishName} is a character from the Shahnameh, the great Persian epic composed by Ferdowsi. This epic chronicles the history and mythology of Persia from the creation of the world until the Islamic conquest. Each character in the Shahnameh represents important values, virtues, or vices that shaped Persian culture and identity.`,
        fa: `${persianName} شخصیتی از شاهنامه، حماسه بزرگ ایرانی سروده فردوسی است. این حماسه تاریخ و اساطیر ایران را از آغاز آفرینش جهان تا فتح اسلامی روایت می‌کند. هر شخصیت در شاهنامه نماینده ارزش‌ها، فضایل یا رذایل مهمی است که فرهنگ و هویت ایرانی را شکل داده است.`,
      },
      keyFacts: {
        en: [
          'Character from Persian epic Shahnameh',
          'Part of Iran\'s rich mythological heritage',
          'Represents Persian cultural values',
        ],
        fa: [
          'شخصیتی از حماسه شاهنامه',
          'بخشی از میراث غنی اساطیری ایران',
          'نماینده ارزش‌های فرهنگی ایرانی',
        ],
      },
    };
  });

// Combine detailed and additional characters
export const allMyths = [...myths, ...additionalCharacters];
