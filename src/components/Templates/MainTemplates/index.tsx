import { Container } from '../../Container';
import { Footer } from '../../Footer';
import { Heading } from '../../Heading';
import { Logo } from '../../Logo';
import { Menu } from '../../Menu';

type MainTemplateProps = {
    children: React.ReactNode;
}
function MainTemplate({children}: MainTemplateProps)
{
    return( 
    <>
        <Container><Heading>Testando meu componente heading</Heading></Container>
        <Container><Menu/></Container>
        <Container><Logo/></Container>
        {children}
        <Container><Footer/></Container>
    </>)
}

export { MainTemplate };
