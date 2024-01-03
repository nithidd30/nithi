import './Booking.css';

const Book=()=>
{
    return(

<div>

<center>
<h1>Vehicle Booking Form</h1>
</center> 
<body className='bodybo'>
    <form className='formbo'>
    <form action="submit_booking.php" method="post">
        <h2 className='h2bo'>Vehicle Booking Form</h2>

        <label for="name">First Name:</label>
        <input type="text" id="name" name="name" required/>
       
        <label for="name">last Name:</label>
        <input type="text" id="name" name="name" required/>


        
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required/>
       
        <label for="phone">Phone:</label>
        <input type="tel" id="phone" name="phone" required/>
        
        <label for="email">From:</label>
        <div class="main-flex-w3ls-sectns">
         <div class="field-agileinfo-spc form-w3-agile-text1">
            <select class="form-control">
               <option>Service neede</option>
               <option value="Lorem Ipsum">Washing</option>
               <option value="Adipiscing">Puncture</option>
               <option value="Lorem Ipsum">Tyre Rotation</option>
               <option value="Adipiscing">Oil Change</option>
               <option value="Lorem Ipsum">Lorem Ipsum</option>
               <option value="Adipiscing">Adipiscing</option>
            </select>
         </div>

         </div>

        <label for="vehicle">Select Vehicle:</label>
        <select id="vehicle" name="vehicle" required>
            <option value="select">Select</option>
            <option value="sedan">Sedan</option>
            <option value="suv">SUV</option>
            <option value="truck">Truck</option>
        </select>




        <label for="pickupDate">Pickup Date:</label>
        <input type="date" id="pickupDate" name="pickupDate" required/>

        
        <button type="submit">Submit Booking</button>
    </form>
   </form>
</body>
   </div>


   )
}

export default Book;