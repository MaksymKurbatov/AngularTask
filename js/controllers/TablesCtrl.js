angular.module('app').controller("tablesCtrl", function($scope,tableFactory){
  $scope.lists = tableFactory.getLists();
  $scope.isAddNew = false;
  $scope.isEditingRow = false;
  
  var updatingRow;
  
	$scope.userDate ={
		Name: '',
		Family: '',
		Age: '',
		Email: '',
		Date: ''
		};
		
	$scope.addUser = function(){
	
		$scope.isAddNew = true;
	}
	
	
	
	
	$scope.deleteRow = function (row){
	 tableFactory.deleteRow(row);
	}
	
	
	$scope.submitNewUser = function(){
	tableFactory.addNewRow(this.userDate);
		$scope.isAddNew = false;
		$scope.userDate ={
			Name: '',
			Family: '',
			Age: '',
			Email: '',
			Date: ''
			};
	}
	
	$scope.updateUser = function (row) {
		console.log("editRow");
		$scope.isEditingRow = true;
		$scope.isAddNew = true;
		$scope.userDate ={
		Name: row.Name,
		Family: row.Family,
		Age: row.Age,
		Email: row.Email,
		Date: row.Date
		};
		updatingRow = row;
		
	}
	
	$scope.editRow = function () {
		tableFactory.editRow(updatingRow,this.userDate);
		$scope.isEditingRow = false;
		$scope.isAddNew = false;
		$scope.userDate ={
			Name: '',
			Family: '',
			Age: '',
			Email: '',
			Date: ''
			};
	}
	
});