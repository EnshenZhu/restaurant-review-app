import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Button, Modal, Form } from 'react-bootstrap';

const MenuList = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [show, setShow] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [review, setReview] = useState({ user: '', comment: '', rating: 1, image: null });

    useEffect(() => {
        axios.get('/api/menu').then(response => setMenuItems(response.data));
    }, []);

    const handleShow = (item) => {
        setSelectedItem(item);
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
        setReview({ user: '', comment: '', rating: 1, image: null });
    };

    const handleFileChange = (event) => {
        setReview({ ...review, image: event.target.files[0] });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!selectedItem) return;

        const formData = new FormData();
        formData.append('image', review.image);

        try {
            const uploadRes = await axios.post('/api/reviews/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            const newReview = {
                menuItem: selectedItem._id,
                user: review.user,
                comment: review.comment,
                rating: review.rating,
                imageUrl: uploadRes.data.imageUrl
            };

            await axios.post('/api/reviews', newReview);
            alert('Review submitted successfully!');
            handleClose();
        } catch (error) {
            console.error("Error uploading review:", error);
        }
    };

    return (
        <div className="container">
            <h2 className="text-center my-4">Menu Items</h2>
            <div className="row">
                {menuItems.map(item => (
                    <div className="col-md-4 mb-4" key={item._id}>
                        <Card>
                            <Card.Img variant="top" src={item.imageUrl} alt={item.name} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>{item.description}</Card.Text>
                                <Card.Text><strong>Price:</strong> ${item.price}</Card.Text>
                                <Button variant="primary" onClick={() => handleShow(item)}>Leave a Review</Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>

            {/* Review Modal */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Review for {selectedItem?.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="userName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" required value={review.user} onChange={e => setReview({ ...review, user: e.target.value })} />
                        </Form.Group>
                        <Form.Group controlId="comment">
                            <Form.Label>Comment</Form.Label>
                            <Form.Control as="textarea" rows={3} required value={review.comment} onChange={e => setReview({ ...review, comment: e.target.value })} />
                        </Form.Group>
                        <Form.Group controlId="rating">
                            <Form.Label>Rating</Form.Label>
                            <Form.Control as="select" value={review.rating} onChange={e => setReview({ ...review, rating: parseInt(e.target.value) })}>
                                {[1, 2, 3, 4, 5].map(num => <option key={num} value={num}>{num} Stars</option>)}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="image">
                            <Form.Label>Upload Image</Form.Label>
                            <Form.Control type="file" accept="image/*" onChange={handleFileChange} />
                        </Form.Group>
                        <Button variant="success" type="submit" className="mt-3">Submit Review</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default MenuList;