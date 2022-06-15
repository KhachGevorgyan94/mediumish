import Pphoto from "../Pphoto/Pphoto"


function Universal(props){
   
    



 

    return(
        <div className={props.className}>
              <Pphoto bacclassName={props.piccclassName} />
              <div className="info">
                <div className="h1">{props.h11}</div>
                <p className="p1">{props.p1}</p>
                <div className="arr-info" >
                <div className="photo">
                    <img  src={props.user_pic}/>

                </div>
                <div className="name-age">
                    <div className="name">{props.name}</div>
                    <div className="age"> 22 July 20176 min read</div>
                </div>
                {/* <div className="log">
                    

                </div> */}

            </div>
            </div>
            

        </div>
    )
}
export default Universal