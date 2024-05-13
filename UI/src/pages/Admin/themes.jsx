import React, { useState } from 'react';


const AddThemeForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImgUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, description, imageUrl });
    setName('');
    setDescription('');
    setImgUrl('');
  };

  return (
    <div className="add-theme-form">
      <h1>Add Theme</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Theme Name"
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
          placeholder="Image url"
          value={imageUrl}
          onChange={(e) => setImgUrl(e.target.value)}
        />
        <button type="submit">Add Theme</button>
      </form>
    </div>
  );
};

const Theme = ({ name, description, imageUrl }) => {
  return (
    <div >
      <div className="package-card">
        <img src={imageUrl} alt={name} width={'300px'} height={'300px'} />
      <div className="theme-details">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      </div>
    </div>
  );
};

const Themes = () => {
  const [themes, setThemes] = useState([
    { name: 'Boy Theme', description: 'Theme for boy birthday party', imageUrl: 'https://images.pexels.com/photos/16704561/pexels-photo-16704561/free-photo-of-baby-boy-on-chair.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' },
    { name: 'Girl Theme', description: 'Theme for girl birthday party', imageUrl: 'https://images.pexels.com/photos/14525773/pexels-photo-14525773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Adult Theme', description: 'Theme for adult birthday party', imageUrl: 'https://images.pexels.com/photos/4114739/pexels-photo-4114739.jpeg?auto=compress&cs=tinysrgb&w=600' },
    // Add more themes with their respective image URLs
  ]);
  const [showAddForm, setShowAddForm] = useState(false);

  const addTheme = (newTheme) => {
    setThemes([...themes, newTheme]);
    setShowAddForm(false); // Hide the form after adding a new theme
  };

  return (
    <div className="apptheme">
      <h1>Birthday Party Themes</h1>
      <div className="theme-list">
        {themes.map((theme, index) => (
          <Theme key={index} name={theme.name} description={theme.description} imageUrl={theme.imageUrl} />
        ))}
      </div>
      <button onClick={() => setShowAddForm(!showAddForm)} className='log-button thme-box'>
        {showAddForm ? '' : 'Add Theme'}
      </button>
      {showAddForm && (
        <div className='theme-box'>
          {/* "Cancel" button above the form */}
          <button onClick={() => setShowAddForm(false)} className='cross-theme'>x</button>
          {/* AddThemeForm component */}
          <AddThemeForm onSubmit={addTheme} />
        </div>
      )}
    </div>
  );
};

export default Themes;
