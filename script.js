function convertToBionicReading() {
    const txt = document.getElementById('inputTextarea').value;
    //! convert the txt into individual lines
    const lines = txt.split('\n');

    //! Loop through each line and process it
    const bionicLines = lines.map(line => {
        const words = line.split(' ');

        //! Loop through each word nd process it
        const bionicWords = words.map(wrd => {
            const capitlizedWords = wrd.charAt(0).toUpperCase() + wrd.slice(1);

            //! Make the first letter of the word bold 
            // const boldTxt = "<b>" + capitlizedWords.charAt(0) + "</b>" + capitlizedWords.slice(1);
            const boldTxt = wrd.length > 1 ? "<b>" + capitlizedWords.substring(0, 2) + "</b>" + capitlizedWords.slice(2) : "<b>" + capitlizedWords.charAt(0) + "</b>" + capitlizedWords.slice(1);

            return boldTxt;
        });

        //! Join the procesed words back into a line
        const newBionicLine = bionicWords.join(' ');
        return newBionicLine;
    });

    //! Join the processed lines back into the final output text
    const outputTxt = bionicLines.join(' ');

    //! Display the processed lines back into the final output text
    const outputPara = document.getElementById('outputParagraph');
    outputPara.innerHTML = outputTxt;
}