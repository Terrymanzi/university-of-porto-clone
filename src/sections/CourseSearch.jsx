const CourseSearch = () => {
  return (
    <section className="max-container">
      <h1 className="text-4xl font-semibold">Which course are you looking for?</h1>
         
        <select name="Course" id="courses" className="border-2 border-black w-full my-4 p-4">
          <option value="All">All</option>
          <option value="Bachelor's and Intergrated Master's Degrees">Bachelor's and Intergrated Master's Degrees</option>
          <option value="Master's Degrees">Master's Degrees</option>
          <option value="Doctorates">Doctorates</option>
        </select>
        <input placeholder="PLease enter course keywords..." type="text" className="text-lg font-extralight border-2 border-black w-full my-4 p-4"/>

        <button className="bg-yellow-600 text-white font-bold text-2xl w-full p-4">Search</button>        
    </section>

            
  )
}

export default CourseSearch