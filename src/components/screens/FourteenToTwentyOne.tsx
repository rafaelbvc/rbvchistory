import ScreenPhotoContainer from './ScreenPhotoContainer';
import ImgPath from "../../assets/3.jpg"

const FourteenToTwentyOne = () => {


    return (
        <section className="flex justify-center mx-auto paddingYScreens max-w-[80rem] flex-wrap lg:flex-nowrap" >
            <section className="flex flex-col items-center p-2 lg:w-1/2 margins">
                <h4 className="mb-2 text-right text-bold bounceTitles">
                    Dos quatorze até os vinte e um anos
                </h4>
                <ScreenPhotoContainer className="mb-[2rem] lg:mb-0 " src={ImgPath} alt="Fourteen To Twenty-One" />
            </section>
            <section className="flex flex-col p-2 items-left">
                <p className="text-center whitespace-normal text-bold">
                    Dos quatorze até os vinte e um anos
                </p>
                <br /><br /><br />
                <p>Resumidamente:
                    <br /><br />
                    •	Minha irma foi fazer faculdade fora, minha mãe foi trabalhar em Sorocaba<br />
                    •	Comecei a andar com amigos mais velhos, João Paulo, Bruno, Jarbas<br />
                    •	Desde então fumava maconha todos os dias mas ainda sim terminei o Kumon com cinco anos acima da série escolar<br />
                    •	Certo dia um amigo levou crack em casa ai eu experimentei  desde então todos que estavam ao redor faziam encontros pra dividir uma mistura de maconha com crack, praticamente todos os dias<br />
                    •	Namorei pela primeira vez oficialmente a Mariana Nunes, gostava muito dela e ela de mim.<br />
                    •	Não tinhamos muitas condições, quase nunca conseguia acompanhar meus amigos onde quer que eles fossem.<br />
                    •	Minha Tia dava de tudo pra mim, ganhei meu segundo video-game um Playstation 2 que estragou na casa de um amigo depois de 2 semanas e nunca mais voltou a funcionar<br />
                    •	O contato com a minha familia começou a diminuir e eu comecei a aumentar o uso de drogas, e comecei a fazer o uso sozinho.<br />
                    •	Meus amigos começaram a se libertar das drogas e eu continuei<br />
                    •	Desde então meus dias foram jogar no quarto, usar drogas e pouca interação com pessoas familiares e amigos, ainda sim minhas notas eram otimas<br />
                    •	Conheci a mulher que eu mais gostei na minha vida Kassia Ayumi<br />
                    •	Passei no vestibular da UEM – Fisica / Maringá e pra la fui, la foi onde minha adicção tomou conta, pois eu recebia dinheiro da minha mãe e da minha tia e usava praticamente tudo em drogas, entrei em lugares que eu jamais gostaria de ter estado<br />
                    •	Voltei e perdi a Kassia Ayumi junto com a faculdade<br />
                    •	Namorei uma moça chamada Mareci, a qual engravidou e quis tirar o filho, eu não quis, mas por motivos de melhores metodos, visto que ia ocorrer, eu a audei comprando citotec.
                </p>
            </section>
        </section>
    );
};

export default FourteenToTwentyOne