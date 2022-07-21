import { set } from 'core-js/core/dict';
import Team from '../app';

test('Добавление персонажа в команду', () => {
  class Character {
    constructor(name) {
      this.name = name;
    }
  }

  const team = new Team();
  const superMan = new Character('John');

  expect(team.add(superMan)).toEqual(
    Team { members: Set(1) { Character { name: 'John' } } });
});

test('Добавление персонажа в команду повторно', () => {
    class Character {
      constructor(name) {
        this.name = name;
      }
    }
  
    const team = new Team();
    const superMan = new Character('John');
    team.add(superMan);

    expect(team.add(superMan)).toThrowError(new Error('Персонаж уже в команде'));
});

test('Добавление нескольких персонажей в команду', () => {
    class Character {
      constructor(name) {
        this.name = name;
      }
    }
  
    const team = new Team();
    const superMan = new Character('John');
    const fireMan = new Character('Mike');
  
    expect(team.addAll(superMan, fireMan)).toEqual(
        Team {
            members: Set(2) { Character { name: 'John' }, Character { name: 'Mike' } }
          }
    );
});

test('Преобразование в массив', () => {
    class Character {
      constructor(name) {
        this.name = name;
      }
    }
  
    const team = new Team();
    const superMan = new Character('John');
    const fireMan = new Character('Mike');
  
    expect(team.addAll(superMan, fireMan).toArray()).toEqual(
        [ Character { name: 'John' }, Character { name: 'Mike' } ]);
});
  