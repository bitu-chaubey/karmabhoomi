module.exports=function(){
    var  mongoose=require('mongoose');
    var dbURL=require('./properties').DB;
    mongoose.connect(dbURL);
}