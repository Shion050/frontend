
export default function Card() {
    return (
      <div className="container-fluid">
        <div className="row">
            <div className="col-md-12 text_center mb-4"></div>
            <div className="col-md-12 text_center mb-4">
                <h3 className="text-4xl text-center font-serif text-green-600"> Our Project</h3>
            </div>
        </div>  
        <div className="row">
        <div className="col-md-4 mb-4">
            <div className="card" style={{width: '18rem'}}>
                <img src="/images/card/G2.jpg" className="card-img-top" alt="..."  width={1200} />
                <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>

        </div>
        <div className="col-md-4 mb-4">
            <div className="card" style={{width: '18rem'}}>
                <img src="/images/card/G2.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
        <div className="col-md-4 mb-4">
            <div className="card" style={{width: '18rem'}}>
                <img src="/images/card/G2.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>

        </div>
      </div>

    );
}