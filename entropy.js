
const { format } = require('path');

var filename = process.argv[2];

var fs = require('fs');

fs.readFile(filename, (err,data)=> {
    if (err) {
        console.log(`File ${filename} doesn\'t exist`);
    } else {
        Text = data.toString();
        Letters = new Array();
        let i = 0;

        while (i<Text.length){
            if (Letters[Text.charAt(i)]) {

                Letters[Text.charAt(i)]+=1;

            } else{

                Letters[Text.charAt(i)] = 1;
            }
            i++;
        }
        
        let Entropy = 0;
        if (i>=2) {
            for ( j in Letters) {
                Letters[j]/=i;
                Entropy -= Letters[j] * (Math.log(Letters[j])/Math.log(i));
            }
        }
        console.log(`Entropy is ${Entropy}`);
    }
})