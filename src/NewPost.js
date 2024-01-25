import React, { useState,useEffect, useContext } from 'react';
// import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from './context/UserContext.js';
import { ForumContext } from './context/ForumContext.js';

const NewPost = () => {

  const {user} = useContext(UserContext);
  const { setAllCommunities, setAllGoods, setAllServices, setAllFrees} = useContext(ForumContext)
  const [selectedType, setSelectedType] = useState('GOOD');

  const [goodFormData, setGoodFormData] = useState({
    name: '',
    description: '',
    claimant_id: ''
  });

  const [serviceFormData, setServiceFormData] = useState({
    name: '',
    description: '',
    claimant_id: '',
  });

  const [freeStuffData, setFreeStuffData] = useState({
    name: '',
    description: '',
    claimant_id: '',
  });

  const [communityData, setCommunityData] = useState({
    name: '',
    description: '',
    event_date: ''
  });

// const [freeStuffs, setFreeStuffs] = useState([])
// const [someGoods, setSomeGoods] = useState([])
// const [someServices, setSomeServices] = useState([])
const [imageData, setImageData] = useState(null);

  const [errors, setErrors] = useState([]);

  const { name: goodName, description: goodDescription, claimant_id: goodClaimantId } = goodFormData
  const { name: serviceName, description: serviceDescription, claimant_id: serviceClaimantId } = serviceFormData;
  const { name: freesName, description: freesDescription, claimant_id: freesClaimantId } = freeStuffData;
  const { name: communityName, description: communityDescription, event_date: communityEventDate } = communityData;

  useEffect(() => {

    fetch(`/frees`)
    .then(res => res.json())
    .then(data => setAllFrees(data))

    fetch(`/goods`)
    .then(res => res.json())
    .then(data => setAllGoods(data))

    fetch(`/services`)
    .then(res => res.json())
    .then(data => setAllServices(data))


    fetch(`/communities`)
    .then(res => res.json())
    .then(data => setAllCommunities(data))

  }, [setAllGoods, setAllFrees, setAllCommunities, setAllServices])


  const handleGoodChange = (e) => {
    const { name, value } = e.target;
    setGoodFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleServiceChange = (e) => {
    const { name, value } = e.target;
    setServiceFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFreeStuffChange = (e) => {
    const { name, value } = e.target;
    setFreeStuffData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCommunityChange = (e) => {
    const { name, value } = e.target;
    setCommunityData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleNewGood = (newGood) => {
      setAllGoods((prevGoods) => [...prevGoods, newGood]);
      setGoodFormData({
        name: '',
        description: '',
        claimant_id: ''
      });
    };
    
    const handleNewService = (newService) => {
      setAllServices((prevServices) => [...prevServices, newService]);
      setServiceFormData({
        name: '',
        description: '',
        claimant_id: ''
      });
    };

    const handleNewFreeStuff = (newFree) => {
      setAllFrees((prevFrees) => [...prevFrees, newFree]);
      setFreeStuffData({
        name: '',
        description: '',
        claimant_id: ''
      });
    };

    const handleNewCommunity = (newCommunity) => {
      setAllCommunities((prevCommunites) => [...prevCommunites, newCommunity]);
      setCommunityData({
        name: '',
        description: '',
        event_date: ''
      });
    };

  const handleSubmitGood = (e) => {
    e.preventDefault();

    if (!imageData) {
      setErrors(['Please attach an image']);
      return;
    }
    const formData = new FormData();
    formData.append('user_id', user?.id || '');   
     formData.append('name', goodName);
    formData.append('description', goodDescription);
    formData.append('claimant_id', goodClaimantId )
    formData.append('main_image', imageData);
  
    fetch(`/goods`, {
      method: 'POST',
      body: (formData),
    })

      .then((r) => {
        if (r.ok) {
          r.json().then((newGood) => {
            handleNewGood(newGood);
            if (newGood.errors) {
              setErrors(newGood.errors);
            }          
          });
          
        } else {
          r.json().then((err) => setErrors(err.errors));
          setTimeout(() => {
            setErrors([null]);
          }, 3000);
        }
      })
      .catch((error) => {
        console.error('Error saving good:', error);
        setErrors(['Error saving good']);
      });
  };

  const handleSubmitService = (e) => {
    e.preventDefault();

    if (!imageData) {
      setErrors(['Please attach an image']);
      return;
    }

    const formData = new FormData();
    formData.append('user_id', user?.id || '');   
    formData.append('name', serviceName);
    formData.append('description', serviceDescription);
    formData.append('claimant_id', serviceClaimantId )
    formData.append('main_image', imageData);
    
    fetch(`/services`, {
      method: 'POST',
      body: (formData),
    })
      .then((r) => {
        if (r.ok) {
          r.json().then((newService) => {
            handleNewService(newService);
            if (newService.errors) {
              setErrors(newService.errors);
            }
          });
          
        } else {
          r.json().then((err) => setErrors(err.errors));
          setTimeout(() => {
            setErrors([null]);
          }, 3000);
        }
      })
      .catch((error) => {
        console.error('Error saving service:', error);
        setErrors(['Error saving service']);
      });
  };

  const clearImageData = () => {
    setImageData(null);
  };


  const handleSubmitStuff = (e) => {
    e.preventDefault();
    
    if (!imageData) {
      setErrors(['Please attach an image']);
      return;
    }

    const formData = new FormData();
    formData.append('user_id', user?.id || '');   
    formData.append('name', freesName);
    formData.append('description', freesDescription);
    formData.append('claimant_id', freesClaimantId )
    formData.append('main_image', imageData);

    fetch(`/frees`, {
      method: 'POST',
      body: (formData), 
    })
      .then((r) => {
        if (r.ok) {
          r.json().then((newStuff) => {
            handleNewFreeStuff(newStuff);
            if (newStuff.errors) {
              setErrors(newStuff.errors);
            }
            });
        } else {
          r.json().then((err) => setErrors(err.errors));
          setTimeout(() => {
            setErrors([null]);
          }, 3000);
        }
      })
      .catch((error) => {
        console.error('Error saving stuff:', error);
        setErrors(['Error saving stuff']);
      });
  };

  const handleSubmitCommunity = (e) => {
    e.preventDefault();
    
    if (!imageData) {
      setErrors(['Please attach an image']);
      return;
    }

    const formData = new FormData();
    formData.append('user_id', user?.id || '');   
    formData.append('name', communityName);
    formData.append('description', communityDescription);
    formData.append('event_date', communityEventDate )
    formData.append('main_image', imageData);

    fetch(`/communities`, {
      method: 'POST',
      body: (formData), 
    })
      .then((r) => {
        if (r.ok) {
          r.json().then((newCommunity) => {
            handleNewCommunity(newCommunity);
            if (newCommunity.errors) {
              setErrors(newCommunity.errors);
            }
            });
        } else {
          r.json().then((err) => setErrors(err.errors));
          setTimeout(() => {
            setErrors([null]);
          }, 3000);
        }
      })
      .catch((error) => {
        console.error('Error saving stuff:', error);
        setErrors(['Error saving stuff']);
      });
  };


  return (
    <div className="new-post-container">
      <div className="new-post-form">
        <h1 className="new-post-h1">
          <b>NEW POST</b>
        </h1>
        <h2 className="new-post-h2">What type of post is this?</h2>
        <div className="radio-buttons">
          <label>
          <input
            type='radio'
            value='GOOD'
            name='post_type'
            checked={selectedType === 'GOOD'}
            onChange={() => setSelectedType('GOOD')}
          />
          GOOD
          </label>
          <label>
          <input
            type='radio'
            value='SERVICE'
            name='post_type'
            checked={selectedType === 'SERVICE'}
            onChange={() => setSelectedType('SERVICE')}
          />
           SERVICE
          </label>
          <label>
          <input
            type='radio'
            value='FREE STUFF'
            name='post_type'
            checked={selectedType === 'FREE STUFF'}
            onChange={() => setSelectedType('FREE STUFF')}
          />
          FREE STUFF
          </label>
          <label>
          <input
            type='radio'
            value='COMMUNITY'
            name='post_type'
            checked={selectedType === 'COMMUNITY'}
            onChange={() => setSelectedType('COMMUNITY')}
          />
          COMMUNITY
          </label>
        </div>
          
          {selectedType === 'GOOD' && (
          <form className='form' onSubmit={handleSubmitGood}> 
           <div className='form-field'>
              <label htmlFor='name'>NAME:</label>
              <input
                className='formInput'
                type='text'
                name='name'
                value={goodName}
                onChange={handleGoodChange}
                required
              />
            </div>
            <div className='form-field'>
              <label htmlFor='description'>DESCRIPTION:</label>
              <input
                className='formInput'
                type='text'
                name='description'
                value={goodDescription}
                onChange={handleGoodChange}
                required
              />
            </div>
            <div className="form-group">
                <label> IMAGE:</label>
                <input type="file"                  
                accept="image/jpeg, image/png, image/webp" 
                onChange={(e) => setImageData(e.target.files[0])} />
                {imageData && (
                  <div>
                      <img src={imageData ? URL.createObjectURL(imageData) : ''} alt="Preview" className='imageThumb' />
                    <button onClick={clearImageData}>Clear Image</button>
                  </div>
                )}
              </div> 
            <button className='formButton' type='submit'>
              ADD
            </button>
            {errors && (
              <div className='error-messages'>
                {errors.map((error, index) => (
                  <p key={index} className='error-message'>
                    {error}
                  </p>
                ))}
              </div>
            )}
           </form> 
          )}
       

       {selectedType === 'SERVICE' && (
        <form className='form' onSubmit={handleSubmitService}>
            <div className='form-field'>
              <label htmlFor='title'>NAME:</label>
              <input
                className='formInput'
                type='text'
                name='name'
                value={serviceName}
                onChange={handleServiceChange}
                required
              /> 
            </div>
            <div className='form-field'>
              <label htmlFor='description'>DESCRIPTION:</label>
              <input
                className='formInput'
                type='text'
                name='description'
                value={serviceDescription}
                onChange={handleServiceChange}
                required
              />
            </div>
            <div className="form-group">
                <label> IMAGE:</label>
                <input type="file"                  
                accept="image/jpeg, image/png, image/webp" 
                onChange={(e) => setImageData(e.target.files[0])} />
                {imageData && (
                  <div>
                      <img src={imageData ? URL.createObjectURL(imageData) : ''} alt="Preview" className='imageThumb' />
                    <button onClick={clearImageData}>Clear Image</button>
                  </div>
                )}
              </div>
            <button className='formButton' type='submit'>
              ADD
            </button>   
            {errors &&(
              <div className='error-messages'>
                {errors.map((error, index) => (
                  <p key={index} className='error-message'>
                    {error}
                  </p>
                ))}
              </div>
            )}
           </form>
        )}
       
      {selectedType === 'FREE STUFF' && (
          <form className='form' onSubmit={handleSubmitStuff}>
            <div className='form-field'>
              <label htmlFor='body'>NAME:</label>
              <input
                className='formInput'
                type='text'
                name='name'
                value={freesName}
                onChange={handleFreeStuffChange}
                required
              />
            </div>
            <div className='form-field'>
              <label htmlFor='description'>DESCRIPTION:</label>
              <input
                className='formInput'
                type='text'
                name='description'
                value={freesDescription}
                onChange={handleFreeStuffChange}
                required
              />
            </div>
            <div className="form-group">
                <label> IMAGE:</label>
                <input type="file"                  
                accept="image/jpeg, image/png, image/webp" 
                onChange={(e) => setImageData(e.target.files[0])} />
                {imageData && (
                  <div>
                      <img src={imageData ? URL.createObjectURL(imageData) : ''} alt="Preview" className='imageThumb' />
                    <button onClick={clearImageData}>Clear Image</button>
                  </div>
                )}
              </div>
            <button className='formButton' type='submit'>
              ADD
            </button>
            {errors && (
              <div className='error-messages'>
                {errors.map((error, index) => (
                  <p key={index} className='error-message'>
                    {error}
                  </p>
                ))}
              </div>
            )}
         </form>
      )}

      {selectedType === 'COMMUNITY' && (
        <form className='form' onSubmit={handleSubmitCommunity}>
            <div className='form-field'>
              <label htmlFor='title'>NAME:</label>
              <input
                className='formInput'
                type='text'
                name='name'
                value={communityName}
                onChange={handleCommunityChange}
                required
              />   
            </div>
            <div className='form-field'>
              <label htmlFor='description'>DESCRIPTION:</label>
              <input
                className='formInput'
                type='text'
                name='description'
                value={communityDescription}
                onChange={handleCommunityChange}
                required
              />
            </div>
            <div className='form-field'>
              <label htmlFor='event_date'>EVENT DATE:</label>
              <input
                className='formInput'
                type='date'
                name='event_date'
                value={communityEventDate}
                onChange={handleCommunityChange}
                required
              />
            </div>
            <div className="form-group">
                <label> IMAGE:</label>
                <input type="file"                  
                accept="image/jpeg, image/png, image/webp" 
                onChange={(e) => setImageData(e.target.files[0])} />
                {imageData && (
                  <div>
                      <img src={imageData ? URL.createObjectURL(imageData) : ''} alt="Preview" className='imageThumb' />
                    <button onClick={clearImageData}>Clear Image</button>
                  </div>
                )}
              </div>
            <button className='formButton' type='submit'>
              ADD
            </button>
            {errors &&(
              <div className='error-messages'>
                {errors.map((error, index) => (
                  <p key={index} className='error-message'>
                    {error}
                  </p>
                ))}
              </div>
            )}
          </form>
          )}
      </div>
    </div>
  );
};

export default NewPost;
