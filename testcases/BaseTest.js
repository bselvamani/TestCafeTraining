import { selector } from 'testcafe';

fixture `Base Test`
.page `http://automationpractice.com/`

.beforeEach(async t => {
    await t.setTestSpeed(1)
});