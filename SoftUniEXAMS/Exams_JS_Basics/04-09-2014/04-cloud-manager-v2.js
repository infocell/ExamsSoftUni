function solve(input) {
    "use strict";
    var groupsTheFiles = {},
        sortedGroupsTheFiles = {};

    input.forEach(function (line) {
        var name, extension, memory;
        line = line.split(/\s+/g);
        name = line[0];
        extension = line[1];
        memory = Number(line[2].substring(0, line[2].length-2));

        if (!groupsTheFiles[extension]) {
            groupsTheFiles[extension] = {files: [], memory: 0};
        }
        groupsTheFiles[extension].files.push(name);
        groupsTheFiles[extension].memory += memory;
    });

    Object.keys(groupsTheFiles).sort().forEach(function (key) {
        sortedGroupsTheFiles[key] = {
            files: groupsTheFiles[key].files.sort(),
            memory: groupsTheFiles[key].memory.toFixed(2)
        };
    });
    console.log(JSON.stringify(sortedGroupsTheFiles));
}

//solve([
//    'sentinel .exe 15MB',
//    'zoomIt .msi 3MB',
//    'skype .exe 45MB',
//    'trojanStopper .bat 23MB',
//    'kindleInstaller .exe 120MB',
//    'setup .msi 33.4MB',
//    'winBlock .bat 1MB'
//]);
//console.log();
//solve([
//    'eclipse .tar.gz 198.00MB',
//    'uTorrent .gyp 33.02MB',
//    'nodeJS .gyp 14MB',
//    'nakov-naked .jpeg 3MB',
//    'gnuGPL .pdf 5.6MB',
//    'skype .tar.gz 66MB',
//    'selfie .jpeg 7.24MB',
//    'myFiles .tar.gz 783MB'
//
//]);