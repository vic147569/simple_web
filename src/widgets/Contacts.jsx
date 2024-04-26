function Contacts() {
  return (
    <div className=" bg-black md:w-4/5 mx-auto relative overflow-hidden">
      <div className=" w-full py-16 px-12">
        <h2 className=" text-3xl text-white font-bold">Come on</h2>
        <p className=" text-lg text-white mt-2 mb-6">
          Come on Come on Come on Come on Come on Come on Come on Come on
        </p>
        <div className=" flex flex-col md:flex-row items-start gap-4">
          <input
            type="text"
            name=""
            id=""
            className=" bg-zinc-800 py-3 px-4 border border-zinc-700"
            placeholder="E-mail"
          />
          <button className=" py-3 px-8 bg-blue-500 text-white text-base font-medium md:ml-2">
            Start
          </button>
        </div>
        <p className=" text-sm text-zinc-400 mt-3">Free</p>
      </div>
    </div>
  )
}

export default Contacts
