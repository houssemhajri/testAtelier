export class Player {
  firstname: string | undefined;
  id: string | undefined;
  lastname: string | undefined;
  picture: string | undefined;
  sex: string | undefined;
  shortname: string | undefined;
  data: DataPlayer | undefined;

  constructor(
    firstname?: string,
    id?: string,
    lastname?: string,
    picture?: string,
    sex?: string,
    shortname?: string,
    data?: DataPlayer,
    country?: Country
  ) {
    this.firstname = firstname;
    this.id = id;
    this.lastname = lastname;
    this.picture = picture;
    this.sex = sex;
    this.shortname = shortname;
    this.data = data;
  }
}
export class DataPlayer {
  age: number | undefined;
  height: number | undefined;

  last: Array<number> | undefined;

  points: number | undefined;

  rank: number | undefined;

  weight: number | undefined;
  constructor(
    age?: number,
    height?: number,

    last?: Array<number>,

    points?: number,

    rank?: number,

    weight?: number
  ) {
    this.age = age;
    this.height = height;
    this.last = last;
    this.points = points;
    this.rank = rank;
    this.weight = weight;
  }
}
export class Country {
  code: string | undefined;
  picture: string | undefined;
  constructor(code?: string, picture?: string) {
    this.code = code;
    this.picture = picture;
  }
}
