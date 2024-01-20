import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Bootgridcard = () => {
    return (
        <div className="container">
        <h1 className='text-center text-danger text-capitalize my-5'> Welcome to card</h1>
            <div className="row">
                <div className="col-sm-4"> <div class="card" style={{width: '18rem'}}>
                    <img src="https://picsum.photos/200/300" class="card-img-top" alt="..." height="200px" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="https://picsum.photos/" class="btn btn-primary">Go somewhere</a>
                        </div>
                </div>  </div>
                <div className="col-sm-4"> <div class="card" style={{width: '18rem'}}>
                    <img src="https://picsum.photos/200/301" class="card-img-top" alt="..." height="200px" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="https://picsum.photos/" class="btn btn-primary" target='blank'>Go somewhere</a>
                        </div>
                </div> </div>
                <div className="col-sm-4"> <div class="card" style={{width: '18rem'}}>
                    <img src="https://picsum.photos/201/300" class="card-img-top" alt="..." height="200px" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="https://picsum.photos/" class="btn btn-primary">Go somewhere</a>
                        </div>
                </div>   </div>
            </div>
        </div>
    );
}

export default Bootgridcard;
