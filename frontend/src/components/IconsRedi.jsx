import '../styles/IconsRedi.css'

function IconsRedi({ img, text1, text2, redi}) {
    return (
        <div className='linesIcons'>
            <img src={img}/>
            <div>
                <p>{text1}</p>
                <a href={redi}>{text2}</a>
            </div>
        </div>
    )
}

export default IconsRedi