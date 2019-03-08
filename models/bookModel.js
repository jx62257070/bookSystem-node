class book{
    constructor(bizModels){
        this.ISBN=bizModels.ISBN,
        this.bookName=bizModels.book_name,
        this.author= bizModels.author,
        this.type=bizModels.type,
        this.press=bizModels.press,
        this.pressTime= this.checkTime(bizModels.press_date),
        this.stock= bizModels.stock,
        this.position= bizModels.position,
        this.price=bizModels.price,
        this.note= bizModels.note
    }
    checkTime(time){
        if (time == "0000-00-00"||time==undefined) time = ""
        else time =time.getFullYear() + "-" + (time.getMonth() + 1) + "-" + time.getDate();
        return time
    }
}
module.exports=book