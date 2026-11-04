export const site = {
  title: "jasonmiazga.com",
  blogTitle: "Jason Miazga's Blog",
  author: {
    name: "Jason Miazga",
    summary: "who lives and works in Cincinnati, OH building useful things.",
  },
  description:
    "Jason Miazga's personal site and blog. Cincinnati, OH senior web developer, meetup and conference organizer",
  social: {
    twitter: "jmiazga",
    github: "jmiazga",
    linkedin: "jasonmiazga",
    email: "jmiazga+website@gmail.com",
  },
}

export const formatDate = (date: Date) =>
  date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
    timeZone: "UTC",
  })
