import './RecentWork.css';
export default function Recent_work(){
    return (
        <>
            <div className="recentwork_container">
                <div className='recentwork'>
                    <h1 className='recentwork_h1'>Recent Work</h1>
                    <p className='recentwork_p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, libero reprehenderit quas aut, accusamus hic nihil repudiandae consequatur repellat magnam sapiente eos facilis quam iure quis! Facilis, accusamus. Omnis, libero.</p>
                </div>
                <div className='recentwork_flex'>
                   <div  className='left'><span>&lt;</span></div> 
                    <div>
                        <img className='recentwork_img' src="management-system.jpeg" alt="" />
                        <h2 className='recentwork_h2'>Work name here</h2>
                        <p className='recentwork_p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est doloribus nostrum architecto necessitatibus quae, recusandae sunt in!</p>
                        <div className='knowmore'>Know more </div>
                    </div>
                    <div>
                        <img className='recentwork_img' src="new.jpg" alt="" />
                        <h2 className='recentwork_h2'>Work name here</h2>
                        <p className='recentwork_p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est doloribus nostrum architecto necessitatibus quae, recusandae sunt in! </p>
                        <div className='knowmore'>Know more </div>
                    </div>
                    <div  className='left'><span>&gt;</span></div> 
                </div>

            </div>
        
        </>
    );
}