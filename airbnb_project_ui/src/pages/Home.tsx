

const Home = () => {
  return (
    <div className='m-3'>
        <div className='flex flex-row justify-between mx-16 my-5'>
            <div className='flex'>
                <h1 className='text-2xl font-bold' >Waves Homes and moves</h1>
            </div>
            <div>
                <ul className='hidden md:flex md:gap-20 xl:gap-28 gap-5 mt-3'>
                    <li className='font-semibold cursor-pointer hover:text-[#899921]'><a href='/'>Home</a></li>
                    <li className='font-semibold cursor-pointer hover:text-[#899921]'><a href='/Booking'>Booking</a></li>
                    <li className='font-semibold cursor-pointer hover:text-[#899921]'><a href='/Airbnb'>Airbnb</a></li>
                    <li className='font-semibold cursor-pointer hover:text-[#899921]'><a href='/Movers'>Movers</a></li>
                    
                </ul>
            </div>
        </div>
        <div>
        <h2 className='my-5 text-2xl font-semi-bold'>Are you travelling to the lakeside city, Kisumu and in need of accomodation?
            the search is over.<br /> Enjoy this executive 3 bedroom fully furnished apartment
            (Airbnb) in Milimani Estate. <br /> Studio Apartments 1,2,3,4 to 5 bedroom units available.
        </h2>
        <h3>Check the airbnbs using the link below</h3>
        <a href="{% url 'airbnb' %}">Airbnbs</a>
        </div>

        <div>
        <h1>Moving soon</h1>
    <h2>We offer quality Mover services for you. Our services include:</h2>
    {/* <ul>
        {% for service in all_services_list %}
          <li>{{ service }}</li>
        {% endfor %}
    </ul> */}
<h3>Our team handles your goods with care ensuring safety and reliability always</h3>
<h4>Talk to us today and get a quotation for FREE</h4>
    <h4>Call: 0768305216 or book a a service using the link below</h4>
    <a href="{% url 'movers_booking' %}">Movers booking</a>
        </div>
    </div>
  )
}

export default Home