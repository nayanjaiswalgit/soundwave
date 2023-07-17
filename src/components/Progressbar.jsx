

const Progressbar = (props) => {
  return (
  <div className="w-full h-full flex  items-center justify-center gap-5">
  <p>2:15</p>
      <div className='w-3/4 bg-[white] h-2 bg-opacity-50 rounded-full '>
        <div className= {`w-[${20}%] bg-white h-2  left-0 rounded-full ` }></div>
      </div>
      <p>4:25</p>
      </div>
  )
}

export default Progressbar