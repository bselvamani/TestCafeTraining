import { Selector, tc } from 'testcafe'
import BasePage from './BasePage'

class HomePage extends BasePage {
    
    constructor() {
        super()
        this.lnklogin = Selector('.login');
    }

    async onClickLogin() {
        await tc.click(lnklogin)
    }

}

export default HomePage