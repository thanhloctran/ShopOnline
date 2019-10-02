import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import {
  showCartDlg,
  deleteCartItem,
  updateCartItemQnt
} from "../../Redux/Actions/Data";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from "@material-ui/core/TextField";
<<<<<<< HEAD
=======
// import IconButton from "@material-ui/core/IconButton";
// import AddIcon from "@material-ui/icons/Add";
// import RemoveIcon from "@material-ui/icons/Remove";
>>>>>>> b0c3898fc4bfbd2cf95870ea9c6d28e43615454e

// import Swal from 'sweetalert2'

const CartRow = props => {
  let { item } = props;
  
  return (
    <TableRow className="text-center">
      <TableCell>
        <Link to={`/details/${item.id}`}>
          <div
            onClick={() => {
              //   User will be navigated to item URL by clicking this item due to link above,
              //   and also we close this dialog.
              props.dispatch(showCartDlg(false));
            }}
          >
            <img src={item.imageUrls[0]}  alt="Product" style={{ width: 70}}/>
            
          </div>
        </Link>
      </TableCell>
      <TableCell>$ {item.price}.00</TableCell>
      <TableCell>
        <div className="row">
<<<<<<< HEAD
=======
          {/* <IconButton style={{ width: 30 , height:30}} onClick={() => {
            let val = parseInt(item.quantity);
            if (val > 1) {
              val -= 1;
              item.quantity = val;
            }

          }}>
            <RemoveIcon size="small" />
          </IconButton>
          <IconButton  
              style={{ width: 30 , height:30}} 
              color="secondary" 
              onChange={e => {
              let quantity = parseInt(e.target.value, 10);
              if (quantity < 0) return;

              // Update quantity for this cart item.
              props.dispatch(
                updateCartItemQnt({
                  id: item.id,
                  quantity
                })
              );
            }}>
          {item.quantity}
          </IconButton> */}
>>>>>>> b0c3898fc4bfbd2cf95870ea9c6d28e43615454e
          &nbsp;
            <TextField
            type="number"
            style={{ width: 40 }}
            inputProps={{ min: "1", max: "10", step: "1" }}
            value={item.quantity}
            onChange={e => {
              let quantity = parseInt(e.target.value, 10);
              if (quantity < 0) return;

              // Update quantity for this cart item.
              props.dispatch(
                updateCartItemQnt({
                  id: item.id,
                  quantity
                })
              );
            }}
          />
<<<<<<< HEAD
          
=======
          &nbsp;
             {/* <IconButton style={{ width: 30 , height:30}} onClick={() => {
            let val = parseInt(item.quantity);
            val += 1;
            item.quantity = val;


          }}>
            <AddIcon size="small" />
          </IconButton> */}
>>>>>>> b0c3898fc4bfbd2cf95870ea9c6d28e43615454e
        </div>

      </TableCell>
      <TableCell>
        <Button
          color="secondary"
          onClick={() => {
            props.dispatch(deleteCartItem(item.id));
            // Delete.
            
          }}
        >
          <DeleteIcon />
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default CartRow;
