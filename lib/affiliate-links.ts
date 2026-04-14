export interface AffiliateLink {
  id: string
  name: string
  slug: string
  prettyUrl: string
  destinationUrl: string
  category: string
  description: string
}

export const affiliateLinks: AffiliateLink[] = [
  {
    id: "1",
    name: "HubSpot",
    slug: "hubspot",
    prettyUrl: "/go/hubspot",
    destinationUrl: "https://www.hubspot.com/?utm_source=codagrowth&utm_medium=affiliate&utm_campaign=partner",
    category: "CRM & Marketing",
    description: "All-in-one CRM, marketing, sales, and service platform"
  },
  {
    id: "2",
    name: "Zapier",
    slug: "zapier",
    prettyUrl: "/go/zapier",
    destinationUrl: "https://zapier.com/?utm_source=codagrowth&utm_medium=affiliate&utm_campaign=partner",
    category: "Automation",
    description: "Connect apps and automate workflows"
  },
  {
    id: "3",
    name: "Notion",
    slug: "notion",
    prettyUrl: "/go/notion",
    destinationUrl: "https://affiliate.notion.so/codagrowth?utm_source=codagrowth&utm_medium=affiliate",
    category: "Productivity",
    description: "All-in-one workspace for notes, docs, and collaboration"
  },
  {
    id: "4",
    name: "Airtable",
    slug: "airtable",
    prettyUrl: "/go/airtable",
    destinationUrl: "https://airtable.com/invite/r/codagrowth?utm_source=codagrowth&utm_medium=affiliate",
    category: "Database",
    description: "Spreadsheet-database hybrid for organizing anything"
  },
  {
    id: "5",
    name: "Make",
    slug: "make",
    prettyUrl: "/go/make",
    destinationUrl: "https://www.make.com/en/register?pc=codagrowth&utm_source=codagrowth&utm_medium=affiliate",
    category: "Automation",
    description: "Visual platform for building automated workflows"
  },
  {
    id: "6",
    name: "Slack",
    slug: "slack",
    prettyUrl: "/go/slack",
    destinationUrl: "https://slack.com/partners/codagrowth?utm_source=codagrowth&utm_medium=affiliate",
    category: "Communication",
    description: "Business messaging and collaboration platform"
  },
  {
    id: "7",
    name: "Monday.com",
    slug: "monday",
    prettyUrl: "/go/monday",
    destinationUrl: "https://monday.com/?utm_source=codagrowth&utm_medium=affiliate&utm_campaign=partner",
    category: "Project Management",
    description: "Work OS for teams to manage projects and workflows"
  },
  {
    id: "8",
    name: "Calendly",
    slug: "calendly",
    prettyUrl: "/go/calendly",
    destinationUrl: "https://calendly.com/?utm_source=codagrowth&utm_medium=affiliate&utm_campaign=partner",
    category: "Scheduling",
    description: "Automated scheduling and appointment booking"
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
    category: "Email Marketing",
    description: "Email marketing and automation platform"
  }
]

export const categories = [...new Set(affiliateLinks.map(link => link.category))]
