export interface AffiliateLink {
  id: string
  name: string
  slug: string
  prettyUrl: string
  destinationUrl: string
}

export const affiliateLinks: AffiliateLink[] = [
  {
    id: "1",
    name: "adcreative",
    slug: "adcreative",
    prettyUrl: "/go/adcreative",
    destinationUrl: "https://free-trial.adcreative.ai/yux16osy6mo1"
  },
  {
    id: "2",
    name: "GoHighLevel1",
    slug: "GoHighLevel1",
    prettyUrl: "/go/gohighlevel1",
    destinationUrl: "https://gohighlevel.com/annual?fp_ref=ghl-codagrowth&_gl=1*89u0oj*_gcl_au*NDg3NTYwOTA1LjE3NzUyMzk1NTkuOTMzODA1OTQ1LjE3NzU1ODU2NzMuMTc3NTU4NTY3NA..*_ga*MjA2NjM4MTU1LjE3NzUyMzk1NTk.*_ga_HSZW8WNR22*czE3NzU1ODU2NjUkbzUkZzEkdDE3NzU1ODU3MDUkajIwJGwwJGgw"
  },
  {
    id: "3",
    name: "GoHighLevel2",
    slug: "GoHighLevel2",
    prettyUrl: "/go/gohighlevel2",
    destinationUrl: "https://www.gohighlevel.com/protrial?fp_ref=ghl-codagrowth"
  },
  {
    id: "4",
    name: "Beehiiv",
    slug: "Beehiiv",
    prettyUrl: "/go/beehiiv",
    destinationUrl: "https://www.beehiiv.com/?via=xn--Andrea-Marc-0eb"
  },
  {
    id: "5",
    name: "Make",
    slug: "make",
    prettyUrl: "/go/make",
    destinationUrl: "https://www.make.com/en/register?pc=codagrowth&utm_source=codagrowth&utm_medium=affiliate"
  },
  {
    id: "6",
    name: "Slack",
    slug: "slack",
    prettyUrl: "/go/slack",
    destinationUrl: "https://slack.com/partners/codagrowth?utm_source=codagrowth&utm_medium=affiliate"
  },
  {
    id: "7",
    name: "Monday.com",
    slug: "monday",
    prettyUrl: "/go/monday",
    destinationUrl: "https://monday.com/?utm_source=codagrowth&utm_medium=affiliate&utm_campaign=partner"
  },
  {
    id: "8",
    name: "Calendly",
    slug: "calendly",
    prettyUrl: "/go/calendly",
    destinationUrl: "https://calendly.com/?utm_source=codagrowth&utm_medium=affiliate&utm_campaign=partner"
  },
  {
    id: "9",
    name: "Typeform",
    slug: "typeform",
    prettyUrl: "/go/typeform",
    destinationUrl: "https://www.typeform.com/?utm_source=codagrowth&utm_medium=affiliate&utm_campaign=partner",
    category: "Forms",
    description: "Beautiful, conversational forms and surveys"
  },
  {
    id: "10",
    name: "Mailchimp",
    slug: "mailchimp",
    prettyUrl: "/go/mailchimp",
    destinationUrl: "https://mailchimp.com/?utm_source=codagrowth&utm_medium=affiliate&utm_campaign=partner",
  }
]

export const categories = [...new Set(affiliateLinks.map(link => link.category))]
