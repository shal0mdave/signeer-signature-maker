import React, { useRef, useEffect } from 'react';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

const Signature = (props) =>{ 

    const canvasRef = useRef(null);
    const imgRef = useRef(null);

    const _handleDownload = () =>{
        let fileNames = ['Rock', 'Paper', 'Scissors'];
        let fileName = fileNames[Math.floor(Math.random()*fileNames.length)];

        let tempLink = document.createElement('a');
        tempLink.href = imgRef.current.src;
        tempLink.setAttribute('download', `${fileName}.png`);
        tempLink.click();
    }
    
    const drawSignature = (canvas, context) =>{

        context.clearRect(0, 0, canvas.width, canvas.height)
        context.fillText('', canvas.width/2, canvas.height/2);
        context.fillStyle = props.fill;
        context.font = `${props.size}px ${props.font}`;
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillText(props.text, canvas.width/2, canvas.height/2, canvas.width-30);

        let img = imgRef.current;
        img.src = context.canvas.toDataURL('image/png');
    }

    useEffect(() =>{
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        drawSignature(canvas, context);
    },[drawSignature])

    return(
        <div className="signature-container">
            <canvas ref={canvasRef} {...props} />

            <Button 
                type="default" 
                icon={<DownloadOutlined />} 
                size="large"
                onClick={_handleDownload}>
                Download
            </Button>
            
            <img ref={imgRef} alt={props.text} />        
        </div>
    )
}

export default Signature;