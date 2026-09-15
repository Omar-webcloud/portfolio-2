/**
 * Regenerates src/data/contributions.json from the GitHub GraphQL API.
 *
 * Usage:  npm run contributions        (requires `gh` to be authenticated)
 *
 * The portfolio ships the generated file so the page renders without any
 * runtime API call (and without leaking a token to the browser).
 */
import { execFileSync } from "node:child_process";
import { writeFileSync } from "node:fs";

const LOGIN = "Omar-webcloud";

const QUERY = `
query {
  user(login: "${LOGIN}") {
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays { date contributionCount contributionLevel }
        }
      }
    }
  }
}`;

const out = execFileSync(
  "gh",
  ["api", "graphql", "-f", `query=${QUERY}`],
  { encoding: "utf8", maxBuffer: 1024 * 1024 * 32 }
);

const calendar = JSON.parse(out).data.user.contributionsCollection.contributionCalendar;

const data = {
  login: LOGIN,
  generatedAt: new Date().toISOString(),
  totalCount: calendar.totalContributions,
  weeks: calendar.weeks.map((week) =>
    week.contributionDays.map((day) => ({
      date: day.date,
      count: day.contributionCount,
      level: day.contributionLevel,
    }))
  ),
};

writeFileSync(
  new URL("../src/data/contributions.json", import.meta.url),
  `${JSON.stringify(data, null, 2)}\n`
);

console.log(`Wrote ${data.weeks.length} weeks / ${data.totalCount} contributions.`);
