const Shimmer = () => {
  return (
    <>
    < div className = "flex flex-wrap" data-testid="shimmer">
      {Array(10).fill("").map((e, index) => (
      < div key = {
        index
      }
      className = "w-56 h-64 m-3 bg-gray-200" > </div>
      ))}
    </div>
    </>
  )
}

export default Shimmer;