export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    this.members.forEach((member) => {
      if (member !== character) {
        this.members.add(character);
      } else {
        throw new Error('Персонаж уже в команде');
      }
    });
  }

  addAll(...characters) {
    characters.forEach((character) => {
      if (!this.members.includes(character)) {
        this.members.add(character);
      }
    });
  }

  toArray() {
    const newArr = [];
    this.members.forEach((member) => newArr.push(member));
  }
}
