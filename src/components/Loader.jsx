import React from 'react'
import { Hourglass } from 'react-loader-spinner'

const Loader = () => {
  return (
    <div className="absolute h-screen w-full flex-1 flex items-center justify-center z-50 backdrop-blur-sm">
        <Hourglass
          visible={true}
          height="50"
          width="50"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={["#306cce", "#72a1ed"]}
        />
      </div>
  )
}

export default Loader