import React from 'react'
import styles from './Admin.module.css';
import Skeleton from '@mui/material/Skeleton';
import WithAuthHOC from '../../utils/HOC/withAuthHOC';

const Admin = () => {
  return (
    <div className= {styles.Admin}>
        <div className={styles.AdminBlock}>

    <Skeleton
        variants="rectangular"
        width={266}
        height={200}
        sx={{borderRadius:"20px"}}
        
        
        />

            <div className= {styles.AdminCard}>
                <h2>CodingHunger</h2>
                  <br/>
                <p style={{color:"blue"}}>mashhood@gmail.com</p>
                   <br/>
                <h3>Score: 50%</h3>
                 <br/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quia iste dolorem explicabo, odit impedit adipisci iure necessitatibus! Id, quidem dicta. Nostrum adipisci porro est eligendi reiciendis nesciunt vitae facere.</p>
            </div>


               <div className= {styles.AdminCard}>
                <h2>CodingHunger</h2>
                  <br/>
                <p style={{color:"blue"}}>mashhood@gmail.com</p>
                   <br/>
                <h3>Score: 50%</h3>
                 <br/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quia iste dolorem explicabo, odit impedit adipisci iure necessitatibus! Id, quidem dicta. Nostrum adipisci porro est eligendi reiciendis nesciunt vitae facere.</p>
            </div>



               <div className= {styles.AdminCard}>
                <h2>CodingHunger</h2>
                  <br/>
                <p style={{color:"blue"}}>mashhood@gmail.com</p>
                   <br/>
                <h3>Score: 50%</h3>
                 <br/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quia iste dolorem explicabo, odit impedit adipisci iure necessitatibus! Id, quidem dicta. Nostrum adipisci porro est eligendi reiciendis nesciunt vitae facere.</p>
            </div>




               <div className= {styles.AdminCard}>
                <h2>CodingHunger</h2>
                  <br/>
                <p style={{color:"blue"}}>mashhood@gmail.com</p>
                   <br/>
                <h3>Score: 50%</h3>
                 <br/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quia iste dolorem explicabo, odit impedit adipisci iure necessitatibus! Id, quidem dicta. Nostrum adipisci porro est eligendi reiciendis nesciunt vitae facere.</p>
            </div>



               <div className= {styles.AdminCard}>
                <h2>CodingHunger</h2>
                  <br/>
                <p style={{color:"blue"}}>mashhood@gmail.com</p>
                   <br/>
                <h3>Score: 50%</h3>
                 <br/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quia iste dolorem explicabo, odit impedit adipisci iure necessitatibus! Id, quidem dicta. Nostrum adipisci porro est eligendi reiciendis nesciunt vitae facere.</p>
            </div>
            







        </div>







    </div>
  )
}

export default WithAuthHOC(Admin)