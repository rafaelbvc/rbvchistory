import ScreenPhotoContainer from './ScreenPhotoContainer';
import ImgPath from "../../assets/2.jpg"

const SevenToFourteen = () => {


    return (
        <section className="flex justify-center mx-auto paddingYScreens max-w-[80rem] flex-wrap lg:flex-nowrap" >
            <section className="flex flex-col items-center p-2 lg:w-1/2 margins">
                <h4 className="mb-2 text-right text-bold bounceTitles">
                    Dos sete aos quatorze anos
                </h4>
                <ScreenPhotoContainer className="mb-[2rem] lg:mb-0 " src={ImgPath} alt="Seven To Fourteen" />
            </section>
            <section className="flex flex-col p-2 items-left">
                <p className="text-center whitespace-normal text-bold">
                    Dos sete aos quatorze anos
                </p>
                <br /><br /><br />
                <p>Resumidamente:
                    <br /><br />
                    •	Lembro que foi uma época um pouco agitada, a mãe começou a trabalhar fora após passar num concurso, onde as coisas melhoraram em casa.<br />
                    •	Nessa época via meus amigos mais frequentemente, André, Gabriel, Natalia, Ariane, Aline, Sheila, Guilherme, brincavamos bastante.<br />
                    •	Sempre brincava com a minha irmã, eramos unidos<br />
                    •	Foi uma época que eu comecei a ficar mais tempo sozinho em casa, pois a minha irmã sempre ia dar e ter aulas de ballet.<br />
                    •	Ganhei um ferrorama que ocupava a sala inteira, eu amava<br />
                    •	Ganhei presentes de aniversário, porém um pessoal da vila entrou em minha casa e fizeram uma cena de horror, onde quebraram os vidros e roubaram nossos brinquedos, meus e da minha irmã.<br />
                    •	Comecei a fazer Kumon de matematica, ingles e natação<br />
                    •	Fiquei fascinado pelo universo depois que ganhei um livro chamado “O universo em uma Casca de Nóz” e um outro chamado “Conhecer por Dentro”<br />
                    •	Conheci umas pessoas mais velhas, onde talvez não foram boas companhias porém eu gostava da aventura, fumei maconha pela primeira vez, comecei a beber alcool com alguns amigos, Jun, Diego (Forest Gamp).<br />
                    •	Ganhei meu segundo video-game Playstation e um roller inline da minha tia, foi maravilhoso.<br />
                    •	Gostava de soltar pipa com o pessoal, mas sempre perdia as minhas.<br />
                    •	Ganhei uma bicicleta adorava andar de bicicleta, ainda mais com a minha prima Francine que sempre vinha em casa de Santa Catarina<br />
                    •	Sempre ia muito bem na escola<br />
                    •	Amava ir para Piraju na casa dos meus avós<br />
                    •	Fiz uma viagem inesquecivel para brasilha<br />
                    •	E também para o Beto Carreiro<br />
                    •	Tinha vergonha dos meus dentes por conta da descancificação e tambem do meu peito, pelo externo ser saltado, não tinhamos muitas condições então não conseguia acompanhar meus colegas de escola nas festinhas

                </p>
            </section>
        </section>
    );
};

export default SevenToFourteen