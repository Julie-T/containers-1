export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Персонаж уже в команде');
    } else {
      this.members.add(character);
      return this.members;
    }
  }

  addAll(...characters) {
    characters.forEach((character) => {
      if (!this.members.has(character)) {
        this.members.add(character);
      }
      return this.members;
    });
  }

  toArray() {
    const newArr = [];
    this.members.forEach((member) => newArr.push(member));
    return newArr;
  }
}

export class Character {
  constructor(name) {
    this.name = name;
  }
}

// const team = new Team();
// const superMan = new Character('John');
// const fireMan = new Character('Mike');

// team.add(superMan);
// team.addAll(superMan, fireMan);
// console.log(team.toArray());
