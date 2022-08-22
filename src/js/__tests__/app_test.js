import Team, {
  Character,
} from '../app';

test('Добавление персонажа в команду', () => {
  const team = new Team();
  const superMan = new Character('John');
  team.add(superMan);

  expect(team.toArray()).toEqual([{
    name: 'John',
  }]);
});

test('Добавление персонажа в команду повторно', () => {
  const team = new Team();
  const superMan = new Character('John');
  team.add(superMan);

  expect(team.add(superMan)).toThrow('Персонаж уже в команде');
});

test('Добавление нескольких персонажей в команду', () => {
  const team = new Team();
  const superMan = new Character('John');
  const fireMan = new Character('Mike');
  team.addAll(superMan, fireMan);

  expect(team.toArray()).toEqual(
    [{
      name: 'John',
    }, {
      name: 'Mike',
    }],
  );
});

test('Добавление нескольких персонажей в команду', () => {
  const team = new Team();
  const superMan = new Character('John');
  const fireMan = new Character('Mike');
  team.add(superMan, fireMan);
  team.addAll(superMan, fireMan);

  expect(team.toArray()).toEqual(
    [{
      name: 'John',
    }, {
      name: 'Mike',
    }],
  );
});

// test('Добавление нескольких персонажей в команду', () => {
//   const team = new Team();
//   const superMan = new Character('John');
//   const fireMan = new Character('Mike');
//   team.addAll(superMan, fireMan);

//   expect(team.toArray()).toEqual(
//     [{
//       name: 'John'
//     }, {
//       name: 'Mike'
//     }]);
// });
