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

test("pages without product imagery display the shared hero banner", async ({
  page,
}) => {
  for (const route of [
    "/",
    "/projetos/",
    "/sobre-nos/",
    "/contactos/",
    "/politica-de-privacidade/",
    "/politica-de-cookies/",
  ]) {
    await page.goto(route);
    await expect(
      page.locator(
        'main > section:first-child img[src="/images/hero/hero-banner.webp"]',
      ),
    ).toBeVisible();
  }
});

test("navigation and primary contact actions work", async ({
  page,
}, testInfo) => {
  await page.goto("/");

  if (testInfo.project.name === "Mobile Chromium") {
    const menu = page.locator('button[aria-controls="mobile-navigation"]');
    await expect(menu).toBeVisible();
    await expect(menu).toHaveAccessibleName("Abrir menu");
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

  await expect(page.locator('a[href^="tel:"]:visible').first()).toBeVisible();
  await expect(
    page.locator('a[href^="mailto:"]:visible').first(),
  ).toBeVisible();
  await expect(
    page.locator('a[href^="https://wa.me/"]:visible').first(),
  ).toBeVisible();
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
  await expect
    .poll(() =>
      cards.first().evaluate((element) => getComputedStyle(element).cursor),
    )
    .toBe("pointer");
  await cards.first().click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  const closeButton = dialog.getByRole("button", { name: "Fechar" });
  await expect
    .poll(() =>
      closeButton.evaluate((element) => getComputedStyle(element).cursor),
    )
    .toBe("pointer");
  await expect
    .poll(() =>
      closeButton.evaluate((element) => {
        const { width, height } = element.getBoundingClientRect();
        return { width, height };
      }),
    )
    .toEqual({ width: 44, height: 44 });
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toHaveCount(0);
  await expect(cards.first()).toBeFocused();
});

test("navigation exposes current page and mobile Escape behavior", async ({
  page,
}, testInfo) => {
  await page.goto("/projetos/");

  if (testInfo.project.name === "Mobile Chromium") {
    const menu = page.locator('button[aria-controls="mobile-navigation"]');
    await expect
      .poll(() => menu.evaluate((element) => getComputedStyle(element).cursor))
      .toBe("pointer");
    await menu.click();

    const currentLink = page
      .locator("#mobile-navigation")
      .getByRole("link", { name: "Projetos", exact: true });
    await expect(currentLink).toHaveAttribute("aria-current", "page");
    await currentLink.focus();
    await page.keyboard.press("Escape");
    await expect(menu).toHaveAttribute("aria-expanded", "false");
    await expect(menu).toBeFocused();
  } else {
    const currentLink = page
      .getByRole("navigation", { name: "Navegação principal" })
      .getByRole("link", { name: "Projetos", exact: true });
    await expect(currentLink).toHaveAttribute("aria-current", "page");
  }
});

test("skip link transfers focus to the main content", async ({ page }) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  const skipLink = page.getByRole("link", { name: "Saltar para o conteúdo" });
  await expect(skipLink).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("#main-content")).toBeFocused();
});

test("all visible actions use the pointer cursor", async ({ page }) => {
  for (const route of publicRoutes) {
    await page.goto(route);
    const invalidActions = await page
      .locator("a[href], button:not(:disabled)")
      .evaluateAll((elements) =>
        elements
          .filter((element) => {
            const htmlElement = element as HTMLElement;
            return (
              (htmlElement.offsetWidth > 0 || htmlElement.offsetHeight > 0) &&
              getComputedStyle(htmlElement).cursor !== "pointer"
            );
          })
          .map((element) => ({
            tag: element.tagName,
            label:
              element.getAttribute("aria-label") ??
              element.textContent?.trim().slice(0, 60),
          })),
      );
    expect(invalidActions, `Unexpected cursor on ${route}`).toEqual([]);
  }
});

test("unknown routes return home", async ({ page }) => {
  await page.goto("/endereco-inexistente/");
  await expect(page).toHaveURL(/\/$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Janelas e portas",
  );
});

test("legal pages show approved external URLs", async ({ page }) => {
  for (const route of ["/politica-de-privacidade/", "/politica-de-cookies/"]) {
    await page.goto(route);
    await expect(
      page.getByRole("link", {
        name: "https://policies.google.com/privacy?hl=pt_PT",
      }),
    ).toBeVisible();
    await expect(
      page.getByRole("link", {
        name: "https://www.google.com/intl/pt_pt/help/terms_maps/",
      }),
    ).toBeVisible();
  }
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
