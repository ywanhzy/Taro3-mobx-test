
import { configure, observable, action, } from 'mobx'

configure({
    enforceActions: 'always'
})

class Store {
    @observable systemInfo = {}; //用户信息

    @action.bound
    async setSystemInfo(model) {
        console.log('setSystemInfo-', model)
        try {
            // if (!isEmpty(model)) {
            this.systemInfo = model
            // }
            return this.systemInfo
        } catch (error) {
            return Promise.reject(error)
        }
    }
}
const appStore = new Store();
export default appStore
