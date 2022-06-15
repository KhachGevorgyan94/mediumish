import Universal from "../Universal/Universal"
import Photo from "../Pphoto/Pphoto";
import '../Blok/Blok.css'

function Blok(){


    let arr = [
        {
            // id:Math.random() * 10,
            name:'Steve'
        },{
            // id:Math.random() * 10,
            name:'Jane'
        },
          { 
            // id:Math.random() * 10,
                name:'Mary'
          },
        {
            // id:Math.random() * 10,
            name:'Sal'
        }
    ];

    let one = arr.filter((el)=>el.name === 'Steve').map((val, index) =>{
        return <p key={index}>{val.name}</p>
    }) 
    let two = arr.filter((el)=>el.name === 'Jane').map((val, index) =>{
        return <p key={index}>{val.name}</p>
    }) 
    let three = arr.filter((el)=>el.name === 'Mary').map((val, index) =>{
        return <p key={index}>{val.name}</p>
    }) 
    let four = arr.filter((el)=>el.name === 'Sal').map((val, index) =>{
        return <p key={index}>{val.name}</p>
    }) 

    return(
        <div className="blok">
            <div className="title">
                <h2 className="h2">Mediumish</h2>
                <p className="boot">Bootstrap theme, medium style, simply perfect for bloggers</p>
                <p className="p3">Featured</p>

            </div>

        <div className="lists">
            <div className="list1">
        <Universal  piccclassName='i1' name={one}  className='universal' h11='Were living some strange times' p1='This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'/> 
                      <Universal piccclassName='i2' name={three}  className='universal sec' h11='Dreaming of Las Vegas Crazyness' p1='This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'/>
            </div>
            
            <div className="list2">
                    <Universal piccclassName='i3' name={two}  className='universal' h11='The beauty of this world is in your heart' p1='This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'/>
                    <Universal  piccclassName='i4' name={four}  className='universal sec' h11='San Francisco at its best view in all seasons' p1='This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'/>
            </div>
        </div>



        </div>
    )
}
export default Blok