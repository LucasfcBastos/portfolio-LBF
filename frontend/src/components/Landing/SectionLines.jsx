import '../../styles/Landing/SectionLines.css'

function SectionLines({ type }) {
  return (
    <>
      <div className='section'>
        <div className='line'>
            <hr />
              <img src="https://raw.githubusercontent.com/LucasfcBastos/custom_icons/main/version01/d20.svg" />
            <hr />
        </div>
        <h1>
            {type}
        </h1>
      </div>
    </>
  )
}

export default SectionLines