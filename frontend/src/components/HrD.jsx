import TextTitle from "./Title"
import '../styles/HrD.css'

function HrD({ type }) {
  return (
    <>
      <div className='line'>
          <hr />
            <img src="https://raw.githubusercontent.com/LucasfcBastos/custom_icons/main/version01/d20.svg" />
          <hr />
      </div>
      <TextTitle text={type} />
    </>
  )
}

export default HrD