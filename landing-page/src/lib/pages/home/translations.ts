import type { Translation } from "$lib/utils/translationType";

export const translations = {
  hero: {
    "en-US": "A platform fostering mutual knowledge exchange and resource-sharing between Haitians in Haiti and the diaspora through educational content, live classes, and a marketplace, encouraging everyone to actively contribute.",
    "ht-HT": "Yon platfòm ki ankouraje echanj mityèl konesans ak resous ant Ayisyen nan Ayiti ak nan dyaspora a atravè kontni edikatif, klas an dirèk, ak yon mache, ankouraje tout moun pou yo kontribye aktivman."
  } satisfies Translation,
} as const;