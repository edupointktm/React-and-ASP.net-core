import React from 'react'

function Page_not_found() {
  return (
    <>
    <div className="container text-center py-4">
        <img src="https://broadwayinfosys.com/images/404.svg" alt="" />
        <h3 className='text-danger'> An Error Occurred.</h3>
        <h4>Sorry, something went wrong.</h4>
        <p>The server encountered an error and could not complete your request. We will soon fix this issue. Please, try again later.

</p>
    </div>
    </>
  )
}

export default Page_not_found