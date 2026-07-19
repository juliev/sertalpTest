import { expect, test } from "@playwright/test";

const publicRoutes = [
  "/",
  "/janelas/",
  "/portas/",
  "/projetos/",
  "/sobre-nos/",
  "/contactos/",
  "/politica-de-privacidade/",
  "/politica-de-cookies/",
];

test("home and every public route load", async ({ page }) => {
  for (const route of publicRoutes) {
    await page.goto(route);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator("body")).toBeVisible();
  }
});

test("navigation and primary contact actions work", async ({
  page,
}, testInfo) => {
  await page.goto("/");

  if (testInfo.project.name === "Mobile Chromium") {
    const menu = page.getByRole("button", { name: "Abrir menu" });
    await expect(menu).toBeVisible();
    await menu.click();
    await expect(menu).toHaveAttribute("aria-expanded", "true");
    await page
      .locator("#mobile-navigation")
      .getByRole("link", { name: "Projetos", exact: true })
      .click();
  } else {
    await page
      .getByRole("navigation", { name: "Navegação principal" })
      .getByRole("link", { name: "Projetos", exact: true })
      .click();
  }

  await expect(page).toHaveURL(/\/projetos\/$/);
  await page.goto("/");
  await page.getByRole("link", { name: "Pedir orçamento" }).first().click();
  await expect(page).toHaveURL(/\/contactos\/$/);

  await expect(page.locator('a[href^="tel:"]').first()).toBeVisible();
  await expect(page.locator('a[href^="mailto:"]').first()).toBeVisible();
  await expect(page.locator('a[href^="https://wa.me/"]').first()).toBeVisible();
  await expect(page.locator("iframe[title]")).toHaveAttribute(
    "loading",
    "lazy",
  );
  await expect(
    page.locator('a[href="https://maps.app.goo.gl/5UhdfnTUioboDMtQ7?g_st=ic"]'),
  ).toBeVisible();
});

test("project gallery opens and closes accessibly", async ({ page }) => {
  await page.goto("/projetos/");
  const cards = page
    .getByTestId("project-grid")
    .getByRole("button", { name: /Ampliar imagem/ });
  await expect(cards).toHaveCount(6);
  await cards.first().click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toHaveCount(0);
  await expect(cards.first()).toBeFocused();
});

test("unknown routes return home", async ({ page }) => {
  await page.goto("/endereco-inexistente/");
  await expect(page).toHaveURL(/\/$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Janelas e portas",
  );
});

test("site has no removed UI and no horizontal mobile overflow", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.locator("form, input, textarea, select")).toHaveCount(0);
  await expect(
    page.locator('a[href^="/en"], a[href^="/pt"], a[href^="/uk"]'),
  ).toHaveCount(0);
  await expect(page.getByText(/testemunhos|testimonials/i)).toHaveCount(0);

  const hasOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > window.innerWidth + 1,
  );
  expect(hasOverflow).toBe(false);
});
