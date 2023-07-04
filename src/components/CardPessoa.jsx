import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


export default function CardPessoa({ pessoaCardInfo }) {
  return (
     <Card sx={{ minWidth: 645 }}>
      <CardActionArea>
        <CardContent>
          <Typography sx={{fontSize: 20}}gutterBottom variant="h1" component="div">
            {pessoaCardInfo.nome}
          </Typography>
          <Typography variant="h6" color="div">
            {pessoaCardInfo.cpfMask}
          </Typography>
          <Typography variant="h5" color="div">
            {pessoaCardInfo.dataNasc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

