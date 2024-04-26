import Video from '../assets/production_ID_4167404.mp4'
function Hero() {
  return (
    <div className=" grid justify-items-center gap-8 pb-28 relative">
      <p className=" text-4xl md:text-6xl font-black text-center leading-normal md:leading-normal">
        AlohaAlohaAlohaAlohaAlohaAloha
      </p>
      <p className=" text-xl text-gray-700 md:w-1/2 text-center">
        AlohaAlohaAlohaAlohaAlohaAloha
      </p>
      <div>
        <button className=" rounded bg-blue-500 text-base text-white py-3 px-8">
          btn1
        </button>
        <button className=" rounded bg-gray-900 text-base text-white py-3 px-8 ml-3">
          btn2
        </button>
      </div>
      <div className=" relative grid justify-items-center">
        <video
          src={Video}
          controls
          className=" w-[768px] h-[432px] object-cover object-top rounded"
        ></video>
        <div className=" flex absolute rounded-full bg-white -bottom-7 px-5 py-4 drop-shadow-xl">
          Watch Video
        </div>
      </div>
    </div>
  )
}

export default Hero
