angular.module('app').factory("cardFactory", function(){
	var services = {};

	 var cards = [
		{
		id: 1,
		description: 'Fix bug in player',
		list_id: 1
		},
		{
		id: 2,
		description: 'Add feature with D3',
		list_id: 2
		},
		{
		id: 3,
		description: 'Learn AngularJS',
		list_id: 2
		}
	];
	
	services.getCard= function (list){
	return _.filter(cards, { list_id: list.id });
	};
	
	
	
	services.creatCard = function (list, description) {
		cards.push({
		id: _.uniqueId('card_'),
		description: description,
		list_id: list.id
		});
	};
	
	services.updateCard = function (updatingCard) {
		var card = _.findWhere(cards, { id: updatingCard.id })
		card.description = updatingCard.description;
		card.list_id = updatingCard.list_id;
	}
	
	services.deleteCard = function (card){
		_.pull(cards,card)
		}	
	return services;
});