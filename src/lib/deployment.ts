type DeploymentEnvironment = {
  CF_PAGES?: string;
  CF_PAGES_BRANCH?: string;
};

export const isPreviewDeployment = (
  environment: DeploymentEnvironment = {
    CF_PAGES: process.env.CF_PAGES,
    CF_PAGES_BRANCH: process.env.CF_PAGES_BRANCH,
  },
) =>
  environment.CF_PAGES === "1" &&
  environment.CF_PAGES_BRANCH !== undefined &&
  environment.CF_PAGES_BRANCH !== "main";
