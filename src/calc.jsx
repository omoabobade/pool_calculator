'use strict';

const e = React.createElement;

const poolShapes = [
  {name: "Kidney Shape", value:1},
  {name: "Circular Shape", value:2},
  {name: "Rectangular", value:3},
]

const poolDepth = [
  {name: "3-5-3", value:1},
  {name: "3-4-5", value:2},
  {name: "4-5-6", value:3},
]
const cleaningSystem= [
  {name: "Infloor", value:1},
  {name: "Vacuum System", value:2}
]
const waterFeatureItems=[
  {name : "Scupper", value:1},
  {name: "Spillways",value:2},
  {name: "Sheer Descent", value:3}
]
const firePot = [
  {name:1, value:1},
  {name:2, value:2}
]

const poolLight = [
  {name:"LED Pool light", value:1},
  {name:"Halogen", value:2},
  {name:"Incandescent", value:3},

]

const interiorPoolFinish = [
  {name:"Plaster", value:1},
  {name:"Pebble", value:2},
  {name:"Tile", value:3},
]

const chlorination = [
  {name: "Salt system", value:1},
  {name: "Traditional Chlorination", value:2},
  {name: "Ozone", value:3}
]

const coping = [
  {name: "Pavers", value:1},
  {name: "Travertine", value:2}
]

const backBeam = [
  {name: "No", value:1},
  {name: "Yes", value:2}
]

const spa = [
  {name: "6ftx6ft", value:1},
  {name: "8ftx8ft", value:2},
  {name: "10ftx10ft", value:3},

]
class Estimator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      data:{},
      post:{},
      length: "",
      width:"",
      diameter:"",
      raisedBackBeam:false,
      columns: false,
      waterFeatures: false,
      coping:"",
      chlorinaton:"",
      interiorPoolFinish:"",
      poolLight:"",
      poolDepth:"",
      poolShapes:"",
      firePot:"",
      waterFeatures:"",
      cleaningSystem:"",
      costing:{},
      showModal:false,
      imgsrc:"http://tioenai.com/poolkaddy/wp-content/uploads/2018/12/rectangular.png",
      uploadPhoto: false
     };
     this.handleChange = this.handleChange.bind(this);
     this.getPoolShape = this.getPoolShape.bind(this);
  }

  handleChange (e) {
    let data = this.state.data;
    data[[e.target.name]] = e.target.value;
    this.setState({ 
      data: data
    });
    this.doCalc();
  }

  getPoolShape(value){
    let poolShape = poolShapes.filter((item)=>{
      if(item.value == value){
        return item.name;
      }
    })
    return poolShape[0];
  }
  
  parseNum(x) {
    return Number.parseFloat(x).toFixed(2);
  }

  doCalc = e=>{
    let area= 0;
    let interiorarea = 0;
    let primesurfacearea= 0;
    let perimeter = 0;
    let cost = 0;
    let additionalCost = 0;
    let excavationCost = 7.5;
    const electricalRuns = 7;
    const shotCrete = 6.2;
    const pcup = 400;
    const cityPermit = 1.7;
    let costing = {};
    let post = {};
    switch(this.state.data.poolShape){
      case "1":
          if((typeof this.state.data.a != undefined) && (typeof this.state.data.b != undefined) && (typeof this.state.data.length != undefined)){
            const a = this.state.data.a;
            const b = this.state.data.b;
            const length = this.state.data.length;
            area = (a+b)*length*0.45;
            primesurfacearea = (a-1)+(b-1)*(length-1)*0.45;
            this.setState({imgsrc:"http://tioenai.com/poolkaddy/wp-content/uploads/2018/12/kidney.png"})
          }
        break;
      case "2":
        if(typeof this.state.data.radius != undefined){
          const radius = this.state.data.radius;
          area = (22/7)*radius;
          primesurfacearea = (22/7)*(radius-1)
          this.setState({imgsrc:"http://tioenai.com/poolkaddy/wp-content/uploads/2018/12/oval.png"})
        }
        break;
      case "3":
          if((typeof this.state.data.length != undefined) && (typeof this.state.data.width != undefined)){
            const length = this.state.data.length;
            const width = this.state.data.width;
            area = (length*width);
            perimeter = (2*length)+(2*width);
            primesurfacearea = (length-1)*(width-1);
            excavationCost = 8.2;
            this.setState({imgsrc:"http://tioenai.com/poolkaddy/wp-content/uploads/2018/12/rectangular.png"})
          }
        break;
    }
    post.poolShape = poolShapes[this.state.data.poolShape];
    let baseCost = 0;/* 400+(cityPermit*area)+(excavationCost*area)+
    (electricalRuns*area)+(shotCrete*area)+pcup; */
    if(area <= 300){
      baseCost = 18188;
    }else if(area <= 350 && area >= 301){
      baseCost  = 21220;
    }else if(area <= 400 && area >=351){
      baseCost = 24250;
    }else if(area <= 450 && area >=401){
      baseCost = 27281;
    }else if(area <= 500 && area >=451){
      baseCost = 30313;
    }else if(area <=550 && area >= 501){
      baseCost = 33344;
    }else if(area <= 600 && area >=551){
      baseCost = 36375;
    }else if(area <= 650 && area >= 601){
      baseCost= 39406;
    }else if(area <=700 && area >=651){
      baseCost=42438
    }else if(area <=750 && area>=701){
      baseCost=45469
    }else if(area<=800 && area >=751){
      baseCost=48500
    }else if(area<=850 && area>=801){
      baseCost=51531
    }else if(area<=900 && area>=851){
      baseCost=54563
    }else if(area<=950 && area>=901){
      baseCost=57594
    }else if(area<=1000 && area>=951){
      baseCost = 60625
    }else if(area > 1000){
      alert("This pool area selected is an industrial size, kindly contact us to qet a quote.");
      return;
    }

    if(this.state.data.cleaningSystem == 1){
      additionalCost = (7*area)+2500;
      costing.cleaningSystem = additionalCost;
      post.cleaningSystem = cleaningSystem[this.state.data.cleaningSystem];
    }else if(this.state.data.cleaningSystem == 2){
      additionalCost = 500;
      costing.cleaningSystem = additionalCost;
      post.cleaningSystem = cleaningSystem[this.state.data.cleaningSystem];
    }

    if(this.state.data.raisedBackBeam == 2){
      const backBeam = (3.25*area)
      additionalCost = additionalCost+backBeam;
      costing.backBeam = backBeam;
      post.raisedBackBeam = backBeam[this.state.data.raisedBackBeam];
    }else if(this.state.data.raisedBackBeam == 1){
      const backBeam = (2.5*area);
      additionalCost = additionalCost+backBeam;
      costing.backBeam = backBeam;
      post.raisedBackBeam = backBeam[this.state.data.raisedBackBeam];
    }

    if(this.state.data.columns){
      const columns = (100*this.state.data.columns);
      additionalCost = additionalCost+columns;
      costing.columns = columns;
      post.columns = this.state.data.columns;
    }

    if(this.state.data.waterFeatures){
        let wf =this.state.data.waterFeatures;
        if(wf ==1){
          additionalCost = additionalCost+1500;
          costing.waterFeatures = 1500
        }else if(wf ==2){
          additionalCost = additionalCost+1800;
          costing.waterFeatures = 1800
        }else if(wf == 3){
          additionalCost = additionalCost+2200;
          costing.waterFeatures = 2200
        }
        post.waterFeatures = waterFeatureItems[this.state.data.waterFeatures];
    }

    if(this.state.data.firePot){
      const fp = this.state.data.firePot;
      if(fp == 1){
        additionalCost = additionalCost+1400;
        costing.firePot = 1400
      }else if(fp == 2){
        additionalCost = additionalCost+2500;
        costing.firePot = 2500
      }
      post.firePot = firePot[this.state.data.firePot];
    }

    if(this.state.data.poolLight){
      const pl = this.state.data.poolLight;
      if(pl == 1){
        additionalCost  = additionalCost+750
        costing.poolLight = 750
      }else if(pl == 2){
        additionalCost = additionalCost+300
        costing.poolLight = 300
      }else if(pl == 3){
        additionalCost = additionalCost+250
        costing.poolLight = 250
      }
      post.poolLight = poolLight[this.state.data.poolLight]
    }

    if(this.state.data.interiorPoolFinish){
      const pf = this.state.data.interiorPoolFinish;
      let interiorPoolFinish = 0
      if(pf == 1){
        interiorPoolFinish = (3.5*area);
        additionalCost = interiorPoolFinish+additionalCost
      }else if(pf == 2){
        interiorPoolFinish = (5.5*area);
        additionalCost = interiorPoolFinish+additionalCost
      }else if(pf ==3){
        interiorPoolFinish = (15*area);
        additionalCost = interiorPoolFinish+additionalCost
      }
      costing.interiorPoolFinish = interiorPoolFinish;
      post.interiorPoolFinish = interiorPoolFinish[this.state.data.interiorPoolFinish];
    }

    if(this.state.data.chlorination){
      const chlo = this.state.data.chlorination;
      let chlorination = 0;
      if(chlo == 1){
        additionalCost = additionalCost+2400
        chlorination = 2400;
      }else if(chlo == 2){
        additionalCost = additionalCost+300
        chlorination = 300
      }else if(chlo == 3){
        additionalCost = additionalCost+1500
        chlorination = 1500
      }
      costing.chlorination = chlorination;
      post.chlorination = chlorination[this.state.data.chlorination];
    }

    if(this.state.data.coping){
      const coping = this.state.data.coping;
      let copingCost = 0;
      if(coping == 1){
        copingCost = (10*primesurfacearea);
        additionalCost = additionalCost + copingCost
      }else if(coping == 2){
        copingCost = (30*primesurfacearea)
        additionalCost = additionalCost + copingCost
      }
      costing.coping = copingCost;
      post.coping = coping[this.state.data.coping];
    }

    if(this.state.data.spa){
      const spa = this.state.data.spa
      const spaCost= (spa==1)? 6000 : (spa==2)? 8000 : (spa==3)? 10000:"";
      additionalCost = additionalCost+spaCost
      costing.spa = spaCost;
      post.spa = spa[this.state.data.spa];
    }
    cost = additionalCost + baseCost;
    const poolShape = this.getPoolShape(this.state.data.poolShape);
    this.setState({cost, area, costing, poolShapeName:poolShape.name});
  }

  doSubscription(id,email){
    const mailBody = this.parseMailBody(id, email);
    fetch(
      window.location.href, {
        headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}, 
        method: "POST", body: JSON.stringify({body: mailBody})
      }
    ).then(
      function(res){ 
        this.setState({showModal:false})
      }
    ).catch(
      function(res){ console.log(res) }
    )
  }

  parseMailBody = (id, email) =>{
    let htmlEmail = "<p>A new Client with email <b>"+email+"</b> just subscribed with transaction Id <b>"+id+"</b>. Find the pool details below : </p><p> Pool Shape :"+this.state.post.poolShape+"</p>";
    htmlEmail =+ "<p> Pool Depth : "+this.state.post.poolDepth+"</p><p>Cleaning System : "+this.state.post.cleaningSystem+"</p><p>Raised Back Beam : "+this.state.post.raisedBackBeam+"</p>"
    htmlEmail =+ "<p> Water Features : "+this.state.post.waterFeatures+"</p><p> Columns : "+this.state.post.columns+"</p><p> Fire Pot"+this.state.post.firePot+"</p>"
    htmlEmail =+ "<p> Pool Lighting : "+this.state.post.poolLight+"</p><p>Interior Pool Finishing : "+this.state.post.interiorPoolFinish+"</p><p> Chlorination:"+this.state.post.chlorination+"</p>";
    htmlEmail =+ "<p>Coping : "+this.state.post.coping+"</p>";
    return htmlEmail
  }

  render() {
    let env = "sandbox";
    let client = {
      sandbox:    'Ac8UHFXqHvz_toL1a2wNRllVHfHMhVFQYFVTcLhMZHVtcmgeYKPk011lbWaiGZoObzyocefFaBSZG6oB', // from https://developer.paypal.com/developer/applications/
      production: 'xxxxxxxxx'
    };

    let pay_option_1 = (data, actions) => {
      return actions.payment.create({
        transactions: [
            {
                amount: {
                    total: '1000.00',
                    currency: 'USD'
                }
            }
        ]
      });    
    };

    let pay_option_2 = (data, actions) => {
      return actions.payment.create({
        transactions: [
            {
                amount: {
                    total: '2000.00',
                    currency: 'USD'
                }
            }
        ]
      });    
    };

    let onAuthorize = (data, actions) => {
      return actions.payment.get().then(function (paymentDetails) {
        let payer = data.payer
            return actions.payment.execute().then(()=> {
                // Show a success page to the buyer
                alert("Payment Successful");
                let email = payer.payer_info.email;
                this.doSubscription(data.id, email);
            });
      });   
    };
    let PayPalButton = paypal.Button.driver('react', { React, ReactDOM });
    return (
    <main role="main" className="container">
      <div className="row">
        <div className="col-md-4 order-md-2 mb-4">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Estimator</span>
          </h4>
          <ul className="list-group mb-3">
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 className="my-0">Area</h6>
                <small className="text-muted">Pool Shape : {this.state.poolShapeName}</small>
              </div>
              <span className="text-muted">{this.parseNum(this.state.area)} sq.ft</span>
            </li>
          {
            (this.state.costing.cleaningSystem)?
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <small className="text-muted">Cleaning System</small>
              </div>
              <span className="text-muted">{this.parseNum(this.state.costing.cleaningSystem)}</span>
            </li>
            : ""
          }
          {
            (this.state.costing.backBeam)?
            <li className="list-group-item d-flex justify-content-between bg-light">
              <div className="text-success">
                <small>Raised Back Beam</small>
              </div>
              <span className="text-success">{this.parseNum(this.state.costing.backBeam)}</span>
            </li>
            : ""
          }
          {
            (this.state.costing.columns)?
            <li className="list-group-item d-flex justify-content-between bg-light">
              <div className="text-success">
                <small>Columns</small>
              </div>
              <span className="text-success">{this.parseNum(this.state.costing.columns)}</span>
            </li>
            : ""
          }
          {
            (this.state.costing.waterFeatures)?
            <li className="list-group-item d-flex justify-content-between bg-light">
              <div className="text-success">
                <small>Water Features</small>
              </div>
              <span className="text-success">{this.parseNum(this.state.costing.waterFeatures)}</span>
            </li>
            : ""
          }
          {
            (this.state.costing.firePot)?
            <li className="list-group-item d-flex justify-content-between bg-light">
              <div className="text-success">
                <small>Fire Pot</small>
              </div>
              <span className="text-success">{this.parseNum(this.state.costing.firePot)}</span>
            </li>
            : ""
          }
          {
            (this.state.costing.poolLight)?
            <li className="list-group-item d-flex justify-content-between bg-light">
              <div className="text-success">
                <small>Pool Lightening</small>
              </div>
              <span className="text-success">{this.parseNum(this.state.costing.poolLight)}</span>
            </li>
            : ""
          }
          {
            (this.state.costing.interiorPoolFinish)?
            <li className="list-group-item d-flex justify-content-between bg-light">
              <div className="text-success">
                <small>Interior Pool Finish</small>
              </div>
              <span className="text-success">{this.parseNum(this.state.costing.interiorPoolFinish)}</span>
            </li>
            : ""
          }
          {
            (this.state.costing.spa)?
            <li className="list-group-item d-flex justify-content-between bg-light">
              <div className="text-success">
                <small>In-Ground Spa</small>
              </div>
              <span className="text-success">{this.parseNum(this.state.costing.spa)}</span>
            </li>
            : ""
          }
            <li className="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>{this.parseNum(this.state.cost)}</strong>
            </li>
            <li className="list-group-item d-flex justify-content-between bg-light">
              <button onClick={(e)=>{ (this.state.cost)?this.setState({showModal:true}): ""}}>Click to send quote</button>
            </li>
          </ul>
        </div>
        <div className="col-md-8 order-md-1">
          <form>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="poolShape">Pool Shape</label>
              <select id="poolShape" name="poolShape" className="form-control" onChange={this.handleChange}>
                <option defaultValue>Choose Pool Shape...</option>
                  {
                    poolShapes.map((v, i)=>{
                      return (<option value={v.value} key={i}>{v.name}</option>)
                    })
                  }
              </select>
            </div>
            <div className="form-group col-md-4">
            <img src={this.state.imgsrc} style={{width:"100%"}}/>
            </div>
          {
            (this.state.data.poolShape)?
            <div className="form-group col-md-4">
              <label htmlFor="inputState">Dimension</label>
              {
                (this.state.data.poolShape == 1)? 
                <div className="form-row">
                  <div className="col">
                    <label htmlFor="inputState">A (ft)</label>
                    <input type="text" className="form-control" name="a" onBlur={this.handleChange} />
                  </div>
                  <div className="col">
                    <label htmlFor="inputState">B (ft)</label>
                    <input type="text" className="form-control" name="b" onBlur={this.handleChange} />
                  </div>
                  <div className="col">
                    <label htmlFor="inputState">Length (ft)</label>
                    <input type="text" className="form-control"  name="length" onBlur={this.handleChange} />
                  </div>
                </div>
                : (this.state.data.poolShape == 2)?
                <div className="form-row">
                  <div className="col">
                    <label htmlFor="inputState">Radius (ft)</label>
                    <input type="text" className="form-control"  name="radius" onBlur={this.handleChange} />
                  </div>
                </div>
                :
              <div className="form-row">
                <div className="col">
                  <label htmlFor="inputState">Length (ft)</label>
                  <input type="text" className="form-control" name="lenght" onBlur={this.handleChange} />
                </div>
                <div className="col">
                  <label htmlFor="inputState">Width (ft)</label>
                  <input type="text" className="form-control" name="width" onBlur={this.handleChange}/>
                </div>
              </div>
              }
            </div>: ""
          }
          </div>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="inputState">Pool Depth</label>
              <select id="poolDepth" name="poolDepth" className="form-control" onChange={this.handleChange}>
                <option defaultValue>Choose...</option>
                {
                    poolDepth.map((v, i)=>{
                      return (<option value={v.value} key={i}>{v.name}</option>)
                    })
                }
              </select>
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputState">Cleaning System</label>
              <select id="cleaningSystem" name="cleaningSystem" className="form-control" onChange={this.handleChange}>
                <option defaultValue>Choose...</option>
                {
                    cleaningSystem.map((v, i)=>{
                      return (<option value={v.value} key={i}>{v.name}</option>)
                    })
                }
              </select>
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputState">Chlorination</label>
              <select id="chlorination" name="chlorination" className="form-control" onChange={this.handleChange}>
                <option defaultValue>Choose...</option>
                {
                    chlorination.map((v, i)=>{
                      return (<option value={v.value} key={i}>{v.name}</option>)
                    })
                }
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-4">
              <div className="form-row align-items-center">
                <div className="col-auto my-1">
                  <div className="custom-control custom-checkbox mr-sm-2">
                    <input type="checkbox" className="custom-control-input" onChange={()=>{ this.setState({firePot:!this.state.firePot})}} id="customFirePot"/>
                    <label className="custom-control-label" htmlFor="customFirePot">Fire Pot?</label> 
                    <img src="https://img.icons8.com/material-rounded/24/000000/about.png"  className="icon-info" onClick={()=>this.setState({showFirePot:!this.state.showFirePot})}/>
                    { this.state.showFirePot &&
                    <div class="modal" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" style={{paddingRight: "15px", display: "block"}}>
                      <div class="modal-dialog modal-dialog-centered" role="document" style={{maxWidth:"fit-content"}}>
                        <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalCenterTitle">Fire Pot Preview</h5>
                              <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={()=>this.setState({showFirePot:!this.state.showFirePot})}>
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div class="modal-body">
                              <div class="container">
                                <img src="http://tioenai.com/poolkaddy/wp-content/uploads/2019/03/FP.jpg"/>
                              </div>
                            </div>
                        </div>
                      </div>
                    </div>
                    }
                  </div>
                </div>
                {
                  (this.state.firePot)?
                <div className="col-auto my-1">
                  <select id="firePot" name="firePot" className="form-control" onChange={this.handleChange}>
                    <option defaultValue>Choose...</option>
                    {
                        firePot.map((v, i)=>{
                          return (<option value={v.value} key={i}>{v.name}</option>)
                        })
                      }
                  </select>
                </div>
                : ""
                }
              </div>
            </div>
            <div className="form-group col-md-4">
              <div className="form-row align-items-center">
                <div className="col-auto my-1">
                  <div className="custom-control custom-checkbox mr-sm-2">
                    <input type="checkbox" className="custom-control-input" onChange={()=>{ this.setState({backBeam:!this.state.backBeam})}} id="custombackbeam"/>
                    <label className="custom-control-label" htmlFor="custombackbeam">Raised Back Beam?</label>
                    <img src="https://img.icons8.com/material-rounded/24/000000/about.png" className="icon-info" onClick={()=>this.setState({showRaiseBackBeam:!this.state.showRaiseBackBeam})}/>
                    { this.state.showRaiseBackBeam &&
                    <div class="modal" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" style={{paddingRight: "15px", display: "block"}}>
                      <div class="modal-dialog modal-dialog-centered" role="document" style={{maxWidth:"fit-content"}}>
                      <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalCenterTitle">Raised Back Beam Preview</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={()=>this.setState({showRaiseBackBeam:!this.state.showRaiseBackBeam})}>
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body">
                            <div class="container">
                              <img src="http://tioenai.com/poolkaddy/wp-content/uploads/2019/03/RBB.jpg"/>
                            </div>
                          </div>
                      </div>
                    </div>
                    </div>
                    }
                  </div>
                </div>
                {
                  (this.state.backBeam)?
                <div className="col-auto my-1">
                  <select id="raisedBackBeam" name="raisedBackBeam" className="form-control" onChange={this.handleChange}>
                    <option defaultValue>Choose...</option>
                    {
                        backBeam.map((v, i)=>{
                          return (<option value={v.value} key={i}>{v.name}</option>)
                        })
                      }
                  </select>
                </div>
                : ""
                }
              </div>
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputState">In-ground SPA</label>
              <select id="cleaningSystem" name="spa" className="form-control" onChange={this.handleChange}>
                <option defaultValue>Choose...</option>
                <option >None</option>
                {
                    spa.map((v, i)=>{
                      return (<option value={v.value} key={i}>{v.name}</option>)
                    })
                }
              </select>
            </div>
          </div>
          <div className="form-row">
          <div className="form-group col-md-4">
              <div className="form-row align-items-center">
                <div className="col-auto my-1">
                  <div className="custom-control custom-checkbox mr-sm-2">
                    <input type="checkbox" className="custom-control-input" onChange={()=>{ this.setState({poolLight:!this.state.poolLight})}} id="customPoolLighting"/>
                    <label className="custom-control-label" htmlFor="customPoolLighting">Pool Lightening?</label> 
                    <img src="https://img.icons8.com/material-rounded/24/000000/about.png"  className="icon-info" onClick={()=>this.setState({showPoolLight:!this.state.showPoolLight})}/>
                    { this.state.showPoolLight &&
                    <div class="modal" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" style={{paddingRight: "15px", display: "block"}}>
                      <div class="modal-dialog modal-dialog-centered" role="document" style={{maxWidth:"fit-content"}}>
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalCenterTitle">Pool Lightening Preview</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={()=>this.setState({showPoolLight:!this.state.showPoolLight})}>
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body">
                            <div class="container">
                              <img src="http://tioenai.com/poolkaddy/wp-content/uploads/2019/03/Lightening.jpeg" className="info-display"/>
                            </div>
                          </div>
                        </div>
                    </div>
                    </div>
                    }
                  </div>
                </div>
                {
                  (this.state.poolLight)?
                <div className="col-auto my-1">
                  <select id="poolLight" name="poolLight" className="form-control" onChange={this.handleChange}>
                      <option defaultValue>Choose...</option>
                      {
                        poolLight.map((v, i)=>{
                            return (<option value={v.value} key={i}>{v.name}</option>)
                        })
                      }
                    </select>
                </div>
                : ""
                }
              </div>
            </div>
            <div className="form-group col-md-4">
              <div className="form-row align-items-center">
                <div className="col-auto my-1">
                  <div className="custom-control custom-checkbox mr-sm-2">
                    <input type="checkbox" className="custom-control-input" onChange={()=>{ this.setState({columns:!this.state.columns})}} id="customControlAutosizing"/>
                    <label className="custom-control-label" htmlFor="customControlAutosizing">Columns?</label>
                    <img src="https://img.icons8.com/material-rounded/24/000000/about.png"  className="icon-info" onClick={()=>this.setState({showColumn:!this.state.showColumn})}/>
                    { this.state.showColumn &&
                    <div class="modal" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" style={{paddingRight: "15px", display: "block"}}>
                      <div class="modal-dialog modal-dialog-centered" role="document" style={{maxWidth:"fit-content"}}>
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalCenterTitle">Column Preview</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={()=>this.setState({showColumn:!this.state.showColumn})}>
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body">
                            <div class="container">
                              <img src="http://tioenai.com/poolkaddy/wp-content/uploads/2019/03/PLC.jpg" className="info-display"/>
                            </div>
                          </div>
                        </div>
                    </div>
                    </div>
                    }
                  </div>
                </div>
                {
                  (this.state.columns)?
                <div className="col-auto my-1">
                  <label className="mr-sm-2 sr-only" htmlFor="columns">Preference</label>
                  <select className="custom-select mr-sm-2" name="columns" id="columns" onChange={this.handleChange}>
                    <option defaultValue>Choose how many</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
                : ""
                }
              </div>
            </div>
            <div className="form-group col-md-4">
              <div className="form-row align-items-center">
                <div className="col-auto my-1">
                  <div className="custom-control custom-checkbox mr-sm-2">
                    <input type="checkbox" className="custom-control-input" id="cwf" onChange={()=>{ this.setState({waterFeatures:!this.state.waterFeatures})}}/>
                    <label className="custom-control-label" htmlFor="cwf">Water Features?</label>
                  </div>
                </div>
                {
                  (this.state.waterFeatures)?
                    <div className="col-auto my-1">
                    <label className="mr-sm-2 sr-only" htmlFor="preference">Preference</label>
                      <select id="waterFeatures" name="waterFeatures" className="form-control" onChange={this.handleChange}>
                        <option defaultValue>Choose water features</option>
                          {
                            waterFeatureItems.map((v, i)=>{
                              return (<option value={v.value} key={i}>{v.name}</option>)
                            })
                          }
                      </select>
                    </div>
                    : ""
                }
              </div>
            </div>
          
            <div className="form-group col-md-12">
              <div className="form-row align-items-center">
                <div className="col-auto my-1">
                  <div className="custom-control custom-checkbox mr-sm-2">
                    <input type="checkbox" className="custom-control-input" id="uploadPhoto" onChange={()=>{ this.setState({uploadPhoto:!this.state.uploadPhoto})}}/>
                    <label className="custom-control-label" htmlFor="uploadPhoto">Do you have the desired design or sketch of the pool?</label>
                  </div>
                </div>
                {
                  (this.state.uploadPhoto) &&
                    <div className="col-auto my-1">
                      <label className="mr-sm-2" >Upload Desired Design</label>
                      <input type="file" className="custom-control" id="desiredDesign" />
                    </div>
                }
              </div>
            </div>
          </div>
        </form>
        </div>
      </div>
      {
            (this.state.showModal)?
            <div style={{fontSize:"11px"}}>
            <div class="modal" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" style={{paddingRight: "15px", display: "block"}}>
              <div class="modal-dialog modal-dialog-centered" role="document" style={{width:"80%", maxWidth:"100%"}}>
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenterTitle">Kindly choose a subscription</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={()=>{this.setState({showModal:false})}}>
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <div class="container">
                      <div class="card-deck mb-3 text-center">
                        <div class="card mb-4 shadow-sm">
                          <div class="card-header">
                            <h4 class="my-0 font-weight-normal">Silver</h4>
                          </div>
                          <div class="card-body">
                            <h1 class="card-title pricing-card-title">$1,000</h1>
                            <ul class="list-unstyled mt-3 mb-4" style={{textAlign:"left"}}>
                              <li>6 Standard Pool Designs Pool Specification List Drawn to Industry Scale 1/8″.</li>
                              <li>Planning Checklist</li>
                              <li>Standard Structural Engineering Plan wet sealed by engineer. (If applicable by municipality)</li>
                            </ul>
                            <PayPalButton env={env}
                                  client={client}
                                  payment={pay_option_1}
                                  commit={true}
                                  onAuthorize={onAuthorize} />
                          </div>
                        </div>
                        <div class="card mb-4 shadow-sm">
                          <div class="card-header">
                            <h4 class="my-0 font-weight-normal">Gold</h4>
                          </div>
                          <div class="card-body">
                            <h1 class="card-title pricing-card-title">$2,000 </h1>
                            <ul class="list-unstyled mt-3 mb-4" style={{textAlign:"left"}}>
                              <li>6 Standard Pool Designs Pool Specification List Drawn to Industry Scale 1/8″.</li>
                              <li>Planning Checklist</li>
                              <li>Custom Pool Design with 2 free revision</li>
                              <li>Pool Sequence/Bid Sheet</li>
                              <li>Construction process Checklist</li>
                              <li>Standard Structural Engineering Plan wet sealed by engineer. (If applicable by municipality)</li>
                              <li>Permit Application & Submittal Check sheet</li>
                              <li>Property Site Plan; complete with City / County details & notes</li>
                              <li>Pool Equipment Spec Sheet w/ Quote</li>
                              <li>In-Floor Cleaner Design (if applicable)</li>
                              <li>Email & Phone Construction Support. Get answers to your construction & bid questions via emails Construction Support. Get answers to your construction & bid questions.</li>
                            </ul>
                            <PayPalButton env={env}
                                  client={client}
                                  payment={pay_option_2}
                                  commit={true}
                                  onAuthorize={onAuthorize} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" onClick={()=>{this.setState({showModal:false})}} data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-backdrop fade show"></div>
            </div>
            : ""
          }
    </main>
      );
  }
}

const domContainer = document.querySelector('#estimator_container');
ReactDOM.render(e(Estimator), domContainer);
