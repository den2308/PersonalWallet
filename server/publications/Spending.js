Meteor.publish('spending', function(){
    return Spending.find();
});
