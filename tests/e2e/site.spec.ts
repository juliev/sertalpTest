import { expect, test } from "@playwright/test";
import { company, publicRoutes } from "../../src/content/company";
import { workImages } from "../../src/content/images";
import { productGalleryItems, projects } from "../../src/content/projects";
import { en } from "../../src/i18n/dictionaries/en";
import { pt } from "../../src/i18n/dictionaries/pt";
import { isPreviewDeployment } from "../../src/lib/deployment";

test("home and every public route load", async ({ page }) => {
  for (const route of publicRoutes) {
    await page.goto(route);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator("body")).toBeVisible();
  }
});

test("page hero assignments retain compact priority image cards", async ({
  page,
}) => {
  const assignments = [
    ["/", "/images/works/projects/fernando-ferreira-janelas-portas-pvc.webp"],
    ["/janelas/", "/images/works/windows/diogo-velasques-janelas-pvc.webp"],
    [
      "/portas/",
      "/images/works/projects/bernardim-ribeiro-portas-arqueadas-aluminio.webp",
      pt.doors.hero.imageAlt,
    ],
    [
      "/projetos/",
      "/images/works/projects/almoinhas-velhas-fachada-aluminio.webp",
      pt.projects.hero.imageAlt,
    ],
    ["/sobre-nos/", "/images/works/projects/lisboa-fachada-janelas-pvc.webp"],
    [
      "/contactos/",
      "/images/works/projects/duque-do-cadaval-varanda-aluminio.webp",
    ],
  ] as const;

  for (const [route, src, alt] of assignments) {
    await page.goto(route);
    const hero = page.locator("main > section:first-child img");
    await expect(hero).toHaveAttribute("src", src);
    if (alt) {
      await expect(hero).toHaveAttribute("alt", alt);
    }
    await expect(hero).not.toHaveAttribute("loading", "lazy");
    await expect
      .poll(() => hero.evaluate((image) => getComputedStyle(image).objectFit))
      .toBe("cover");
    await expect
      .poll(() =>
        hero.evaluate((image) => {
          const container = image.parentElement;
          return container ? container.clientWidth / container.clientHeight : 0;
        }),
      )
      .toBeCloseTo(1.5, 1);
  }
});

test("legal pages use a text-only header with no image column", async ({
  page,
}) => {
  for (const route of ["/politica-de-privacidade/", "/politica-de-cookies/"]) {
    await page.goto(route);
    const header = page.locator("main > header:first-child");
    await expect(header).toBeVisible();
    await expect(header.locator("img")).toHaveCount(0);
    await expect(page.locator("main > section:first-child")).toHaveCount(0);
    await expect(header.locator(":scope > div")).not.toHaveClass(/grid-cols-2/);
  }
});

test("Home shows exactly the three approved real-work previews", async ({
  page,
}) => {
  await page.goto("/");
  await expect(
    page.getByRole("link", { name: pt.home.hero.secondaryCta }),
  ).toHaveAttribute("href", "/projetos/");
  const cards = page.getByTestId("project-grid").getByRole("button");
  await expect(cards).toHaveCount(3);
  await expect(cards.nth(0)).toContainText("Almoinhas Velhas");
  await expect(cards.nth(0)).toContainText("Soluções em alumínio e PVC");
  await expect(cards.nth(1)).toContainText("Alegria");
  await expect(cards.nth(1)).toContainText("Porta de entrada em alumínio");
  await expect(cards.nth(2)).toContainText("Bernardim Ribeiro");
  await expect(cards.nth(2)).toContainText(
    "Portas arqueadas em alumínio por medida",
  );
  await expect(
    page.getByText("Fernando Ferreira", { exact: true }),
  ).toHaveCount(0);
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

test("Contacts uses a compact list and responsive location column", async ({
  page,
}, testInfo) => {
  await page.goto("/contactos/");

  await expect(
    page.getByText(
      "Escolha a forma mais conveniente de entrar em contacto connosco.",
      { exact: true },
    ),
  ).toBeVisible();
  await expect(
    page.getByText("Telemóvel e WhatsApp", { exact: true }),
  ).toBeVisible();

  const layout = page.getByTestId("contact-layout");
  const list = page.getByTestId("contact-list");
  await expect(list.locator(":scope > div")).toHaveCount(4);
  await expect(
    list.locator(`a[href="${company.telephoneHref}"]`),
  ).toContainText(company.telephone);
  await expect(list.locator(`a[href="${company.mobileHref}"]`)).toContainText(
    company.mobile,
  );
  await expect(
    page.locator(`a[href="${company.whatsappUrl}"]:visible`).first(),
  ).toBeVisible();
  await expect(
    list.locator(`a[href="mailto:${company.primaryEmail}"]`),
  ).toContainText(company.primaryEmail);
  await expect(
    list.locator(`a[href="mailto:${company.legacyEmail}"]`),
  ).toContainText(company.legacyEmail);

  const facebook = layout.getByRole("link", { name: "Sertalp no Facebook" });
  await expect(facebook).toHaveAttribute("href", company.facebookUrl);
  await expect(facebook).toHaveAttribute("target", "_blank");
  await expect(facebook).toHaveAttribute("rel", "noopener noreferrer");
  await expect(facebook.locator("svg")).toHaveCount(1);
  await expect(facebook).toHaveText("");

  const map = layout.locator("iframe");
  await expect(map).toHaveAttribute(
    "title",
    "Localização da fábrica Sertalp na Terrugem",
  );
  await expect(map).toHaveAttribute("loading", "lazy");
  await expect(map).toHaveAttribute("src", company.mapsEmbedUrl);
  const mapHeight = await map.evaluate(
    (element) => element.getBoundingClientRect().height,
  );
  const [minimum, maximum] =
    testInfo.project.name === "Mobile Chromium" ? [240, 280] : [300, 340];
  expect(mapHeight).toBeGreaterThanOrEqual(minimum);
  expect(mapHeight).toBeLessThanOrEqual(maximum);

  const mapLink = layout.getByRole("link", { name: "Abrir no Google Maps" });
  await expect(mapLink).toHaveAttribute("href", company.mapsUrl);
  await expect(layout.getByRole("button")).toHaveCount(0);
  await expect(layout.locator("form")).toHaveCount(0);

  expect(en.contacts.information).toMatchObject({
    intro: "Choose the most convenient way to contact us.",
    heading: "Contacts",
    mobileLabel: "Mobile and WhatsApp",
    socialTitle: "Social networks",
    facebookAriaLabel: "Sertalp on Facebook",
  });
  expect(en.contacts.map).toMatchObject({
    title: "Location",
    factoryLabel: "Factory",
    link: "Open in Google Maps",
  });
});

test("project gallery opens and closes accessibly", async ({ page }) => {
  await page.goto("/projetos/");
  const cards = page
    .getByTestId("project-grid")
    .getByRole("button", { name: /Ver projeto/ });
  await expect(cards).toHaveCount(23);
  await expect(cards.first()).toHaveAccessibleName(
    /Ver projeto: Almoinhas Velhas — Soluções em alumínio e PVC/,
  );
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

test("Projects render in the approved order and multi-image records navigate", async ({
  page,
}) => {
  await page.goto("/projetos/");
  const grid = page.getByTestId("project-grid");
  const cards = grid.getByRole("button");
  const locations = [
    "Almoinhas Velhas",
    "Linda-a-Velha",
    "Bernardim Ribeiro",
    "Fernando Ferreira",
    "Casal do Paúl",
    "Alegria",
    "Castanheiros",
    "Diogo Velasques",
    "Santa Rita",
    "Duque do Cadaval",
    "Lisboa",
    "Sobreda",
    "Alcoutins",
    "Egas Moniz",
    "Infante Santo",
    "Adema do Meio",
    "Faias",
    "Barril",
    "Ulgueir",
    "Pascoal de Melo",
    "Misericórdia",
    "Riba Fria",
    "Macieiras",
  ];
  await expect(cards).toHaveCount(locations.length);
  await expect(grid.getByTestId("project-description")).toHaveCount(23);
  for (const [index, location] of locations.entries()) {
    await expect(cards.nth(index)).toContainText(location);
  }

  for (const [location, total] of [
    ["Almoinhas Velhas", 4],
    ["Diogo Velasques", 2],
  ] as const) {
    const card = cards.filter({ hasText: location });
    await card.click();
    await expect(page.getByText(`Imagem 1 de ${total}`)).toBeVisible();
    await page
      .getByRole("dialog")
      .getByRole("button", { name: "Imagem seguinte" })
      .click();
    await expect(page.getByText(`Imagem 2 de ${total}`)).toBeVisible();
    await page.keyboard.press("Escape");
  }

  await expect(
    page.getByText("Sistema de correr em alumínio de grande dimensão"),
  ).toHaveCount(0);
  await expect(
    page.getByText("Porta envidraçada em PVC por medida"),
  ).toHaveCount(0);
});

test("product galleries use the approved entries and order", async ({
  page,
}) => {
  await page.goto("/janelas/");
  const windowGrid = page.getByTestId("project-grid");
  const windows = windowGrid.getByRole("button");
  await expect(windows).toHaveCount(12);
  await expect(windowGrid.getByTestId("project-description")).toHaveCount(12);
  for (const [index, location] of [
    "Diogo Velasques",
    "Fernando Ferreira",
    "Sobreda",
    "Santa Rita",
    "Almoinhas Velhas",
    "Casal do Paúl",
    "Duque do Cadaval",
    "Faias",
    "Lisboa",
    "Ulgueir",
    "Alcoutins",
    "Egas Moniz",
  ].entries()) {
    await expect(windows.nth(index)).toContainText(location);
  }

  await page.goto("/portas/");
  const doorGrid = page.getByTestId("project-grid");
  const doors = doorGrid.getByRole("button");
  await expect(doors).toHaveCount(13);
  await expect(doorGrid.getByTestId("project-description")).toHaveCount(11);
  for (const [index, title] of [
    "Linda-a-Velha",
    "Alegria",
    "Bernardim Ribeiro",
    "Castanheiros",
    "Adema do Meio",
    "Misericórdia",
    "Infante Santo",
    "Almoinhas Velhas",
    "Barril",
    "Pascoal de Melo",
    "Macieiras",
    "Sistema de correr em alumínio de grande dimensão",
    "Porta envidraçada em PVC por medida",
  ].entries()) {
    await expect(doors.nth(index)).toContainText(title);
  }
  await expect(doors.nth(11)).not.toContainText(" · ");
  await expect(doors.nth(12)).not.toContainText(" · ");
});

test("door material cards use actual door photographs", async ({ page }) => {
  await page.goto("/portas/");
  const aluminiumCard = page.locator("article").filter({
    has: page.getByRole("heading", {
      name: "Portas em alumínio",
      exact: true,
    }),
  });
  await expect(aluminiumCard.locator("img")).toHaveAttribute(
    "src",
    workImages.bernardimRibeiro.src,
  );
  await expect(aluminiumCard.locator("img")).toHaveAttribute(
    "alt",
    pt.projects.items["bernardim-ribeiro"].alts[0],
  );
});

test("project assumptions and unnamed examples remain centralized", () => {
  const previousIds = [
    "casal-do-paul",
    "almoinhas-velhas",
    "diogo-velasques",
    "alegria",
    "misericordia",
    "santa-rita",
    "sobreda",
    "egas-moniz",
    "infante-santo",
    "adema-do-meio",
    "macieiras",
  ];
  const newIds = [
    "lisboa",
    "ulgueir",
    "riba-fria",
    "pascoal-de-melo",
    "linda-a-velha",
    "fernando-ferreira",
    "faias",
    "duque-do-cadaval",
    "bernardim-ribeiro",
    "barril",
    "alcoutins",
    "castanheiros",
  ];

  expect(projects).toHaveLength(23);
  expect(new Set(projects.map(({ id }) => id)).size).toBe(23);
  expect(projects.map(({ id }) => id)).toEqual(
    expect.arrayContaining(previousIds),
  );
  expect(projects.map(({ id }) => id)).toEqual(expect.arrayContaining(newIds));
  expect(
    projects
      .filter(({ id }) => newIds.includes(id))
      .every(({ materialNeedsClientConfirmation }) =>
        Boolean(materialNeedsClientConfirmation),
      ),
  ).toBe(true);
  expect(
    projects.every(
      (project) =>
        project.materialNeedsClientConfirmation &&
        ["PVC", "Alumínio", "Alumínio e PVC"].includes(project.material),
    ),
  ).toBe(true);
  expect(projects.filter(({ id }) => id === "almoinhas-velhas")).toHaveLength(
    1,
  );
  expect(
    projects.find(({ id }) => id === "almoinhas-velhas")?.additionalImages,
  ).toHaveLength(3);
  expect(projects.find(({ id }) => id === "ulgueir")).toMatchObject({
    location: "Ulgueir",
    locationNeedsClientConfirmation: true,
    installationPhoto: true,
  });
  expect(projects.map(({ id }) => id)).not.toContain("unnamed-sliding-door");
  expect(projects.map(({ id }) => id)).not.toContain("unnamed-arched-door");
  expect(productGalleryItems.map(({ id }) => id)).toEqual([
    "unnamed-sliding-door",
    "unnamed-arched-door",
  ]);
});

test("Portuguese and English project dictionaries remain synchronized", () => {
  expect(Object.keys(en.projects.categories)).toEqual(
    Object.keys(pt.projects.categories),
  );
  expect(Object.keys(en.projects.materials)).toEqual(
    Object.keys(pt.projects.materials),
  );
  expect(Object.keys(en.projects.items)).toEqual(
    Object.keys(pt.projects.items),
  );
  expect(Object.keys(en.home.projects.items)).toEqual(
    Object.keys(pt.home.projects.items),
  );
  expect(en.doors.hero.imageAlt).toBe(
    "Glazed aluminium doors made for arched interior openings",
  );
  expect(en.projects.hero.imageAlt).toBe(
    "Contemporary house with dark aluminium windows and doors",
  );
});

test("new project images use safe shared WebP records with explicit dimensions", () => {
  const newImages = [
    workImages.fernandoFerreira,
    workImages.lindaAVelha,
    workImages.bernardimRibeiro,
    workImages.lisboaFacade,
    workImages.duqueDoCadaval,
    workImages.ulgueir,
    workImages.ribaFria,
    workImages.pascoalDeMelo,
    workImages.faias,
    workImages.barril,
    workImages.alcoutins,
    workImages.castanheiros,
    workImages.almoinhasPanoramic,
    workImages.almoinhasFacade,
  ];

  expect(new Set(newImages.map(({ src }) => src)).size).toBe(14);
  expect(
    newImages.every(
      ({ src, width, height }) =>
        /^\/images\/works\/projects\/[a-z0-9-]+\.webp$/.test(src) &&
        width > 0 &&
        height > 0,
    ),
  ).toBe(true);
  expect(workImages.lisboaFacade).toMatchObject({
    width: 1536,
    height: 1024,
  });
  expect(workImages.barril).toMatchObject({ width: 1280, height: 720 });
  expect(workImages.alcoutins).toMatchObject({ width: 1600, height: 1200 });

  const almoinhas = projects.find(({ id }) => id === "almoinhas-velhas");
  expect(almoinhas?.coverImage).toBe(workImages.almoinhasFacade);
  expect(
    almoinhas?.additionalImages?.filter(
      ({ installationPhoto }) => installationPhoto,
    ),
  ).toEqual([workImages.almoinhasPanoramic]);
});

test("non-hero images are lazy and all image URLs resolve", async ({
  page,
}) => {
  for (const route of ["/", "/janelas/", "/portas/", "/projetos/"]) {
    const failures: string[] = [];
    page.on("response", (response) => {
      if (
        response.request().resourceType() === "image" &&
        response.status() >= 400
      ) {
        failures.push(`${response.status()} ${response.url()}`);
      }
    });
    await page.goto(route);
    const images = page.locator("img");
    await expect(images.first()).toBeVisible();
    const missingAlts = await images.evaluateAll(
      (items) =>
        items.filter((image) => !image.getAttribute("alt")?.trim()).length,
    );
    expect(missingAlts, `Missing alt on ${route}`).toBe(0);
    const nonHeroLoading = await images.evaluateAll((items) =>
      items.slice(1).map((image) => image.getAttribute("loading")),
    );
    expect(nonHeroLoading.every((loading) => loading === "lazy")).toBe(true);
    expect(failures, `Broken image on ${route}`).toEqual([]);
    page.removeAllListeners("response");
  }
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
    await expect(currentLink).toHaveClass(/underline/);
    await expect(currentLink).not.toBeFocused();
    await expect
      .poll(() =>
        currentLink.evaluate((element) => ({
          focusVisible: element.matches(":focus-visible"),
          outline: getComputedStyle(element).outlineStyle,
        })),
      )
      .toEqual({ focusVisible: false, outline: "none" });
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

test("confirmed experience, geography and certifications are published safely", async ({
  page,
}) => {
  await page.goto("/");
  await expect(
    page.getByText("Experiência no setor desde fevereiro de 1978", {
      exact: true,
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", {
      name: "Experiência no setor desde fevereiro de 1978",
      exact: true,
    }),
  ).toHaveCount(0);
  await expect(page.getByText(/mais de 30 anos/i)).toHaveCount(0);

  await page.goto("/sobre-nos/");
  const geography =
    "A Sertalp realiza trabalhos em Portugal Continental, de norte a sul, e conta também com projetos e fornecimentos para a Madeira, os Açores, Espanha, Israel e Angola.";
  await expect(page.getByText(geography, { exact: true })).toBeVisible();
  await expect(page.getByText(geography, { exact: true })).toHaveCount(1);
  await expect(
    page.getByRole("heading", {
      name: "Projetos e fornecimentos",
      exact: true,
    }),
  ).toHaveCount(0);
  const capabilities = page
    .getByRole("heading", {
      name: "O que orienta o nosso trabalho",
      exact: true,
    })
    .locator("xpath=ancestor::section");
  await expect(capabilities.locator("article")).toHaveCount(3);
  await expect(
    page.getByRole("heading", {
      name: "Empresa aderente ao sistema CLASSE+",
    }),
  ).toBeVisible();
  await expect(page.getByText(/136169-PAR/).first()).toBeVisible();
  await expect(page.getByText(/02\/07\/2021/)).toBeVisible();
  await expect(
    page.getByText(/fundador|proprietário|diretor|biografia/i),
  ).toHaveCount(0);
  await expect(page.getByText(/outros países da Europa/i)).toHaveCount(0);
  await expect(
    page.getByText(/classificação A\+|classe energética A\+|todos.*A\+/i),
  ).toHaveCount(0);
  await expect(
    page.locator(
      'a[href$=".pdf"], a[href*="certificado"], img[src*="certificado"], img[src*="certificate"]',
    ),
  ).toHaveCount(0);
  await expect(page.getByText("Consultar certificado")).toHaveCount(0);
});

test("brands, suppliers and opening hours are absent", async ({ page }) => {
  for (const route of ["/", "/janelas/", "/portas/", "/sobre-nos/"]) {
    await page.goto(route);
    await expect(
      page.getByRole("heading", {
        name: /marcas|fornecedores|parceiros|brands|suppliers|partners/i,
      }),
    ).toHaveCount(0);
  }

  await page.goto("/contactos/");
  await expect(page.getByText(/horário|opening hours/i)).toHaveCount(0);
  const structuredData = await page
    .locator('script[type="application/ld+json"]')
    .allTextContents();
  expect(structuredData.join(" ")).not.toContain("openingHours");
});

test("both confirmed email addresses are published correctly", async ({
  page,
}) => {
  await page.goto("/contactos/");
  await expect(
    page.getByText("Email principal", { exact: true }),
  ).toBeVisible();
  await expect(
    page.getByText("Email alternativo", { exact: true }),
  ).toBeVisible();
  await expect(
    page.locator('a[href="mailto:sertalplda@gmail.com"]').first(),
  ).toContainText("sertalplda@gmail.com");
  await expect(page.locator('a[href="mailto:sertalp@sapo.pt"]')).toContainText(
    "sertalp@sapo.pt",
  );
  await expect(
    page.getByText(/Certificado IMPIC n.º 136169-PAR/),
  ).toBeVisible();
});

test("footer retains the complete approved legal line", async ({ page }) => {
  await page.goto("/");
  await expect(
    page
      .getByRole("contentinfo")
      .getByText(company.legalFooter, { exact: true }),
  ).toBeVisible();
});

test("production metadata, sitemap and robots cover every public page", async ({
  page,
  request,
}) => {
  const seoByRoute = [
    ["/", pt.home.seo],
    ["/janelas/", pt.windows.seo],
    ["/portas/", pt.doors.seo],
    ["/projetos/", pt.projects.seo],
    ["/sobre-nos/", pt.about.seo],
    ["/contactos/", pt.contacts.seo],
    ["/politica-de-privacidade/", pt.privacy.seo],
    ["/politica-de-cookies/", pt.cookies.seo],
  ] as const;
  const titles = new Set<string>();
  const descriptions = new Set<string>();

  for (const [route, seo] of seoByRoute) {
    await page.goto(route);
    await expect(page).toHaveTitle(seo.title);
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      "content",
      seo.description,
    );
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      new URL(route, company.canonicalUrl).toString(),
    );
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
      "content",
      /index, follow/,
    );
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
      "content",
      new RegExp(`^${company.canonicalUrl}/images/works/`),
    );
    expect(await page.content()).not.toContain("pages.dev");
    titles.add(seo.title);
    descriptions.add(seo.description);
  }

  expect(titles.size).toBe(publicRoutes.length);
  expect(descriptions.size).toBe(publicRoutes.length);

  const robots = await request.get("/robots.txt");
  expect(robots.ok()).toBe(true);
  expect(await robots.text()).toContain("Allow: /");
  expect(await robots.text()).toContain(
    `Sitemap: ${company.canonicalUrl}/sitemap.xml`,
  );

  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.ok()).toBe(true);
  const sitemapXml = await sitemap.text();
  for (const route of publicRoutes) {
    expect(sitemapXml).toContain(
      new URL(route, company.canonicalUrl).toString(),
    );
  }

  expect((await request.get("/favicon.ico")).ok()).toBe(true);
});

test("Cloudflare preview detection is build-time and branch-based", () => {
  expect(
    isPreviewDeployment({
      CF_PAGES: "1",
      CF_PAGES_BRANCH: "feature/website-review",
    }),
  ).toBe(true);
  expect(isPreviewDeployment({ CF_PAGES: "1", CF_PAGES_BRANCH: "main" })).toBe(
    false,
  );
  expect(
    isPreviewDeployment({ CF_PAGES: undefined, CF_PAGES_BRANCH: undefined }),
  ).toBe(false);
  expect(
    isPreviewDeployment({ CF_PAGES: "1", CF_PAGES_BRANCH: undefined }),
  ).toBe(false);
});

test("site has no removed UI and no horizontal mobile overflow", async ({
  page,
}) => {
  for (const route of publicRoutes) {
    await page.goto(route);
    await expect(page.locator("form, input, textarea, select")).toHaveCount(0);
    await expect(
      page.locator('a[href^="/en"], a[href^="/pt"], a[href^="/uk"]'),
    ).toHaveCount(0);
    await expect(page.getByText(/testemunhos|testimonials/i)).toHaveCount(0);

    const hasOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth + 1,
    );
    expect(hasOverflow, `Horizontal overflow on ${route}`).toBe(false);
  }
});
