import '../assets/css/Styles.css'
import can from '../assets/img/can.jpg'
const Section1 = () =>{
    return(
        <section className="Section1 mt-32">
            <div className="flex justify-center">
                <p className=" w-3/12 mr-14  min-w-96 pl-5  text-6xl">La Côte d'Ivoire impressionne par son organisation lors de la Coupe d'Afrique des Nations, à la manière d'une Coupe du Monde.</p>
                <div className=" w-5/12 pb-10 ml-10 text-xl h-40">
                    <p className=" h-32 ">Le président ivoirien a misé des millions pour la mise en place de différents stade ainsi que leur rénovation. mais pas que, une préparation incroyable pour fournir les condition adéquate a nos éléphant.
                    la venu de plusieurs journaliste et du système qui a tant fait  ses preuves ces dernières années. Je parle bien de la VAR. Vivez donc la CAN à plein poumon.</p>
                    <section className="flex justify-end ">
                        <div className='h-5 w-48 border bg-green-600 '>
                        </div>                        
                    </section>
                </div>
            </div>
            <div className='flex justify-center  pb-28 -mt-20'>
                <p className='w-4/12 mr text-2xl mt-80'>
                Le président ivoirien a investi des millions dans la construction et la rénovation de plusieurs stades, mais ce n'est pas tout. Une préparation exceptionnelle a été entreprise pour offrir des conditions optimales à nos éléphants.<br/> <br/>
                De nombreux journalistes sont présents, ainsi que le système qui a fait ses preuves ces dernières années, en particulier la VAR. Profitez pleinement de la Coupe d'Afrique des Nations.<br/> <br/>

                    <button className='border h-10 w-56 border-black hover:border-green-500 text-black hover:bg-green-500 hover:text-white duration-300'>LIRE LA SUITE</button>
                </p>
                <div className='w-5/12  -ml-20'>
                    <div className='h-72 w-80 bg-orange-300'></div>
                    <img className='ml-28 -mt-36 h-full' alt='img2' src={can} width="730px"/>
                </div>
            </div>
        </section>
    )
}

export default Section1
