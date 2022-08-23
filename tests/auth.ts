import { type Page } from "@playwright/test";

export type Credentials = {
    manager: Credential,
}

export type Credential = {
    login: string,
    password: string,
}

export async function login(page: Page, credential: Credential) {
    await page.goto("https://github.com/microsoft/playwright");
}
