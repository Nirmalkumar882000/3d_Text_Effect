import { atom, useAtom } from "jotai"
import { useState } from "react"

export const currentPageAtom =atom("intro")



export const Ui=()=>{
  const [currentPage,setCurrentPage]=useAtom(currentPageAtom);
  return(
    <div className="fixed inset-0 pointer-events-none">
      <section className={`flex w-full h-full flex-col items-center mt-96 justify-center duration-500 ${currentPage === "home" ? "" : "opacity-0"}`}>
        <div className="h-[66%]">
          <button onClick={()=>setCurrentPage("store")}
          className="px-8 py-4 font-black text-white transition-colors duration-500 bg-orange-400 rounded-full cursor-pointer pointer-events-auto hover:bg-orange-600" 
          >
            ENTER

          </button>

        </div>

      </section>

    </div>
  )
}
