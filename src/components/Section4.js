import can1 from "../assets/img/can1.jpg"
import "../assets/css/Styles.css"
const Section4 =() => {
    return(
        <section className="section3 h-full pb-10 w-full flex justify-center bg-orange-500 mt-36">
            <div className="w-5/12  mt-5 ">
                <h2 className="mt-5 text-white  w-6/12 ml-10 text-5xl font-semibold" >TOUS AVEC LES ELEPHANTS</h2>
                <p className="mt-5 text-white  w-11/12 ml-10 text-xl ">Le président ivoirien a investi des millions dans la construction et la rénovation de plusieurs stades, mais ce n'est pas tout. Une préparation exceptionnelle a été entreprise pour offrir des conditions optimales à nos éléphants.<br/>
                Le président ivoirien a investi des millions dans la construction et la rénovation de plusieurs stades, mais ce n'est pas tout. Une préparation exceptionnelle a été entreprise pour offrir des conditions optimales à nos éléphants.</p>
                <img className="w-11/12 ml-10 h-4/12 mt-5 rounded-lg" alt="" src={can1} />
            </div>
            <div className="w-5/12  mt-5 ">
                <p className="mt-5 text-white  w-11/12 ml-10 text-xl ">Le président ivoirien a investi des millions dans la construction et la rénovation de plusieurs stades, mais ce n'est pas tout. Une préparation exceptionnelle a été entreprise pour offrir des conditions optimales à nos éléphants.<br/>
                Le président ivoirien a investi des millions dans la construction et la rénovation de plusieurs stades, mais ce n'est pas tout. Une préparation exceptionnelle a été entreprise pour offrir des conditions optimales à nos éléphants.</p>
                <div className="w-11/12 ml-10 h-8 flex justify-end">
                    <div className="w-64 bg-white h-8 "></div>
                </div>
                <img className="pictures w-11/12 ml-10 h-4/12 rounded-lg" alt="" src={can1} />
            </div>

        </section>
    )
}

export default Section4 