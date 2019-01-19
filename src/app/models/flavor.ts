export class Flavor{
    flavorId:String;
    flavorName:String;
    flavorImage:String;

    /**
     *
     */
    constructor(_flavorId:String,_flavorName:String,_image:String) {
        this.flavorId=_flavorId;
        this.flavorName=_flavorName;
        this.flavorImage=_image;
    }

}