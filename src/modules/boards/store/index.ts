import { observable, action, computed, toJS, makeAutoObservable } from 'mobx';
import { IBoardPreview } from '../types';

interface IBoardState {
  previewList: IBoardPreview[];
}

const initBoardData: IBoardState = {
  previewList: [],
};

export class BoardStore {
  data: IBoardState = initBoardData;

  constructor () {
    makeAutoObservable(this, {
      data: observable,
      actionSetPreviewList: action,
      actionUpdatePreviewItem: action,
      actionAddPreviewItem: action,
      actionRemovePreviewItem: action,
      previewList: computed,
    });
  }

  actionSetPreviewList = (list: IBoardPreview[]) => {
    this.data.previewList = list;
  }

  actionAddPreviewItem = (board: IBoardPreview) => {
    this.data.previewList.push(board);
  }

  actionRemovePreviewItem = (id: string) => {
    this.data.previewList = this.data.previewList.filter((board) => board.id !== id);
  }

  actionUpdatePreviewItem = (id: string, board: IBoardPreview) => {
    this.data.previewList = this.data.previewList.map((item) => {
      if (item.id === id) {
        return board;
      }
      return item;
    })
  }

  get previewList() {
    return toJS(this.data.previewList);
  }
}

export default new BoardStore();
