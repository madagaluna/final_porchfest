import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import './finalPorchfest.css'


// ------------------------------------------------------------------------- DATA object of arrays initializing bands ---
const initialBands = [
  {
    name: "Fool’s Gold",
    type: "alt rock",
    time: "12:00 PM",
    location: "122 Cross Street",
	 description: "We are a band of teenagers that want to spread the music of the Beatles and their musicality to our community",
    instaLink: "",
	 image: "/images/Fool's Gold.png",

  },
  { 
	
    name: "Tyler and Jamie",
    type: "rock n roll",
    time: "12:00 PM",
    location: "122 Cross Street",
	  description: "Tyler Tonomura-MacDonald AKA Woodrot, (formerly of Midnight Donut Cult,) and James MacDonald are a father and son duet performing guitar and vocal covers of some of the greatest hits of the last 40 years",
   
	 instaLink: "",
	   image: "/images/Tyler and Jamie.jpeg",

  },
  {
    name: "Blindsided",
    type: "punk",
    time: "5:00 PM",
    location: "134 Dalton Road",
	 description: "Blindsided is a band from the greater Boston area that plays funk, fusion, and some rock. We are new to the Boston music scene, and are excited to start making waves.",
    instaLink:"https://www.instagram.com/reel/DN4EywJFAho/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
	 image: "/images/Blindside.jpg",
 
  },
  {
    name: "Anemoia",
    type: "alt rock",
    time: "3:00 PM",
    location: "122 Cross Street",
	 description: "Indie rock with harmonies",
	  instaLink:"https://www.instagram.com/reel/DNuImS33otX/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    image: "/images/Anemoia.jpeg",

  },
  {
    name: "PaperJam",
    type: "rock n roll",
    time: "2:00 PM",
    location: "134 Dalton Road",
	description: "'Mature' (haha) folks playing blues, classic rock and country: Creedence Clearwater, Stevie Ray Vaughan, Elvis Presley, Rolling Stones, Johnny Rivers, Johnny Cash, ZZ Top etc.",
    instaLink: "https://www.instagram.com/reel/DNjfT2nu5bF/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
	image: "/images/PaperJam.png",

  },
  {
    name: "Redwire",
    type: "brass",
    time: "4:00 PM",
    location: "134 Dalton Road",
	 description: "Redwire is a Newton-based teen hard rock band with originals and some covers @redwire__ ",
	 instaLink: "",
    image: "/images/Redwire.jpg",
  },
  {	
  name: "Surfhenge",
    type: "Surf",
    time: "4:00 PM",
	location: "52 Washington St",
	instaLink: "https://www.instagram.com/reel/DNy7LecwgKP/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
	image: `/images/surfhenge.png`,
  }
];
// ------------------------------------------------------------------------- HEADER ---
function Header()
{
	return (
	<div className='header'>
		

	<Nav />
	</div>
	)
}
// --------------------------------------------------------------------------- NAV ---
function Nav()
{
	return (
		<ul id='main-nav'>
		<li><Link to="/">Home</Link></li>
		<li><Link to="/register">Register</Link></li>
        <li><Link to="/bands">Bands</Link></li>
		<li><Link to="/schedule">Your Schedule</Link></li>
		</ul>
	);
}
// --------------------------------------------------------------------------- PAGES ---
// --------------------------------------------------------------------------- HOME ---
// gave the div two class names cuz I'm too lazy to make ids and it works.
function Home()
{
    return(
	   <div className="page home"> 
      <Header />
      <h1>Home Page</h1>
	  <h2>
		Belmont’s Porchfest is a celebration of community through arts and music performed by your friends and neighbors on porches, in yards, and all around town. Bike to a friend’s house to hear klezmer, wander to jazz trio down the street, or stumble upon a circus show on someone’s front lawn.
<br></br><br></br>Porchfest 2025 featured 

<em> 114 performances on 71 porches</em></h2>
<h3> Check out some of our performers on 
	
	<a href="https://www.facebook.com/BelmontPorchfest/" 
	target="_blank"> FACEBOOK </a>
	 and 
	 <a href="https://www.instagram.com/belmontporchfest/" 
	 target="_blank"> INSTAGRAM </a>.
	
	</h3>


<iframe
width="560"
height="315"
src="https://www.youtube.com/embed/X4uBCUWVXpk?si=pC-_nN8jk6bj0OyE"
title="A Porchfest Journey"
allowFullScreen></iframe>

<h4>Although Porchfest is free, there are costs associated with making it safe, fun, and comfortable.
<br></br><strong>Please consider donating:</strong>
</h4><h5>BE OUR ROCKSTAR! </h5><h2>PayPal</h2>


    </div>
	);
}           



// --------------------------------------------------------------------------- PAGES / REGISTER / SET STATE

function Register({addBand}) { 

	const [name, setName] = useState('');  // don't need to be available elsewhere cuz they are just in the registration form. These values update setBands through newBands, setBands update bands in myApp 
	const[type, setType] = useState("");
	const[time, setTime] = useState("");
	const[location, setLocation] = useState("");
	const[description, setDescription] = useState("");
	const[instaLink, setInstaLink]= useState("");

// --------------------------------------------------------------------------- PAGES / REGISTER 
// --------------------------------------------------------------------------- Event HANDLER	

	function handleSubmit(e) {
		e.preventDefault(); //so the page doesn't refresh

		if(!name.trim() ||  // something in each field or error alert
		!type.trim() ||
		!time.trim() ||
		!location.trim() ||
		!description.trim()
		) 
		{
			alert("Please complete all the fieds");
			return;
		}

		const newBand = { //collects the new (temp) data
			name: name,
			type: type,
			time: time,
			location: location,
			description: description,
			instaLink: instaLink,
		};
		alert("adding band");
		addBand(newBand);  //sends/passes the object back to myApp
		setName("");  // clear form
		setType("");
		setTime("");
		setLocation("");
		setDescription("");
		setInstaLink("");
	}

  // --------------------------------------------------------------------------- PAGES / REGISTER 
// --------------------------------------------------------------------------- FORM
  return (
    <div className="page register">
		<Header />
<div className="logoBckGrnd">
			<img
			src="/spa_game/images/410CommonKidsCopy2.jpg"
			alt="Belmont Porchfest Logo"
			className="commonKids" />
			</div>
      <h1>Registration</h1>


      <div id="centerForm">
	  <form className="form" onSubmit={handleSubmit}>


		<div className="labelBtnGroup">
		<label>Performer Name 
		<input
		value={name}
		onChange={(e) => setName(e.target.value)}
		/>			
</label>
	
	
</div>

<div className="labelBtnGroup">
		<label>Type of Music
			<input
		value={type}
		onChange={(e) => setType(e.target.value)}
		/>
</label>
			
</div>

<div className="labelBtnGroup">
	<label>Performance Time
					<select
		value={time}
		onChange={(e) => setTime(e.target.value)}
		><option value="">Select a time</option>
			<option value="12:00 PM">12:00 PM</option>
			<option value="1:00 PM">1:00 PM</option>
			<option value="2:00 PM">2:00 PM</option>
			<option value="3:00 PM">3:00 PM</option>
			<option value="4:00 PM">4:00 PM</option>
			<option value="5:00 PM">5:00 PM</option>
			</select>
			</label>
			
</div>

<div className="labelBtnGroup">
	<label>Location
					<input
		value={location}
		onChange={(e) => setLocation(e.target.value)}
		/>

			</label>
		
</div>

<div className="labelBtnGroup">
	<label>Description
					<input
		value={description}
		onChange={(e) => setDescription(e.target.value)}
		/>
			</label>			
			</div>


			<div className="labelBtnGroup">
	<label>InstaLink
					<input
		value={instaLink}
		onChange={(e) => setInstaLink(e.target.value)}
		/>
			</label>			
			</div>
			

<button className="btn" type="submit">
				Add Band
			</button>
	  </form>
	  </div>
   
    </div>
  );

<div className="logoBckGrnd">
			<img
			src="/spa_game/images/410CommonKidsCopy2.jpg"
			alt="Kids in lawn chairs wearing bike helmets watching a band at 410 Common Street"
			className="commonKids" />
			</div>

}

// --------------------------------------------------------------------------- PAGES /BANDS ---
//create search and sort for bands using filter - preserves state -localCompare() rather than > JIC #Prince
// MAP band array to create individual cards - makes sure new entrys are arrays



function Bands({bands, favorites, toggleFavorite}) {
	const[search, setSearch]=useState('');
	const[sort, setSort]= useState("");

	const showBands = bands
	.filter((band) =>
	band.name.toLowerCase().includes(search.toLowerCase())  ||
	band.type.toLowerCase().includes(search.toLowerCase())  ||
	band.location.toLowerCase().includes(search.toLowerCase()) 
)
.sort((a, b) => {
	if (sort === "name") {
		return a.name.localeCompare(b.name);

	}
	if (sort === "type") {
		return a.type.localeCompare(b.type);

	}
	return 0;
numbers.sort((a,b) => a-b)
	});

  
  return (
    <div className="page bands">
      <Header />
	 
      <h1>Bands</h1>

<div className="fauxBtn">
<div className="bandControls">
  <input
    type="text"
    placeholder="Search bands / music ..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />


  <button
  type="button"
  onClick={() => setSearch("")}
>Clear Search</button>

<Link to="/schedule" className="scheduleButton">
  View My Favorites
</Link>
</div>


</div>


	  <div className="bandsLayout">

		{Array.isArray(bands) && showBands.map((band, i) => (

	<div className="bandCard" key={i}>	
	<img src={`/spa_game/images/${band.image}`}
	alt={band.name}
	
	
	className="bandImage" />
	<div className="cardHeader">		
		<h2>{band.name}</h2>
		{band.instaLink && (<a href={band.instaLink}
		target="_blank"
		className="linkBtn">Check 'em out
		</a>
		) }	
</div>
		<p><strong>Type: </strong>{band.type}</p>
		<p><strong>Time: </strong>{band.time}</p>
		<p><strong>Location: </strong>{band.location}</p>
		<p><strong>Descripton: </strong>{band.description}</p>
		
		<p>{band.image}</p>
		<div className="checkBox">
		<label>
			FAVORITE
			<input
			type="checkbox" 
			checked={favorites.includes(band.name)}
			onChange={()=> toggleFavorite(band.name)}
			/>
		</label>
		</div>
		</div>
				)
			)
		}
	  </div>
    </div>
  );
}
// --------------------------------------------------------------------------- PAGES /schedule ---
function Schedule({ bands, favorites }) {
  const favoriteBands = bands.filter((band) =>
    favorites.includes(band.name)
  );

  
  function conflict(time) {
    const bandsAtSameTime = favoriteBands.filter((band) => band.time === time);
    return bandsAtSameTime.length > 1;
  }


  return (
    <div className="page schedule">
      <Header />

      <h1>My Schedule</h1>

      {favoriteBands.length === 0 && (
        <p>Who are you going to see? Go to the Bands page and select your favorite performers.</p>
      )}

      {favoriteBands.map((band, i) => (
        <div className="scheduleCard" key={i}>
          <h2>{band.name}</h2>
          <p><strong>Time:</strong> {band.time}</p>
          <p><strong>Location:</strong> {band.location}</p>
          <p>Type: <em>{band.type}</em> </p>

		  {conflict(band.time) && (
            <p className="conflict">
             <strong> Time conflict: </strong><em>you picked more than one performance at {band.time}
           </em> </p>
          )}

        </div>
      ))}
	  <button onClick={() => window.print()}>
  Print Schedule
</button>

    </div>
  );
}



// --------------------------------------------------------------------------- PAGES /NOT FOUND ---

function NotFound()
{
	return (
	<div className='page NotFound'>
	
	 
    <h1>Why, Hello There!</h1>
		<p>You have stumbled upon a secret page! <br></br> Please choose one of the doors below to be transported to charted territory:</p>
		
		<h5>The second <a href="https://youtu.be/JWWeaJA3JRA?si=CBFF02Qfmpc9jMLW" 
	target="_blank"> Beale Text </a> requires a book cipher. <br></br><br></br>The <strong>key</strong> text: <br></br> 
	<a href="https://www.ebay.com/itm/157680580656?_skw=les+propheties+nostradamus&itmmeta=01KRC5V4FHGX8MW62ZXYQ5541S&hash=item24b67eb830:g:0XQAAeSw4g9o7FJ4&itmprp=enc%3AAQALAAABAGfYFPkwiKCW4ZNSs2u11xC27L5iqK2PnA2PkbfLbN6nodRyim4MQ%2BlkjrOoFPoyznzFabZPGaXSc4UBO%2BKZbI2k3JvDsLfVzDZnE4gDWeGeDowFa6q1LXh%2FWAWcK4FZjxxXzrwx6b8CvB81HgDRkXbTBoFEa5Asmfl3iN0G4axTiZF4%2BotF0m02XxFf4S%2FJd2RnPWRTV7w5%2B79vola0uTaIEpUJ0S94l1NfE6RBE7WC7HG8gzEngD23aGtA8JjyY1Pwozkd%2Bhhqcpoz%2BcWmQmbhpvBrsgUTbQGETX3DAY54DwlFV7e2qkRED0DLjXx0%2FW3gWMdQnzTxiPQt92FBp1c%3D%7Ctkp%3ABk9SR4TI7IXDZw" 
	target="_blank"><em> Les Prophéties, by Nostradamus </em></a> <br></br><br></br>
	<strong>The rule is simple:</strong>
	<br></br> Let n be the ciphertext number and locate the n‑th word in prophicies, calling it wₙ. <br></br>
	Then compute k = n mod 3 to determine which letter to extract — first, second, or last, wrapping when needed. <br></br>
	The resulting letters form the plaintext, with numbers and punctuation handled through a small set of digraphs. <br></br><br></br> 
	 GOOD LUCK TREASURE HUNTERS!
	 </h5>
	<div className="door-nav">
		<Nav />
		</div>
	</div>
	)
}

// --------------------------------------------------------------------------- MYAPP ---
// ---------------------------------------------------------------------------  ---

// checks if there are stored bands in local storage, adds those or initial bands. useEffect with local storage  }, [bands]) = when the bands change
 // fx addband adds new band object to ...bands array then gets passed into register as a fx
// register calls this fx, add band, addBand updates bands in MyApp so they are available to other components, like bands page where they are displayed.
// then MyApp  shares bands with bands component for grid card 
//favorites uses an arry for the selections with a toggle fx and both passed Bands

function MyApp() 
	
{
      const [bands, setBands] = useState (() => {
		const savedBands = localStorage.getItem("bands");
		if(!savedBands || savedBands ==="undefined") {
			return initialBands;
	}
	return JSON.parse(savedBands); }
);

	  useEffect(() => {
    localStorage.setItem("bands", JSON.stringify(bands));
  }, [bands]);

	
	    function addBand(newBand) {
    setBands([...bands, newBand]);
  };


const [favorites, setFavorites] = useState([]);

function toggleFavorite(bandName) {
  if (favorites.includes(bandName)) {
    setFavorites(favorites.filter((name) => name !== bandName));
  } else
	 {
		 setFavorites([...favorites, bandName]);
	 }
}


	return (
		<Router>
			<div className="logoBckGrnd">
			<img
			src="/spa_game/images/porchfestLogo2026.png"
			alt="Belmont Porchfest Logo"
			className="logoImage" />
			</div>
            <Routes>
                <Route path="/" element={<Home  />} />

                <Route path="/register" 
				element={<Register
					 addBand={addBand}
                />} />

                <Route path="/bands" element={<Bands
                	 bands={bands}
					 favorites={favorites}
					 toggleFavorite={toggleFavorite}
                
                />} />

                <Route path="/schedule" element={<Schedule
				bands={bands}
				favorites={favorites} />} />


				 <Route path="*" element={<NotFound />} />

            </Routes>
		</Router>
	);
}

    

export default MyApp