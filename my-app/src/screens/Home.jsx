import useFetch from '../customHooks/useFetch'
import { useNavigate } from 'react-router'

function Home() {

    const navigate = useNavigate();


    const data = useFetch("https://api.tvmaze.com/search/shows?q=all");

    return (
        <div className='Card'>
            {data != "" && data.map((item) => {
                return (
                    <div key={item.show.id} className='movies'>
                        {/* {console.log(item)} */}

                        <h1>{item.show.name}</h1>
                        <h2>Released: {item.show.premiered} </h2>

                        <img src={item.show.image} alt="" />
                        <h2>Rating: {item.show.rating.average}/10 </h2>

                        <button onClick={() =>
                            navigate("/details")
                        } className='btn' >Show More</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Home 
