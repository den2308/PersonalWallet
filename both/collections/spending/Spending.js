Spending = new Mongo.Collection('spending');
Spending.attachSchema(new SimpleSchema({
	date: {
		type: Date,
		label:"Date",
		optional: true
	},
	money: {
		type:Number,
		decimal: true,
		label:"Money",
		min:0
	},
	createdBy: {
    type: String
    }	

}));