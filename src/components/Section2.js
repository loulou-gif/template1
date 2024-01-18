import can1 from "../assets/img/can1.jpg"
import can2 from "../assets/img/can8.jpg"
import "../assets/css/Styles.css"
const Section2 =() => {
    return(
        <section className="section2 h-full pb-10 w-full flex justify-center bg-black mt-36">
            <div className="w-5/12  mt-5 ">
                <h2 className="mt-5 text-white  w-6/12 ml-10 text-5xl font-semibold" >TOUS AVEC LES ELEPHANTS</h2>
                <p className="mt-5 text-white  w-11/12 ml-10 text-xl ">Le président ivoirien a investi des millions dans la construction et la rénovation de plusieurs stades, mais ce n'est pas tout. Une préparation exceptionnelle a été entreprise pour offrir des conditions optimales à nos éléphants.<br/>
                Le président ivoirien a investi des millions dans la construction et la rénovation de plusieurs stades, mais ce n'est pas tout. Une préparation exceptionnelle a été entreprise pour offrir des conditions optimales à nos éléphants.</p>
                <img className="pictures ml-10  mt-5 rounded-lg" alt="" src={can1} />
            </div>
            <div className="w-5/12  mt-5 ">
                <p className="mt-5 text-white  w-11/12 ml-10 text-xl ">Le président ivoirien a investi des millions dans la construction et la rénovation de plusieurs stades, mais ce n'est pas tout. Une préparation exceptionnelle a été entreprise pour offrir des conditions optimales à nos éléphants.<br/>
                Le président ivoirien a investi des millions dans la construction et la rénovation de plusieurs stades, mais ce n'est pas tout. Une préparation exceptionnelle a été entreprise pour offrir des conditions optimales à nos éléphants.</p>
                <div className="w-11/12 ml-10 h-5 flex justify-end mb-28">
                    <div className="w-64 bg-white h-5 "></div>
                </div>
                <img className="pictures  ml-10  rounded-lg" alt="" src={can2} />
            </div>

        </section>
    )
}

export default Section2 