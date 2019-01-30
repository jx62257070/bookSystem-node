class user{
    constructor(bizModels){
        this.name=bizModels.name;
        this.pass=bizModels.pass;
        this.ifAdmin=bizModels.ifAdmin;
        this.registerTime=bizModels.registerTime;
    }
}
module.exports=user