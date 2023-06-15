import json from './parser';
import read from './reader';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((data) => json(data))
      .then((saving) => {
        const gameSaving = new GameSaving(JSON.parse(saving));
        return gameSaving;
      })
      .catch((error) => {
        console.log('Произошла ошибка ', error);
        throw new Error('Ошибка в загрузке сохранения игры');
      });
  }

  // static async load() {
  //     try {
  //         const data = await read();
  //         const saving = await json(data);
  //         const gameSaving = new GameSaving(JSON.parse(saving));
  //         return gameSaving;
  //     }
  //     catch (error) {
  //         throw new Error("Ошибка в загрузке сохранения игры");
  //     }
  // }
}
