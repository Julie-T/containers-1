import Team from '../app';

test('', () => {
  class Character {
    constructor(name) {
      this.name = name;
    }
  }

  const team = new Team();
  const superMan = new Character('John');
  const fireMan = new Character('Mike');

  expect(team.add(superMan)).toEqual({
    Set() { name: 'John' },
  });

  expect(team.add(superMan)).toThrowError(new Error('Персонаж уже в команде'));

  expect(team.addAll(superMan, fireMan)).toBe({
    Set() {{ name: 'John'}, { name: 'Mike'} },
  });
  
  expect(team.toArray()).toEqual({
  
  });

});
