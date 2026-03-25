import './Body.css';
import React, { useState } from "react";
export default function Body_section(){
    
    return(
        <>
            <div className='case_studies'>
                <h1 className='case_h1'>Case Studies</h1>
                <p className='case_p'>A software developer is a professional who designs, develops, tests, and maintains computer software and applications. This case study focuses on Vishal Patel, an aspiring software developer who is continuously improving his programming and problem-solving skills.</p>
            </div>
            <div className='about_studies_container'>
                <div className='about_studies'>
                    <div className='tech'>Tech</div>
                        <h2 className='about_studies_h1'>College Management System</h2>
                        <p className='case_p'>A College Management System is a software application designed to manage and automate the daily operations of a college. It helps administrators, teachers, and students handle academic and administrative tasks efficiently. The main purpose of this system is to store and manage college data in an organized and digital way.</p>
                        <div className='read_more'>Read More</div>
                </div>
                <div>
                    <img className='college_img' src="/public/management-system.jpeg" alt="" />
                </div>
            </div>


            <div className='about_studies_container'>
                <div>
                    <img className='college_img' src="/public/management-system.jpeg" alt="" />
                </div>
                <div className='about_studies'>
                    <div className='tech'>Tech</div>
                    <h2 className='about_studies_h1'>News Blog Website Project</h2>
                    <p className='case_p'>A News Vlog Website is an online platform where users can watch, read, and share news through videos and blogs. The main purpose of this project is to provide the latest news, trending topics, and informative content to users in an easy and interactive way.</p>
                    <div className='read_more'>Read More</div>
                    
                </div>
                
            </div>

            
            <div className='about_studies_container'>
                <div className='about_studies'>
                    <div className='tech'>Tech</div>
                        <h2 className='about_studies_h1'>Data Structures and Algorithms (DSA)</h2>
                        <p className='case_p'>Data Structures and Algorithms (DSA) are fundamental concepts in computer science used to organize, manage, and process data efficiently. They help programmers write optimized and efficient programs that can handle large amounts of data and solve complex problems.</p>
                        <div className='read_more'>Read More</div>
                </div>
                <div>
                    <img className='college_img' src="/public/DSA.jpg" alt="" />
                </div>
            </div>
        </>
    );
}