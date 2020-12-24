import { action, configure, observable, runInAction, decorate } from 'mobx';

configure({
    enforceActions: 'never'
})

class Index {
    systemInfo = {};
    miniAppModel = { miniAppBanner: [], hotSquare: [], hotBarand: [] };
    allList = []
    setValue(keys, data) {
        this[keys] = data;
    }
    async setMiniAppModel(model) {
        try {
            runInAction(() => {
                this.miniAppModel = model
                this.allList = model.miniAppBanner
            })
            return this.miniAppModel
        } catch (error) {
            return Promise.reject(error)
        }
    }

    async setSystemInfo(model) {
        console.log('setSystemInfo-',model)
        try {
            runInAction(() => {
                // if (!isEmpty(model)) {
                    this.systemInfo = model
                // }
            })
            return this.systemInfo
        } catch (error) {
            return Promise.reject(error)
        }
    }

    // async getHomeIndex(userId) {
    //     let params = {
    //         userId: userId,
    //         showLoading: true
    //     };
    //     try {
    //         const res = await axios.post(API_INDEX_BANNER, params)
    //         runInAction(() => {
    //             this.miniAppModel = res.data
    //         })
    //         return this.miniAppModel
    //     } catch (error) {
    //         throw new Error(error.message)
    //     }
    // }

}


decorate(Index, {
    systemInfo: observable,
    miniAppModel: observable,
    allList: observable,

    getHomeIndex: action.bound,
    setMiniAppModel: action.bound,
    setValue: action.bound,

})

const app = new Index();

export default app;
