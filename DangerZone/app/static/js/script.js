function getGeolocationDataSuccess(position)
{
	var coordinates = [position.coords.latitude, position.coords.longitude]
	/*document.getElementById('inputCoords').setAttribute('value', coordinates[0] + " " + coordinates[1]);*/
	return coordinates;
}

function getGeolocationDataFailure(positionError)
{
	if(positionError.code==1)
	{
		window.alert("We need to get your position to know when the danger is precacly.\nTry to enable geolocation in browser settings or type the coordinates by hand in that way: \"latitude longitude\" (f.ex. -9.123 104.31876).");
	}
	else if(positionError.code==2)
	{
		window.alert("You have no net access or the place where you are is unknown :(\nType the coordinates by hand in that way: \"latitude longitude\" (f.ex. -9.123 104.31876).");
	}
	else if(positionError.code==3)
	{
		window.alert("Browser needed too much time to get your position :(\Check your network connectivity or type the coordinates by hand in that way: \"latitude longitude\" (f.ex. -9.123 104.31876).");
	}
	else 
	{
		window.alert("Unfortunetly we cannot get your current position for some mysterious reason :(\nTry to enable geolocation in browser settings or type the coordinates by hand in that way: \"latitude longitude\" (f.ex. -9.123 104.31876).");
	}
	
}

// Main code
// Geolocation
function get_geolocation()
{
	if(navigator.geolocation)
	{
		navigator.geolocation.getCurrentPosition(getGeolocationDataSuccess, getGeolocationDataFailure)
	}
	else
	{
		window.alert("It seems your browser don't serve the geolocation :(\nYou can use other browser or type the coordinates by hand in that way: \"latitude longitude\" (f.ex. -9.123 104.31876).");
	}
}

get_geolocation();
