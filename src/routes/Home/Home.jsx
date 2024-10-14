const Home=()=>{
    return(
        <>
        <h1 className="text-3xl font-bold underline text-center text-blue-600 hover:text-red-600">Perfil Dev</h1>

        <div className="relative w-96 m-6 cursor-pointer border-2 shadow-lg rounded-xl items-center">
            <div className="flex h-28 bg-red-200 rounded-xl items-center justify-center">
                <h1 className="absolute mx-auto text-center text-red-700 font-bold text-2xl">
                    Meu Post
                </h1>
            </div>

            <div className="p-2 border-b-2">
                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quod repellat ipsam explicabo neque mollitia doloribus maiores et exercitationem quidem! Nisi doloribus, aliquam inventore placeat accusamus a cupiditate iste delectus!</h6>

                <div className="flex flex-wrap items-center m-2">
                    <span className="border border-red-950 rounded-2xl px-2 my-1 mx-1">
                        #React
                    </span>
                    <span className="border border-red-950 rounded-2xl px-2 my-1 mx-1">
                        #JavaScript
                    </span>
                    <span className="border border-red-950 rounded-2xl px-2 my-1 mx-1">
                        #Tailwind
                    </span>
                </div>
                <div className="flex flex-wrap items-center rounded-b-xl border-t-2 bg-red-200">
                    <button className="border rounded-2xl bg-red-600 text-red-100 shadow-sm p-1 px-2 m-2 hover:bg-blue-700">
                        Projetos
                    </button>
                    <button className="border rounded-2xl bg-red-600 text-red-100 shadow-sm p-1 px-2 m-2 hover:bg-blue-700">
                        Comunidade Dev
                    </button>

                </div>

            </div>

        </div>
        </>
    )
}
export default Home