import ScreenPhotoContainer from './ScreenPhotoContainer';
import ImgPath from "../../assets/5.jpg"

const TwentyEightToThirtyFive = () => {


    return (
        <section className="flex justify-center mx-auto paddingYScreens max-w-[80rem] flex-wrap lg:flex-nowrap" >
            <section className="flex flex-col items-center p-2 lg:w-1/2 margins">
                <h4 className="mb-2 text-right text-bold bounceTitles">
                    Dos vinte e oito anos até os trinta e cinco anos
                </h4>
                <ScreenPhotoContainer className="mb-[2rem] lg:mb-0 " src={ImgPath} alt="Twenty-Eight To Thirty-Five" />
            </section>
            <section className="flex flex-col p-2 items-left">
                <p className="text-center whitespace-normal text-bold">
                    Dos vinte e oito anos até os trinta e cinco anos
                </p>
                <br /><br /><br />
                <p>Resumidamente:
                    <br /><br />
                    •	Quando voltei da rua minha mãe me internou a força numa na Clinica Vitória em Piedade, por seis meses<br />
                    •	Logo que sai voltei com a Teila e fui morar em Capão Bonito, trabalhando na ZukNet, reformei a casa em que alugamos, recai, desde então as brigas voltaram e eu tive de vir embora pra Itapetininga novamente<br />
                    •	Em itapetininga, tive varios usos, porem mais controlados, quase não sai, quase não me socializei, a minha vida foi meu quarto meu computador e drogas<br />
                    •	Estudei como autodidata e aprendi a desenvolver softwares, trabalhei em alguns lugares, porem por conta das drogas e a cabeça mais fraca acabei perdendo tudo<br />
                    •	Recebi uma herança de um tio, realizei meu sonho de comprar uma moto grande, ela estava perfeita ate que precisou de uma manutenção onde voltou diferente e quase não saia da manutenção, foi só dor de cabeça<br />
                    •	Hoje ela esta parada na garagem do prédio e eu não vejo a hora de consertar ela, pois estou doido de vontade de andar, porem gasto o dinheiro com drogas e consigo realizar a manutenção<br />
                    •	Consegue com muito amor reconquistar a Kassia Ayumi, porém a perdi novamente para as drogas.<br />
                    •	As drogas me tiram a força de vontade de continuidade das coisas, parece que nada tem muita graça é só sofrimento.<br />
                    •	Até que a minha vida começou a mudar onde descobri que sou um Cabalista e tem pessoas maravilhosas me apoiando.<br />
                    •	Tenho certeza que tudo vai dar certo, por mais que eu ainda não seja forte o suficiente com a ajuda da Cabala a minha vida esta melhorando muito<br />
                    •	E hoje estou aqui, em buscar da minha felicidade, esperançoso e com fé.
                </p>
            </section>
        </section>
    );
};

export default TwentyEightToThirtyFive