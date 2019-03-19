class user{
    constructor(bizModels){
        this.userId=bizModels.user_id;
        this.userName=bizModels.user_name;
        this.password=bizModels.password;
        this.userSex=bizModels.user_sex;
        this.userDept=bizModels.user_dept;
        this.note=bizModels.note;
    }
}
module.exports=user