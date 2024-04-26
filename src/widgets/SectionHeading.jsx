import { memo } from 'react'
import PropTypes from 'prop-types'

const SectionHeading = memo(function SectionHeading({ title, subTitle }) {
  return (
    <div>
      <h2 className=" text-[2.625em] font-black text-center">{title}</h2>
      <p className=" text-xl mt-4 text-center text-gray-500">{subTitle}</p>
    </div>
  )
})

SectionHeading.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string
}

export default SectionHeading
