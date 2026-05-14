import { PlayCircleIcon } from "lucide-react"
import { Cycles } from "../Cycles"
import { DefaultButton } from "../DefaultButton"
import { DefaultInput } from "../DefaultInput"
export function MainForm()
{
    return(
        <form className='form' action="">
            <div><DefaultInput labelText='Meu label:' id='meu-input' type='text' defaultValue="Valor Preenchido!"/></div>
            <div className='formRow'>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='formRow'>
                <Cycles/>
            </div>
            <div className='formRow'>
                <button>Enviar</button>
                <DefaultButton icon={<PlayCircleIcon/>}/>
            </div>
        </form> 
    )
}
