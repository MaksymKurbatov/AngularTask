angular.module('app').factory("tableFactory", function(){
	var servise = {};
	
	var rows = [
	{
		Name: 'Igor',
		Family: 'Ivanov',
		Age: '22',
		Email: 'someEmail@.com',
		Date: '	2016/02/03'
	}];
	
	servise.getLists = function (){
	 return rows;
	}
	
	servise.addNewRow = function (newRow){
	 rows.push(newRow);
	 console.log(rows);
	}
		
	servise.addList = function (listName) {
		rows.push({
		  id: _.uniqueId('list_'),
		  listName: listName
		});
	};
	
	servise.deleteRow = function (row){
		_.pull(rows,row)
		}	
		
	servise.editRow = function (row, updatingDate){
		var card= _.findWhere(rows, row)
			card.Name = updatingDate.Name;
			card.Family = updatingDate.Family;
			card.Age = updatingDate.Age;
			card.Email = updatingDate.Email;
			card.Date = updatingDate.Date;
	return rows;
	}
	
	return servise;
	
});