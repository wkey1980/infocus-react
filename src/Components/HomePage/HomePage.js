import styled from 'styled-components/macro';

const HomePage = (props) => {
    return (
        <Container>
            <Content>
                <Title>
                    <h1>Karen Key infocus</h1>
                </Title>
                <BgImage />
            </Content>
        </Container>
    );
};


// HomePage Container
const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    height: 100vh;

`;

const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 100%;
    height: 100%;
    min-height: 100vh;

    position: relative;
`;

// HomePage BgImage
const BgImage = styled.div`
    /* Photo by Marek Piwnicki on Unsplash */
    /* background-image: url('/images/BgImage.jpg'); */

    /* Photo by Vinícius Müller on Unsplash */
    background-image: url('/images/BackgroundImages/BgImage_v2.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-blend-mode: multiply;


    background-color: rgba(0, 0, 255, 0.4);

    height: 100%;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;

    z-index: -1;
    opacity: 0.7;
`;

const Title = styled.div`
    width: 600px;
    height: 600px;

    & h1 {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        font-size: 36px;
    }
`;


export default HomePage;