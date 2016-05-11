angular.module("myapp", []).controller('NorthwindController',['$scope','$http', function($scope,$http) {
         var northwindURL='/destinations/northwind/V4/Northwind/Northwind.svc/Invoices?$top=15';  
         $http({
              method: 'GET',
              url:northwindURL 
            }).then(function successCallback(response) {
            	var results = response.data.value;
            	var invoices=[];
            	
    	_.each(results,function(result){
    		var invoice={};
    		invoice.product =  result.ProductName;
    		invoice.unitprice =  result.UnitPrice;
    		invoice.quantity= result.Quantity;
    		invoice.totalcost = invoice.unitprice*invoice.quantity;
    		invoices.push(invoice);
    		});
    		$scope.invoices=invoices;
      }, function errorCallback(response) {
      		alert("Error while fetching invoices"+ response);
      });
             }]);