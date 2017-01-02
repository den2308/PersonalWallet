if (Wallets.find().count() === 0) {
    Wallets.insert({
        name: 'Main',
        money: '2000'
    });

    Wallets.insert({
        name: 'walet1',
        money: '100'
    });

    Wallets.insert({
        name: 'Bank',
        money: '5350'
    });
}   