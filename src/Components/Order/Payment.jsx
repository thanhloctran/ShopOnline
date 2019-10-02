import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { addShoppingCartAction, clearCartAction } from "./../../Redux/Actions/Data"
import AssignmentIcon from "@material-ui/icons/Assignment";
import firebase from 'firebase';
<<<<<<< HEAD
import Swal from 'sweetalert2'
=======
import { addShoppingCartAction , clearCartAction} from "./../../Redux/Actions/Data"
import Swal from 'sweetalert2'

// import "./Login.css";
>>>>>>> b0c3898fc4bfbd2cf95870ea9c6d28e43615454e

class payment extends Component {
  state = {
    name: "",
    address: "",
    email: "",
    phone: "",
    id: 0,
  }


  handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      [name]: value
    });
<<<<<<< HEAD

  }

  validateForm() {
    let stateForm = false;
    let errorMasage = "";
    let regExPhone = /^0(1\d{9}|9\d{8})$/; 
    let regExEmail=/^[a-z][a-z0-9_]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;

    if (this.state.name.trim() === "" || this.state.email.trim() === ""|| this.state.phone.trim() === "" || this.state.address.trim() === "" ) {
      errorMasage = "Don't allow empty Field";
      stateForm = true
    }

    if (!regExPhone.test(this.state.phone)) {
      errorMasage = "Number Phone format is incorrect !";
      stateForm = true;
    }
    if (!regExEmail.test(this.state.email)) {
      errorMasage = "Mail format is incorrect !";
      stateForm = true;
    }
    if (stateForm) {
      Swal.fire({
        title: 'Error!',
        text: errorMasage,
        type: 'error',
      })
    }

    return stateForm;
  }

  getDetailUser = () => {

    if (firebase.auth().currentUser == null) {
      Swal.fire({
        title: 'Oops...',
        text: "You must Login to use Defaul infor!",
        type: 'error',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login!',
      }).then((result) => {
        if (result.value) {
          this.props.history.push("/Login");
        }
        
      })
      return 0;
    }

    let userId = firebase.auth().currentUser.uid;
    return firebase.database().ref('/Customer/' + userId).once('value').then((snapshot) => {
      console.log(snapshot.child("loginName").val());
      this.setState({
        name: snapshot.child("loginName").val(),
        email: snapshot.child("email").val(),
        phone: snapshot.child("phone").val(),
        address: snapshot.child("address").val(),

      });

    });


  }
=======
    
  }
handleInputValidation = (event) => {
  let textError = "";
  let name = event.target.name;  
  let checkingText = event.target.value;
  console.log(name);
  
  if(name === "firstName" || name === "lastName"){
    let regexp = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)$/;
    let checkingResult = regexp.exec(checkingText);
    if (checkingResult == null) {
       textError= 'Name dont had number and Special character  ! ';
    }
  }
  else if(name === "phone"){
    let regexp = /^\d{10,11}$/;
    let checkingResult = regexp.exec(checkingText);
    if (checkingResult == null) {
       textError= 'NumberPhone content 10-11 number character ! ';
    }
  }
  Swal.fire({
    title: 'Warning!',
    text: textError,
    type: 'warning',
  })
  
}
>>>>>>> b0c3898fc4bfbd2cf95870ea9c6d28e43615454e


  cartInfor = {
    name: "",
    address: "",
    phone: "",
    id: "",
    customer: this.props.customer,
    listProduct: this.props.checkedOutItems,
    status: true,
    totalPrice: this.props.totalPrice,
    time: "",

  }


  render() {

    return (
      <div className="login-container">
        <div
          style={{
            height: 500,
            width: 500,
            display: "flex",
            flexDirection: "column"
          }}
        >
          <AssignmentIcon
            // fontSize
            style={{ fontSize: 50, color: "#F50057", cursor: "pointer", margin: "0 auto" }}
          />
          <div
            style={{
              color: "primary",
              marginBottom: 20,
              fontSize: 26,
              textAlign: "center"
            }}
          >
            {" "}
            PayMent{" "}
          </div>
          <div className="d-flex justify-content-between">
            <TextField style={{ width: 230 }}
              name="name"
              label="Name *"
              value={this.state.name}
              onChange={this.handleInput}
            />
            <TextField style={{ width: 230 }}
              label="Email *"
              name="email"
              value={this.state.email}
              onChange={this.handleInput}
            />
          </div>
          <TextField
            style={{ marginTop: 10 }}
            label="Phone *"
            name="phone"
            value={this.state.phone}
            onChange={this.handleInput}
            onBlur={this.handleInputValidation}
          />
          <TextField
            style={{ marginTop: 10 }}
            label="Address *"
            name="address"
            value={this.state.address}
            onChange={this.handleInput}
<<<<<<< HEAD

=======
           
>>>>>>> b0c3898fc4bfbd2cf95870ea9c6d28e43615454e
          />
          <div className="d-flex mt-2 justify-content-between">
            <TextField style={{ marginTop: 10, width: 230 }}
              label="City "
            />
            <TextField
              style={{ margin: "10px 0px", width: 230 }}
              label="State/Province/Region"

            />
          </div>
          <p style={{ color: "red", cursor: "pointer" }} onClick={() => this.getDetailUser()}>User Default Infor</p>

          <Button
            style={{ marginTop: 50 }}
            variant="outlined"
            color="primary"
            onClick={() => {
              // if(this.validateForm()){
              //   return;
              // }
              let currentdate = new Date();
              let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
              let datetime = months[currentdate.getMonth()] + " " + currentdate.getDate() + " "
                + currentdate.getFullYear() + ", "
                + currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();
              let userMail = ''


              if (this.cartInfor.customer === null) userMail = this.state.email;
              else userMail = this.props.customer;
              if(this.props.checkedOutItems.length===0){
                Swal.fire({
                  type: 'error',
                  title: 'Oops...',
                  text: "You don't have any item in Cart! Go shopping",
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Start Shoping!'
                }).then((result) => {
                  if (result.value) {
                    this.props.history.push("/search");
                  }
                })
                
                return ;
              }

              // console.log(userMail);
              this.cartInfor = {
                name: this.state.name,
                customer: userMail,
                address: this.state.address,
                phone: this.state.phone,
                id: this.state.id,
                listProduct: this.props.checkedOutItems,
                status: true,
                totalPrice: this.props.totalPrice,
                time: datetime

              }
              console.log(this.cartInfor);

              this.props.addShoppingCart(this.cartInfor);
              this.props.clearCart();
              this.props.history.push("/");

            }}
          >
            Checkout
          </Button>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    paymentInfor: state.rootReducer.paymentInfor,
    customer: state.rootReducer.loggedInUser,
    checkedOutItems: state.rootReducer.checkedOutItems,
    totalPrice: state.rootReducer.totalPrice,

  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addShoppingCart: (cart) => {
      dispatch(addShoppingCartAction(cart));
    },
    clearCart: () => {
      dispatch(clearCartAction());
    }
  }
}
const Payment = withRouter(connect(mapStateToProps, mapDispatchToProps)(payment));

export default Payment;
