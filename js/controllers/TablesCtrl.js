angular.module('app').controller("tablesCtrl", function(tableFactory , rowFactory){
  this.lists = tableFactory.getLists();
  this.isAddNew = false;
  this.isEditingRow = false;
  
  var updatingRow;
  
	this.userDate ={
		Name: '',
		Family: '',
		Age: '',
		Email: '',
		Date: ''
		};
		
	this.addUser = function(){
		this.isAddNew = true;
	}
	
	this.deleteRow = function (row){
	 tableFactory.deleteRow(row);
	}
	
	
	this.submitNewUser = function(){
	tableFactory.addNewRow(this.userDate);
		this.isAddNew = false;
		this.userDate ={
			Name: '',
			Family: '',
			Age: '',
			Email: '',
			Date: ''
			};
	}
	
	this.updateUser = function (row) {
		console.log("editRow");
		this.isEditingRow = true;
		this.isAddNew = true;
		this.userDate ={
		Name: row.Name,
		Family: row.Family,
		Age: row.Age,
		Email: row.Email,
		Date: row.Date
		};
		updatingRow = row;
		
	}
	
	this.editRow = function () {
		tableFactory.editRow(updatingRow,this.userDate);
		this.isEditingRow = false;
		this.isAddNew = false;
		this.userDate ={
			Name: '',
			Family: '',
			Age: '',
			Email: '',
			Date: ''
			};
	}
	
});