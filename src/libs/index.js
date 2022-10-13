 // Accepts the array and key
export const groupBy = (array, key) => {
  // Return the end result
  return array.reduce((result, currentValue) => {
    // If an array already present for key, push it to the array. Else create an array and push the object
    (result[currentValue[key]] = result[currentValue[key]] || []).push(
      currentValue
    );
    // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
    return result;
  }, {}); // empty object is the initial value for result object
};

/*Accepts object and returns array of matching values specified with the regular expressions. 
this function is specifically used to get photos from the beaches array and may not be suitable for generic use*/
export const  getImageUrlsByRegex = (obj,regEx) => {
    let arr=[]
    var re = new RegExp(regEx),key
    var reh = new RegExp(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig) // matches url
  
    for(key in obj)
       if(re.test(key))
          if(obj[key] &&  reh.test(obj[key]))
            arr.push(obj[key]);

    return arr; 
 }