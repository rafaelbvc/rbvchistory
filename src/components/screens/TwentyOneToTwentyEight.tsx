import ScreenPhotoContainer from './ScreenPhotoContainer';
import ImgPath from "../../assets/4.jpg"

const TwentyOneToTwentyEight = () => {


    return (
        <section className="flex justify-center mx-auto paddingYScreens max-w-[80rem] flex-wrap lg:flex-nowrap" >
            <section className="flex flex-col items-center p-2 lg:w-1/2 margins">
                <h4 className="mb-2 text-right text-bold bounceTitles">
                    Dos vinte e um até os vinte e oito anos
                </h4>
                <ScreenPhotoContainer className="mb-[2rem] lg:mb-0 " src={ImgPath} alt="Twenty-One To Twenty-Eight" />
            </section>
            <section className="flex flex-col p-2 items-left">
                <p className="text-center whitespace-normal text-bold">
                    Dos vinte e um até os vinte e oito anos
                </p>
                <br /><br /><br />
                <p>Resumidamente:
                    <br /><br />
                    •	Foi a epoca que eu tinha voltado de Maringá, numa drogadição muito forte, usava muito todos os dias, comecei a dar problema em casa e a só me trancar no quarto.<br />
                    •	Fui internado por quatro meses em Atibaia, terminei a internação, voltei para Itapetininga, recai no primeiro dia.<br />
                    •	Usava drogas todos os dias nas ruas.<br />
                    •	Fui morar com a minha irmã em Campinas, onde me recuperei, fazia corrida e estava forte de academia, bonito o menino.<br />
                    •	Recai em Campinas, fui parar numa crackolandia de la, por dias<br />
                    •	Fui internado novamente por dois meses em Atibaia<br />
                    •	Casei com a Larissa por ela estar Grávida<br />
                    •	Fui internado em Capela do Alto por oito meses, fugi para tentar ver a minha filha nascer, mas me capturaram<br />
                    •	Liberaram eu pra ver a minha filha nascer<br />
                    •	Me separei da Larissa<br />
                    •	Uso diario de drogas, desunião<br />
                    •	Ganhei um carro, mas minha tia pegou de volta no primeiro dia, pois eu sumi e não dei noticias, desde então eu tinha um sonho em ter uma moto grande<br />
                    •	Comecei a namoraruma moça chamada Teila, ela me amava, mas eu não dei muito valor por conta da droga, brigavamos muito.<br />
                    •	Fui internado em Pilar do Sul, grupo Ama, após uma briga fui expulso da clinica e voltei embora metade do caminho apé.<br />
                    •	Separei da Teila<br />
                    •	Desde então as coisas só pioraram, minhã mãe me mandou para a rua fiquei alguns dias na rua, voltei pra casa e fui internado em São Miguel por onze meses, voltei e recai.<br />
                    •	Comecei a trabalhar na TelTelecon, porem estava em uma situação ruim, morei um mês na rua, na casa de usuarios, foi horrivel.<br />
                </p>
            </section>
        </section>
    );
};

export default TwentyOneToTwentyEight