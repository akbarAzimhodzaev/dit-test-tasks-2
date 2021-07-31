// The function stripQuotes takes a string and an array of quotes.
// Quote types array is options, by default function strips all (` " ') quote characters
// Returns string with logically stripped quotes.


const stripQuotes = (str, quoteTypes = ['"', "'", "`"]) => {
    let chars = str.split('');

    for (let quote of quoteTypes) {
        if (chars.filter(c => c === quote).length !== 0) {
           while (chars.filter(c => c === quote).length > 1) {
               let firstQuoteIdx = chars.indexOf(quote);
               let lastQuoteIdx = chars.lastIndexOf(quote);

               if (firstQuoteIdx !== lastQuoteIdx) {
                   chars = chars.filter((char, idx) => idx !== firstQuoteIdx && idx !== lastQuoteIdx);
               }
           }
        }
    }

    return chars.join('');
}

// Some test cases

// simple quotes stripping
console.log('"This is the best quote!" =>', stripQuotes('"This is the best quote!"')); // "This is the best quote!" => This is the best quote!

// keep quote's character
console.log("'This is the best quote's clone!' =>", stripQuotes("'This is the best quote's clone!'")); // 'This is the best quote's clone!' => This is the best quote's clone!

// different types of quotes
console.log("'This is the `best` quote's clone!' =>", stripQuotes("'This is the `best` quote's clone!'")); // 'This is the `best` quote's clone!' => This is the best quote's clone!

// two times ' quotes
console.log("'This is the 'best quote's' clone!' =>", stripQuotes("'This is the 'best quote's' clone!'")); // 'This is the 'best quote's' clone!' => This is the best quote's clone!

// calling the function with custom type of quotes
console.log("'This is the quote with `custom properties`!' =>", stripQuotes("'This is the quote with `custom properties`!'", ["'"])); // 'This is the quote with `custom properties`!' => This is the quote with `custom properties`!
