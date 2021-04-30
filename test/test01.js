function geekshubs(index) {
    var result = '';

    for(i=1; i <=index; i++ ){    
        
        if (i % 3 == 0 && i % 5 != 0) {
            result = result.concat("Geeks\n");
        } 
        else if (i % 5 == 0 && i % 3 != 0) {
            result = result.concat("Hubs\n");
        } 
        else if (i % 5 == 0 && i % 3 == 0) {
            result = result.concat("GeeksHubs\n");
        } 
        else{
            result = result.concat(`${i}\n`)
        }
    }

    return result;
}
module.exports = geekshubs;
