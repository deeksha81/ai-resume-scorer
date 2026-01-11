import React from 'react'
import styles from './History.module.css';
import Skeleton from '@mui/material/Skeleton';

const History = () => {
  return (
    <div className= {styles.History}>
       
      <div className= {styles.HistoryCardBlock}>

        <Skeleton
        variants="rectangular"
        width={270}
        height={250}
        sx={{borderRadius:"20px"}}
        
        
        />



        <div className= {styles.HistoryCard}>

          <div className= {styles.cardPercentage}>80%</div>
               <br/>
          <h2>Frontend Developer</h2>
                 <br/>
          <p>Resume Name: Resume.pdf</p>
                  <br/>
          
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed itaque explicabo exercitationem facilis. Impedit voluptatum eius pariatur dicta est, earum consectetur quis magnam maxime ut totam eligendi, esse repellat dolores.</p>
               <br/>
          <p>Dated : 2025-11-18</p>
          </div>


           <div className= {styles.HistoryCard}>

          <div className= {styles.cardPercentage}>80%</div>
               <br/>
          <h2>Frontend Developer</h2>
                 <br/>
          <p>Resume Name: Resume.pdf</p>
                  <br/>
          
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed itaque explicabo exercitationem facilis. Impedit voluptatum eius pariatur dicta est, earum consectetur quis magnam maxime ut totam eligendi, esse repellat dolores.</p>
               <br/>
          <p>Dated : 2025-11-18</p>
          </div>
              
        
        

         <div className= {styles.HistoryCard}>

          <div className= {styles.cardPercentage}>80%</div>
               <br/>
          <h2>Frontend Developer</h2>
                 <br/>
          <p>Resume Name: Resume.pdf</p>
                  <br/>
          
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed itaque explicabo exercitationem facilis. Impedit voluptatum eius pariatur dicta est, earum consectetur quis magnam maxime ut totam eligendi, esse repellat dolores.</p>
               <br/>
          <p>Dated : 2025-11-18</p>
          </div>

          <div className= {styles.HistoryCard}>

          <div className= {styles.cardPercentage}>80%</div>
               <br/>
          <h2>Frontend Developer</h2>
                 <br/>
          <p>Resume Name: Resume.pdf</p>
                  <br/>
          
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed itaque explicabo exercitationem facilis. Impedit voluptatum eius pariatur dicta est, earum consectetur quis magnam maxime ut totam eligendi, esse repellat dolores.</p>
               <br/>
          <p>Dated : 2025-11-18</p>
          </div>
           
          <div className= {styles.HistoryCard}>

          <div className= {styles.cardPercentage}>80%</div>
               <br/>
          <h2>Frontend Developer</h2>
                 <br/>
          <p>Resume Name: Resume.pdf</p>
                  <br/>
          
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed itaque explicabo exercitationem facilis. Impedit voluptatum eius pariatur dicta est, earum consectetur quis magnam maxime ut totam eligendi, esse repellat dolores.</p>
               <br/>
          <p>Dated : 2025-11-18</p>
          </div>
        
        </div>
        
        
        
    </div>



    
  )
}

export default History