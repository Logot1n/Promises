import GameSavingLoader from '../js/GameSavingLoader';

describe('GameSavingLoader', () => {
  test('Должен загрузить объект сохранения', async () => {
    const gameSaving = await GameSavingLoader.load();
    expect(gameSaving.id).toBe(9);
    expect(gameSaving.created).toBe(1546300800);
    expect(gameSaving.userInfo.id).toBe(1);
    expect(gameSaving.userInfo.name).toBe('Hitman');
    expect(gameSaving.userInfo.level).toBe(10);
    expect(gameSaving.userInfo.points).toBe(2000);
  });

  test('Проверка на ошибку', async () => {
    try {
      await GameSavingLoader.load();
    } catch (error) {
      expect(error.message).toBe('Ошибка в загрузке сохранения игры');
    }
  });
});
