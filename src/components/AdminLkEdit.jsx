import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function AdminLkEdit({ tea }) {
  const { teaId } = useParams();

  const [form, setForm] = useState({
    name: '' || tea?.name,
    img: '' || tea?.img,
    description: '' || tea?.description,
    location: '' || tea?.location,
    x: 0.00 || tea?.x,
    y: 0.00 || tea?.y,
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch(`/api/tea/update/${teaId}`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(form),
    });
    const data = await response.json();
    setForm((prev) => [...prev, data]);
  };
  return (
    <div>
      <h1>Измени чай</h1>

      <main className="form-wrapper">
        <form onSubmit={submitHandler}>

          <label htmlFor="singer_name_input">Singer name:</label>
          <input id="singer_name_input" name="singer" type="text" value={form.singer} onChange={handleChange} />

          <label htmlFor="songTitle_input">Song title:</label>
          <input id="songTitle_input" name="songTitle" type="text" value={form.songTitle} onChange={handleChange} />

          <input type="submit" value="Update Entry" className="button" />

        </form>
      </main>
    </div>
  );
}

export default AdminLkEdit;
