import { Selector, tc } from 'testcafe'
import BasePage from './BasePage'

class MyAccountPage extends BasePage {

    constructor() {
        super()
        this.lnkLogout = Selector('.logout')
    }

    async onClickLogout() {
        await tc.click(this.lnkLogout)
    }
}

export default MyAccountPage