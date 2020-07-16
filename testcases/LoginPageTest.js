import { Selector } from 'testcafe'

fixture`Getting Started`
    .page`http://automationpractice.com`
    .beforeEach(async t => {
        await t.setTestSpeed(1)
        await t.setPageLoadTimeout(10)
    });

test('I should login with user and password', async t => {

    const login = Selector('.login');
    const createUser = Selector('#SubmitCreate');

    await t
        .click(login)
        .typeText('#email', 'bright.selvam@gmail.com', { paste: true })
        .typeText('#passwd', 'P@ssw0rd12*', { paste: true })
        .click('#SubmitLogin')
        .takeScreenshot({ fullPage: true })
        .wait(2000)
        .expect(createUser.exists).notOk()
        .click('.logout')
        .expect(login.exists).ok()
        .wait(2000);
});

test('I shouldnot login with Invalid user and password', async t => {

    const login = Selector('.login');
    const alertMessage = Selector('.alert-danger');

    await t
        .click(login)
        .typeText('#email', 'bright.selvam@gmail.com', { paste: true })
        .typeText('#passwd', 'P@ssw0rd12**', { paste: true })
        .click('#SubmitLogin')
        .takeScreenshot({ fullPage: true })
        .expect(alertMessage.exists).ok()
        .wait(2000);
});