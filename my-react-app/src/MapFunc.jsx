// map func work

const nums = [1, 2, 3, 4, 5]
// -->       [1, 4, 9, 16, 25]

const squares = nums.map(function(num) {
    return num * num
})

// ------------------------------------------------

const names = ["alice", "bob", "charlie", "danielle"]
// -->        ["Alice", "Bob", "Charlie", "Danielle"]

const capitalized = names.map((name) => {
    return name[0].toUpperCase() + name.slice(1)
})

// ------------------------------------------------

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
// -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]

const paragraphs = pokemon.map(mon => {
    return `<p>${mon}</p>`
})