import { observable, action, runInAction } from 'mobx';

interface IProfileData {
  email?: string;
}

interface IProfile {
  isAuth: boolean;
  data: IProfileData;
}

const initProfileData: IProfile = {
  isAuth: false,
  data: {}
};

export class UserStore {
  @observable public user: IProfile = initProfileData;

  @action public setUserData = (data: IProfileData) => {
    runInAction(() => {
      this.user = {
        ...this.user,
        isAuth: true,
        data
      };
    });

    // localStorage.setItem(LStorage.user, JSON.stringify(this.user));
  };

  @action public logout = () => {
    this.user = initProfileData;
    // localStorage.removeItem(LStorage.user);
  }
}

export default new UserStore();
