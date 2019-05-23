const calculateDistance = (lat1,lat2,lon1,lon2) => {
    var R = 6371e3; // metres
    var a = lat1.toRadians(45);
    var b = lat2.toRadians(45);
    var da = (lat2-lat1).toRadians(45);
    var db = (lon2-lon1).toRadians(45);
    
    var a = Math.sin(da/2) * Math.sin(da/2) +
            Math.cos(a) * Math.cos(b) *
            Math.sin(db/2) * Math.sin(db/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    
    var d = R * c;
console.log(d)
}

calculateDistance(37.544544,37.547140, 127.055963,127.047402)

 