const Home=()=>{
    return(
        <>
         <h1 className="text-3xl font-bold underline text-center text-blue-600 hover: text-red-600">
            Hello world!
         </h1>

         <div className="relative w-96 m-4 cursor-pointer border-2 shadow-1g rounded-x1 items-center">
            <div className="flex h-28 bg-red-200 rounded-x1 items-center justify-center">
            <h1 className="absolute mx-auto text-center text-red-700 font-bold text-2x1">Meu post</h1>
            </div>
            <div className="p-2 border-b-2">
            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere distinctio consequuntur doloremque totam quas, illum iure quo natus, dolorum alias, voluptate eligendi laborum! Numquam ullam autem eum fuga eveniet perspiciatis!</h6>
            </div>
         </div>
        </>
    )
}
export default Home