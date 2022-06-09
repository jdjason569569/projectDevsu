export class Pokemon {
    id!: number;
    name!: string;
    image!: string;
    attack! : number;
    defense! : number;

    constructor(id: number ,name: string, image: string, attack: number, defense: number){
        this.id = id;
        this.name = name;
        this.image = image;
        this.attack = attack;
        this.defense = defense;
    }

}