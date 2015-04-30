
function solve(input) {

    var file,
        extension,
        memory,
        result = {},
        output = {};
    input.forEach(function(line){
        line = line.split(/\s+/g);
        file = line[0];
        extension = line[1];
        memory = parseFloat(line[2]);
        //console.log(line);
        if(!result[extension]) {
            result[extension] = {files: [], memory: 0};
        }
        result[extension].files.push(file);
        result[extension].memory += memory;
    });

    Object.keys(result).sort().forEach(function(key){
        output[key] = result[key];
    });
    result = output;
    Object.keys(result).forEach(function(key){
        output[key] = result[key];
        Object.keys(result[key]).forEach(function(innerKey){

            if(innerKey == 'files') {
                output[key][innerKey] = result[key][innerKey].sort();
            } else {
                output[key][innerKey] = result[key][innerKey].toFixed(2);
            }
        });
    });


    console.log(JSON.stringify(output));
}

solve([
    'sentinel .exe 15MB',
    'zoomIt .msi 3MB',
    'skype .exe 45MB',
    'trojanStopper .bat 23MB',
    'kindleInstaller .exe 120MB',
    'setup .msi 33.4MB',
    'winBlock .bat 1MB'
])