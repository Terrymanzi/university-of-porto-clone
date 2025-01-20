import { slide1 } from "../assets/img"



const HomeCards = () => {
  return (
    <section
    id="home"
    className="
    mx-10
    p-2
    w-full 
    flex
    xl:flex-row 
    flex-col 
    justify-center
    items-center 
    min-h-screen 
    border-2 
    border-red-500 
    gap-10
    max-container
    "    
    >
      <img id="bg"
        src={slide1}
        alt="slide1"
        // width={600}
        // height={300}
        className="
        w-full
        h-full
        justify-center
        items-center
        "
        />
      

      <div className="
        absolute
        xl:w-2/5
        flex
        flex-col
        justify-start
        w-[50%]
        max-xl:padding-x
        p-8
        bg-gray-800
        text-black
        bg-card
        bg-cover
        bg-center
        rounded-xl
        left-20
        top-60


      ">
        <h1 className="
        text-lg 
        font-bold 
        p-2
        ">
        Applications for International Students 2024/2025 are open!</h1>
        <p className="
        font-extralight
        font-montserrat
        text-sm
        " 
        >There over 700 vacancies for 54 undergraduate and 
          intergrated master's courses at U.Porto. Applications(1st phase)
          until 7th February!</p>

          <button className="
          flex
          justify-center
          items-center
          bg-yellow-400
          rounded-full
          ">
            See More</button>

      </div>

      
    </section>
  )
}

export default HomeCards