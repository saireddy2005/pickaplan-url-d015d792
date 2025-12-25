export interface City {
  name: string;
  places: string[];
  food: string[];
  country: string;
}

export const cities: City[] = [
  { name: "Hyderabad", places: ["Charminar", "Golconda Fort", "Chowmahalla Palace", "Salar Jung Museum", "Hussain Sagar", "Birla Mandir", "Ramoji Film City", "Shilparamam", "Necklace Road", "Laad Bazaar"], food: ["Hyderabadi Biryani", "Haleem", "Double ka Meetha"], country: "India" },
  { name: "Bengaluru", places: ["Lalbagh", "Cubbon Park", "Bangalore Palace", "ISKCON Temple", "Bannerghatta National Park", "Nandi Hills", "Commercial Street"], food: ["Masala Dosa", "Idli Vada", "Maddur Vada"], country: "India" },
  { name: "Chennai", places: ["Marina Beach", "Kapaleeshwarar Temple", "Fort St. George", "Elliot's Beach", "Guindy National Park", "DakshinaChitra"], food: ["Filter Coffee", "Pongal", "Sundal"], country: "India" },
  { name: "Mumbai", places: ["Gateway of India", "Marine Drive", "Elephanta Caves", "Juhu Beach", "Siddhivinayak Temple", "Film City", "Colaba Causeway"], food: ["Vada Pav", "Pav Bhaji", "Bhel Puri"], country: "India" },
  { name: "Delhi", places: ["Red Fort", "Qutub Minar", "India Gate", "Lotus Temple", "Akshardham", "Chandni Chowk", "Humayun's Tomb"], food: ["Chole Bhature", "Paratha", "Jalebi"], country: "India" },
  { name: "Jaipur", places: ["Amer Fort", "City Palace", "Hawa Mahal", "Nahargarh Fort", "Jal Mahal", "Jantar Mantar"], food: ["Dal Baati Churma", "Ghewar", "Ker Sangri"], country: "India" },
  { name: "Goa", places: ["Baga Beach", "Calangute Beach", "Dudhsagar Falls", "Aguada Fort", "Chapora Fort"], food: ["Fish Curry", "Bebinca", "Pork Vindaloo"], country: "India" },
  { name: "Kochi", places: ["Fort Kochi", "Mattancherry Palace", "Marine Drive Kochi", "Chinese Fishing Nets", "Cherai Beach"], food: ["Appam & Stew", "Kerala Sadya", "Fish Fry"], country: "India" },
  { name: "Kolkata", places: ["Victoria Memorial", "Howrah Bridge", "Dakshineswar Temple", "Eco Park", "Science City"], food: ["Rasgulla", "Mishti Doi", "Kathi Roll"], country: "India" },
  { name: "Pune", places: ["Shaniwar Wada", "Aga Khan Palace", "Dagdusheth Ganapati", "Sinhagad Fort", "Parvati Hills"], food: ["Misal Pav", "Sabudana Khichdi", "Mastani"], country: "India" },
  { name: "Ahmedabad", places: ["Sabarmati Ashram", "Kankaria Lake", "Adalaj Stepwell", "Sidi Saiyyed Mosque", "Science City"], food: ["Fafda-Jalebi", "Dhokla", "Thepla"], country: "India" },
  { name: "Varanasi", places: ["Dashashwamedh Ghat", "Kashi Vishwanath Temple", "Manikarnika Ghat", "Ramnagar Fort", "Assi Ghat"], food: ["Banarasi Paan", "Kachori Sabzi", "Lassi"], country: "India" },
  { name: "Mysuru", places: ["Mysore Palace", "Brindavan Gardens", "Chamundi Hills", "St. Philomena's Church", "Mysore Zoo"], food: ["Mysore Pak", "Bonda Soup", "Idli-Dosa"], country: "India" },
  { name: "Tirupati", places: ["Tirumala Temple", "Srivari Padalu", "Kapila Theertham", "Chandragiri Fort", "ISKCON Tirupati"], food: ["Puliyogare", "Laddu", "Curd Rice"], country: "India" },
  { name: "Visakhapatnam", places: ["RK Beach", "Kailasagiri", "Submarine Museum", "Yarada Beach", "Araku Valley", "Borra Caves"], food: ["Bamboo Chicken", "Prawn Fry", "Pootharekulu"], country: "India" },
  { name: "Ooty", places: ["Ooty Lake", "Botanical Garden", "Doddabetta Peak", "Rose Garden", "Toy Train"], food: ["Homemade Chocolates", "Avial", "Pakoras"], country: "India" },
  { name: "Munnar", places: ["Tea Gardens", "Eravikulam National Park", "Mattupetty Dam", "Top Station", "Echo Point"], food: ["Kerala Parotta", "Fish Curry", "Puttu"], country: "India" },
  { name: "Rishikesh", places: ["Laxman Jhula", "Ram Jhula", "Triveni Ghat", "Beatles Ashram", "Neer Waterfall"], food: ["Aloo Poori", "Chaat", "Lassi"], country: "India" },
  { name: "Amritsar", places: ["Golden Temple", "Wagah Border", "Jallianwala Bagh", "Gobindgarh Fort", "Hall Bazaar"], food: ["Amritsari Kulcha", "Makki di Roti-Sarson da Saag", "Lassi"], country: "India" },
  { name: "Shimla", places: ["Mall Road", "Jakhoo Temple", "Kufri", "Christ Church", "Ridge Road"], food: ["Chana Madra", "Siddu", "Apple Pie"], country: "India" },
  { name: "Manali", places: ["Solang Valley", "Hadimba Temple", "Old Manali", "Rohtang Pass", "Jogini Waterfall"], food: ["Momos", "Thukpa", "Trout Fish"], country: "India" },
  { name: "Udaipur", places: ["City Palace", "Lake Pichola", "Sajjangarh Fort", "Fateh Sagar", "Jagdish Temple"], food: ["Dal Baati Churma", "Mirchi Bada", "Rabri"], country: "India" },
  { name: "Ajmer", places: ["Ajmer Sharif Dargah", "Ana Sagar Lake", "Taragarh Fort", "Adhai-Din-Ka-Jhonpra"], food: ["Kadhi Kachori", "Sohan Halwa", "Poha"], country: "India" },
  { name: "Indore", places: ["Rajwada Palace", "Sarafa Bazaar", "Lalbagh Palace", "Patalpani Waterfall"], food: ["Poha-Jalebi", "Bhutte ka Kees", "Garadu"], country: "India" },
  { name: "Bhopal", places: ["Upper Lake", "Birla Temple", "Sanchi Stupa", "Van Vihar", "Tribal Museum"], food: ["Biryani Pilaf", "Poha", "Imarti"], country: "India" },
  { name: "Nagpur", places: ["Deekshabhoomi", "Futala Lake", "Seminary Hill", "Sitabuldi Fort", "Dragon Palace"], food: ["Saoji Chicken", "Tarri Poha", "Orange Barfi"], country: "India" },
  { name: "Surat", places: ["Dumas Beach", "Gopi Talav", "Dutch Garden", "VR Surat", "Sarthana Zoo"], food: ["Locho", "Undhiyu", "Ghari"], country: "India" },
  { name: "Coimbatore", places: ["Marudhamalai Temple", "VOC Park", "Adiyogi Statue", "Siruvani Falls"], food: ["Kongu Meals", "Coconut Chutney", "Murukku"], country: "India" },
  { name: "Madurai", places: ["Meenakshi Amman Temple", "Gandhi Museum", "Thirumalai Nayakkar Palace", "Alagar Kovil"], food: ["Jigarthanda", "Kari Dosa", "Idiyappam"], country: "India" },
  { name: "Trivandrum", places: ["Padmanabhaswamy Temple", "Kovalam Beach", "Napier Museum", "Vizhinjam Lighthouse"], food: ["Kerala Meals", "Banana Chips", "Fish Fry"], country: "India" },
  { name: "Pondicherry", places: ["Auroville", "Promenade Beach", "Paradise Beach", "French Colony", "Basilica of Sacred Heart"], food: ["Crepes", "Baguettes", "Fish Curry"], country: "India" },
  { name: "Hampi", places: ["Virupaksha Temple", "Vittala Temple", "Hemakuta Hill", "Lotus Mahal", "Tungabhadra River"], food: ["Jolada Rotti", "Bisi Bele Bath", "Mirchi Bajji"], country: "India" },
  { name: "Darjeeling", places: ["Tiger Hill", "Batasia Loop", "Darjeeling Zoo", "Rock Garden", "Tea Estates"], food: ["Momos", "Thukpa", "Noodles"], country: "India" },
  { name: "Srinagar", places: ["Dal Lake", "Shalimar Bagh", "Nishat Garden", "Shankaracharya Hill", "Gulmarg"], food: ["Rogan Josh", "Kahwa", "Yakhni"], country: "India" },
  { name: "Leh-Ladakh", places: ["Pangong Lake", "Magnetic Hill", "Nubra Valley", "Thiksey Monastery", "Khardung-La Pass"], food: ["Butter Tea", "Thukpa", "Skyu"], country: "India" },
  { name: "Andaman", places: ["Cellular Jail", "Radhanagar Beach", "Ross Island", "Coral Islands"], food: ["Lobster", "Coconut Prawns", "Grilled Fish"], country: "India" },
  { name: "Kodaikanal", places: ["Coaker's Walk", "Kodai Lake", "Pillar Rocks", "Bryant Park", "Silver Cascade"], food: ["Chocolates", "Bread Omelette", "Fruit Salad"], country: "India" },
  { name: "Haridwar", places: ["Har Ki Pauri", "Mansa Devi", "Chandi Devi", "Bharat Mata Mandir"], food: ["Kachori Sabzi", "Rabri", "Poori"], country: "India" },
  { name: "Agra", places: ["Taj Mahal", "Agra Fort", "Mehtab Bagh", "Fatehpur Sikri", "Akbar's Tomb"], food: ["Petha", "Bedai", "Mughlai Dishes"], country: "India" },
  { name: "Chandigarh", places: ["Rock Garden", "Sukhna Lake", "Rose Garden", "Elante Mall", "Capitol Complex"], food: ["Chole Kulche", "Paneer Tikka", "Lassi"], country: "India" },
  { name: "Nashik", places: ["Sula Vineyards", "Panchavati", "Ramkund", "Pandavleni Caves"], food: ["Misal Pav", "Grapes", "Puran Poli"], country: "India" },
  { name: "Aurangabad", places: ["Ajanta Caves", "Ellora Caves", "Bibi Ka Maqbara", "Daulatabad Fort"], food: ["Naan Qalia", "Tahri", "Jalebi"], country: "India" },
  { name: "Patna", places: ["Golghar", "Patna Museum", "Takht Sri Harmandir Sahib", "Sanjay Gandhi Zoo"], food: ["Litti Chokha", "Khaja", "Dal Pitha"], country: "India" },
  { name: "Ranchi", places: ["Dassam Falls", "Rock Garden", "Tagore Hill", "Hundru Falls"], food: ["Dhuska", "Rugra", "Thekua"], country: "India" },
  { name: "Bhubaneswar", places: ["Lingaraj Temple", "Nandankanan Zoo", "Dhauli Giri", "Udayagiri Caves"], food: ["Pakhala Bhata", "Rasgulla", "Dalma"], country: "India" },
  { name: "Puri", places: ["Jagannath Temple", "Puri Beach", "Konark Sun Temple", "Gundicha Temple"], food: ["Khaja", "Mahaprasad", "Chhena Poda"], country: "India" },
  { name: "Guwahati", places: ["Kamakhya Temple", "Umananda Island", "Pobitora Sanctuary", "Fancy Bazaar"], food: ["Pitha", "Fish Tenga", "Khar"], country: "India" },
  { name: "Shillong", places: ["Elephant Falls", "Umiam Lake", "Ward's Lake", "Laitlum Canyon"], food: ["Jadoh", "Tungrymbai", "Dohneiiong"], country: "India" },
  { name: "Aizawl", places: ["Durtlang Hills", "Solomon's Temple", "Mizoram State Museum"], food: ["Bai", "Bamboo Shoot Fry", "Senhluh"], country: "India" },
  { name: "Imphal", places: ["Kangla Fort", "Loktak Lake", "INA Memorial", "Manipur Zoological Garden"], food: ["Eromba", "Chamthong", "Singju"], country: "India" },
  { name: "Gangtok", places: ["MG Marg", "Rumtek Monastery", "Tsomgo Lake", "Tashi Viewpoint"], food: ["Momos", "Phagshapa", "Thukpa"], country: "India" },
  { name: "Dehradun", places: ["Robber's Cave", "Forest Research Institute", "Tapkeshwar Temple", "Sahastradhara"], food: ["Aloo Ke Gutke", "Bal Mithai", "Gahat Dal"], country: "India" },
  { name: "Mussoorie", places: ["Kempty Falls", "Gun Hill", "Camel's Back Road", "Company Garden"], food: ["Omelettes", "Kulhad Milk", "Maggi"], country: "India" },
  { name: "Jodhpur", places: ["Mehrangarh Fort", "Umaid Bhawan", "Jaswant Thada", "Clock Tower Market"], food: ["Mirchi Vada", "Mawa Kachori", "Dal Baati"], country: "India" },
  { name: "Pushkar", places: ["Pushkar Lake", "Brahma Temple", "Savitri Temple", "Desert Safari"], food: ["Malpua", "Lassi", "Dal Fry"], country: "India" },
  { name: "Rameswaram", places: ["Ramanathaswamy Temple", "Dhanushkodi", "Pamban Bridge", "Agni Theertham"], food: ["Lemon Rice", "Coconut Chutney", "Idli"], country: "India" },
  { name: "Kanyakumari", places: ["Vivekananda Rock", "Thiruvalluvar Statue", "Sunset Point", "Kanyakumari Beach"], food: ["Banana Chips", "Fish Curry", "Tapioca"], country: "India" },
  { name: "Vellore", places: ["Vellore Fort", "Jalakandeswarar Temple", "Golden Temple", "Amirthi Zoo"], food: ["Biryani", "Kari Dosa", "Lemon Rice"], country: "India" },
  { name: "Nellore", places: ["Penchalakona Temple", "Mypadu Beach", "Ranganatha Swamy Temple"], food: ["Nellore Fish Curry", "Pappu", "Dosa"], country: "India" },
  { name: "Guntur", places: ["Kondaveedu Fort", "Undavalli Caves", "Amaravati Stupa"], food: ["Gongura", "Ulavacharu", "Mirchi Bajji"], country: "India" },
  { name: "London", places: ["Big Ben", "London Eye", "Tower Bridge", "Buckingham Palace", "British Museum"], food: ["Fish and Chips", "English Breakfast", "Scones"], country: "UK" },
  { name: "Paris", places: ["Eiffel Tower", "Louvre Museum", "Notre-Dame", "Champs-Élysées", "Seine River"], food: ["Croissants", "Macarons", "Escargot"], country: "France" },
  { name: "New York", places: ["Times Square", "Statue of Liberty", "Central Park", "Brooklyn Bridge"], food: ["Pizza", "Bagels", "Cheesecake"], country: "USA" },
  { name: "Dubai", places: ["Burj Khalifa", "Dubai Mall", "Palm Jumeirah", "Desert Safari", "Marina"], food: ["Shawarma", "Luqaimat", "Harees"], country: "UAE" },
  { name: "Singapore", places: ["Marina Bay Sands", "Gardens by the Bay", "Sentosa", "Merlion Park"], food: ["Hainanese Chicken Rice", "Laksa", "Satay"], country: "Singapore" },
  { name: "Tokyo", places: ["Tokyo Tower", "Shibuya Crossing", "Senso-ji Temple", "Disneyland"], food: ["Sushi", "Ramen", "Tempura"], country: "Japan" },
  { name: "Bangkok", places: ["Grand Palace", "Wat Pho", "Floating Markets", "Chatuchak Market"], food: ["Pad Thai", "Mango Sticky Rice", "Tom Yum"], country: "Thailand" },
  { name: "Rome", places: ["Colosseum", "Trevi Fountain", "Vatican City", "Pantheon"], food: ["Pizza", "Pasta", "Gelato"], country: "Italy" },
  { name: "Sydney", places: ["Opera House", "Harbour Bridge", "Bondi Beach", "Taronga Zoo"], food: ["Meat Pie", "Lamingtons", "Fish Grill"], country: "Australia" },
  { name: "Cape Town", places: ["Table Mountain", "Robben Island", "Camps Bay", "V&A Waterfront"], food: ["Bunny Chow", "Bobotie", "Braai"], country: "South Africa" },
  { name: "Istanbul", places: ["Hagia Sophia", "Blue Mosque", "Grand Bazaar", "Bosphorus Cruise"], food: ["Doner Kebab", "Baklava", "Turkish Delight"], country: "Turkey" },
  { name: "Bali", places: ["Ubud", "Tanah Lot", "Uluwatu Temple", "Kuta Beach"], food: ["Nasi Goreng", "Satay", "Babi Guling"], country: "Indonesia" },
  { name: "Kuala Lumpur", places: ["Petronas Towers", "Batu Caves", "KL Tower", "Sunway Lagoon"], food: ["Nasi Lemak", "Roti Canai", "Teh Tarik"], country: "Malaysia" },
  { name: "Maldives", places: ["Coral Reefs", "Water Villas", "Sandbanks", "Male City"], food: ["Grilled Fish", "Mas Huni", "Curry"], country: "Maldives" },
  { name: "Kathmandu", places: ["Pashupatinath Temple", "Boudhanath Stupa", "Durbar Square", "Swayambhunath"], food: ["Momo", "Thukpa", "Sel Roti"], country: "Nepal" },
  { name: "Zurich", places: ["Lake Zurich", "Old Town", "Bahnhofstrasse", "Uetliberg"], food: ["Fondue", "Rosti", "Chocolate"], country: "Switzerland" },
  { name: "Amsterdam", places: ["Canal Cruise", "Anne Frank House", "Van Gogh Museum", "Dam Square"], food: ["Stroopwafels", "Cheese", "Fries"], country: "Netherlands" },
  { name: "Toronto", places: ["CN Tower", "Niagara Falls", "Ripley's Aquarium", "Distillery District"], food: ["Poutine", "Peameal Bacon", "BeaverTails"], country: "Canada" },
  { name: "San Francisco", places: ["Golden Gate Bridge", "Alcatraz", "Fisherman's Wharf", "Chinatown"], food: ["Clam Chowder", "Sourdough Bread", "Tacos"], country: "USA" },
  { name: "Los Angeles", places: ["Hollywood", "Santa Monica", "Universal Studios", "Griffith Observatory"], food: ["Burgers", "Tacos", "Donuts"], country: "USA" },
];

export const interests = [
  "Beaches",
  "Hill Stations",
  "Temples",
  "Historical",
  "Nature",
  "Adventure",
  "Museums",
  "Shopping",
  "Architecture",
  "Wildlife"
];

export function getCityByName(name: string): City | undefined {
  return cities.find(city => city.name.toLowerCase() === name.toLowerCase());
}

export function searchCities(query: string): City[] {
  const lowerQuery = query.toLowerCase();
  return cities.filter(city => 
    city.name.toLowerCase().includes(lowerQuery) ||
    city.country.toLowerCase().includes(lowerQuery)
  );
}
