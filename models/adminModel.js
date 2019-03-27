class admin{
    constructor(bizModels){
        this.adminId=bizModels.admin_id;
        this.adminName=bizModels.admin_name;
        this.password=bizModels.password;
        this.adminSex=bizModels.admin_sex;
        this.adminPhone=bizModels.admin_phone;
        this.permission=bizModels.permission;
        this.note=bizModels.note;
    }
}
module.exports=admin