import Heading from "./Components/Heading";
import General from "./Components/General/General";
import Addresses from "./Components/Addresses/Addresses";
function AboutCompany() {
    return (
        <div>
            <Heading/> {/* Заголовок и кнопка справа */}
            <div className='d-flex justify-content-between gap-5 m-5'>
                <General/>  {/* Основная информация вроде названия, типа и телефона */}
                <div className="border-box"> <Addresses />
                     </div>{" "}
            </div>
        </div>
    );
}

export default AboutCompany;