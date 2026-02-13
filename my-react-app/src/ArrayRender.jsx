export default function ArrayRender() {
    // React can render this type of array eg. ninjaTurtles    
    const ninjaTurtles = [
        <h2>Donatello</h2>, 
        <h2>Michaelangelo</h2>,
        <h2>Rafael</h2>,
        <h2>Leonardo</h2>
    ]
    // React can render but concat all the elements. 
    // Output will look like this: DonatelloMichaelangeloRafaelLeonardo
    const ninjaTurtles2 = ["Donatello", "Michaelangelo", "Rafael", "Leonardo"]

    // React cannot render objects and throws an error.
    const person = {"name": "hamdi"}

    return (
        <main>
            {ninjaTurtles}
            {ninjaTurtles2}
            {/* {person} */}
        </main>
    )
}