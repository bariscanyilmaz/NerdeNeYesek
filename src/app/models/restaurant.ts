export class Restaurant{
    placeId:String;
    summary:String;
    rating:Number;
    author:String;
    imageSrc:String;
    name:string;
    flavorName:String;
    description:String;
    coverphoto:String;
    location:{
        lat:number,
        lng:number
    };
    /**
     *
     */
    constructor(_id:String,_summary:String,_rating:Number,_author:String,_imageSrc:String,_name:string,_flavorName:String,_description:String,_location:{lat:number,lng:number}) {
        this.placeId=_id;
        this.summary=_summary;
        this.rating=_rating;
        this.author=_author;
        this.name=_name;
        this.imageSrc=_imageSrc;
        this.flavorName=_flavorName;
        this.description=_description;
        this.location=_location;
        this.coverphoto='./assets/coverphotos/'+this.placeId+'.jpg';
    }

    
}