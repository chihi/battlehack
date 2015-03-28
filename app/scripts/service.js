angular
  .module('battlehackApp').factory('appService', function($rootScope, $http){


  	var url = "http://localhost:8000/";

  	// if (isset($_SERVER['HTTP_ORIGIN'])) {
   //      header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
   //      header('Access-Control-Allow-Credentials: true');
   //      header('Access-Control-Max-Age: 86400');    // cache for 1 day
   //  }




  	var merchantList = [
		{
			"id":1,
			"name" : 'Swee Choon',
			"description" : 'Dim sum place',
			"phone_number": '12313123',
			"email" : 'sasdas',
			"queing_no":'asdasd',
			"food_items":[
				{
					"item_id":"11",
					"item_name":"chicken",
					"price":"$12.99"
				},
				{
					"item_id":"12",
					"item_name":"fish",
					"price":"$5.99"
				},
				{
					"item_id":"13",
					"item_name":"vege",
					"price":"$1.99"
				}
			]

		},
		{
			"id":2,
			"name" : 'KFC',
			"description" : 'Fast food place',
			"phone_number": '12313123',
			"email" : 'sasdas',
			"queing_no":'asdasd',
			"food_items":[
				{
					"item_id":"14",
					"item_name":"pork",
					"price":"$12.99"
				},
				{
					"item_id":"15",
					"item_name":"beef",
					"price":"$5.99"
				},
				{
					"item_id":"16",
					"item_name":"lamb",
					"price":"$1.99"
				}
			]
		}

    ];

	return {
		getMerchant:function() {
			// $http.jsonp(url+"merchants")
			// 	.success (function(data){
			// 		console.log(data);
			// 	})
			// 	.error(function (error){
			// 		console.log(error);
			// 	});

			return merchantList;

		},

		getMerchantById:function(id) {
			console.log(id);
			var result = _.filter(merchantList, function(item){ return item.id == id; });
			console.log(result);
			return result;

		},

		register:function(){
			var result;

			var data = {
				"detail": {
					"merchant_id" : "1",
					"phone_number" : "+65 9021 2121",
					"email" : "customer4@gmail.com",
					"number_of_persons" : 4
				},
				"items": [
				 	{"item_id" : 1, "quantity" : 3 }, 
				 	{"item_id" : 2, "quantity" : 5 }, 
				 	{"item_id" : 3, "quantity" : 1 },
				]
			};

			$http.post(url+"queues", data)
				.success (function(result){
					console.log(result);
					var result = result;
				})
				.error (function(error){
					console.log(error);
				});

			
			return result;

		},

		saveMission: function(data,file) {

			return $upload.upload({
		        url: $rootScope.appUrl+"/api/mission/save",
		        method: 'POST',
	            headers: {
	                'Content-Type': 'multipart/form-data'
	            },
		        data: data,
		        file: file // or list of files ($files) for html5 only
		        //fileName: 'doc.jpg' or ['1.jpg', '2.jpg', ...] // to modify the name of the file(s)
		        // customize file formData name ('Content-Disposition'), server side file variable name. 
		        //fileFormDataName: myFile, //or a list of names for multiple files (html5). Default is 'file' 
		        // customize how data is added to formData. See #40#issuecomment-28612000 for sample code
		        //formDataAppender: function(formData, key, val){}
		      });

			// console.log(data);
			// return $http.post($rootScope.appUrl+"/api/mission/save", data);
		}
	};

});