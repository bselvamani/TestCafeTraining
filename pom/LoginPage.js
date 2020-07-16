import { Selector, tc } from 'testcafe'
import BasePage from './BasePage'

class LoginPage extends BasePage{

	constructor() {
		super()
		
		this.txtUser = Selector('#email', 'bright.selvam@gmail.com', { paste: true })
		this.txtPassword = Selector('#passwd', 'P@ssw0rd12*', { paste: true })
		this.btnSubmitLogin = Selector('#SubmitLogin')
		this.btnCreateUser = Selector('#SubmitCreate')
		this.txtAlert = Selector('.alert-danger');
	}

	async loginWith(userName, userPassword) {
		await tc.typeText(this.txtUser, userName, { paste: true, replace: true })
			.typeText(this.txtPassword, userPassword, { paste: true, replace: true })
			.click(this.btnSubmitLogin)
	}
}

export default LoginPage
