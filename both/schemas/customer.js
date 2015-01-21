var customersSchema = new SimpleSchema({
    name :{
       type: String
    },
    email:{
        type:String,
        regEx: SimpleSchema.RegEx.Email
    },
    isPremium:{
        type:Boolean,
        defaultValue: false
    },
    city:{
        type:String
    },
    owner:{
        type:String,
        optional: true //Populated by server hook
    },
    createdAt:{
        type: Date,
        optional: true //Populated by server hook
    }
});

Customers.attachSchema(customersSchema);