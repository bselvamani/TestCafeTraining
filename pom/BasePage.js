import { Selector, tc } from 'testcafe'

class BasePage {
    constructor() {
        await tc.wait(milliseconds)
        .setTestSpeed(speedLevel);
    }
}

export default BasePage