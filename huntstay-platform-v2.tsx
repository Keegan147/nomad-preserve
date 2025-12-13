import React, { useState } from 'react';
import { MapPin, Star, Check, Plus, Home, DollarSign, Calendar, ChevronRight } from 'lucide-react';

export default function NomadPreserve() {
  const [view, setView] = useState('home');
  const [userType, setUserType] = useState('guest');
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [listingStep, setListingStep] = useState(1);
  const [newListing, setNewListing] = useState({
    name: '', location: '', description: '', price: '', acres: '',
    propertyType: 'Deer Hunting', season: 'Fall', amenities: []
  });
  const [myProperties, setMyProperties] = useState([]);
  
  const properties = [
    { id: 1, name: "Whitetail Ridge", location: "Michigan", price: 250, rating: 4.8, reviews: 24, type: "Deer Hunting", season: "Fall", amenities: ["Tree stands", "Cabin"], acres: 120 },
    { id: 2, name: "Duck Lake", location: "Arkansas", price: 180, rating: 4.9, reviews: 31, type: "Waterfowl", season: "Winter", amenities: ["Blinds", "Lodge"], acres: 80 },
    { id: 3, name: "Bass Haven", location: "Texas", price: 150, rating: 4.7, reviews: 18, type: "Fishing", season: "Spring", amenities: ["Dock"], acres: 0 }
  ];

  const amenityOptions = ['Tree stands', 'Ground blinds', 'Food plots', 'Cabin', 'Boat launch', 'Dock access', 'ATV trails', 'WiFi'];

  const handleCreateListing = () => {
    const property = { ...newListing, id: Date.now(), rating: 0, reviews: 0, price: parseFloat(newListing.price) };
    setMyProperties([...myProperties, property]);
    setNewListing({ name: '', location: '', description: '', price: '', acres: '', propertyType: 'Deer Hunting', season: 'Fall', amenities: [] });
    setListingStep(1);
    setView('owner-dashboard');
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/50 to-transparent">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center text-white font-bold">NP</div>
              <div>
                <h1 className="text-white text-2xl font-bold">NOMAD PRESERVE</h1>
                <p className="text-white/80 text-xs italic">Go where the game takes you</p>
              </div>
            </div>
            <nav className="flex gap-8">
              <button onClick={() => setView('about')} className="text-white font-semibold hover:text-gray-300">About Us</button>
              <button onClick={() => setView('hunters')} className="text-white font-semibold hover:text-gray-300">Hunters</button>
              <button onClick={() => { setUserType('owner'); setView('landowners'); }} className="text-white font-semibold hover:text-gray-300">Land Owners</button>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {view === 'home' && (
          <div className="relative h-screen bg-contain bg-center bg-no-repeat" style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(https://i.imgur.com/uWf4YKi.jpeg)', backgroundColor: '#556049'}}>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <h1 className="text-white text-8xl font-bold mb-4">GO WHERE THE GAME TAKES YOU</h1>
              <p className="text-white text-3xl font-light mb-12">FLEXIBILITY - OPPORTUNITY - CONSERVATION</p>
              <button onClick={() => setView('hunters')} style={{backgroundColor: '#556049'}} className="hover:opacity-90 text-white px-16 py-5 rounded-full text-2xl font-semibold transition">
                Book a Hunt
              </button>
            </div>
          </div>
        )}

        {view === 'about' && (
          <div className="min-h-screen bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-6">
              <h1 className="text-6xl font-bold text-center mb-4" style={{color: '#556049'}}>ABOUT US</h1>
              <p className="text-2xl text-center mb-16" style={{color: '#796E68'}}>BUILT BY HUNTERS FOR HUNTERS AND LAND OWNERS</p>
              
              <div className="grid md:grid-cols-3 gap-12 mt-16">
                <div className="text-center">
                  <h3 className="text-3xl font-bold mb-4 text-gray-500">THE VISION</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Built by hunters for hunters and land owners. We are bridging the gap between private land access and flexible hunting opportunities. Whether you are a hunter seeking last-minute opportunities or a landowner looking to generate recurring revenue, Nomad Preserve makes it simple.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold mb-4 text-gray-500">THE NOMAD</h3>
                  <p className="text-gray-700 leading-relaxed">
                    True hunters move with their quarry. Book a half-day hunt the evening before or even day-of. Follow migration patterns, chase ideal weather, and pursue shifting game movements. We support fast, flexible bookings so you can customize your hunting experience.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold mb-4 text-gray-500">THE LAND</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Landowners earn recurring revenue at their leisure while promoting conservation and responsible land use. Whether you have one parcel or multiple properties, list when it works for you. Reduce hunting pressure on public land by opening private opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {view === 'hunters' && (
          <div className="min-h-screen">
            <div className="relative h-96" style={{backgroundColor: '#556049'}}>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <h1 className="text-white text-7xl font-bold mb-6">HUNTERS</h1>
                <p className="text-white text-3xl font-light mb-4">CUSTOMIZE YOUR HUNTING EXPERIENCE</p>
                <p className="text-white text-2xl font-light">Book a hunt instantly - even last minute</p>
              </div>
            </div>

            <div style={{backgroundColor: '#556049'}} className="text-white py-16">
              <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16">
                  <div>
                    <h2 className="text-4xl font-bold mb-8">FLEXIBILITY:</h2>
                    <ul className="space-y-4 text-xl">
                      <li className="flex items-start gap-3">
                        <ChevronRight className="w-6 h-6 mt-1" />
                        <span>Book a half-day hunt the evening before or even day-of</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <ChevronRight className="w-6 h-6 mt-1" />
                        <span>Hunt like a nomad - go where the game takes you</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <ChevronRight className="w-6 h-6 mt-1" />
                        <span>No long-term leases required</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h2 className="text-4xl font-bold mb-8">OPPORTUNITY:</h2>
                    <ul className="space-y-4 text-xl">
                      <li className="flex items-start gap-3">
                        <ChevronRight className="w-6 h-6 mt-1" />
                        <span>Access private land with less hunting pressure</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <ChevronRight className="w-6 h-6 mt-1" />
                        <span>Pursue ideal weather and shifting game patterns</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <ChevronRight className="w-6 h-6 mt-1" />
                        <span>More options to get in the field</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 py-16">
              <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold mb-8" style={{color: '#556049'}}>CONSERVATION:</h2>
                <ul className="space-y-4 text-xl text-gray-700 mb-8">
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-6 h-6 mt-1" style={{color: '#78826B'}} />
                    <span>Promote responsible wildlife management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-6 h-6 mt-1" style={{color: '#78826B'}} />
                    <span>Reduce pressure on crowded public land</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-6 h-6 mt-1" style={{color: '#78826B'}} />
                    <span>Support sustainable hunting practices</span>
                  </li>
                </ul>
                <div className="text-center">
                  <p className="text-2xl italic mb-8" style={{color: '#796E68'}}>Hunt like a nomad - where the game takes you</p>
                  <button onClick={() => setView('browse')} style={{backgroundColor: '#556049'}} className="hover:opacity-90 text-white px-16 py-5 rounded-full text-2xl font-semibold transition">
                    Book a Hunt
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white py-16">
              <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold mb-12 text-center" style={{color: '#556049'}}>AVAILABLE PROPERTIES</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {properties.map(prop => (
                    <div key={prop.id} className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition cursor-pointer" onClick={() => { setSelectedProperty(prop); setView('details'); }} style={{borderColor: '#78826B'}}>
                      <div className="h-56 flex items-center justify-center text-6xl text-white" style={{background: 'linear-gradient(to bottom right, #556049, #78826B)'}}>P</div>
                      <div className="p-6">
                        <div className="flex justify-between mb-3">
                          <h3 className="text-2xl font-bold">{prop.name}</h3>
                          <div className="flex items-center gap-1">
                            <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                            <span className="font-semibold">{prop.rating}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 mb-4">
                          <MapPin className="w-4 h-4" />
                          <span>{prop.location} - {prop.acres} acres</span>
                        </div>
                        <div className="flex justify-between items-center pt-4 border-t">
                          <div>
                            <span className="text-3xl font-bold" style={{color: '#556049'}}>${prop.price}</span>
                            <span className="text-gray-600">/day</span>
                          </div>
                          <button style={{backgroundColor: '#556049'}} className="px-6 py-3 text-white rounded-lg hover:opacity-90 font-semibold transition">View</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {view === 'details' && selectedProperty && (
          <div className="min-h-screen bg-gray-50 py-20">
            <div className="max-w-5xl mx-auto px-6">
              <button onClick={() => setView('hunters')} style={{color: '#556049'}} className="mb-6 font-semibold hover:opacity-70">← Back to Properties</button>
              <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="h-96 flex items-center justify-center text-9xl text-white" style={{background: 'linear-gradient(to bottom right, #556049, #78826B)'}}>P</div>
                <div className="p-10">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h1 className="text-5xl font-bold mb-3">{selectedProperty.name}</h1>
                      <p className="text-xl" style={{color: '#796E68'}}>{selectedProperty.location} - {selectedProperty.acres} acres</p>
                    </div>
                    <div className="text-right">
                      <div className="text-5xl font-bold" style={{color: '#556049'}}>${selectedProperty.price}</div>
                      <div className="text-gray-600 text-lg">per day</div>
                    </div>
                  </div>
                  <div className="mb-8">
                    <h3 className="font-bold text-2xl mb-4">Amenities</h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedProperty.amenities.map((a, i) => (
                        <span key={i} className="px-4 py-2 rounded-lg font-medium" style={{backgroundColor: '#78826B', color: '#FFFFFF'}}>{a}</span>
                      ))}
                    </div>
                  </div>
                  <button style={{backgroundColor: '#556049'}} className="w-full py-5 text-white rounded-lg hover:opacity-90 font-bold text-xl transition">
                    Book This Property
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {view === 'landowners' && (
          <div className="min-h-screen">
            <div className="relative h-96" style={{backgroundColor: '#556049'}}>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <h1 className="text-white text-7xl font-bold mb-6">LAND OWNERS</h1>
                <p className="text-white text-3xl font-light mb-4">GENERATE RECURRING REVENUE AT YOUR LEISURE</p>
                <p className="text-white text-2xl font-light">Promote conservation while your land works for you</p>
              </div>
            </div>

            <div className="bg-white py-16">
              <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 mb-16">
                  <div>
                    <h2 className="text-4xl font-bold mb-8" style={{color: '#556049'}}>RECURRING REVENUE:</h2>
                    <ul className="space-y-4 text-xl text-gray-700">
                      <li className="flex items-start gap-3">
                        <ChevronRight className="w-6 h-6 mt-1" style={{color: '#78826B'}} />
                        <span>Make your land work for you at your leisure</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <ChevronRight className="w-6 h-6 mt-1" style={{color: '#78826B'}} />
                        <span>Perfect for multiple parcels or large properties</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <ChevronRight className="w-6 h-6 mt-1" style={{color: '#78826B'}} />
                        <span>List part or all of your land for added flexibility</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h2 className="text-4xl font-bold mb-8" style={{color: '#556049'}}>CONSERVATION:</h2>
                    <ul className="space-y-4 text-xl text-gray-700">
                      <li className="flex items-start gap-3">
                        <ChevronRight className="w-6 h-6 mt-1" style={{color: '#78826B'}} />
                        <span>Support responsible wildlife management</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <ChevronRight className="w-6 h-6 mt-1" style={{color: '#78826B'}} />
                        <span>Promote private land use with less pressure</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <ChevronRight className="w-6 h-6 mt-1" style={{color: '#78826B'}} />
                        <span>Give hunters more options to get in the field</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="text-center">
                  <button onClick={() => setView('owner-dashboard')} style={{backgroundColor: '#556049'}} className="hover:opacity-90 text-white px-16 py-5 rounded-full text-2xl font-semibold transition">
                    Join the Preserve
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {view === 'owner-dashboard' && (
          <div className="min-h-screen bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex justify-between items-center mb-12">
                <h2 className="text-5xl font-bold" style={{color: '#556049'}}>Owner Dashboard</h2>
                <button onClick={() => { setListingStep(1); setView('create-listing'); }} style={{backgroundColor: '#556049'}} className="px-8 py-4 text-white rounded-lg hover:opacity-90 font-bold text-lg flex items-center gap-3 transition">
                  <Plus className="w-6 h-6" />List New Property
                </button>
              </div>
              
              <div className="grid grid-cols-4 gap-6 mb-12">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex justify-between mb-3"><span className="text-gray-600 text-lg">Properties</span><Home className="w-6 h-6" style={{color: '#556049'}} /></div>
                  <div className="text-5xl font-bold">{myProperties.length}</div>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex justify-between mb-3"><span className="text-gray-600 text-lg">Bookings</span><Calendar className="w-6 h-6" style={{color: '#556049'}} /></div>
                  <div className="text-5xl font-bold">12</div>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex justify-between mb-3"><span className="text-gray-600 text-lg">Revenue</span><DollarSign className="w-6 h-6" style={{color: '#556049'}} /></div>
                  <div className="text-5xl font-bold">$2,400</div>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex justify-between mb-3"><span className="text-gray-600 text-lg">Rating</span><Star className="w-6 h-6 text-yellow-500" /></div>
                  <div className="text-5xl font-bold">4.8</div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-3xl font-bold mb-6">Your Properties</h3>
                {myProperties.length === 0 ? (
                  <div className="text-center py-16">
                    <Home className="w-20 h-20 mx-auto mb-6 text-gray-400" />
                    <h3 className="text-2xl font-bold text-gray-700 mb-3">No properties yet</h3>
                    <p className="text-gray-600 text-lg mb-8">Start earning by listing your property</p>
                    <button onClick={() => { setListingStep(1); setView('create-listing'); }} style={{backgroundColor: '#556049'}} className="px-8 py-4 text-white rounded-lg hover:opacity-90 font-bold text-lg inline-flex items-center gap-3 transition">
                      <Plus className="w-6 h-6" />Create Your First Listing
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {myProperties.map(prop => (
                      <div key={prop.id} className="border-2 rounded-lg p-6 hover:shadow-lg transition" style={{borderColor: '#78826B'}}>
                        <h4 className="text-2xl font-bold">{prop.name}</h4>
                        <p className="text-gray-600 text-lg">{prop.location} - ${prop.price}/day</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {view === 'create-listing' && (
          <div className="min-h-screen bg-gray-50 py-20">
            <div className="max-w-4xl mx-auto px-6">
              <button onClick={() => setView('owner-dashboard')} style={{color: '#556049'}} className="mb-6 font-semibold hover:opacity-70">← Back to Dashboard</button>
              <div className="bg-white rounded-lg shadow-xl p-10">
                <h2 className="text-4xl font-bold mb-8" style={{color: '#556049'}}>Create New Listing</h2>
                
                <div className="flex items-center justify-center mb-10">
                  {[1, 2, 3, 4].map(step => (
                    <React.Fragment key={step}>
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${step <= listingStep ? 'text-white' : 'bg-gray-200'}`} style={step <= listingStep ? {backgroundColor: '#556049'} : {}}>
                        {step < listingStep ? <Check className="w-6 h-6" /> : step}
                      </div>
                      {step < 4 && <div className={`w-20 h-1 ${step < listingStep ? '' : 'bg-gray-200'}`} style={step < listingStep ? {backgroundColor: '#556049'} : {}} />}
                    </React.Fragment>
                  ))}
                </div>

                {listingStep === 1 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold mb-6">Basic Information</h3>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Property Name</label>
                      <input type="text" value={newListing.name} onChange={e => setNewListing({...newListing, name: e.target.value})} className="w-full px-4 py-3 border-2 rounded-lg" placeholder="Whitetail Ridge" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Location</label>
                      <input type="text" value={newListing.location} onChange={e => setNewListing({...newListing, location: e.target.value})} className="w-full px-4 py-3 border-2 rounded-lg" placeholder="Northern Michigan" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold mb-2">Type</label>
                        <select value={newListing.propertyType} onChange={e => setNewListing({...newListing, propertyType: e.target.value})} className="w-full px-4 py-3 border-2 rounded-lg">
                          <option>Deer Hunting</option>
                          <option>Waterfowl</option>
                          <option>Fishing</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">Season</label>
                        <select value={newListing.season} onChange={e => setNewListing({...newListing, season: e.target.value})} className="w-full px-4 py-3 border-2 rounded-lg">
                          <option>Spring</option>
                          <option>Summer</option>
                          <option>Fall</option>
                          <option>Winter</option>
                        </select>
                      </div>
                    </div>
                    <button onClick={() => setListingStep(2)} disabled={!newListing.name || !newListing.location} style={{backgroundColor: '#556049'}} className="w-full py-3 text-white rounded-lg hover:opacity-90 disabled:bg-gray-300 disabled:opacity-50 font-bold transition">
                      Continue
                    </button>
                  </div>
                )}

                {listingStep === 2 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold mb-6">Details</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold mb-2">Price per Day</label>
                        <input type="number" value={newListing.price} onChange={e => setNewListing({...newListing, price: e.target.value})} className="w-full px-4 py-3 border-2 rounded-lg" placeholder="150" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">Acres</label>
                        <input type="number" value={newListing.acres} onChange={e => setNewListing({...newListing, acres: e.target.value})} className="w-full px-4 py-3 border-2 rounded-lg" placeholder="100" />
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button onClick={() => setListingStep(1)} className="flex-1 py-3 bg-gray-200 rounded-lg font-bold hover:bg-gray-300 transition">Back</button>
                      <button onClick={() => setListingStep(3)} disabled={!newListing.price} style={{backgroundColor: '#556049'}} className="flex-1 py-3 text-white rounded-lg hover:opacity-90 disabled:bg-gray-300 disabled:opacity-50 font-bold transition">Continue</button>
                    </div>
                  </div>
                )}

                {listingStep === 3 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold mb-6">Amenities</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {amenityOptions.map(amenity => (
                        <button key={amenity} onClick={() => {
                          if (newListing.amenities.includes(amenity)) {
                            setNewListing({...newListing, amenities: newListing.amenities.filter(a => a !== amenity)});
                          } else {
                            setNewListing({...newListing, amenities: [...newListing.amenities, amenity]});
                          }
                        }} className={`p-3 border-2 rounded-lg text-left transition ${newListing.amenities.includes(amenity) ? 'bg-green-50' : 'border-gray-200'}`} style={newListing.amenities.includes(amenity) ? {borderColor: '#556049', backgroundColor: '#f0f4f0'} : {}}>
                          <div className="flex items-center gap-2">
                            <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${newListing.amenities.includes(amenity) ? 'text-white' : 'border-gray-300'}`} style={newListing.amenities.includes(amenity) ? {backgroundColor: '#556049', borderColor: '#556049'} : {}}>
                              {newListing.amenities.includes(amenity) && <Check className="w-3 h-3" />}
                            </div>
                            <span className="font-medium">{amenity}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <button onClick={() => setListingStep(2)} className="flex-1 py-3 bg-gray-200 rounded-lg font-bold hover:bg-gray-300 transition">Back</button>
                      <button onClick={() => setListingStep(4)} style={{backgroundColor: '#556049'}} className="flex-1 py-3 text-white rounded-lg hover:opacity-90 font-bold transition">Continue</button>
                    </div>
                  </div>
                )}

                {listingStep === 4 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold mb-6">Description</h3>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Property Description</label>
                      <textarea value={newListing.description} onChange={(e) => setNewListing({...newListing, description: e.target.value})} rows="6" className="w-full px-4 py-3 border-2 rounded-lg" placeholder="Describe your property..." />
                    </div>
                    <div className="flex gap-3">
                      <button onClick={() => setListingStep(3)} className="flex-1 py-3 bg-gray-200 rounded-lg font-bold hover:bg-gray-300 transition">Back</button>
                      <button onClick={handleCreateListing} disabled={!newListing.description} style={{backgroundColor: '#556049'}} className="flex-1 py-3 text-white rounded-lg hover:opacity-90 disabled:bg-gray-300 disabled:opacity-50 font-bold transition">Create Listing</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}