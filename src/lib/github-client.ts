import { Octokit } from "@octokit/core";

export const client = new Octokit({
  auth: process.env.GITHUB_AUTH_TOKEN,
});
