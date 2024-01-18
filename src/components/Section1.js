import '../assets/css/Styles.css'
import can from '../assets/img/can.jpg'
const Section1 = () =>{
    return(
        <section className="Section1 mt-32">
            <div className="flex justify-center">
                <p className=" w-3/12 mr-14  min-w-96 pl-5  text-6xl">La Côte d'Ivoire impressionne par son organisation lors de la Coupe d'Afrique des Nations, à la manière d'une Coupe du Monde.</p>
                <div className=" w-5/12 pb-10 ml-10 text-xl h-40">
                    <p className=" h-32 ">Le président ivoirien a misé des millions pour la mise en place de différents stade ainsi que leur rénovation. mais pas que, une préparation incroyable pour fournir les condition adéquate a nos éléphant.
                    la venu de plusieurs journaliste et du système qui a tant fait  ses preuves ces dernière année. Je parle bien de la VAR. Vivez donc la CAN à plein poumon.</p>
                    <section className="flex justify-end ">
                        <div className='h-5 w-48 border bg-green-600 '>
                        </div>                        
                    </section>
                </div>
            </div>
            <div className='flex justify-center -mt-20'>
                <p className='w-4/12 mr text-2xl mt-64'>
                    Le président ivoirien a misé des millions pour la mise en place de différents stade ainsi que leur rénovation.  mais pas que, une préparation incroyable pour fournir les condition adéquate a nos éléphant.<br/> <br/>
                    la venu de plusieurs journaliste et du système qui a tant fait  ses preuves ces dernière année. Je parle bien de la VAR. Vivez donc la CAN à plein poumon.<br/> <br/>

                    <button className='border h-10 w-56 border-black text-black'>LIRE LA SUITE</button>
                </p>
                <div className='w-4/12  -ml-20'>
                    <div className='h-64 w-80 bg-orange-300'></div>
                    <img className='ml-36 -mt-28 h-96' alt='img2' src={can} width="600px"/>
                </div>
            </div>
        </section>
    )
}

export default Section1
