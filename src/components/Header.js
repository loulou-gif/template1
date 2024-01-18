import '../assets/css/Styles.css'

const Header = () => {
   return (
        <header className="header border text-white">
            <div className=' w-4/12 min-w-96 ml-64 mt-28'>
                <h1 className=' font-bold ml-5  text-2xl '>AKWABA A LA CAN DE L'HOSPITALITE</h1>
                <div className='ml-5 h-2 flex justify-end'>
                    <div className='ml-5 w-6/12 h-1 bg-white' ></div>
                </div>
                <p className='ml-5 font-semibold text-7xl'>La terre de l'hospitalité est ravi de vous accueillir sur son térritoire pour célébrer la fête du football africain</p>
            </div>
        </header>
    )
}

export default Header;