const books = [
    {
        title: "React Billionaire",
        pages: 250,
        author: {
            name: 'Alice',
            age: 35
        },
        available: false,
        price: '101€',
        tags: ['advanced', 'js', 'react', 'senior']
    },
    {
        title: "Advanced JS",
        pages: 500,
        author: {
            name: 'Bob',
            age: 20
        },
        available: true,
        price: '25€',
        tags: ['advanced', 'js', 'mid-senior']
    },
    {
        title: "CSS Secrets",
        pages: 320,
        author: {
            name: 'Alice',
            age: 17
        },
        available: true,
        price: '8€',
        tags: ['html', 'css', 'junior']
    },
    {
        title: "HTML Mastery",
        pages: 200,
        author: {
            name: 'Charlie',
            age: 50
        },
        available: false,
        price: '48€',
        tags: ['html', 'advanced', 'junior', 'mid-senior']
    },
];





// SNACK1 - Filtra e modifica
// Crea una funzione che somma due numeri.
// Crea un array (longBooks) con i libri che hanno più di 300 pagine;

const longBooks = books.filter(p => {
    return p.pages > 300
})

console.log(longBooks)


// Creare un array (longBooksTitles) che contiene solo i titoli dei libri contenuti in longBooks.

const longBooksTitles = longBooks.map(t => {
    return t.title
})

console.log(longBooksTitles)

// Stampa in console ogni titolo nella console.

longBooksTitles.forEach(t => {
    console.log(t)
})



// SNACK2 - il primo libro scontato
// Creare un array (availableBooks) che contiene tutti i libri disponibili.

const availableBooks = books.filter(a => {
    return a.available === true
})

console.log(availableBooks)

// Crea un array (discountedBooks) con gli availableBooks, ciascuno con il prezzo scontato del 20% (mantieni lo stesso formato e arrotonda al centesimo)

const discountedBooks = availableBooks.map(book => {
    const priceNumber = parseFloat(book.price.replace('€', ''));
    const discountedPrice = (priceNumber * 0.8).toFixed(2)
    return {
        ...book,
        price: discountedPrice + '€'
    }

})

console.log(discountedBooks)

// Salva in una variabile (fullPricedBook) il primo elemento di discountedBooks che ha un prezzo intero (senza centesimi).

const fullPricedBook = discountedBooks.find(fullPrice => {
    const number = parseFloat(fullPrice.price.replace('€', ''))
    return Number.isInteger(number)
})

console.log(fullPricedBook)



