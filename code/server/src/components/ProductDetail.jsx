import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const ItemCard = ({ item }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{item.name}</Typography>
        <Typography variant="body2">Price: {item.price}</Typography>
        <Button variant="contained" href={`/item/${item.id}`}>
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
