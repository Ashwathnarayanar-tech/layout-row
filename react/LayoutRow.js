import React from "react";
import styles from "./LayoutRow.css";
import { useCssHandles } from 'vtex.css-handles';
const CSS_HANDLES = [ 'LayoutRowContainer','textBlockContainer','textContainer','textBlockHeading','textBlockPara','textBlockImage','imageLink','bannerImage']
const LayoutRow = (props) => {
    const handles = useCssHandles(CSS_HANDLES)
const customStyle={
    textAlign: `${props.textBlockProperties.textAlign}`,
    color: `${props.textBlockProperties.textColor}`,
    backgroundColor:`${props.textBlockProperties.textBackground}`
    }    
    

    let blockText;
    if (props.textBlockProperties.textImage) {
        blockText = <div style={{...customStyle,display:"flex"}} className={handles.textBlockContainer} > 
                    <div style={{"flexFlow":"row"}} className={handles.textContainer} > 
                 <h2 className={handles.textBlockHeading}>{props.textBlock}</h2>
                <p className={handles.textBlockPara}>{props.textContent}</p>
                </div>
                <div>
                <img src={props.textBlockProperties.textImage} alt="Text Block Image"
                    style={{
                        height: `${props.textBlockProperties.textImageHeight}` ? `${props.textBlockProperties.textImageHeight}` : "200px",
                        // height: `${props.textBlockProperties.textImageWidth}` ? `${props.textBlockProperties.textImageWidth}` : "250px"
                    }}
                    className={handles.textBlockImage}/>
            </div>  
           </div> 
                           
        }
    else {
        blockText=  <div style={{...customStyle}} className={handles.textBlockContainer}> 
        <div className={handles.textContainer}> 
        <h2 className={handles.textBlockHeading}>{props.textBlock}</h2>
        <p className={handles.textBlockPara}>{props.textContent}</p>
        </div>            
    </div>
     }       
    
    return (
        <div className={handles.LayoutRowContainer}>      
          {!props.imageBlockProperties.positionTop && <div>{blockText}</div>}
            
            <a href={props.imageBlockLink} className={handles.imageLink}>           
                <img src={props.imageBlockSrc} alt="Banner Image"
                style={{
                    width: `${props.imageBlockProperties.fullWidth}` === 'true' ? "100%" : "",
                    height: `${props.imageBlockProperties.imageHeight}`
                    }}
                    className={handles.bannerImage}/>
            </a>            
            
            {props.imageBlockProperties.positionTop && <div>{blockText}</div>}
            
    </div>)
}

export default LayoutRow;