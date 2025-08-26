import './buttomIcon.css';

function buttomIcon({ btn }) {
    return (
        <div className='btnRedes'>
            {btn.map((btn, index) => 
                <div key={index}>
                    <button onClick={() => window.open(btn.url, '_blank')} >
                        <img src={`${btn.img}`} />
                    </button>
                </div>
            )}
        </div>
    );
}

export default buttomIcon;