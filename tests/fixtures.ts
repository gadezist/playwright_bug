import { test as base, type Page, type BrowserContext } from "@playwright/test";
import { login, type Credentials } from "./auth";

export const test = base.extend<{
    managerContext: BrowserContext,
    managerPage: Page,
}, {
    managerState: any,
} & Credentials>({
    manager: [{ login: "", password: "" }, { scope: "worker", option: true }],

    // Manager
    managerState: [async ({ browser, manager }, use) => {
        const page = await browser.newPage();
        await login(page, manager);

        const cookies = await page.context().cookies();
        const state = { cookies };

        use(state);

    }, { scope: "worker" }],
    managerContext: async ({ context, managerState }, use) => {
        const { cookies } = managerState;
        await context.addCookies(cookies);

        use(context);
    },
    managerPage: async ({ managerContext }, use) => {
        const page = await managerContext.newPage();

        use(page);
    }
});
