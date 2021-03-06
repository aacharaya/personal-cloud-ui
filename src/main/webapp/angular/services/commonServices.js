/*
The MIT License (MIT)
	
Copyright (c) 2015 Neustar Inc.
	
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
'use strict'
angular.module('cloudServices', [])
.factory("commonServices", ["$http","globalInfo", function ($http,globalInfo) {
	
	// Return public API.
	return({
		getInfo: getInfo,
		saveInfo: saveInfo,
		saveInfo1: saveInfo1,
		putProxyInfo: putProxyInfo,
		saveProxyInfo: saveProxyInfo,
		deleteProxyInfo: deleteProxyInfo,
		setCloudName:setCloudName,
		getCloudName:getCloudName,
		userlogin:userlogin,
		setGuardianPassword:setGuardianPassword,
		getGuardianPassword:getGuardianPassword
		});	

	this.guardianCloudName ='';
	this.guardianPassword ='';
	
	 
	// Get all of the Contact Information in the remote collection.
	function getInfo(getUrl) {  
												 
		var request = $http({
			method: "GET",
			url: 'v1/'+getUrl,
			headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json',
						'Authorization' : 'Bearer 45345c0c046a4d04b5d1282fdb86e56c'
					 }
		
		});
		  
		return( request.then( handleSuccess, handleError ) );
	}
	
	// Get all of the Contact Information in the remote collection.
	function putProxyInfo(saveObject,getUrl) {  
												 
		var request = $http({
			method: "PUT",
			url: globalInfo.proxyApiUrl+getUrl,
			headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json',
						'Connection' : 'keep-alive'
					 },
			data:saveObject
		
		});
		  
		return( request.then( handleSuccess, handleError ) );
	}
	
	function deleteProxyInfo( saveObject,getUrl) {  
												 
		var request = $http({
			method: "DELETE",
			url: globalInfo.proxyApiUrl+getUrl,
			headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json',
						'Connection' : 'keep-alive'
					 },
			data:saveObject
		});
		  
		return( request.then( handleSuccess, handleError ) );
	}
	
	//Save all the Contact Information 
	function saveInfo(saveObject,apiUrl) {   
		var request = $http({
			method: "POST",
			url: 'v1/'+apiUrl.postUrl,
			headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json',
						'Authorization' : 'Bearer 45345c0c046a4d04b5d1282fdb86e56c'
					 },
			data:saveObject

		});

		return( request.then( handleSuccess, handleError ) );

	}
		//use for calling processPayment API
		function saveInfo1(saveObject,apiUrl) {   
		var request = $http({
			method: "POST",
			url: apiUrl.postUrl,
			headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json',
						'Authorization' : 'Bearer 45345c0c046a4d04b5d1282fdb86e56c'
					 },
			data:saveObject

		});

		return( request.then( handleSuccess, handleError ) );

	}
	
	function userlogin(pass,apiUrl) {   
	
		var request = $http({
			method: "POST",
			url: 'v1/'+apiUrl,
			headers: {
						'Content-Type': 'application/x-www-form-urlencoded',
						'Accept': 'application/json',
						'Authorization' : 'Bearer 4799dca4c5054d5e899f57ec579d47b2'
					 },
			data: $.param({"password":pass}),
		});

		return( request.then( handleSuccess, handleError ) );

	}
	
	//Save all the Contact Information 
	function saveProxyInfo(saveObject,postUrl) {  
												 
		var request = $http({
			method: "POST",
			url: globalInfo.proxyApiUrl+postUrl,
			headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json',
						'Connection' : 'keep-alive'
					 },
			data:saveObject
		
		});
		  
		return( request.then( handleSuccess, handleError ) );
	}
	
	// ---
	// PRIVATE METHODS.
	// ---
	function handleError( response ) {  
 		 
		// Otherwise, use expected error message.
		return( response.data );

	}


	// I transform the successful response, unwrapping the application data
	// from the API response payload.
	function handleSuccess( response ) {
		
		return( response.data );

	}
	
	function setCloudName(cloudname)
	{
		this.guardianCloudName = cloudname;
		
	}
	
	function getCloudName()
	{
		return this.guardianCloudName;
	}
	
	function setGuardianPassword(password)
	{
		this.guardianPassword = password;
		
	}
	
	function getGuardianPassword()
	{
		return this.guardianPassword;
	}
	
	
}]);
