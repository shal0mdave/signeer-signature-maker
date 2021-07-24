import { Typography } from 'antd';

const { Title } = Typography;

const Hero = () => {
    return (
        <header>
            <div className="container">
                <div className="text-container">
                    <Title level={1}>Welcome to Signeer. A Simple Signature Maker For Humans.</Title>
                    <p>Add your text, style it and swoosh... You're off with a signature!</p>
                </div>

                <div className="image-container">
                    <img src="/img/hero-art.png" alt="An abstract image of a person with what appears to be a giant pencil, drawing :)" />
                </div>
            </div>
        </header>
    )
}

export default Hero;