import mongoose from 'mongoose';
import props from './properties';

module.exports=function(){
    //var  mongoose=require('mongoose');
    //var dbURL=require('./properties').DB;
    var dbURL = props.DB;
    mongoose.connect(dbURL);
}