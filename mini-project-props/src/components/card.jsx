import React from 'react'
import { Bookmark } from 'lucide-react'


function Card(props) {

    console.log(props.company)
    return (


        <div className="card">
            <div>  <div className="Top">
                <img src={props.Logo} alt="card" />
                <button>Save <Bookmark size={20} /> </button>
            </div>

                <div className="Mid">
                    <h3>{props.company} <span>{props.postDate}</span></h3>
                    <h2>{props.role}</h2>
                    <div className="tag">
                        <h4 >{props.jobtime}</h4>
                        <h4 >{props.jobrole}</h4>
                    </div>

                </div></div>
            <div className="bottom">
                <div>
                    <h3>{props.money}</h3>
                    <p>{props.location}</p>
                </div>
                <div>
                    <button>Apply Now</button>
                </div>

            </div>
        </div>


    )
};

export default Card