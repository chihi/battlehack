battlehackApp.factory('appService', function($rootScope, $http, $modal,$upload){

	

	return {
		getMerchant:function(missionId) {
			var data = {
			 		mission_id: missionId,
			 		title: shareTitle
           	};

           	return $http({
				method: "POST",
				url: $rootScope.appUrl+"/api/mission/share",
				transformRequest: transformRequestAsFormPost,
				data: data,
				headers: {'Content-Type': 'application/x-www-form-urlencoded'}
			}); 

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