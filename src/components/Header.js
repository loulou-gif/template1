import '../assets/css/Styles.css'

const Header = () => {
   return (
        <header className="header border text-white">
            <div className='component border min-w-96 ml-40 mt-28'>
                <h1 className=' font-bold   text-2xl '>AKWABA A LA CAN DE L'HOSPITALITE</h1>
                <div className='w-8/12 h-2'>
                    <div className='w-6/12 h-1 bg-white' ></div>
                </div>
                <p className=' font-semibold text-7xl'>La terre de l'hospitalité est ravi de vous accueillir sur son térritoire pour célébrer la fête du football africain</p>
            </div>
        </header>
    )
}

export default Header;