import { Page, expect } from '@playwright/test';

export class FirstProductPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
}