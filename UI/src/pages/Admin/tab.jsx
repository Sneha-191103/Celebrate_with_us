import React, { useState } from "react";
import { MdDelete, MdModeEdit } from "react-icons/md";

const BookingStatus = () => {
  const [userData, setUserData] = useState([
    { id: 1, event: "Birthday", venue: "Premium", username: "john_24", email: "john@gmail.com", status: "Confirmed" },
    { id: 2, event: "Birthday Party", venue: "Golden", username: "jack123", email: "jack@gmail.com", status: "Confirmed" },
    { id: 3, event: "Birthday",  venue: "Silver", username: "max_max", email: "max@gmail.com", status: "Pending" },
    { id: 4, event: "Birthday", venue: "Bronze", username: "noah563", email: "noah@gmail.com", status: "Confirmed" },
    { id: 5, event: "Birthday", venue: "Premium", username: "abel11",  email: "abel@gmail.com", status: "Pending" },
  ]);

  const [editMode, setEditMode] = useState(null);
  const [editedBooking, setEditedBooking] = useState(null);

  const handleDelete = (id) => {
    setUserData(userData.filter(booking => booking.id !== id));
  };

  const handleEdit = (id) => {
    setEditMode(id);
    const bookingToEdit = userData.find(booking => booking.id === id);
    setEditedBooking({ ...bookingToEdit });
  };

  const handleSave = () => {
    setUserData(userData.map(booking => {
      if (booking.id === editedBooking.id) {
        return editedBooking;
      }
      return booking;
    }));
    setEditMode(null);
    setEditedBooking(null);
  };

  const handleCancel = () => {
    setEditMode(null);
    setEditedBooking(null);
  };

  const handleChange = (e, field) => {
    setEditedBooking({
      ...editedBooking,
      [field]: e.target.value
    });
  };

  return (
    <div style={{backgroundColor: "#f5f5f5"}} className="flex gap-6" >
      <div style={{backgroundColor: "#f5f5f5",display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        <div className="admin-input-head">Booking Status</div>
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Event</th>
                <th>Package</th>
                <th>Username</th>
                <th>Email</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {userData.map(booking => (
                <tr key={booking.id}>
                  <td>{booking.id}</td>
                  <td>{editMode === booking.id ? <input value={editedBooking.event} onChange={(e) => handleChange(e, 'event')} /> : booking.event}</td>
                  <td>{editMode === booking.id ? <input value={editedBooking.venue} onChange={(e) => handleChange(e, 'venue')} /> : booking.venue}</td>
                  <td>{editMode === booking.id ? <input value={editedBooking.username} onChange={(e) => handleChange(e, 'username')} /> : booking.username}</td>
                  <td>{editMode === booking.id ? <input value={editedBooking.email} onChange={(e) => handleChange(e, 'email')} /> : booking.email}</td>
                  <td>{editMode === booking.id ? <input value={editedBooking.status} onChange={(e) => handleChange(e, 'status')} /> : booking.status}</td>
                  <td>
                    {editMode === booking.id ? (
                      <>
                        <button onClick={handleSave}>Save</button>
                        <button onClick={handleCancel}>Cancel</button>
                      </>
                    ) : (
                      <>
                        <button onClick={() => handleEdit(booking.id)}><MdModeEdit size={20} color="#1c3b70" /></button>
                        <button onClick={() => handleDelete(booking.id)}><MdDelete size={20} color="#1c3b70" /></button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default BookingStatus;
