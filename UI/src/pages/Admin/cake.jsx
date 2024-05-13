import React, { useState } from 'react';
import '../../css/cake.css';

const DEFAULT_CAKES = [
  {
    name: 'Chocolate Cake',
    description: 'Delicious chocolate cake with rich chocolate frosting.',
    imageUrl: 'https://images.pexels.com/photos/1682474/pexels-photo-1682474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Strawberry Cake',
    description: 'Fresh strawberry cake with whipped cream topping.',
    imageUrl: 'https://images.pexels.com/photos/1889651/pexels-photo-1889651.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Cotton Candy Cake',
    description: 'Fresh cotton candy cake with whipped cream topping.',
    imageUrl: 'https://images.pexels.com/photos/4959709/pexels-photo-4959709.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  // Add more default cakes as needed
];

const AddCakeForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, description, imageUrl });
    setName('');
    setDescription('');
    setImageUrl('');
  };

  return (
    <div className="add-cake-form">
      <h1>Add Cake</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Cake Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <button type="submit">Add Cake</button>
      </form>
    </div>
  );
};

const Cake = ({ name, description, imageUrl }) => {
  return (
    <div >
      <div className="package-card">
        <img src={imageUrl} alt={name} width={'300px'} height={'300px'}/>
      <div className="cake-details">
        <h1 style={{fontSize:'20px'}}>{name}</h1>
        <p>{description}</p>
      </div>
      </div>
    </div>
  );
};

const Cakes = () => {
  const [cakes, setCakes] = useState(DEFAULT_CAKES);
  const [showAddForm, setShowAddForm] = useState(false);

  const addCake = (newCake) => {
    setCakes([...cakes, newCake]);
    setShowAddForm(false); // Hide the form after adding a new cake
  };

  return (
    <div className="cakes">
      <h1>Cake Management</h1>
<button onClick={() => setShowAddForm(!showAddForm)} className='cake-box'>
  {showAddForm ? 'Cancel' : 'Add Cake'}
</button>
{showAddForm && (
  <div className='cake-box'>
    <AddCakeForm onSubmit={addCake} />
  </div>
)}
      <div className="cake-list">
        {cakes.map((cake, index) => (
          <Cake key={index} name={cake.name} description={cake.description} imageUrl={cake.imageUrl} />
        ))}
      </div>
    </div>
  );
};

export default Cakes;
