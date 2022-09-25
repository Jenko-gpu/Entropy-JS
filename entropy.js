var filename = process.argv[2];

var fs = require('fs');

fs.readFile(filename, (err,data) => {
    if (err) {
        console.log(`File ${filename} doesn\'t exist`);
    } else {
        Text = data.toString();
        Letters = new Array();
        let i = 0;
        let n = 0;
        while (i<Text.length){
            if (Letters[Text.charAt(i)]) {

                Letters[Text.charAt(i)]+=1;

            } else{
                n++;
                Letters[Text.charAt(i)] = 1;
            }
            i++;
        }
        
        let Entropy = 0;
        if (i>=2) {
            for ( j in Letters) {
                Letters[j]/=i;
                Entropy -= Letters[j] * Math.log(Letters[j]);
            }
            Entropy =/ Math.log(n);
        }
        
        console.log(`Entropy is ${Entropy}`);
    }
    
})
