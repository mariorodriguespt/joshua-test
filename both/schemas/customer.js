var customersSchema = new SimpleSchema({
    name :{
       type: String
    },
    email:{
        type:String
    },
    isPremium:{
        type:Boolean,
        defaultValue: false
    },
    city:{
        type:String
    },
    owner:{
        type:String
    }
});

Customers.attachSchema(customersSchema);