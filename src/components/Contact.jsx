import React from 'react'
import "./Contact.css"

function Contact() {
  return (
    <div>

<div class="contact">
<div class="container-fluid  ">

  <div class="row">

    <div class="col-lg-6 col-md-6 col-12 coimg">
      <img src="https://img.freepik.com/premium-vector/shopping-mall-sales-illustration-cartoon-customer-buyer-people-choose-clothes-hanging-hangers-retail-store-shop-boutique-modern-interior-buy-fashion-trendy-garments-background_213110-613.jpg" alt="" style={{width:"300px", height:"300px", boxShadow: "1px 1px 5px 2px rgb(117, 116, 116)", borderRadius: "10px"}}/>
    </div>

    <div class=" cobox col-lg-6 col-md-6 col-12 my-md-0 my-2">
      <h1>CONTACT US</h1>
      <form action="">
        <input type="text" class="form-control" placeholder="Enter the name "/>
        <input type="email" class="form-control" placeholder="Enter the mail"/>
        <textarea  class="form-control" placeholder="Enter your feedback"></textarea>
        <button class="btn signin ">Submit</button>
      </form>
    </div>

  </div>
</div>

</div>






    </div>
  )
}

export default Contact