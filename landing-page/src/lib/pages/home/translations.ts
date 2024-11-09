import type { Translation } from "$lib/utils/translationType";

export const translations = {
  hero: {
    //todo write on the svelte discord about snippet closures.
    "en-US": "A platform fostering mutual knowledge exchange and resource-sharing between Haitians in Haiti and the diaspora through educational content, live classes, and a marketplace, encouraging everyone to actively contribute.",
    "ht-HT": "Yon platfòm ki ankouraje echanj mityèl konesans ak resous ant Ayisyen nan Ayiti ak nan dyaspora a atravè kontni edikatif, klas an dirèk, ak yon mache, ankouraje tout moun pou yo kontribye aktivman."
  } satisfies Translation,
  readMore: {
    "en-US": 'Read More',
    "ht-HT": "Li Plis"
  } satisfies Translation,
  collapse: {
    "en-US": "Collapse",
    "ht-HT": "Fèmen"
  } satisfies Translation,
  sections: {
    intro: {
      title: {
        "en-US": 'The Vision',
        "ht-HT": "Vizyon Nou"
      } satisfies Translation,
      shortDescription: {
        "en-US": "Starting a new project is fun and challenging. It takes planning and hard work. Sometimes, problems come up, but staying focused helps you succeed. Reaching the goal feels great, but learning along the way is special too.",
        'ht-HT': "Kòmanse yon nouvo pwojè se amizan e difisil. Sa mande planifikasyon ak travay di. Pafwa, gen pwoblèm ki parèt, men rete konsantre ede ou reyisi. Rive nan objektif la bay anpil satisfaksyon, men aprann pandan w ap avanse enpòtan tou."
      } satisfies Translation,
      longDescription: {
        "en-US": `
        <p>This project aims to create a space where Haitian creators can share educational content in various formats (text, video, infographics), fostering a <span class="font-semibold">mutual exchange of knowledge and resources</span> between Haitians living in Haiti and those in the diaspora. 
        </p>
        <p>By actively encouraging users to contribute their unique insights and skills, the platform promotes a collaborative learning environment that benefits all participants.This system is designed to grow with its users, where everyone has something to offer and can add to the conversation.
        </p>
        <p>Content can be presented as one-time educational shorts or consecutive programs/classes. All users are encouraged to create content, even if it is a “remix” or a reply to content someone else posted. Respect for everyone's opinion will be enforced and violators may be constrained only to viewing and the user will be unable to participate in conversations.
        </p>
        <p>
        In the final version, the platform will also include a <span class="font-semibold">gift shop</span>, allowing users to purchase handcrafted items or hire services offered by creators, further supporting local and diaspora entrepreneurs.The gift shop provides both visibility and an online marketplace for both creators in Haiti and the diaspora.
        </p>
        <p>
        Additionally, live classes and accessibility features will be incorporated, ensuring that the platform is inclusive and easy to use for everyone and the content more engaging.
        </p>`,
        'ht-HT': `
        <p>
        Pwojè sa a vize kreye yon espas kote kreyatè Ayisyen ka pataje kontni edikatif nan plizyè fòm (tèks, videyo, enfografik), ankouraje yon <span class="font-semibold">echanj mityèl konesans ak resous ant Ayisyen k ap viv an Ayiti ak moun ki nan dyaspora a</span>.
        </p> 
        <p>
        Nou ankouraje itilizatè yo pou yo kontribye ak konesans ak ladrès inik yo pou kreye yon anviwònman aprantisaj kolaboratif ki benefisye tout patisipan yo. Sistèm sa a fèt pou l grandi ak itilizatè li yo, kote tout moun gen yon bagay pou yo ofri epi yo ka ajoute nan konvèsasyon an. 
        </p>
        <p>
        Kontni yo ka prezante swa kòm on sèl emisyon oswa on pwogram ak plizyè klas. Tout itilizatè yo ankouraje pou yo kreye kontni, menm si se yon repons a kontni yon lòt moun te pibliye. Ap gen respè pou opinyon tout moun, epi moun ki vyole règ yo ka gen aksè limite kote yo sèlman ap kapab gade yo pap kap patisipe nan konvesasyon yo.
        </p>
        <p>
        Nan vèsyon final la, platfòm nan ap gen ladan yon <span> mache anlin</span>, kote itilizatè yo ap kapab achte atizana oswa anboche sèvis ke kreyatè yo ofri, sa ki sipòte antreprenè lokal yo ak moun nan dyaspora a. Shòp anlin la ap pèmèt kreyatè ki an Ayiti e lòt nan dyaspora a jwenn plis vizibilite.
        </p>
        <p>
        Anplis de sa, klas an dirèk ak karakteristik aksesibilite ap ajoute pou asire ke platfòm nan inklizif epi fasil pou tout moun itilize, e pou fè kontni an plis angajan.
        </p>`
      } satisfies Translation
    },
    features: {
      title: {
        "en-US": "Features",
        "ht-HT": "Sa'l Ye"
      } satisfies Translation,
      shortDescription: {
        "en-US": "Starting a new project is fun and challenging. It takes planning and hard work. Sometimes, problems come up, but staying focused helps you succeed. Reaching the goal feels great, but learning along the way is special too.",
        "ht-HT": "Kòmanse yon nouvo pwojè se amizan e difisil. Sa mande planifikasyon ak travay di. Pafwa, gen pwoblèm ki parèt, men rete konsantre ede ou reyisi. Rive nan objektif la bay anpil satisfaksyon, men aprann pandan w ap avanse enpòtan tou."
      } satisfies Translation,
      longDescription: {
        "en-US":
          `
          <div>
            <h3>User Profiles and Selling Permissions</h3>
            <p>All users will have a single account type, but to sell items or services in the gift shop, users will need to apply through their profile.</p>
          </div>
          <div>
            <h3>Live Classes (Zoom-style)</h3>
            <p>Platfòm nan ap gen sipò pou klas an dirèk, sa ki ap pèmèt eksperyans aprantisaj an tan reyèl. Sesyon sa yo kapab sèvi kòm opòtinite pou kesyon ak repons, espesyalman pou moun ki vle aprann lang.</p>
          </div>
          <div>
            <h3>Content in Multiple Formats</h3>
            <p>Users can create and consume educational content in text, video, or infographics, covering a wide range of subjects. While most topics are welcome, content depicting violence or instructing on how to make weapons or drugs is not permitted.</p>
          </div>
          <div>
            <h3>Gift Shop</h3>
            <p>A marketplace where users can buy handcrafted items or hire services offered by other users, once they are approved to sell. Educational content creators may also have the option to sell their work on the gift shop either in physical or virtual format.</p>
          </div>
          <div>
            <h3>Subtitles and Translations</h3>
            <p>The platform will offer translation services or at least subtitles for all video content to ensure accessibility.</p>
          </div>
        `,
        "ht-HT": `
          <div>
            <h3>Profil e Aksè pou Vann</h3>
            <p>Tout itilizatè yo ap gen yon sèl kalite kont, men pou vann pwodwi oswa sèvis nan boutik kado a, itilizatè yo ap bezwen fè yon aplikasyon nan pwofil yo.</p>
          </div>
          <div>
            <h3>Class an Dirèk (Tankou Zoom)</h3>
            <p>The platform will support live classes, allowing for real-time learning experiences. These sessions can also serve as Q&A opportunities, especially for language learning courses.</p>
          </div>
          <div>
            <h3>Matyè an Plizyè Fòm</h3>
            <p>Itilizatè yo ka kreye epi konsome kontni edikatif an tèks, videyo, oswa enfografik, sou yon pakèt sijè. Pandan ke pifò sijè yo aksepte, kontni ki montre vyolans oswa ki montre kijan pou fè zam oswa dwòg pa pèmèt.</p>
          </div>
          <div>
            <h3>Shòp Anlin</h3>
            <p>Yon mache kote itilizatè yo kapab achte atizana oswa anboche sèvis lòt itilizatè yo ofri, apre yo fin aksepte kòm vandè. Kreyatè kontni edikatif yo ka gen opsyon pou yo vann travay yo nan boutik kado a, swa nan yon fòma fizik oswa vityèl.</p>
          </div>
          <div>
            <h3>Soutit ak Tradiksyon</h3>
            <p>Platfòm nan ap ofri sèvis tradiksyon oswa omwen soun-tit pou tout kontni videyo pou asire aksesibilite.</p>
          </div>
          `
      } satisfies Translation
    },
    cta: {
      title: {
        "en-US": "Join Us",
        "ht-HT": "Kolabore avèk Nou"
      } satisfies Translation,
      shortDescription: {
        "en-US": "Starting a new project is fun and challenging. It takes planning and hard work. Sometimes, problems come up, but staying focused helps you succeed. Reaching the goal feels great, but learning along the way is special too.",
        "ht-HT": "Kòmanse yon nouvo pwojè se amizan e difisil. Sa mande planifikasyon ak travay di. Pafwa, gen pwoblèm ki parèt, men rete konsantre ede ou reyisi. Rive nan objektif la bay anpil satisfaksyon, men aprann pandan w ap avanse enpòtan tou."
      } satisfies Translation,
      longDescription: {
        "en-US": `
         <p>
        We invite coders from around the world, especially those with ties to Haiti, to help bring this project to life. Your contributions—whether it’s in development, UI/UX design, or simply sharing your ideas—are crucial for building a platform that empowers Haitians both in Haiti and the diaspora.
        </p>
        <p>
        If you’d like to contribute, please feel free to:
        </p>
        <ul>
        <li>Fork this repository and submit a pull request</li>
        <li>Open an issue with suggestions or ideas</li>
        <li>Reach out to us for collaboration</li>
        </ul>
        <p>Please see our contributing guidelines to learn how you can participate in this initiative.
        </p>
        <p>
        Thank you for your support in helping create an educational and resourceful community for Haitians everywhere!
        </p>`,
        "ht-HT": `
             <p>
        Nou envite pwogramè toupatou nan mond lan, espesyalman moun ki gen lyen ak Ayiti, pou ede reyalize pwojè sa a. Kout men ou—kit nan devlopman, konsepsyon UI/UX, oswa pataje lide—trè enpòtan pou bati yon platfòm ki bay pouvwa Ayisyen nan Ayiti ak nan dyaspora a.
        </p>
        <p>
        Si w enterese pou kontribye, ou kapab:
        </p>
        <ul>
        <li>Fork repozitwa sa a epi soumèt yon "pull request"/li>
        <li>Kite yon sijesyon oswa yon lide nan seksyon pwoblèm yo</li>
        <li>Kontakte nou pou kolaborasyon</li>
        </ul>
        <p>Tanpri konsilte gid kontribisyon nou an pou w aprann kijan ou ka patisipe nan inisyativ sa a
        </p>
        <p>
        Mèsi paskè ou ede nou kreye yon kominote edikatif e itil pou tout Ayisyen!
        </p>
        `
      } satisfies Translation
    },
  },
  joinUs: {
    "en-US": "Join Us",
    "ht-HT": "Kolabore avèk Nou"
  } satisfies Translation
} as const;