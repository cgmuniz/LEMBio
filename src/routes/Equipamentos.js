import { Center } from "@chakra-ui/react"
import '../styles/equipamentos.css'
import Synapt from '../img/equipamentos/Synapt.jpg'
import micro from '../img/equipamentos/microTOFII.jpg'
import amazonETD from '../img/equipamentos/amazonETD.png'

function Equipamentos () {
    return(
        <div className="Corpo">
            <h2>Equipamentos disponíveis</h2>
            <div className="equip">
                <h4>• Synapt G2 HDMS (Q-TOF, Waters) acoplado ao sistema de cromatografia nanoAcquity UPLC (Waters)</h4>
                <Center style={{marginTop:40}}>
                    <img 
                    className="imgEquip"
                    src={Synapt}
                    alt="Synapt G2 HDMS"
                    />
                </Center>
            </div>
            <div className="equip">
                <h4>• AmaZon ETD (ion trap, Bruker) acoplado ao sistema de cromatografia Shimadzu</h4>
                <Center style={{marginTop:50}}>
                    <img 
                    className="imgEquip"
                    src={amazonETD}
                    alt="AmaZon ETD"
                    />
                </Center>
            </div>
            <div className="equip">
                <h4>• micrOTOF II (Q-TOF, Bruker), acoplado ao sistema de nano-cromatografia da Bruker</h4>
                <Center style={{marginTop:40}}>
                    <img 
                    className="imgEquip"
                    src={micro}
                    alt="micrOTOF II"
                    />
                </Center>
            </div>
        </div>
    )
}

export default Equipamentos