export class Pokemon {
    id?: number;
    name!: string;
    image?: string;
    attack! : number;
    defense! : number;
    type!:  string;
    idAuthor!: number;
    hp!: number



    constructor(id: number ,name: string, image: string, attack: number, 
                defense: number, type: string, idAuthor: number, hp: number){
        this.id = id;
        this.name = name;
        this.image = image;
        this.attack = attack;
        this.defense = defense;
        this.type = type;
        this.idAuthor = this.idAuthor;
        this.hp = hp;
    }

}