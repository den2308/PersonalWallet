
FlowRouter.route('/',{
  action() {
    ReactLayout.render(WalletsListMainPage,{});
  }
});

FlowRouter.route('/spending',{
    action() {
        ReactLayout.render(SpendList,{})
    }

});


FlowRouter.route('/addSpend',{
    action() {
        ReactLayout.render(Spend,{})
    }

});

