import { useState } from "react";

import { peopleList } from "../utils/peopleData";


const PeopleList = () =>{

    const [peoples, setPeoples] = useState(peopleList);

    const clearAll = () =>{
        setPeoples([]);
    }

    return (
        <div className="container profile-page">
            <h1 className="text-center">{peoples.length} birthdays today</h1>
            <div className="row">

                {peoples.map((people)=>{

                    return (
                        <div className="col-12" key={people.id}>
                            <div className="card profile-header">
                                <div className="body">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-4 col-12">
                                            <div className="profile-image float-md-right">
                                                <img src={people.profile_image} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-8 col-md-8 col-12">
                                            <h4 className="m-t-0 m-b-0"><strong>{people.first_name}</strong> {people.last_name}</h4>
                                            <span className="job_post">Job Title: {people.job_title}</span>
                                            <p style={{marginBottom:'0'}}>Street Address: {people.address}</p>
                                            <p>Age: {people.age}</p>
                                        </div>                
                                    </div>
                                </div>                    
                            </div>
                        </div>
                    )
                })}
            </div>
            <button type="button" className="btn btn-primary btn-block" onClick={clearAll}>Clear All</button>
        </div>
    )

}

export default PeopleList;