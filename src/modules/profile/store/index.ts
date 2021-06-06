import { observable, action, makeAutoObservable } from 'mobx';

const LS_PROFILE_DATA = 'LS_PROFILE_DATA';

export interface IProfileData {
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

export class ProfileStore {
  profile: IProfile = initProfileData;

  constructor () {
    const dataFromLocalStorage = localStorage.getItem(LS_PROFILE_DATA);
    this.profile = dataFromLocalStorage ? JSON.parse(dataFromLocalStorage) : initProfileData;

    makeAutoObservable(this, {
      profile: observable,
      actionLogout: action,
      actionSetUserData: action,
    });
  }

  actionSetUserData = (data: IProfileData) => {
    this.profile = {
      ...this.profile,
      isAuth: true,
      data
    };

    localStorage.setItem(LS_PROFILE_DATA, JSON.stringify(this.profile));
  };

  actionLogout = () => {
    this.profile = initProfileData;
    localStorage.removeItem(LS_PROFILE_DATA);
  }
}

export default new ProfileStore();
