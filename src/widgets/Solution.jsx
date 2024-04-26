import { Component } from 'react'
import SectionHeading from './SectionHeading'
import Image1 from '../assets/pexels-photo-10058967.webp'

export class Solution extends Component {
  render() {
    return (
      <div>
        <SectionHeading
          title="Solution"
          subTitle="Other solution Other solution Other solution Other solution"
        />
        <div className=" grid lg:grid-cols-2 mt-20 gap-20">
          <div>
            <h3 className="mt-7 text-[32px] font-bold">Powerful tool</h3>
            <p className=" mt-4 mb-8 text-gray-500">
              Powerful toolPowerful toolPowerful toolPowerful toolPowerful
              toolPowerful toolPowerful tool
            </p>
            <ul className=" grid gap-3">
              {[1, 2, 3].map((item) => (
                <li
                  key={item}
                  className={`p-5 justify-between rounded border border-zinc-100 ${item === 1 && 'bg-zinc-100'}`}
                >
                  <p className=" text-lg font-bold">Aloha Aloha Aloha Aloha </p>
                  <div className=" flex justify-between relative">
                    <p className=" text-lg leading-7 mt-1">
                      Aloha Aloha Aloha Aloha Aloha Aloha Aloha Aloha Aloha
                      Aloha Aloha Aloha Aloha Aloha Aloha Aloha Aloha Aloha
                      Aloha Aloha
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <img src={Image1} alt="" />
        </div>
      </div>
    )
  }
}

export default Solution
