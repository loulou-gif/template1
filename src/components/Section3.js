import '../assets/css/Styles.css'
import can from '../assets/img/can6.jpg'
const Section3 = () =>{
    return(
        <section className="section3 mt-32">
            <div className="flex justify-center ">
                <div className=" w-5/12 pb-10 ml-10 mr-5  text-xl h-40">
                    <p className=" h-32 w-11/12 flex  justify-end ">Le président ivoirien a misé des millions pour la mise en place de différents stade ainsi que leur rénovation. mais pas que, une préparation incroyable pour fournir les condition adéquate a nos éléphant.
                    la venu de plusieurs journaliste et du système qui a tant fait  ses preuves ces dernière année. Je parle bien de la VAR. Vivez donc la CAN à plein poumon.</p>
                    <section className="  mt-5">
                        <div className='h-5 w-48  bg-green-600 '>
                        </div>                        
                    </section>
                </div>
                <p className=" w-3/12 mr-14 text-end ml-5 min-w-96 pl-5 font-extrabold text-6xl">La CAN c'est chez nous!</p>                
            </div>
            <div className='flex justify-center   pb-28 mt-20'>
                
                <div className=''>
                    <div className='w-11/12  flex justify-end  ml-56'>
                        <div className='h-72 w-80  bg-green-600'></div>
                    </div>
                    <div className=' h-full w- -mt-44 flex justify-end ml-10 mr-5'>
                        <img className='' alt='img2' src={can}/>
                    </div>
                </div>
                <p className='w-4/12  text-2xl text-end ml-5 mt-80'>
                Le président ivoirien a investi des millions dans la construction et la rénovation de plusieurs stades, mais ce n'est pas tout. Une préparation exceptionnelle a été entreprise pour offrir des conditions optimales à nos éléphants.<br/> <br/>
                De nombreux journalistes sont présents, ainsi que le système qui a fait ses preuves ces dernières années, en particulier la VAR. Profitez pleinement de la Coupe d'Afrique des Nations.<br/> <br/>

                    <button className='border h-10 w-56 border-black text-black hover:border-green-500 hover:bg-green-500 hover:text-white duration-300'>LIRE LA SUITE</button>
                </p>
            </div>
        </section>
    )
}

export default Section3
