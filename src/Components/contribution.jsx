import React from 'react'

const contribution = () => {
  return (
    <div className='border-b border-neutral-800 pb-4'>
        <h2 className="my-10 text-center text-4xl">GitHub Contribution</h2>
      <a href='https://github.com/subin1rai'>
        <img 
          src={`https://github-readme-activity-graph.vercel.app/graph?username=subin1rai&bg_color=00000000&color=ffffff&line=694ba0&point=bca3ff&area=true&hide_border=true`} 
          className='w-full'
        />
      </a>
    </div>
  )
}

export default contribution;
