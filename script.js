const cardsData = [
    {cardId: "basic", priceMonth: "19.99", priceYear: "199.99", storage: "500 GB Storage", users: "2 Users Allowed", send: "Send up to 3 GB"}, 
    {cardId: "pro", priceMonth: "24.99", priceYear: "249.99", storage: "1 TB Storage", users: "5 Users Allowed", send: "Send up to 10 GB"}, 
    {cardId: "master", priceMonth: "39.99", priceYear: "399.99", storage: "2 TB Storage", users: "10 Users Allowed", send: "Send up to 20 GB"}
];

const cardsContainer = document.querySelector('.cards-container');
const periodSwitch = document.querySelector('#period-switch');

// Init cards
for(let i = 0; i < cardsData.length; i++) {
    cardsContainer.children[i].getElementsByClassName('card__price')[0].append(cardsData[i].priceMonth);
    cardsContainer.children[i].getElementsByClassName('card__storage')[0].append(cardsData[i].storage);
    cardsContainer.children[i].getElementsByClassName('card__users')[0].append(cardsData[i].users);
    cardsContainer.children[i].getElementsByClassName('card__send')[0].append(cardsData[i].send); 
}

// Toggle monthly/yearly prices
periodSwitch.addEventListener('change', () => {

    for(let i = 0; i < cardsData.length; i++) {

        cardsContainer.children[i].getElementsByClassName('card__price')[0].lastChild.remove(); 

        if(periodSwitch.children[0].checked) {    
            cardsContainer.children[i].getElementsByClassName('card__price')[0].append(cardsData[i].priceMonth);            
        } else { 
            cardsContainer.children[i].getElementsByClassName('card__price')[0].append(cardsData[i].priceYear);
        }
    }   
});

// Learn more button - action placeholder
cardsContainer.addEventListener('click', (event) => {
    const target = event.target;
    if(target.className === "card__btn") {
        let selectedCard = target.parentElement.id;
        console.log(`Learn more "${selectedCard} card" clicked`);
        let cardIndex = pricing.map((e) => e.cardId).indexOf(selectedCard);
        console.log(`The index of the clicked card is: ${cardIndex}`);
    } else {
        console.log('No button clicked');
    }
});