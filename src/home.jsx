import React from "react";

export default class Home extends React.Component {
constructor() {
super();
this.state = {
// title: "My Initial Val",
firstName: "",
lastName: "",
address:"",
email:"",
dress:false,
gender:"male",
Area_Delivery:"",
};
}

inputChangeHandler = (e) => {
this.setState({
[e.target.name] :e.target.value
})
};

titleChangeHandler = (e) => {
this.setState({ title: e.target.value });
};

titleChangeHandler = (e) => {
this.setState({ dress: true });
};

render() {
return (
<div>
<div>
FirstName: <input
type="text"
name="firstName"
value={this.state.firstName}
onChange={(e) => {
this.inputChangeHandler(e);
}}
/>
<br/>
LastName: <input
type="text"
name="lastName"
value={this.state.lastName}
onChange={(e) => {
this.inputChangeHandler(e);
}}
/>
<br/>
Email ID: <input
type="text"
name="Email"
value={this.state.Email}
onChange={(e) => {
this.inputChangeHandler(e);
}}
/>
<br/>
Address: <input
type="text"
name="address"
value={this.state.address}
onChange={(e) => {
this.inputChangeHandler(e);
}}
/>
<br/>
<div onChange={(e) => {
this.inputChangeHandler(e);
}}>
Gender:
<input type="radio" value="Male" name="gender" /> Male
<input type="radio" value="Female" name="gender" /> Female
<input type="radio" value="Other" name="gender" /> Other
</div>



<div onChange={(e) => {
this.inputChangeHandler(e);
}}>

<select>
Area of Delievery:
<option value="Meerut">Meerut</option>
<option value="Noida">Noida</option>
<option value="UttarPradesh">UttarPradesh</option>
</select>

</div>


Do You Want to add a Dress : <input
type="checkbox"
name="Dress"
value={this.state.rose}
onChange={(e, value) => {

this.titleChangeHandler(e, value);
}}
/>
<br/>

</div>


<div>
<button onClick={()=>{alert(JSON.stringify(this.state))}}>
Submit
</button>
</div>
</div>
);
}
}