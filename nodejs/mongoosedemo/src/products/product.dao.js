var mongoose = require('mongoose');
var productSchema = require('./product.model');

productSchema.statics={
    get: function(query,cb){
        this.find(query,cb);
    },
    create: function(data,cb){
        var product=this(data);
        product.save();
    },
    update: function(query,update,cb){
        this.findOneAndUpdate(query,{$set:updateData},cb);
    },
    delete:function(query,cb){
        this.findOneAndDelete(query,cb);
    }
}

var productModel = mongoose.model("Product",productSchema)
module.exports= productModel;