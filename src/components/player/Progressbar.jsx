

const Progressbar = () => {
  return (
  <div className="w-[75%] h-full flex  items-center justify-center gap-5  font-semibold">
  <p>2:15</p>
      <div className='w-full bg-[white] h-2 bg-opacity-50 rounded-full '>
        <div className= {`w-[${20}%] bg-white h-2  left-0 rounded-full ` }></div>
      </div>
      <p>4:25</p>
      </div>
  )
}

export default Progressbar