import React from 'react';
import {data} from "../restApi.json";

function Qualities() {
    return(
        <>
            <section className="qualities" id="qualities">
                <div className="container">
                    {
                        data[0].ourQualities.map((element) => {
                            return(
                                <div className="card" key={element.id}>
                                    <img src={element.image} alt={element.title} />
                                    <p className="title">{element.title}</p>
                                    <p className="desctiption">{element.description}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    );
};

export default Qualities;
