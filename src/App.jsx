import data from './data.json'

const App = () => (

  <main className="grid mt-[-1.5rem] sm:place-items-center min-h-screen  border-primary-Light-red">
    <section className="flex flex-1 flex-wrap sm:justify-center items-center bg-white shadow-xl shadow-pale-blue rounded-t-[0] sm:rounded-[1rem]">
      <div className="grid place-items-center w-[100%] sm:w-[18rem] bg-gradient-to-b from-bg-gradient-1 to-bg-gradient-2 p-[2rem] rounded-b-[1rem] sm:rounded-[1rem] text-gray-300 font-bold font-hanken">
        <p className="text-[1.25rem]">Your result</p>

        <div className="bg-gradient-to-b from-circle-gradient-1 to-circle-gradient-2 w-[10rem] h-[10rem] rounded-full flex flex-col items-center justify-center my-6">
          <h1 className="text-[3.5rem] leading-none text-white">72</h1>
          <span className="text-gray-300">of 100</span>
        </div>

        <h2 className="text-[1.35rem] text-white">Great</h2>
        <p className="text-center font-normal leading-5 mt-2">You scored higher than 65% of people that have taken these tests</p>
      </div>

      <div className="w-[100%] sm:w-[18rem] p-[2rem]">
        <p className="text-[1.25rem] font-bold font-hanken text-dark-gray-blue">Summary</p>

        <div className="grid gap-3  font-hanken my-8">
          {data.map((item, index) => (
            <div 
              key={index} 
              className={`flex justify-between items-center p-2 rounded-md ${item.category === 'Reaction' ? 'bg-primary-bg-light-red' : item.category === 'Memory' ? 'bg-primary-bg-orangey-yellow' : item.category === 'Verbal' ? 'bg-primary-bg-green-teal' : item.category === 'Visual' ? 'bg-primary-bg-cobalt-blue' : 'bg-slate-400'}`}>
              <div className="flex items-center justify-center gap-2 ">
                <img 
                  src={`/images/${item.icon}`}
                  aria-hidden="true"
                />
                <p 
                  className={`font-[600] ${item.category === 'Reaction' ? 'text-primary-light-red' : item.category === 'Memory' ? 'text-primary-orangey-yellow' : item.category === 'Verbal' ? 'text-primary-green-teal' : item.category === 'Visual' ? 'text-primary-cobalt-blue' : 'text-dark-gray-blue'}`}
                >{item.category}</p>
              </div>

              <p><span className="text-dark-gray-blue font-bold">{item.score}</span> /100</p>
            </div>
          ))}
        </div>

        <button className="font-hanken font-medium text-[1.125rem] text-white bg-dark-gray-blue w-full block rounded-full py-2">Continue</button>
      </div>
    </section>
  </main>
)

export default App