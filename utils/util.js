const util={
    changeTime(data) {
        var year = new Date(data).getFullYear(); //获取完整的年份(4位,1970-????)
        var month = new Date(data).getMonth() + 1; //获取当前月份(0-11,0代表1月)
        var day = new Date(data).getDate(); //获取当前日(1-31)
        if (month < 10) {
          month = "0" + month;
        }
        if (day < 10) {
          day = "0" + day;
        }
        let newData = `${year}-${month}-${day} `
        return newData;
      },
    changeTimeDetil(data) {
        let ymd=this.changeTime(data);
        var hour = new Date(data).getHours();//获取当前小时
        var min = new Date(data).getMinutes();//获取当前分钟
        var second = new Date(data).getSeconds();//获取当秒
        if (hour < 10) {
            hour = "0" + hour;
        }
        if (min < 10) {
            min = "0" + min;
        }
        if (second < 10) {
            second = "0" + second;
        }
        let newData = `${ymd} ${hour}:${min}:${second}`
        return newData;
      },
}
module.exports = util;