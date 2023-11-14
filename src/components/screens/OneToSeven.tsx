import ScreenPhotoContainer from './ScreenPhotoContainer';
import ImgPath from "../../assets/1.jpg"

const OneToSeven = () => {


    return (
        <section className="flex justify-center mx-auto paddingYScreens max-w-[80rem] flex-wrap lg:flex-nowrap" >
            <section className="flex flex-col items-center p-2 lg:w-1/2 margins">
                <h4 className="mb-2 text-right text-bold bounceTitles">
                    De um até os sete anos
                </h4>
                <ScreenPhotoContainer className="mb-[2rem] lg:mb-0 " src={ImgPath} alt="One To Seven" />
            </section>
            <section className="flex flex-col p-2 items-left">
                <p className="text-center whitespace-normal text-bold">
                    De um até os sete anos
                </p>
                <br /><br /><br />
                <p>Resumidamente:
                    <br /><br />
                    •	Certos flashs de memória, me dizem que eu estava com meu falelido pai em um campo de futebol<br />
                    •	Lembro também dele em um bar com a minha irmã, ele estava de costas.<br />
                    •	Morava na chapada grande uma vila nas redondezas da cidade, onde minha mãe Marlene trabalhava em uma empresa de material de construções chamada Unel<br />
                    •	Sempre ia na casa da minha tia Rosa, gostava muito do meu tio Roberto, tinha um primo de segundo grau que me chamava de GugaGuga, por conta do meu paninho de dedo que eu mexia e ficava GaleGale.<br />
                    •	Nessa época minha mãe me chamava de meu pequeno grande homem, tenho uma lembrança de quando estavamos deitados no sofa de casa assistindo tv.<br />
                    •	Tenho outra na qual eu mordi o braço dela pois queria um arco e flesha de brinquedo<br />
                    •	Outra quando fui comprar frango para o almoço apé.<br />
                    •	Uma vaga lembrança de quando eu fui pescar com os amigos dela que hoje moram em São Paulo<br />
                    •	Na casa da minha falecida avó maria sempre iamos aos fins de ano  e a casa era lotada com todos meus tios primas e muita comida.<br />
                    •	Na casa da minha falecida avó Yolanda, sempre nos reuniamos também, muitos presentes e muita comida.<br />
                    •	Não tinha muitos amigos, o único que lembro era o Gabriel, André, Ariane, Natalia.<br />
                    •	Ganhei meu primeiro video-game um turbo game, na semana seguinte coloquei um imã na televisão e ela ficou esverdeada com rosa, minha mãe quase me matou.<br />
                    •	Lembro de vezes que fui ao clube de campo Venancio, adorava.<br />
                </p>
            </section>
        </section>
    );
};

export default OneToSeven