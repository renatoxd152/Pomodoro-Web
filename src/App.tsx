import { Container } from './components/Container';
import { Heading } from './components/Heading';
import './styles/global.css';
import './styles/theme.css';

function App()
{
    return( 
    <> 
        <Container>
            <Heading>Testando meu componente heading</Heading>
            <section>LOGO</section></Container>
        <Container><section>Menu</section></Container>
    </>)
}

export { App };
