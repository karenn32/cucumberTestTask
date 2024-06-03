import { browser } from '@wdio/globals';

class Page {
    open(path) {
        return browser.url(`https://www.saucedemo.com/${path}`);
    }
}

export default Page;
