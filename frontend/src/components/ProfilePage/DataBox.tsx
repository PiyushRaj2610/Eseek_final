interface BoxDetails {
  title: string ,
  description: string,
}

const DataBox = ({title, description}: BoxDetails) => {
  return (
    <div>
      <div className='h-[25vh] m-5 w-[20vw] cursor-pointer bg-[#161515] rounded-3xl border border-gray-100 transition-transform duration-100 hover:scale-105'>
        <div className='h-[8vh] w-full rounded-t-3xl tracking-wider flex justify-center items-center text-4xl border-b-1 border-gray-600'>
          {title}
        </div>
        <div className='h-[17vh] w-full rounded-b-3xl pl-[2vw] pr-[2vw]'>
          {description}
        </div>
      </div>
    </div>
  )
}

export default DataBox