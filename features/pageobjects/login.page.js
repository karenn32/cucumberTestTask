import Page from './page.js';

class LoginPage extends Page {
    get inputUsername() {
        return $('input[data-test="username"]');
    }

    get inputPassword() {
        return $('input[data-test="password"]');
    }

    get btnSubmit() {
        return $('input[data-test="login-button"]');
    }

    get loginErrorIcon() {
        return $('svg[xmlns="http://www.w3.org/2000/svg"]');
    }

    get loginErrorText() {
        return $('h3[data-test="error"]');
    }

    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    open() {
        return super.open('');
    }
}

export default new LoginPage();
